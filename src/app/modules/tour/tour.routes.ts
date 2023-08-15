import express from 'express'
import { TourController } from './tour.controller'

const router = express.Router()

router.post('/add-tour', TourController.addTour)
router.get('/allTour', TourController.getAlltour)
router.delete('/:id', TourController.deleteTour)

export const TourRoutes = {
  router,
}
