const mongoose = require('mongoose')

const labReportSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  abhaId: { type: String, required: true },
  reports: [{
    reportId: String,
    date: Date,
    testName: String,
    result: String,
    normalRange: String,
    status: String,
    fileUrl: String,
    uploadedBy: String
  }]
});
const LabReport = mongoose.model('LabReport', labReportSchema);
module.exports = LabReport;