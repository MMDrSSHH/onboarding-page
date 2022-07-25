import React from "react";
// pages
import Home from "./pages/Home";
import OnboardingPage from "./pages/OnboardingPage";
// components
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/onboarding" replace />} />
    </Routes>
  );
};

export default App;
