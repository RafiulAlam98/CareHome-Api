import express from 'express'
import { CareHomeController } from './careHome.controller'

const router = express.Router()

router.post('/add-careHome', CareHomeController.addCareHome)
router.post('/award', CareHomeController.createAward)
router.post('/service', CareHomeController.createService)
router.post('/team', CareHomeController.createTeam)
router.post('/facility', CareHomeController.createFacility)
router.post('/news-event', CareHomeController.createNewsEvent)
router.post('/reviews', CareHomeController.createReviews)
router.put('/all-careHome/:id', CareHomeController.updateCareHome)
router.get('/all-careHome/:id', CareHomeController.getSingleCareHome)
router.delete('/all-careHome/:id', CareHomeController.deleteCareHome)
router.get('/all-careHome', CareHomeController.getAllCareHome)

export const CareHomeRoutes = { router }
