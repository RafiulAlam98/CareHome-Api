import { IImage } from './images.interface'
import { Image } from './images.model'

const addNewImage = async (payload: IImage) => {
  const result = await Image.create(payload)
  return result
}
const getImage = async (id: string) => {
  const result = await Image.find({ homeId: id })
  return result
}

export const ImageService = {
  addNewImage,
  getImage,
}
