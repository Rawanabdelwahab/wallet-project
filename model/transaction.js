import { model ,Schema,ObjectId } from "mongoose";
const transaction=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    // user: {
    //     type: ObjectId,
    //     ref: 'User.model',
    //     required: true
    // }

    
})
export default model('transaction',transaction)