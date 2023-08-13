import { Model } from 'mongoose'

export type IAdmin = {
  email: string
  password: string
  role: string
  phone: string
}

export type AdminModel = Model<IAdmin>
