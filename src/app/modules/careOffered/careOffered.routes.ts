import express from 'express'
import { CareHomeController } from '../careHome/careHome.controller'
import { CareOfferTypeController } from './careOfferController'

const router = express.Router()

router.post('/add-types', CareHomeController.createOffer)
router.get('/:id', CareOfferTypeController.getSingleCareType)

export const CareOfferRoutes = {
  router,
}
