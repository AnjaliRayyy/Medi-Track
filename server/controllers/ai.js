const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeReport(req, res) {
  try {
    const { report } = req.body;
    if (!report) {
      return res.status(400).json({ error: "No report data provided" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // 👈 change here

    const prompt = `
      Analyze the following patient report and provide:
      1. A simple summary for the patient.
      2. Highlight key health risks.
      3. Recommend whether they should consult a doctor or take lifestyle measures.

      Report:
      ${JSON.stringify(report, null, 2)}
    `;

    const result = await model.generateContent(prompt);
    const aiResponse = await result.response.text();

    res.json({ analysis: aiResponse });
  } catch (error) {
    console.error("AI Analysis Error:", error);
    res.status(500).json({ error: "Failed to analyze report", details: error.message });
  }
}

module.exports = { analyzeReport };
