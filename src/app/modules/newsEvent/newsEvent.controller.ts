import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import { NewsEventService } from './newsEvent.service'

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

export const NewseventController = {
  getNewsEvent,
}
