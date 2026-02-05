import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SehriIftari from "./pages/SehriIftari";
import Hadess from "./pages/Hadess";
import Home from "./pages/Home"; 
import RamazanDays from "./pages/RamazanDays.jsx";


import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sehri-iftari" element={<SehriIftari />} />
          <Route path="/hadess" element={<Hadess />} />
          <Route path ="/ramazan-days" element={<RamazanDays />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

