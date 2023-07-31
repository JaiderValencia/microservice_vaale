import { Request, Response } from "express"
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

const controller = {
    postInvitation: (req: Request, res: Response) => {
        const filePath = path.join(__dirname, `../CSV-Files/${req.file?.filename}`)

        const fileContent = fs.readFileSync(filePath, 'utf-8')

        const fileParsed = parse(fileContent, {
            columns: true
        })

        res.send(fileParsed)
    },
    getInvitations: (req: Request, res: Response) => {
        res.send('hola soy el get invitations')
    }
}

export default controller