import express from 'express'

const router = express.Router()

import invitationController from '../controllers/invitationController'
import csvMulter from '../middlewares/csvMulter'
import fileFilter from '../middlewares/fileFilter'

router.get('/', invitationController.getInvitations)
router.post('/csv', csvMulter.single('csvFile'), fileFilter, invitationController.postInvitation)

export default router