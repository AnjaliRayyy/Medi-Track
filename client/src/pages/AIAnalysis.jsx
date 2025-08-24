import { useState } from "react";
import { Upload, Bot, FileText, Send } from "lucide-react";
import { toast } from "react-toastify";

export default function AIAnalysis() {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello 👋 I'm your AI health assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState([]);

  // Handle chat send
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch("http://localhost:8000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // toast.success(data.reply);
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
        setInput("")
        console.log(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setInput("");
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;

    const result = {
      reportName: file.name,
      findings: [
        "Blood sugar slightly above normal",
        "Cholesterol levels are healthy",
        "No major abnormalities detected",
      ],
      suggestion: "Maintain a balanced diet and exercise 30 mins/day.",
      date: new Date().toLocaleString(),
    };

    setAnalysis(result);
    setHistory([result, ...history]);
    setFile(null);
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("chat")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "chat" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Chat with AI
        </button>
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "upload" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Upload Report
        </button>
      </div>

      {/* Chat Mode */}
      {activeTab === "chat" && (
        <div className="bg-white rounded-xl shadow p-6 flex flex-col h-[70vh]">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-md ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white self-end ml-auto"
                    : "bg-gray-100 text-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about your health..."
              className="flex-1 border rounded-lg p-2"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Upload Mode */}
      {activeTab === "upload" && (
        <div className="space-y-6">
          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Upload className="text-green-600" /> Upload Report
            </h2>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={handleFileChange}
                className="border p-2 rounded-lg flex-1"
              />
              <button
                onClick={handleUpload}
                disabled={!file}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Analyze
              </button>
            </div>
          </div>

          {/* Analysis Result */}
          {analysis && (
            <div className="bg-white rounded-xl shadow p-6 animate-fade-in">
              <h2 className="text-lg font-semibold mb-4">AI Findings</h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {analysis.findings.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="font-medium text-blue-700">
                Suggestion: {analysis.suggestion}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Analyzed at {analysis.date}
              </p>
            </div>
          )}

          {/* History Section */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-purple-600" /> Previous Analyses
            </h2>
            {history.length === 0 ? (
              <p className="text-gray-500">No past analyses found.</p>
            ) : (
              <ul className="space-y-3">
                {history.map((item, index) => (
                  <li
                    key={index}
                    className="p-3 border rounded-lg hover:bg-gray-50 transition"
                  >
                    <p className="font-medium">{item.reportName}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
