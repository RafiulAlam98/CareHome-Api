import { Schema, model } from 'mongoose'

import { AwardModel, IAward } from './awardRecognition.interface'

const AwardRecognitionSchema = new Schema<IAward>({
  homeId: {
    type: String,
    required: true,
  },
  awardLogo: {
    type: String,
    required: true,
  },
  awardTitle: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  awardDescription: {
    type: String,
    required: true,
  },
})

export const Award = model<IAward, AwardModel>('Award', AwardRecognitionSchema)
