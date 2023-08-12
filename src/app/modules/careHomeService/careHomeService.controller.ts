import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { Services } from './careHomeService.service'

const getService = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await Services.getService(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service retrieved successfully!',
    data: result,
  })
})

export const ServiceController = {
  getService,
}
