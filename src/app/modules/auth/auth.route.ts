import express from 'express'
import { AuthController } from './auth.controller'

const router = express.Router()

router.put('/user-login', AuthController.loginUser)

export const AuthRoutes = {
  router,
}
