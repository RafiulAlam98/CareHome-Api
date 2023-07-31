import { Model } from 'mongoose'

export type IReviews = {
  homeId: string
  overallExperience: number
  dateSubmitted: string
  reviewerName: string
  reviewPublisDate: string
  reviewDescription: string
}

export type ReviewModel = Model<IReviews>
