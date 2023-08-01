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

        res.send(fileParsed)
    },
    getInvitations: async (req: Request, res: Response) => {
        const invitations: SupplierInvitation[] = await SupplierInvitation.findAll()

        res.status(200).json({
            apiResponse: {
                code: 200,
                total: invitations.length
            },
            list: [...invitations]
        })
    }
}

export default controller