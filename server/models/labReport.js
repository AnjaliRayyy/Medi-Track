const mongoose = require('mongoose')

const labReportSchema = new mongoose.Schema({
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