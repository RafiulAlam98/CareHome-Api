import { Model } from 'mongoose'

export type ITour = {
  name: string
  email: string
  phone: string
}

export type TourModel = Model<ITour>
