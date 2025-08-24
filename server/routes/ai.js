const express = require("express");
const { analyzeReport, chatWithBot } = require("../controllers/ai.js");

const router = express.Router();

router.post("/chat", chatWithBot);
router.post("/analyze", analyzeReport); 

module.exports = router;
