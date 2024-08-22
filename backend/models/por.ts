import mongoose, { model, Schema } from "mongoose";

export interface IPOR extends Document {
   user: mongoose.Schema.Types.ObjectId;
   position: string;
   place: string;
   startDate: Date;
   isPresent: boolean;
   endDate?: Date;
   description?: string;
   isBlocked: boolean;
   isDeleted: boolean;
}

const PORSchema: Schema = new Schema<IPOR>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   position: {
      type: String,
      required: true,
      trim: true
   },
   place: {
      type: String,
      required: true,
      trim: true
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
      trim: true
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

export const POR = model<IPOR>('por', PORSchema)