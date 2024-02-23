import { Schema, model, ObjectId } from "mongoose";
const code = new Schema({
    code: {
        type: String,
       required: true
    },
    used: {
        type: Boolean,
        default: false,
        
    },
    // codeValidation: {
    //     type: String,
    //     required: true
    // },
    user: {
        type: ObjectId,
        ref: 'login',
        required: true
    }
}, { timestamps: true }
)
export default model('code', code)