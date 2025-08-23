import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { FileText, Brain, Hospital } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        

        {/* Dashboard Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard title="Reports Uploaded" value="12" icon={<FileText />} />
          <DashboardCard title="AI Insights" value="8" icon={<Brain />} />
          <DashboardCard title="Hospitals Nearby" value="5" icon={<Hospital />} />
        </div>

        {/* Recent Activity */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3">
            <li className="bg-white p-4 rounded-lg shadow">✅ Uploaded Blood Report</li>
            <li className="bg-white p-4 rounded-lg shadow">🤖 AI analyzed sugar levels</li>
            <li className="bg-white p-4 rounded-lg shadow">🏥 Suggested Apollo Hospital nearby</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
