import httpStatus from 'http-status'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { ReviewService } from './review.service'

const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ReviewService.getSingleReview(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'review retrieved successfully!',
    data: result,
  })
})

export const ReviewController = {
  getSingleReview,
}
