import { Team } from './careHomeTeam.model'

const getAllTeam = async (id: string) => {
  const result = await Team.find({ homeId: id })
  return result
}
export const TeamService = {
  getAllTeam,
}
