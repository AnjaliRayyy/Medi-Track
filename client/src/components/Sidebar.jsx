import { Home, FileText, Brain, Hospital, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Reports", icon: <FileText size={20} />, path: "/reports" },
    { name: "AI Analysis", icon: <Brain size={20} />, path: "/ai-analysis" },
    { name: "Hospitals", icon: <Hospital size={20} />, path: "/hospitals" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col justify-between p-4 shadow-xl">
      <div>
        <h1 className="text-2xl font-bold mb-8 text-center">MediTrack</h1>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-700 transition"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 p-2 rounded-lg"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
