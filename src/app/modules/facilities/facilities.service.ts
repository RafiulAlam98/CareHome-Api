import { Facility } from './facilities.model'

const getAllFacilities = async (id: string) => {
  const result = await Facility.find({ homeId: id })
  return result
}
export const FacilityService = {
  getAllFacilities,
}
