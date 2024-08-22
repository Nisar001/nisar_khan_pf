import mongoose, { model, Schema } from 'mongoose'

export interface ISkills extends Document {
   user: mongoose.Schema.Types.ObjectId;
   skillName: string;
   skillLevel: 'Beginner' | 'Intermediate' | 'Advance';
   category: ['all' | 'web' | 'mobile' | 'programming' | 'tool' | 'database' | 'gaming' | 'android'];
   description?: string;
   isDeleted: boolean;
   isBlocked: boolean;
}

const SkillSchema: Schema = new Schema<ISkills>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   skillName: {
      type: String,
      required: true,
   },
   skillLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advance'],
      default: "Intermediate"
   },
   category: [{
      type: String,
      enum: ['all', 'web', 'mobile', 'programming', 'tool', 'database', 'gaming', 'android'],
      default: "all"
   }],
   description: {
      type: String,
      trim: true
   },
   isDeleted: {
      type: Boolean,
      default: false
   },
   isBlocked: {
      type: Boolean,
      default: false
   }
}, {
   timestamps: true,
   versionKey: false
})

export const Skill = model<ISkills>('skills', SkillSchema)