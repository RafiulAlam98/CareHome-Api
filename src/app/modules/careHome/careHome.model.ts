import { Schema, model } from 'mongoose'
import { CareHomeModel, ICareHome } from './careHome.interface'

const CareHomeSchema = new Schema<ICareHome>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  room: {
    required: true,
    type: {
      totalRoom: {
        type: Number,
        required: true,
      },
      roomTypes: {
        type: String,
        required: true,
      },
    },
  },
  personIncharge: {
    type: String,
    required: true,
  },
  localAuthority: {
    type: String,
    required: true,
  },
  admissionRestrictionAge: {
    type: Number,
    required: true,
  },
  performance: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
})

export const CareHome = model<ICareHome, CareHomeModel>(
  'CareHome',
  CareHomeSchema,
)
