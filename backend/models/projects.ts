import mongoose, { model, Schema } from "mongoose"

export interface IProjects extends Document {
   user: mongoose.Schema.Types.ObjectId;
   projectImage?: string;
   projectName: string;
   description: string;
   startDate: Date;
   isPresent: boolean;
   endDate?: Date;
   technologies: [string];
   codeLink: string;
   webViewLink?: string;
   isDeleted: boolean;
   isBlocked: boolean;
}

const ProjectSchema: Schema = new Schema<IProjects>({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'personal_details',
      required: true
   },
   projectImage: {
      type: String
   },
   projectName: {
      type: String,
      required: true,
      unique: true
   },
   description: {
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
   technologies: [{
      type: String,
      required: true
   }],
   codeLink: {
      type: String,
      required: true
   },
   webViewLink: {
      type: String
   },
   isDeleted: {
      type: Boolean,
      default: false,
   },
   isBlocked: {
      type: Boolean,
      default: false
   }
}, {
   timestamps: true,
   versionKey: false
})

export const Project = model<IProjects>('project', ProjectSchema)
