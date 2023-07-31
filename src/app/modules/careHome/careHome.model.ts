import { Schema, model } from 'mongoose'
import { CareHomeModel, ICareHome } from './careHome.interface'

const CareHomeSchema = new Schema<ICareHome>({
  title: {
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
  img: {
    type: String,
    required: true,
  },
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
  awardRecognition: {
    type: {
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
    },
  },
  careHomeService: {
    type: {
      serviceTitle: {
        type: String,
        required: true,
      },
    },
  },
  careHomeTeam: {
    type: {
      name: {
        type: String,
        required: true,
      },
      jobTitle: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      profileImg: {
        type: String,
        required: false,
      },
    },
  },
  facilities: {
    type: {
      facilityType: {
        type: String,
        required: true,
      },
    },
  },
  newsEvent: {
    type: {
      totalEvent: {
        type: String,
        required: true,
      },
      totalNews: {
        type: String,
        required: true,
      },
    },
  },
  reviews: {
    type: {
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
    },
  },
})

export const CareHome = model<ICareHome, CareHomeModel>(
  'CareHome',
  CareHomeSchema,
)
