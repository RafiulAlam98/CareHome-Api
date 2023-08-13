import { Schema, model } from 'mongoose'
import { AdminModel, IAdmin } from './admin.interface'

const adminSchema = new Schema<IAdmin, AdminModel>(
  {
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Admin = model<IAdmin, AdminModel>('admin', adminSchema)
