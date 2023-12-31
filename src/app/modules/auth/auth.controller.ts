import { Request, Response } from 'express'
import httpStatus from 'http-status'
import config from '../../../config'
import { catchAsync } from '../../../shared/catchAsync'
import { AuthService } from './auth.service'
import sendResponse from '../../../shared/sendResponse'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body
  const result = await AuthService.loginUser(loginData)

  const { refreshToken, ...others } = result
  const cookies = {
    secure: config.env === 'production',
    httpOnly: true,
  }
  res.cookie('refresh-token', refreshToken, cookies)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully !',
    data: others,
  })
})

export const AuthController = {
  loginUser,
}
