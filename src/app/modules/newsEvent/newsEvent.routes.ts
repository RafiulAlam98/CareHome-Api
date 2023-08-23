import express from 'express'
import { NewseventController } from './newsEvent.controller'

const router = express.Router()
router.get('/', NewseventController.getAllNewsEvent)
router.get('/:id', NewseventController.getNewsEvent)
router.delete('/:id', NewseventController.deleteNewsEvent)

export const NewsEventRoutes = {
  router,
}
