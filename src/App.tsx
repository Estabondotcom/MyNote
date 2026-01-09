import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import AppLayout from "./routes/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/app" element={<AppLayout />} />
      <Route path="/" element={<Navigate to="/app" replace />} />
      <Route path="*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
}
