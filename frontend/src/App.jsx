import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Journals from "./pages/Journals";
import NotFound from "./pages/NotFound";
import Months from "./pages/Months";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Settings from "./pages/Settings";

function Logout() {
  localStorage.clear(); // limpa os tokens
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage/>
          }
        />
        <Route
          path="/tou"
          element={
            <TermsOfUse/>
          }
        />
        <Route
          path="/pp"
          element={
            <PrivacyPolicy/>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/months"
          element={
            <ProtectedRoute>
              <Months />
            </ProtectedRoute>
          }
        />
        <Route
          path="/months/:monthId/journals"
          element={
            <ProtectedRoute>
              <Journals />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
