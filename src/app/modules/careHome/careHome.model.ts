import { Schema, model } from 'mongoose'
import { CareHomeModel, ICareHome } from './careHome.interface'

const CareHomeSchema = new Schema<ICareHome>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    website: {
      type: String,
      required: true,
    },
    types: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    img: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: String,
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
      type: {
        caring: {
          type: String,
          required: true,
        },
        effective: {
          type: String,
          required: true,
        },
        responsive: {
          type: String,
          required: true,
        },
        safe: {
          type: String,
          required: true,
        },
      },
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
    awardRecognition: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Award',
      },
    ],
    careHomeService: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
    },
    careHomeTeam: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
    facilities: {
      type: Schema.Types.ObjectId,
      ref: 'Facilty',
    },
    newsEvent: {
      type: Schema.Types.ObjectId,
      ref: 'NewsEvent',
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: 'Reviews',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const CareHome = model<ICareHome, CareHomeModel>(
  'CareHome',
  CareHomeSchema,
)
