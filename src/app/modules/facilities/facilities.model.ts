import { Schema, model } from 'mongoose'
import { FacilityModel, IFacilities } from './facilities.interface'

const FacilitySchema = new Schema<IFacilities>({
  homeId: {
    type: String,
    required: true,
  },
  facilityType: {
    type: String,
    required: true,
  },
})

export const Facility = model<IFacilities, FacilityModel>(
  'Facilty',
  FacilitySchema,
)
