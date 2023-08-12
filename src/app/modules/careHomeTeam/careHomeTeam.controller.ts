import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import { TeamService } from './careHomeTeam.service'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const getAllTeams = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TeamService.getAllTeam(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'team retrieved successfully!',
    data: result,
  })
})

export const TeamController = {
  getAllTeams,
}
