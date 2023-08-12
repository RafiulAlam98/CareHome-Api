import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { AwardService } from './awardRecognition.service'

const getAllAward = catchAsync(async (req: Request, res: Response) => {
  const result = await AwardService.getAllAward()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All award retrieved successfully!',
    data: result,
  })
})
const getSingleAward = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AwardService.getSingleAward(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'award retrieved successfully!',
    data: result,
  })
})
export const AwardController = {
  getAllAward,
  getSingleAward,
}
