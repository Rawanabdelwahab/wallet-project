import codeModel from "../models/code.js"
import loginModel from "../models/login.js";
import { faker } from "@faker-js/faker";
export const post = async (req, res) => {
    //console.log(req.body)
    //const user = req.body.user
    const { code } = req.body
    const foundcode = await codeModel.findOne({ code, used: { $ne: true } }).lean()  //ne not equal

    //console.log(foundcode)
    if (foundcode) {
        const updateOne = await codeModel.updateOne({ "_id": foundcode._id }, { used: true })
        const loginToUpdate = await loginModel.findOne({ _id: foundcode.user }).lean();
        if (loginToUpdate) {
            const updateTwo = await loginModel.updateOne({ "_id": loginToUpdate._id }, { active: true })
        }
        else
            console.log("error login")
    }
    else
        console.log("error code")
    res.json()
}

// 3. In a different route/function - Receive the code from the user and check if valid or not              code controller

