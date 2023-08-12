import { NewsEvent } from './newsEvent.model'

const getNewsEvent = async (id: string) => {
  const result = await NewsEvent.find({ homeId: id })
  return result
}
export const NewsEventService = {
  getNewsEvent,
}
