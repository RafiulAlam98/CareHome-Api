import { Schema, model } from 'mongoose'
import { INewsEvent, NewsEventModel } from './newsEvent.interface'

const NewsEventSchema = new Schema<INewsEvent>({
  homeId: {
    type: String,
    required: true,
  },
  totalEvent: {
    type: String,
    required: true,
  },
  totalNews: {
    type: String,
    required: true,
  },
})
export const NewsEvent = model<INewsEvent, NewsEventModel>(
  'NewsEvent',
  NewsEventSchema,
)
