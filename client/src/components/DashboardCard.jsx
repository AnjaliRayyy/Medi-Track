export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 hover:scale-105 transition-transform">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
