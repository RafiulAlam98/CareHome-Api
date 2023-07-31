import { Schema, model } from 'mongoose'
import { IService, ServiceModel } from './careHomeService.interface'

const ServiceSchema = new Schema<IService>({
  homeId: {
    type: String,
    required: true,
  },
  serviceTitle: {
    type: String,
    required: true,
  },
})

export const Service = model<IService, ServiceModel>('Service', ServiceSchema)
