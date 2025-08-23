const jwt=require("jsonwebtoken")
//Importing utils
const sendEmail = require("../utils/sendEmail.js")

//Importing models
const User = require("../models/user.js")
const Patient = require("../models/patient.js")
const MedicalRecord = require("../models/medicalRecords.js")
const LabReport = require("../models/labReport.js")

//Importing mock data (to be replaced by actual data)
const patientDetails = require("../mockData/patients.json")
const medicalRecordDetails = require("../mockData/medicalRecords.json")
const labReportDetails = require("../mockData/labReports.json")

const bcrypt = require('bcryptjs');

async function handleSignUp(req, res) {
    try {
        // Validate request body
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({ message: "Invalid request body format" })
        }

        const { name, email, abhaId,password } = req.body;
        if (!name || !password ||!email || !abhaId) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ message: "User already exists! Please Login!" })
        }
        const exists = patientDetails.find(patient => patient.abhaId === abhaId);
        if (!exists) {
            return res.status(400).json({ message: "Invalid ABHA ID" });
        }
        // exists.userId = user._id; // Assign userId directly to the existing patient object
        // console.log(exists)
        if (!exists) {
            return res.status(400).json({ message: "Invalid ABHA ID" })
        }
        const user = new User({ name, email, abhaId,password });
        await user.save();
        // exists=[...exists,{userId : user._id }]
        
        
        //Sending welcome email
        await sendEmail(
            user.email,
            "🎉 Welcome to MediTrack – Your Health Journey, Simplified",
            `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2c7be5;">Hello ${user.name},</h2>
          <p>Welcome to <strong>MediTrack</strong>! 🎉 Your account has been created successfully.</p>
          
          <p>With MediTrack, you can:</p>
          <ul>
          <li>📂 Securely store and access your medical history anytime</li>
          <li>🏥 Link your ABHA ID for verified health records</li>
          <li>🔒 Stay in control of your health data with privacy-first access</li>
          <li>📊 Track your treatments, medications, and doctor visits easily</li>
          </ul>
          
          <p><strong>Your login details:</strong></p>
          <p>Email: ${user.email}</p>
          <p>ABHA ID (last 4 digits): ****${abhaId.slice(-4)}</p>
          
          <a href="https://meditrack.com/login" style="display:inline-block;margin-top:15px;padding:10px 20px;background:#2c7be5;color:white;text-decoration:none;border-radius:5px;">
            🔗 Login to MediTrack
            </a>

            <p style="margin-top:20px;">If this wasn’t you, please contact us immediately at <a href="mailto:support@meditrack.com">support@meditrack.com</a>.</p>
            <p>Stay healthy,<br><strong>Team MediTrack</strong></p>
            <p style="color:#2c7be5;font-style:italic;">💙 Your health, your control.</p>
            </div>
            `
        );
        
        //<--------------------Saving Patient details in DB---------------->
        exists.userId=user._id;
        const patient = new Patient(exists)
        await patient.save();
        
        //<---------------------Saving Patient MedicalRecords in DB--------------------->
        const record = medicalRecordDetails.find(record => record.abhaId === abhaId)
        // console.log(record)
        if (record) {
            record.userId=user._id;
            // record=[...record,{userId : user._id }]
            const medicalRecord = new MedicalRecord(record)
            await medicalRecord.save();
        }

        //<-------------------------Saving Patient LabReports in DB------------------------>
        const labReport = labReportDetails.find(labReport => labReport.abhaId === abhaId)
        // console.log(labReport)
        if (labReport) {
            labReport.userId=user._id;
            // labReport=[...labReport,{userId : user._id }]
            const lab = new LabReport(labReport)
            await lab.save();
        }

        return res.status(201).json({ message: "User created successfully" })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Error in signup", err: err.message })
    }
}

async function handleLogin(req, res) {
    try {
        // Validate request body
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({ message: "Invalid request body format" })
        }

        const { email, password } = req.body;
        console.log(req.body)
        const user = await User.findOne({ email:email })
        console.log(user)
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: "Incorrect password" })
        }

        const payLoad={
            "id": user._id,
            "name": user.name,
            "email": user.email,
        }
        const token=jwt.sign(payLoad,process.env.JWT_SECRET,{expiresIn:"1d"})

        res.cookie("uid", token, {httpOnly: true, expires : new Date(Date.now()+3600000)})

        return res.json({ message: "User logged in successfully", user:user })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Error in login", err: err.message })
    }
}

async function handleGetMe(req,res){
    try{
        const{name,email}=req.user;
        const userDetails=await User.findOne({email});
        if(!userDetails) res.json({message:"No records found"})
            else
        {
        const abhaId=userDetails.abhaId;
        const patientDetails=await Patient.findOne({abhaId})
        console.log(patientDetails)
        res.json(patientDetails)
    }
    }
    catch(err){
        res.status(500).json({message : "Error in getting user details",err:err})
    }
}

async function handleLogout(req,res){
    res.clearCookie("uid");
    res.json({ message: "Logged out successfully" });
}
module.exports = { handleSignUp, handleLogin, handleGetMe, handleLogout }
module.exports = { handleSignUp, handleLogin, handleGetMe, handleLogout }