import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { UserService } from './user.service'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body
  const result = await UserService.createUser(userData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created  successfully !',
    data: result,
  })
})
const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const { ...admin } = req.body
  const result = await UserService.createAdmin(admin)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created  successfully !',
    data: result,
  })
})
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully !',
    data: result,
  })
})

export const UserController = {
  createUser,
  createAdmin,
  getAllUser,
}
