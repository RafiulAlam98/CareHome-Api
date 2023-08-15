import { Schema, model } from 'mongoose'
import { ITour, TourModel } from './tour.interface'

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
})

export const Tour = model<ITour, TourModel>('tour', tourSchema)
