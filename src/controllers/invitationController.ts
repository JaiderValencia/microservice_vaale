import { Request, Response } from "express"
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { SupplierInvitation } from "../database/models/SupplierInvitation"
import { Supplier } from "../database/models/Supplier"

interface RequestQuery extends Request {
    query: {
        page: string,
    }
}

const controller = {
    postInvitation: (req: Request, res: Response) => {
        if (!req.file) {
            return res.status(400).json({
                code: 400,
                message: 'Please upload a CSV file'
            })
        }

        const filePath = path.join(__dirname, `../CSV-Files/${req.file?.filename}`)

        const fileContent = fs.readFileSync(filePath, 'utf-8')

        const fileParsed = parse(fileContent, {
            columns: true
        })

        interface Invitation {
            supplier_id: number,
            commerce_cell_phone: string
        }

        fileParsed.forEach(async (invitation: Invitation) => {
            const supplier = await Supplier.findByPk(invitation.supplier_id)

            if (supplier) {
                await SupplierInvitation.create({
                    supplier_id: invitation.supplier_id,
                    commerce_cell_phone: invitation.commerce_cell_phone
                })
            }
        });

        res.status(200).json({
            code: 200,
            message: 'invitation created'
        })
    },
    getInvitations: async (req: RequestQuery, res: Response) => {
        const totalInvitationsInDB: number = await SupplierInvitation.count()

        const limit = 10;

        const page = parseInt(req.query.page) || 1

        const offset = limit * (page - 1);

        const limitPag = Math.ceil(totalInvitationsInDB / limit);

        const invitations: SupplierInvitation[] = await SupplierInvitation.findAll({ limit, offset, include: { all: true } })

        interface InvitationsParsedArray {
            supplierId: number,
            supplierName: string,
            commerce_cell_phone: string
        }

        const invitationsParsed: Array<InvitationsParsedArray> = []

        invitations.forEach(invitation => {
            invitationsParsed.push({
                supplierId: invitation.supplier.id,
                supplierName: invitation.supplier.name,
                commerce_cell_phone: invitation.commerce_cell_phone
            })
        })

        interface JsonRes {
            apiResponse: {
                code: number,
                totalInvitationsInDB: number
                count: number
            },
            actions: {
                limit: number,
                next?: string,
                previous?: string
            },
            list: object[]
        }

        const jsonRes: JsonRes = {
            apiResponse: {
                code: 200,
                totalInvitationsInDB,
                count: invitationsParsed.length
            },
            actions: {
                limit,
            },
            list: [...invitationsParsed]
        }

        if (page >= 1 && invitationsParsed.length == limit && page < limitPag) {
            jsonRes.actions.next = `${req.protocol}://${req.get('host')}/invitation/?page=${(page + 1)}`;
        }

        if (page > 1) {
            jsonRes.actions.previous = `${req.protocol}://${req.get('host')}/invitation/?page=${(page - 1)}`;
        }

        res.status(200).json(jsonRes)
    }
}

export default controller