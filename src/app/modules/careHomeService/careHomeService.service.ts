import { Service } from './careHomeService.model'

const getService = async (id: string) => {
  const result = await Service.find({ homeId: id })
  return result
}

export const Services = {
  getService,
}
