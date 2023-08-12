import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { FacilityService } from './facilities.service'

const getAllFacilities = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await FacilityService.getAllFacilities(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'facility retrieved successfully!',
    data: result,
  })
})

export const FacilityController = {
  getAllFacilities,
}
