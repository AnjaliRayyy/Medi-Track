import { Upload, FileText, Eye, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Reports() {
  // Mock ABDM reports (pretend API fetch)
  const [abdmReports, setAbdmReports] = useState([]);

  // Patient uploaded reports
  const [patientReports, setPatientReports] = useState([
    { id: 1, name: "Blood Test Report.pdf", date: "12 Aug 2025" },
  ]);

  // Simulate fetching from ABDM API
  useEffect(() => {
    const mockAbdmData = [
      { id: 101, name: "ABDM ECG Report.pdf", date: "10 Aug 2025" },
      { id: 102, name: "ABDM X-Ray Result.pdf", date: "7 Aug 2025" },
    ];
    setTimeout(() => setAbdmReports(mockAbdmData), 1000); // simulate delay
  }, []);

  // Handle patient uploads
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newReport = {
        id: patientReports.length + 1,
        name: file.name,
        date: new Date().toLocaleDateString(),
      };
      setPatientReports([newReport, ...patientReports]);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-700 mb-8">My Reports</h2>

      {/* ABDM Reports */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">ABDM Linked Reports</h3>
        {abdmReports.length === 0 ? (
          <p className="text-gray-500">Fetching reports from ABDM...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {abdmReports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-5 rounded-xl shadow hover:scale-[1.02] transition flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="text-blue-600" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{report.name}</h4>
                    <p className="text-sm text-gray-500">From ABDM • {report.date}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <Eye size={20} />
                  </button>
                  <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Patient Reports */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-600">Patient Uploaded Reports</h3>

          <label className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer shadow hover:opacity-90 transition">
            <Upload className="mr-2" size={20} />
            Upload Report
            <input type="file" hidden onChange={handleUpload} />
          </label>
        </div>

        {patientReports.length === 0 ? (
          <p className="text-gray-500">No patient reports uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patientReports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-5 rounded-xl shadow hover:scale-[1.02] transition flex justify-between items-center"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="text-cyan-600" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{report.name}</h4>
                    <p className="text-sm text-gray-500">Uploaded • {report.date}</p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <Eye size={20} />
                  </button>
                  <button className="p-2 bg-cyan-100 rounded-full hover:bg-cyan-200 transition">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
