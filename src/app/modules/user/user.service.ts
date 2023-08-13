import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser) => {
  user.role = 'user'
  const result = await User.create(user)
  return result
}
const createAdmin = async (user: IUser) => {
  user.role = 'admin'
  const result = await User.create(user)
  return result
}
const getAllUser = async () => {
  const result = await User.find()
  return result
}
export const UserService = {
  createUser,
  getAllUser,
  createAdmin,
}
