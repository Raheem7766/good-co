import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeSection from "./sections/HomeSection";
import GoodWay from "./pages/goodWay";
import CaseStudies from "./pages/caseStudies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/a-goodway-group-company" element={<GoodWay />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </div>
  );
}

export default App;
