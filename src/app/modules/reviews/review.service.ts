import { Reviews } from './review.model'

const getSingleReview = async (id: string) => {
  const result = await Reviews.find({ homeId: id })
  return result
}

export const ReviewService = {
  getSingleReview,
}
