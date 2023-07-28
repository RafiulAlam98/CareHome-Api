import { ICareHome } from './careHome.interface'
import { CareHome } from './careHome.model'

const addCareHomeService = async (data: ICareHome) => {
  const result = await CareHome.create(data)
  return result
}
const getAllCareHomeService = async () => {
  const result = await CareHome.find()
  return result
}

export const CareHomeService = {
  addCareHomeService,
  getAllCareHomeService,
}
