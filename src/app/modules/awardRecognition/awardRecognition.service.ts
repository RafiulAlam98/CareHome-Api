import { Award } from './awardRecognition.model'

const getAllAward = async () => {
  const result = await Award.find()

  return result
}
const getSingleAward = async (id: string) => {
  const result = await Award.find({ homeId: id })
  return result
}
const deleteAward = async (id: string) => {
  const result = await Award.deleteOne({ _id: id })
  return result
}
export const AwardService = {
  getAllAward,
  getSingleAward,
  deleteAward,
}
