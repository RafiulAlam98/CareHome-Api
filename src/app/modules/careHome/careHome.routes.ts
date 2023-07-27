import express from 'express'
import { CareHomeController } from './careHome.controller'

const router = express.Router()

router.post('/add-careHome', CareHomeController.addCareHome)

export const CareHomeRoutes = { router }
