const Patient=require("../models/patient.js")
const MedicalRecord=require("../models/medicalRecords.js")
const LabReport=require("../models/labReport.js")
async function handleFetchingPatientDetails(req,res){
    try{
        const abhaId = req.params.abhaId;
        const patient=await Patient.findOne({abhaId:abhaId})
        if(patient){
            return res.json(patient);
            }
        else{
            return res.status(404).json({message:"Patient not found"});
        }
    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error"});
    }
}

async function handleFetchingRecords(req,res){
    try{
        const abhaId = req.params.abhaId;
        const record=await MedicalRecord.findOne({abhaId:abhaId})
        if(record)  return res.json(record)
        else return res.json({message : "No Medical Records found"})

    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error"})
    }
}

async function handleFetchingRecordById(req,res){
    try{
        
    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error"})
    }
}

async function handleFetchingLabReports(req,res){
    try{
        const abhaId = req.params.abhaId;
        const labReport=await LabReport.findOne({abhaId:abhaId})
        if(labReport) return res.json(labReport)
        else return res.json({message : "No Lab Reports found"})
    }
    catch(err){
        return res.status(500).json({message:"Internal Server Error"});
    }
}

async function handleFetchingLabReportById(req,res){

}


module.exports={handleFetchingPatientDetails,handleFetchingRecords,handleFetchingRecordById,handleFetchingLabReports,handleFetchingLabReportById}