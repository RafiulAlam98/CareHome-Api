import express from 'express'
import { AwardController } from './awardRecognition.controller'

const router = express.Router()
router.get('/', AwardController.getAllAward)
router.get('/:id', AwardController.getSingleAward)
router.delete('/:id', AwardController.deleteAward)

export const AwardRoutes = {
  router,
}
