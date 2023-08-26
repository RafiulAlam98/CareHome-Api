import { Schema, model } from 'mongoose'
import { CareOfferModel, ICareOffer } from './careOffered.interface'

const careOfferedSchema = new Schema<ICareOffer>({
  homeId: {
    type: String,
    required: true,
  },
  careTypes: {
    type: String,
    required: true,
  },
})
export const CareOffer = model<ICareOffer, CareOfferModel>(
  'careOffer',
  careOfferedSchema,
)
