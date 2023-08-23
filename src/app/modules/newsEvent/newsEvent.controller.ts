import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import { NewsEventService } from './newsEvent.service'

const getAllNewsEvent = catchAsync(async (req: Request, res: Response) => {
  const result = await NewsEventService.getAllNewsEvent()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'news events retrieved successfully!',
    data: result,
  })
})
const getNewsEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await NewsEventService.getNewsEvent(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'news event retrieved successfully!',
    data: result,
  })
})
const deleteNewsEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await NewsEventService.deleteNewsEvent(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'news event deleted successfully!',
    data: result,
  })
})

export const NewseventController = {
  getNewsEvent,
  deleteNewsEvent,
  getAllNewsEvent,
}
