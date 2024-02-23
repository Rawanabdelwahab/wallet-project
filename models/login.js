import { Schema, model } from "mongoose";
import { roles } from '../utils/enums.js'

// const admin = "Admin";
// const manager = "Manager";
// const user = "User";

// const roles = {
//     admin: 'Admin',
//     manager: 'Manager',
//     user: 'User'
// }

const login = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        //        validate: [validator.isEmail,'must be a viled email'],
    },
    role: {
        type: String,
        enum: [roles.admin, roles.manager, roles.user],
        default: roles.user
    },
    language: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false,
    }
    // role:{
    //     type:String,
    //     enum:[userRoles.ADMIN,userRoles.MANGER,userRoles.USER],
    //     default:userRoles.USER,
    // },
    // avatar:{
    //     type:String,
    //     default:'uploads/avatar_1.png'

    // }
}, { timestamps: true }
)
export default model('login', login)