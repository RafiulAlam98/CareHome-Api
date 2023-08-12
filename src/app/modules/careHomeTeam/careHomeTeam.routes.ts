import express from 'express'
import { TeamController } from './careHomeTeam.controller'
const router = express.Router()

router.get('/:id', TeamController.getAllTeams)

export const TeamRoutes = {
  router,
}
