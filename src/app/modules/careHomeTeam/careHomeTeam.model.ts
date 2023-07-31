import { Schema, model } from 'mongoose'
import { ICareTeam, TeamModel } from './careHomeTeam.interface'

const TeamSchema = new Schema<ICareTeam>({
  homeId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: false,
  },
})

export const Team = model<ICareTeam, TeamModel>('Team', TeamSchema)
