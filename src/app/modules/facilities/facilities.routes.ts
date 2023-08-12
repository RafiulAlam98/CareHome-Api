import express from 'express'
import { FacilityController } from './facilities.controller'
const router = express.Router()

router.get('/:id', FacilityController.getAllFacilities)

export const FacilityRoutes = {
  router,
}
