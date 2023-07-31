import { Request, Response, NextFunction } from 'express'

interface MyRequest extends Request {
    fileValidationError?: boolean;
}

function fileFilter(req: MyRequest, res: Response, next: NextFunction) {
    if (req.fileValidationError) {
        return res.status(400).json({
            status: 400,
            message: 'only CSV files'
        })
    }

    next()
}

export default fileFilter