import mongoose, { model, Schema } from "mongoose";

export interface IEducation extends Document {
   user: mongoose.Schema.Types.ObjectId;
   courseName: string;
   stream?: string;
   grades: number;
   startDate: Date;
   isPresent: boolean;
   endDate?: Date;
   institute: string;
   city: string;
   isBlocked: boolean;
   isDeleted: boolean;
}

const EducationSchema: Schema = new Schema<IEducation>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   courseName: {
      type: String,
      required: true,
      trim: true
   },
   stream: {
      type: String,
      trim: true
   },
   grades: {
      type: Number,
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
      type: Date
   },
   institute: {
      type: String,
      required: true,
      trim: true
   },
   city: {
      type: String,
      trim: true,
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

export const Education = model<IEducation>('education', EducationSchema)