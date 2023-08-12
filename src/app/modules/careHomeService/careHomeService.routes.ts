import express from 'express'
import { ServiceController } from './careHomeService.controller'

const router = express.Router()
router.get('/:id', ServiceController.getService)

export const ServiceRoutes = {
  router,
}
