import path from 'path'
import multer from 'multer'
import { Request } from 'express'

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, '../CSV-Files')

        cb(null, destinationPath)
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + '-' + Math.round(Math.random() * 9999) + path.extname(file.originalname)

        cb(null, fileName)
    }
})

interface RequestValidation extends Request {
    fileValidationError?: boolean;
}

const upload = multer({
    storage: diskStorage,
    fileFilter: (req: RequestValidation, file, cb) => {
        const fileExtension = path.extname(file.originalname)

        if (fileExtension == '.csv') {
            cb(null, true)
        } else {
            req.fileValidationError = true
            cb(null, false)
        }

    }
})

export default upload