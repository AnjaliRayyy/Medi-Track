import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";

// Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import AIAnalysis from "./pages/AIAnalysis";
import Hospitals from "./pages/Hospitals";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const { user } = useContext(AuthContext);
  const patientId = user ? user.userId : null; // Check if user is not null
  // console.log(user);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes (require login) */}
      <Route
        element={
          // <ProtectedRoute>
            <MainLayout />
          // </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route 
          path="/reports" 
          element={<Reports patientId={patientId} />} 
        />
        <Route path="/ai-analysis" element={<AIAnalysis />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
