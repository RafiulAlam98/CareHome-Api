import { Schema, model } from 'mongoose'
import { IImage, ImageModel } from './images.interface'

const imageSchema = new Schema<IImage, ImageModel>({
  homeId: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
})

export const Image = model<IImage, ImageModel>('image', imageSchema)
