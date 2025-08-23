const mongoose=require('mongoose')

const medicalRecordSchema = new mongoose.Schema({
  abhaId: { type: String, required: true },
  records:[{
    visitId: String,
    date: Date,
    doctor: String,
    specialization: String,
    diagnosis: String,
    prescriptions: [{ medicine: String, dosage: String }],
    notes: String
  }]
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
module.exports=MedicalRecord