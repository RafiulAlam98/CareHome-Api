import httpStatus from 'http-status'
import ApiError from '../../error/ApiError'
import { ITour } from './tour.interface'
import { Tour } from './tour.model'

const addTour = async (data: ITour) => {
  const result = await Tour.create(data)
  return result
}
const getAlltour = async () => {
  const result = await Tour.find()
  return result
}
const deleteTour = async (id: string) => {
  const isExist = await Tour.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'tour not found !')
  }
  const tour = await Tour.findOneAndDelete({ _id: id })
  if (!Tour) {
    throw new ApiError(404, 'Failed to delete Tour')
  }
  return tour
}
export const TourService = {
  addTour,
  getAlltour,
  deleteTour,
}
