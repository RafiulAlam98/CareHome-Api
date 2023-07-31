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
router.get('/all-careHome', CareHomeController.getAllCareHome)

export const CareHomeRoutes = { router }
