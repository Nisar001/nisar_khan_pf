import mongoose, { model, Schema } from "mongoose";

export interface IAchievements extends Document {
   user: mongoose.Schema.Types.ObjectId;
   achivement: string;
   organization: string;
   aDate?: Date;
   isBlocked: boolean;
   isDeleted: boolean;
}

const AchievementSchema: Schema = new Schema<IAchievements>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   achivement: {
      type: String,
      required: true,
      trim: true
   },
   organization: {
      type: String,
      required: true,
      trim: true
   },
   aDate: {
      type: Date,
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

export const Achivement = model<IAchievements>('achievement', AchievementSchema)