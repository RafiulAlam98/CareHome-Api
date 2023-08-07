import express from 'express'
import { CareHomeRoutes } from '../modules/careHome/careHome.routes'
import { UserRoutes } from '../modules/user/user.routes'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/careHome/',
    route: CareHomeRoutes.router,
  },
  {
    path: '/user/',
    route: UserRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
