import { Document, model, Schema } from 'mongoose'

export interface IDetails extends Document {
   fname: string;
   mname?: string;
   lname: string;
   title: [object];
   email: string;
   phone: string;
   countryCode?: string;
   profileimage?: string;
   dob: Date;
   address?: [object];
   summary?: string;
   about?: string;
   aboutImage?: string;
   password: string;
   role: 'admin'
}

const DetailSchema: Schema = new Schema<IDetails>({
   fname: {
      type: String,
      required: true,
      trim: true
   },
   mname: {
      type: String,
      trim: true
   },
   lname: {
      type: String,
      required: true,
      trim: true
   },
   title: [{
      type: String,
      required: true
   }],
   email: {
      type: String,
      required: true,
      unique: true
   },
   phone: {
      type: String,
      required: true,
      unique: true
   },
   countryCode: {
      type: String,
      default: '+91'
   },
   profileimage: {
      type: String
   },
   dob: {
      type: Date,
      required: true
   },
   address: [{
      street: {
         type: String,
         trim: true
      },
      area: {
         type: String,
         trim: true
      },
      city: {
         type: String,
         trim: true
      },
      state: {
         type: String,
         trim: true
      },
      country: {
         type: String,
         trim: true
      },
      zipcode: {
         type: String,
      }
   }],
   summary: {
      type: String,
      trim: true
   },
   about: {
      type: String,
      trim: true
   },
   aboutImage: {
      type: String
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      default: "admin"
   }
}, {
   timestamps: true,
   versionKey: false
})

export const Details = model<IDetails>('personal_details', DetailSchema)