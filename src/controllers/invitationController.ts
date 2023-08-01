import { Request, Response } from "express"
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { SupplierInvitation } from "../database/models/SupplierInvitation"

const controller = {
    postInvitation: (req: Request, res: Response) => {
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
            await SupplierInvitation.create({
                supplier_id: invitation.supplier_id,
                commerce_cell_phone: invitation.commerce_cell_phone
            })
        });

        res.status(200).json({
            code: 200,
            message: 'invitation created'
        })
    },
    getInvitations: async (req: Request, res: Response) => {
        const invitations: SupplierInvitation[] = await SupplierInvitation.findAll({ include: { all: true } })

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

        res.status(200).json({
            apiResponse: {
                code: 200,
                total: invitations.length
            },
            list: [...invitationsParsed]
        })
    }
}

export default controller