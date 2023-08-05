import httpStatus from 'http-status'

import { IUserLogin } from './auth.interface'
import { User } from '../user/user.model'
import ApiError from '../../error/ApiError'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import config from '../../../config'
import { Secret } from 'jsonwebtoken'

const loginUser = async (payload: IUserLogin) => {
  const { email: mailId, password } = payload

  // check user exist
  const isUserExists = await User.isUserExists(mailId)
  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
  }

  //matched password
  if (
    isUserExists?.password &&
    !(await User.isPasswordMatched(password, isUserExists?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  const { email, role } = isUserExists

  // create access token
  const accessToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.secret as Secret,
    config.jwt.secret_expire_in as string,
  )

  const refreshToken = jwtHelpers.createToken(
    { email, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_secret_expire_in as string,
  )

  return {
    accessToken,
    refreshToken,
  }
}
export const AuthService = {
  loginUser,
}
