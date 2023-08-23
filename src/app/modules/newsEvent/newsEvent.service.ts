import { NewsEvent } from './newsEvent.model'

const getAllNewsEvent = async () => {
  const result = await NewsEvent.find()
  return result
}
const getNewsEvent = async (id: string) => {
  const result = await NewsEvent.find({ homeId: id })
  return result
}
const deleteNewsEvent = async (id: string) => {
  const result = await NewsEvent.deleteOne({ _id: id })
  return result
}
export const NewsEventService = {
  getNewsEvent,
  deleteNewsEvent,
  getAllNewsEvent,
}
