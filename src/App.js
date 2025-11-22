import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AOS init
import { initAOS } from "./aos-init";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Service Category Pages
import MedicalCourses from "./pages/MedicalCourses";
import ClinicalCourses from "./pages/ClinicalCourses";
import ITServices from "./pages/ITServices";
import PharmaceuticalSkills from "./pages/PharmaceuticalSkills";

const App = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/medical-courses" element={<MedicalCourses />} />
        <Route path="/services/clinical-courses" element={<ClinicalCourses />} />
        <Route path="/services/it-services" element={<ITServices />} />
        <Route path="/services/pharmaceutical-skills" element={<PharmaceuticalSkills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;