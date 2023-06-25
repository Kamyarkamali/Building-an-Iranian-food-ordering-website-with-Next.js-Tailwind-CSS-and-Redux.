import {Schema,model,models} from "mongoose";


const Coustomer=await Schema({
    name:{
        type:String,
        required:true,
        minLength:1
    },
    lastName:{
        type:String,
        required:true,
        minLength:1
    },
    email:{
        type:String,
        required:true,
        minLength:1
    },
    createedAt:{
        type:Date,
        default:()=>Date.now(),
    },
})


const User=model.User || model("User",Coustomer)


export default User;