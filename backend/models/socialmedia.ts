import mongoose, { model, Schema } from "mongoose";

export interface ISocialMedia extends Document {
   user: mongoose.Schema.Types.ObjectId;
   name: string;
   link: string;
   isBlocked: boolean;
   isDeleted: boolean;
}

const SocialMediaSchema: Schema = new Schema<ISocialMedia>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   name: {
      type: String,
      required: true,
      trim: true
   },
   link: {
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

export const SocialMedia = model<ISocialMedia>('socialmedia', SocialMediaSchema)