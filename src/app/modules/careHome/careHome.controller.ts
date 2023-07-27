import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { CareHomeService } from './careHome.service'

const addCareHome = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await CareHomeService.addCareHomeService(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  })
})
export const CareHomeController = {
  addCareHome,
}
