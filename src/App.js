// src/App.js
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route path="/" element={<LandingPage />} />

      {/* Inscription */}
      <Route path="/signup" element={<Signup />} />

      {/* Connexion */}
      <Route path="/login" element={<Login />} />

      {/* Page principale après connexion */}
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
