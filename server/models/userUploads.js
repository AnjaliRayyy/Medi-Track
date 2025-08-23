const mongoose = require("mongoose");

const UserUploadsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reportName: { type: String, required: true },
  reportUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserUploads", UserUploadsSchema);
