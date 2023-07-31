import mongoose from 'mongoose'
import { IAward } from '../awardRecognition/awardRecognition.interface'
import { Award } from '../awardRecognition/awardRecognition.model'
import { ICareHome } from './careHome.interface'
import { CareHome } from './careHome.model'
import { Service } from '../careHomeService/careHomeService.model'
import { IService } from '../careHomeService/careHomeService.interface'

const addCareHomeService = async (data: ICareHome) => {
  const result = await CareHome.create(data)
  return result
}
const getAllCareHomeService = async () => {
  const result = await CareHome.find()
  return result
}
const createAwardService = async (payload: IAward) => {
  const session = await mongoose.startSession()
  let result
  try {
    const home = await CareHome.findOne({ _id: payload.homeId })
    if (!home) {
      throw Error('Care Home Not Found')
    }
    home.awardRecognition = payload
    await home.save()
    result = await Award.create(payload)
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}
const createServices = async (payload: IService) => {
  const session = await mongoose.startSession()
  let result
  try {
    const home = await CareHome.findOne({ _id: payload.homeId })
    if (!home) {
      throw Error('Care Home Not Found')
    }
    home.careHomeService = payload
    await home.save()
    result = await Service.create(payload)
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}

export const CareHomeService = {
  addCareHomeService,
  getAllCareHomeService,
  createAwardService,
  createServices,
}
