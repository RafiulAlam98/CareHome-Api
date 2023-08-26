import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CareTypeService } from './careOffered.service'

const getSingleCareType = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CareTypeService.getSingleCareType(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'type retrieved successfully!',
    data: result,
  })
})

export const CareOfferTypeController = {
  getSingleCareType,
}
