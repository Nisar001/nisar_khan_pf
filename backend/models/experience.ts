import mongoose, { model, Schema } from "mongoose";

export interface IExperience extends Document {
   user: mongoose.Schema.Types.ObjectId;
   company: string;
   city: string;
   designation: string;
   startDate: Date;
   isPresent: boolean;
   endDate?: Date;
   description: string;
   isBlocked: boolean;
   isDeleted: boolean;
}

const ExperienceSchema: Schema = new Schema<IExperience>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   company: {
      type: String,
      required: true,
      trim: true
   },
   city: {
      type: String,
      required: true,
      trim: true
   },
   designation: {
      type: String,
      trim: true,
      required: true
   },
   startDate: {
      type: Date,
      required: true
   },
   isPresent: {
      type: Boolean,
      default: false
   },
   endDate: {
      type: Date,
      required: false
   },
   description: {
      type: String,
      required: true
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

export const Experience = model<IExperience>('experience', ExperienceSchema)