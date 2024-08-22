import { Request, Response } from "express";
import { Details } from '../../../models/details';
import { isFieldEmpty, areFieldsEmpty } from '../../../utils/emptyFields'
import { isValidEmail, isValidPhoneNumber } from '../../../utils/validations'

export const signUp = async (req: Request, res: Response) => {
   try {
      const { fname, mname, lname, title, email, phone, dob, password } = req.body;
      if (isFieldEmpty(fname)) res.status(400).json({ message: 'First Name is Required !' })
      if (isFieldEmpty(lname)) res.status(400).json({ message: 'Last Name is Required !' })

   } catch (error) {

   }
}