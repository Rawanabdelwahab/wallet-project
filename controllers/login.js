import loginModel from "../models/login.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export const checkLogin = async (req, res) => {
    const { email, password } = req.body
    const logged = await loginModel.findOne({ email })
    const isCorrectPassword = bcrypt.compareSync(password,logged.password)
    const data ={
        _id:logged._id,
        email:logged.email
    }
    const token =jwt.sign(data,'shhhhh')
    if(isCorrectPassword){
        res.json({token})
    }
    else
    res.status(404).json({ found: false })
}