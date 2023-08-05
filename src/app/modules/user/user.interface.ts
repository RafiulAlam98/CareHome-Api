import { Model } from 'mongoose'

export type IUser = {
  email: string
  password: string
  role: string
  phone: string
}
export type UserModel = {
  isUserExists(id: string): Promise<Pick<IUser, 'email' | 'password' | 'role'>>

  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
