const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function chatWithBot(req, res) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No user message provided" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are Medicare's AI assistant chatbot.
      User will ask health-related or general queries. 
      Respond in a clear, helpful, and conversational way.

      User: ${message}
    `;

    const result = await model.generateContent(prompt);
    const aiResponse = result.response.candidates[0].content.parts[0].text;

    res.json({ success: true, reply: aiResponse });
  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to get chatbot reply",
      details: error.message,
    });
  }
}
async function analyzeReport(req, res) {
  try {
    const { report } = req.body;

    if (!report) {
      return res.status(400).json({ error: "No report provided" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are a healthcare AI system. 
      Analyze the following report data and provide clear findings and suggestions.
      
      Report:
      Name: ${report.name}
      Type: ${report.type}
      Size: ${report.size} bytes
      UploadedAt: ${report.uploadedAt}
    `;

    const result = await model.generateContent(prompt);
    const aiResponse = result.response.candidates[0].content.parts[0].text;

    res.json({ success: true, analysis: aiResponse });
  } catch (error) {
    console.error("Analyze Report Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to analyze report",
      details: error.message,
    });
  }
}
module.exports = { chatWithBot,analyzeReport };
