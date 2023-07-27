import { Model } from 'mongoose'

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

export type ICareHome = {
  title: string
  location: string
  owner: string
  img: string
  price: number
  room: IRoomInfo
  personIncharge: string
  localAuthority: string
  admissionRestrictionAge: number
  performance: string
  logo?: string
  quote?: string
}
export type CareHomeModel = Model<ICareHome, Record<string, unknown>>
