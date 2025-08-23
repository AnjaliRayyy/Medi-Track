const mongoose = require("mongoose")
const bcrypt=require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    abhaId: { 
        type: String,
        required : true,
        unique:true,
    },
    password: {
        type: String,
        required: true
    },
},{ timestamps: true })

userSchema.pre('save',async function(next){

    try{
        const salt=await bcrypt.genSalt(10)
         if(this.isModified('password')){
             const hashPassword=await bcrypt.hash(this.password,salt)
             this.password=hashPassword
         }
        // if (this.isModified('abhaId')){
        //     const hashAbhaId=await bcrypt.hash(this.abhaId,salt)
        //     this.abhaId=hashAbhaId
        // }
        next()
    }
    catch(err)
    {
        console.log("Error in hashing password")
        next(err);
    }
})

const User=mongoose.model('user',userSchema)
module.exports=User