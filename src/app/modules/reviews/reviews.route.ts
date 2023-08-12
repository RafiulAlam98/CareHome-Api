import express from 'express'
import { ReviewController } from './review.controller'

const router = express.Router()
router.get('/:id', ReviewController.getSingleReview)

export const ReviewRoutes = {
  router,
}
