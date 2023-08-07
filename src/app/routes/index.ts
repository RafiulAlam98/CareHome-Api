import express from 'express'
import { CareHomeRoutes } from '../modules/careHome/careHome.routes'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/careHome/',
    route: CareHomeRoutes.router,
  },
  {
    path: '/auth/sign-up',
    route: UserRoutes.router,
  },
  {
    path: '/auth/login',
    route: AuthRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
