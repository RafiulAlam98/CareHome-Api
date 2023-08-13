import { Model } from 'mongoose'

export type IImage = {
  homeId: string
  img: string
}
export type ImageModel = Model<IImage>
