import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AOS init
import { initAOS } from "./aos-init";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ZepfterChatbot from "./components/Zepfterchatbot"; // <-- ADD THIS

// Pages
import Home from "./pages/Homes";
import About from "./pages/About";
import Services from "./pages/Solutions";
import Contact from "./pages/Contact";

// Service Category Pages
import MedicalCourses from "./pages/MedicalAffairs";
import ClinicalCourses from "./pages/ClinicalResearch";
import ITServices from "./pages/DigitalTransformation";
import PharmaceuticalSkills from "./pages/PharmaCunsulting";
import TrainingPlacement from "./pages/TalentSolutions";
import InternshipPrograms from "./pages/TranningSolution";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// ✅ IMPORT NEW SOLUTION PAGES
import Pharma from "./pages/pharma";
import IT from "./pages/IT";


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

        {/* Service Categories */}
        <Route path="/services/medical-affairs" element={<MedicalCourses />} />
        <Route path="/services/clinical-research" element={<ClinicalCourses />} />
        <Route path="/services/digital-transformation" element={<ITServices />} />
        <Route path="/services/pharma-consulting" element={<PharmaceuticalSkills />} />
        <Route path="/services/talent-solutions" element={<TrainingPlacement />} />
        <Route path="/services/corporate-training" element={<InternshipPrograms />} />

          {/* SOLUTIONS PAGES (NEW) */}
        <Route path="/solutions/pharma" element={<Pharma />} />
        <Route path="/solutions/it" element={<IT />} />


        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />

      {/* Static Chatbot – Visible on all pages */}
      <ZepfterChatbot />
    </Router>
  );
};

export default App;