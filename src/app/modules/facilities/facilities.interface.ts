import { Model } from 'mongoose'

export type IFacilities = {
  homeId: string
  facilityType: string
}
export type FacilityModel = Model<IFacilities>
