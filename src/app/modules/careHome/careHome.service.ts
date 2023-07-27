import { ICareHome } from './careHome.interface'
import { CareHome } from './careHome.model'

const addCareHomeService = async (data: ICareHome) => {
  const result = await CareHome.create(data)
  return result
}

export const CareHomeService = {
  addCareHomeService,
}
