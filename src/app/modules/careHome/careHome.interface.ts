import { Model, Types } from 'mongoose'
import { IAward } from '../awardRecognition/awardRecognition.interface'
import { IService } from '../careHomeService/careHomeService.interface'
import { ICareTeam } from '../careHomeTeam/careHomeTeam.interface'
import { IFacilities } from '../facilities/facilities.interface'
import { INewsEvent } from '../newsEvent/newsEvent.interface'

import { IReviews } from '../reviews/reviews.interface'

export type IRoomInfo = {
  totalRoom: number
  roomTypes: string
}

export type IPerformance = {
  caring: string
  effective: string
  responsive: string
  safe: string
}
export type ICareTypes = {
  careTypes: string
}

export type ICareHome = {
  title: string
  location: string
  website: string
  owner: string
  img: string
  price: string
  room: IRoomInfo
  personIncharge: string
  localAuthority: string
  admissionRestrictionAge: number
  performance: IPerformance
  logo?: string
  quote?: string
  caretypes?: ICareTypes
  awardRecognition?: Types.ObjectId | IAward
  careHomeService?: Types.ObjectId | IService
  careHomeTeam?: Types.ObjectId | ICareTeam
  facilities?: Types.ObjectId | IFacilities
  newsEvent?: Types.ObjectId | INewsEvent
  reviews?: Types.ObjectId | IReviews
}

export type ICareHomeFilters = { searchTerm?: string }

export type CareHomeModel = Model<ICareHome, Record<string, unknown>>
