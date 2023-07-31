import express from 'express'
const router = express.Router()

import invitations from './invitation'

router.use('/invitation', invitations)

export default router