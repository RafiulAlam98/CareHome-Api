import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ImageService } from './images.service'

const addNewImage = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await ImageService.addNewImage(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'image added successfully!',
    data: result,
  })
})
const getImage = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ImageService.getImage(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'image retrieved successfully!',
    data: result,
  })
})

export const ImageController = {
  addNewImage,
  getImage,
}
