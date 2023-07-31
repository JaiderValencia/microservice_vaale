import { Request, Response } from "express"

const controller = {
    postInvitation: (req: Request, res: Response) => {
        res.send('hola soy el post invitations')
    },
    getInvitations: (req: Request, res: Response) => {
        res.send('hola soy el get invitations')
    }
}

export default controller