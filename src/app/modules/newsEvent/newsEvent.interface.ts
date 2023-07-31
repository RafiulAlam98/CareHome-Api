import { Model } from 'mongoose'

export type INewsEvent = {
  homeId: string
  totalEvent: string
  totalNews: string
}

export type NewsEventModel = Model<INewsEvent>
