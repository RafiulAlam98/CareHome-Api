import express from 'express'
import { CareHomeRoutes } from '../modules/careHome/careHome.routes'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.route'
import { AwardRoutes } from '../modules/awardRecognition/awardRecognition.routes'
import { ReviewRoutes } from '../modules/reviews/reviews.route'
import { ServiceRoutes } from '../modules/careHomeService/careHomeService.routes'
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
  {
    path: '/allAward',
    route: AwardRoutes.router,
  },
  {
    path: '/reviews',
    route: ReviewRoutes.router,
  },
  {
    path: '/services',
    route: ServiceRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
