import 'dotenv/config'
import express from 'express'

const router = express.Router()

import invitationController from '../controllers/invitationController'
import csvMulter from '../middlewares/csvMulter'
import fileFilter from '../middlewares/fileFilter'

const CSVField = process.env.CSVFieldName || 'csvField'

router.get('/', invitationController.getInvitations)
router.post('/csv', csvMulter.single(CSVField), fileFilter, invitationController.postInvitation)

export default router