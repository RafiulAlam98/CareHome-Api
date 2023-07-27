import express from 'express'
import { CareHomeRoutes } from '../modules/careHome/careHome.routes'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/careHome/',
    route: CareHomeRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
