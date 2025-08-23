const mongoose=require("mongoose")

async function connectDB(URI){
    try{
        await mongoose.connect(URI)
    }
    catch(err){
        console.log("Error in connecting to DB : ",err)
    }
}
module.exports=connectDB