import { Request, Response } from "express"; 
import { userModelParams } from "../dto/User";
import { USERLOG } from "../Models/UserModel";

export const userRegistration = async(req:Request, res:Response): Promise<void> => {
    const {firstName, lastName, email, mobileNo, password, confirmPassword} =<userModelParams>req.body
    const userRegistration = new USERLOG({
        firstName,
        lastName,
        email,
        mobileNo,
        password,
        confirmPassword,
    })

    console.log('req.body', userRegistration)

    try {
        const checkEmail = await USERLOG.findOne({email})

        if(checkEmail){
             res.status(402).json({message:'Email Alredy in user by another User'})
             return;
        }else if(password !== confirmPassword){
             res.status(402).json('Password does not Match')
             return;
        }

        await userRegistration.save();
        res.status(200).json('Registration create Successfully')
    } catch(err) {
        res.status(500).json(`Registration failed ${err}`)
    }
} 


