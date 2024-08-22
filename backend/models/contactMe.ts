import mongoose, { model, Schema } from "mongoose";

export interface IContactMe extends Document {
   name: string;
   phone?: string;
   email: string;
   message: string;
   isReaded: boolean;
   isReplied: boolean;
   isDeleted: boolean;
}

const ContactMeSchema: Schema = new Schema<IContactMe>({
   name: {
      type: String,
      required: true,
      trim: true
   },
   phone: {
      type: String,
      trim: true
   },
   email: {
      type: String,
      required: true,
      trim: true
   },
   message: {
      type: String,
      required: true
   },
   isReaded: {
      type: Boolean,
      default: false
   },
   isReplied: {
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

export const ContactMe = model<IContactMe>('contactme', ContactMeSchema)