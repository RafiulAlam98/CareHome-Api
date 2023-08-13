import express from 'express'
import { ImageController } from './images.controller'

const router = express.Router()

router.post('/add-image', ImageController.addNewImage)
router.get('/:id', ImageController.getImage)

export const ImageRoutes = {
  router,
}
