import express from 'express'
import { CareHomeRoutes } from '../modules/careHome/careHome.routes'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.route'
import { AwardRoutes } from '../modules/awardRecognition/awardRecognition.routes'
import { ReviewRoutes } from '../modules/reviews/reviews.route'
import { ServiceRoutes } from '../modules/careHomeService/careHomeService.routes'
import { TeamRoutes } from '../modules/careHomeTeam/careHomeTeam.routes'
import { FacilityRoutes } from '../modules/facilities/facilities.routes'
import { NewsEventRoutes } from '../modules/newsEvent/newsEvent.routes'
import { ImageRoutes } from '../modules/images/images.routes'
import { TourRoutes } from '../modules/tour/tour.routes'
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
    path: '/users',
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
  {
    path: '/teams',
    route: TeamRoutes.router,
  },
  {
    path: '/facility',
    route: FacilityRoutes.router,
  },
  {
    path: '/newsEvent',
    route: NewsEventRoutes.router,
  },
  {
    path: '/images',
    route: ImageRoutes.router,
  },
  {
    path: '/tour',
    route: TourRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
