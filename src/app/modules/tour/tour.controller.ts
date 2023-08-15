import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { TourService } from './tour.service'

const addTour = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await TourService.addTour(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour added successfully!',
    data: result,
  })
})
const getAlltour = catchAsync(async (req: Request, res: Response) => {
  const result = await TourService.getAlltour()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour retrieved successfully!',
    data: result,
  })
})
const deleteTour = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TourService.deleteTour(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour deleted successfully!',
    data: result,
  })
})

export const TourController = {
  addTour,
  getAlltour,
  deleteTour,
}
