const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const {handleFetchingPatientDetails,handleFetchingRecords,handleFetchingRecordById,handleFetchingLabReports,handleFetchingLabReportById}=require('../controllers/patient.js');
const userUploads = require("../models/userUploads.js");

// Configure multer for local file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

//<-------------------Patient Routes----------------------->
router.get("/:userId",handleFetchingPatientDetails)

//<-----------------Medical Records Routes-------------->
router.route("/:userId/records").get(handleFetchingRecords)
router.route("/:userId/records/:visitId",handleFetchingRecordById)


//<--------------------Lab Reports Routes--------------------->
router.route("/:userId/reports").get(handleFetchingLabReports)
router.route("/:userId/reports/:reportId").get(handleFetchingLabReportById)

//<------------Patient Uploads Routes--------------->
// router.route("/:userId/uploads").
router.post("/:userId/upload-report", upload.single("report"), async (req, res) => {
  try {
    const { userId } = req.params;
    const file = req.file;

    if (!file) return res.status(400).json({ message: "No file uploaded" });

    // Create local file URL
    const fileUrl = `/uploads/${file.filename}`;

    const newReport = new userUploads({
      userId,
      fileName: file.originalname,
      fileUrl,
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