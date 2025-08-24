const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cloudinary=require("../config/cloudinary.js")
const router = express.Router();
const {handleFetchingPatientDetails,handleFetchingRecords,handleFetchingRecordById,handleFetchingLabReports,handleFetchingLabReportById}=require('../controllers/patient.js');
const userUploads = require("../models/userUploads.js");

const upload = multer({ dest: "uploads/" }); // temp storage

// Configure multer for local file storage


//<-------------------Patient Routes----------------------->
router.get("/:userId",handleFetchingPatientDetails)

//<-----------------Medical Records Routes-------------->
router.route("/:userId/records").get(handleFetchingRecords)
router.route("/:userId/records/:visitId",handleFetchingRecordById)


//<--------------------Lab Reports Routes--------------------->
// router.route("/:userId/reports").get(handleFetchingLabReports)
// router.route("/:userId/reports/:reportId").get(handleFetchingLabReportById)

//<------------Patient Uploads Routes--------------->
// router.route("/:userId/uploads").
// Upload report
router.post("/:userId/upload-report", upload.single("report"), async (req, res) => {
  try {
    const { userId } = req.params;
    const file = req.file;

    if (!file) return res.status(400).json({ message: "No file uploaded" });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "medical_reports",
    });

    const newReport = new userUploads({
      userId: userId,
      reportName: file.originalname, // Add reportName
      reportUrl: result.secure_url,   // Add reportUrl
    });

    await newReport.save();
    res.json({ message: "Report uploaded successfully", report: newReport });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Error uploading report", error: err.message });
  }
});

// Fetch all patient reports
router.get("/:userId/reports", async (req, res) => {
  try {
    const { userId } = req.params;
    const reports = await userUploads.find({ userId });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reports", error: err.message });
  }
});


module.exports=router