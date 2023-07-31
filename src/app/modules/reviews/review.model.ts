import { Schema, model } from 'mongoose'
import { IReviews, ReviewModel } from './reviews.interface'

const ReviewSchema = new Schema<IReviews>({
  homeId: {
    type: String,
    required: true,
  },
  overallExperience: {
    type: Number,
    required: true,
  },
  dateSubmitted: {
    type: String,
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewPublisDate: {
    type: String,
    required: true,
  },
  reviewDescription: {
    type: String,
    required: true,
  },
})
export const Reviews = model<IReviews, ReviewModel>('Reviews', ReviewSchema)
