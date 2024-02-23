import loginModel from '../models/login.js'
import codeModel from'../models/code.js'
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt"
export const register = async (req, res) => {
    const { firstName, lastName, password, email, role, language, number, country,active } = req.body
    // if(co =="123"){
    //     console.log(co)
   //await codeModel.create({code, used, codeValidation, user })
    
//}

    const salt = bcrypt.genSaltSync(10)
    const encryptedPassword = bcrypt.hashSync(password, salt)
const x =await loginModel.create({ firstName, lastName, email, password: encryptedPassword, role,language, number, country,active })
//console.log(x)
    // 1. Save user data to database [DONE]
    // 2. Generate Code and send it to user (console.log) here
    // 3. In a different route/function - Receive the code from the user and check if valid or not  code controller

   
//     res.json()
// }
// export const post = async (req, res) => {
//     //console.log(req.body)
    // const { code } = req.body
    // await codeModel.create({ code: faker.number.int() })
   // console.log(code)
   
const randomNumber =Math.floor(1000 + Math.random() * 9000)
await codeModel.create({ code: randomNumber,user:x._id })
console.log(randomNumber);

    res.json()
}
// export const get = async (req, res) => {
//    // const { code } = req.body
//    // console.log(req.body)
//     const find = await codeModel.find({}).lean()
//     console.log(find)
//     res.json()
// }