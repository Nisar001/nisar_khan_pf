import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export interface IPayload {
   _id: string
   role: string
}

export const generate_token = (payload: IPayload): string => {

   const token = jwt.sign(
      {
         _id: payload,
         role: payload,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE_TIME }
   )

   return token
}