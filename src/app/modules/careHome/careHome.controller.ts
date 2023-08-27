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
const updateCareHome = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const { id } = req.params
  const result = await CareHomeService.updateCareHome(data, id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Care Home updated successfully!',
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
const getSingleCareHome = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await CareHomeService.getSingleCareHomeService(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Care Home retrieved successfully!',
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
const createTeam = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body

  const result = await CareHomeService.createTeamService(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team added successfully!',
    data: result,
  })
})
const createFacility = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body

  const result = await CareHomeService.createFacility(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Facilty added successfully!',
    data: result,
  })
})
const createNewsEvent = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body

  const result = await CareHomeService.createNewsEventService(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'News Event added successfully!',
    data: result,
  })
})
const createReviews = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body

  const result = await CareHomeService.createReviewService(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully!',
    data: result,
  })
})
const createOffer = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body

  const result = await CareHomeService.createOffer(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Care Type added successfully!',
    data: result,
  })
})
const deleteCareHome = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await CareHomeService.deleteCareHome(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'care home deleted successfully!',
    data: result,
  })
})

export const CareHomeController = {
  addCareHome,
  updateCareHome,
  getAllCareHome,
  getSingleCareHome,
  createAward,
  createService,
  createTeam,
  createFacility,
  createNewsEvent,
  createReviews,
  deleteCareHome,
  createOffer,
}
