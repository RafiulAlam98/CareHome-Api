import { CareOffer } from './careOffered.model'

const getSingleCareType = async (id: string) => {
  const result = CareOffer.find({ homeId: id })
  return result
}
export const CareTypeService = {
  getSingleCareType,
}
