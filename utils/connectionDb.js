import mongoose , {mongo} from "mongoose";

async function connectionDB(){
    if(mongoose.connections[0].readyState) return
    await mongoose.connect()
    console.log("connection to db")
}


export default connectionDB;