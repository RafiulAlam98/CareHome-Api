import express from 'express'
import { AwardController } from './awardRecognition.controller'

const router = express.Router()
router.get('/:id', AwardController.getSingleAward)
router.get('/', AwardController.getAllAward)

export const AwardRoutes = {
  router,
}
