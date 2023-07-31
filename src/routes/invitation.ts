import express from 'express'

const router = express.Router()

import invitationController from '../controllers/invitationController'

router.get('/', invitationController.getInvitations)
router.post('/csv', invitationController.postInvitation)

export default router