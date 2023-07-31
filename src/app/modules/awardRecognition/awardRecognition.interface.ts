import { Model } from 'mongoose'

export type IAward = {
  homeId: string
  awardLogo: string
  awardTitle: string
  date: string
  awardDescription: string
}

export type AwardModel = Model<IAward>
