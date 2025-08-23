const express = require("express");
const { analyzeReport } = require("../controllers/ai.js");

const router = express.Router();

// POST /api/ai/analyze
router.post("/analyze", analyzeReport);

module.exports = router;
