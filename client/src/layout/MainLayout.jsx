import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar (hidden on small screens) */}
        <aside className="hidden md:block w-64 border-r bg-white">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}
