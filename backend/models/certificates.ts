import mongoose, { model, Schema } from "mongoose";

export interface ICertificates extends Document {
   user: mongoose.Schema.Types.ObjectId;
   cName: string;
   cNumber?: string;
   organization: string;
   issueDate: Date;
   expireDate?: Date;
   isBlocked: boolean;
   isDeleted: boolean;
}

const CerticateSchema: Schema = new Schema<ICertificates>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   cName: {
      type: String,
      required: true,
      trim: true
   },
   cNumber: {
      type: String,
      trim: true
   },
   organization: {
      type: String,
      required: true,
      trim: true
   },
   issueDate: {
      type: Date,
      required: true
   },
   expireDate: {
      type: Date
   },
   isBlocked: {
      type: Boolean,
      default: false
   },
   isDeleted: {
      type: Boolean,
      default: false
   }
}, {
   timestamps: true,
   versionKey: false
})

export const Certification = model<ICertificates>('certification', CerticateSchema)