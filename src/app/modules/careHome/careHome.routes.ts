import express from 'express'
import { CareHomeController } from './careHome.controller'

const router = express.Router()

router.post('/add-careHome', CareHomeController.addCareHome)
router.post('/award', CareHomeController.createAward)
router.post('/service', CareHomeController.createService)
router.get('/all-careHome', CareHomeController.getAllCareHome)

export const CareHomeRoutes = { router }
