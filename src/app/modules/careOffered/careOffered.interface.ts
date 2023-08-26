import { Model } from "mongoose"

export type ICareOffer = {
  homeId: string
  careTypes: string
}

export type CareOfferModel = Model<ICareOffer>