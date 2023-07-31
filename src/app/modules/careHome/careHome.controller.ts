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
    message: 'New Care Home added successfully!',
    data: result,
  })
})
const getAllCareHome = catchAsync(async (req: Request, res: Response) => {
  const result = await CareHomeService.getAllCareHomeService()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Care Home retrieved successfully!',
    data: result,
  })
})

const createAward = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await CareHomeService.createAwardService(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Award added successfully!',
    data: result,
  })
})
const createService = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body

  const result = await CareHomeService.createServices(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service added successfully!',
    data: result,
  })
})

export const CareHomeController = {
  addCareHome,
  getAllCareHome,
  createAward,
  createService,
}
