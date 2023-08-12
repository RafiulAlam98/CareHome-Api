import express from 'express'
import { NewseventController } from './newsEvent.controller'

const router = express.Router()
router.get('/:id', NewseventController.getNewsEvent)

export const NewsEventRoutes = {
  router,
}
