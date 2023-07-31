import { Model } from 'mongoose'

export type IService = {
  homeId: string
  serviceTitle: string
}

export type ServiceModel = Model<IService>
