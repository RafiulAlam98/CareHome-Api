import { Model } from 'mongoose'

export type ICareTeam = {
  homeId: string
  name: string
  jobTitle: string
  description: string
  profileImg?: string
}

export type TeamModel = Model<ICareTeam>
