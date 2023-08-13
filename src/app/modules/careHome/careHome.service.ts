import mongoose from 'mongoose'
import { IAward } from '../awardRecognition/awardRecognition.interface'
import { Award } from '../awardRecognition/awardRecognition.model'
import { ICareHome } from './careHome.interface'
import { CareHome } from './careHome.model'
import { Service } from '../careHomeService/careHomeService.model'
import { IService } from '../careHomeService/careHomeService.interface'
import { ICareTeam } from '../careHomeTeam/careHomeTeam.interface'
import { IFacilities } from '../facilities/facilities.interface'
import { Team } from '../careHomeTeam/careHomeTeam.model'
import { Facility } from '../facilities/facilities.model'
import { INewsEvent } from '../newsEvent/newsEvent.interface'
import { NewsEvent } from '../newsEvent/newsEvent.model'
import { IReviews } from '../reviews/reviews.interface'
import { Reviews } from '../reviews/review.model'
import ApiError from '../../error/ApiError'
import httpStatus from 'http-status'

const addCareHomeService = async (data: ICareHome) => {
  const result = await CareHome.create(data)
  return result
}

const getAllCareHomeService = async () => {
  const result = await CareHome.find({})

  return result
}
const getSingleCareHomeService = async (id: string) => {
  const result = await CareHome.findOne({ _id: id })

  if (!result) {
    throw Error('Care Home not found')
  }
  return result
}

const createAwardService = async (payload: IAward) => {
  const session = await mongoose.startSession()
  let result
  try {
    result = await Award.create(payload)
    await result.save()
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}
const createServices = async (payload: IService) => {
  const result = await Service.create(payload)
  return result
}
const createTeamService = async (payload: ICareTeam) => {
  const result = await Team.create(payload)
  return result
}
const createFacility = async (payload: IFacilities) => {
  const result = await Facility.create(payload)
  return result
}
const createNewsEventService = async (payload: INewsEvent) => {
  const result = await NewsEvent.create(payload)
  return result
}
const createReviewService = async (payload: IReviews) => {
  const session = await mongoose.startSession()
  let result
  try {
    const home = await CareHome.findOne({ _id: payload.homeId })
    if (!home) {
      throw Error('Care Home Not Found')
    }

    await home.save()

    result = await Reviews.create(payload)
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}
const deleteCareHome = async (id: string) => {
  const isExist = await CareHome.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'care home not found !')
  }
  const careHome = await CareHome.findOneAndDelete({ _id: id })
  if (!careHome) {
    throw new ApiError(404, 'Failed to delete careHome')
  }
  return careHome
}

export const CareHomeService = {
  addCareHomeService,
  getAllCareHomeService,
  getSingleCareHomeService,
  createAwardService,
  createServices,
  createTeamService,
  createFacility,
  createNewsEventService,
  createReviewService,
  deleteCareHome,
}
