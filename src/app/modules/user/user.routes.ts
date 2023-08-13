import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/create-user', UserController.createUser)
router.get('/all-user', UserController.getAllUser)

export const UserRoutes = { router }
