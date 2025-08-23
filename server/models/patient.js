const mongoose=require('mongoose')

const patientSchema=new mongoose.Schema({
 abhaId: { type: String, required: true, unique: true },
    name: String,
    dob: Date,
    gender: String,
    bloodGroup: String,
    contact: String,
    address: String,
    allergies: [String],
    chronicConditions: [String],
  },{timestamps:true})

  const Patient=mongoose.model("patient",patientSchema)
  module.exports=Patient