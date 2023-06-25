import mongoose from "mongoose";

async function connectionDB(){
    if(mongoose.connections[0].readyState) return
    mongoose.set("strictQuery",false)
    await mongoose.connect("mongodb://kamyar:kamyar021@ac-yv3daub-shard-00-00.j7nixtx.mongodb.net:27017,ac-yv3daub-shard-00-01.j7nixtx.mongodb.net:27017,ac-yv3daub-shard-00-02.j7nixtx.mongodb.net:27017/?ssl=true&replicaSet=atlas-11vwqm-shard-0&authSource=admin&retryWrites=true&w=majority")
    console.log("connection db");
}

export default connectionDB