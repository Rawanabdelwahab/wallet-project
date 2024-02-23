import { Schema, model } from "mongoose";
const code = new Schema({
    
    user: {
        type: ObjectId,
        ref: 'login',
        required: true
    }
}, { timestamps: true }
)
export default model('code', code)