import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FaHeartbeat, FaFlask, FaLaptopCode, FaPills, FaUserTie, FaBriefcase, FaArrowRight } from "react-icons/fa";
import PageCarousel from "./PageCarousel";

// Hero images
const hero1 = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80";
const hero2 = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80";
const hero3 = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [stats, setStats] = useState({ students: 0, courses: 0, placements: 0, professionals: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect device size
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Slides
  const slides = [
    {
      image: hero1,
      title: "Medical Courses",
      subtitle: "Excellence Through Quality Training",
      description: "Transform your career with industry-recognized medical coding, billing, and medical writing programs",
    },
    {
      image: hero2,
      title: "Clinical Courses",
      subtitle: "Excellence Through Research Innovation",
      description: "Master clinical research with hands-on training in data management and clinical trials",
    },
    {
      image: hero3,
      title: "IT & Technology",
      subtitle: "Excellence Through Digital Transformation",
      description: "Build cutting-edge tech skills in Data Science, AI/ML, and Web Development",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Counters
  useEffect(() => {
    const targets = { students: 5000, courses: 50, placements: 350, professionals: 600 };
    let step = 0;
    const steps = 60;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        students: Math.floor(targets.students * progress),
        courses: Math.floor(targets.courses * progress),
        placements: Math.floor(targets.placements * progress),
        professionals: Math.floor(targets.professionals * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, 33);
  }, []);

  const getIconSize = () => (isMobile ? 40 : isTablet ? 50 : 60);

  const services = [
    {
      id: "medical",
      icon: <FaHeartbeat size={getIconSize()} />,
      title: "Medical Courses",
      desc: "Master medical coding, billing, medical affairs, and medical writing with comprehensive training programs.",
      color: "#1E3679",
      link: "/services/medical-courses",
    },
    {
      id: "clinical",
      icon: <FaFlask size={getIconSize()} />,
      title: "Clinical Courses",
      desc: "Advanced training in clinical research, data management, clinical trials, and BA/BE studies.",
      color: "#00AA8A",
      link: "/services/clinical-courses",
    },
    {
      id: "it",
      icon: <FaLaptopCode size={getIconSize()} />,
      title: "IT Services",
      desc: "Comprehensive IT training in programming, data science, cybersecurity, and cloud computing.",
      color: "#1E3679",
      link: "/services/it-services",
    },
    {
      id: "pharma",
      icon: <FaPills size={getIconSize()} />,
      title: "Pharmaceutical Skills",
      desc: "Quality assurance, regulatory affairs, and pharmaceutical operations training.",
      color: "#00AA8A",
      link: "/services/pharmaceutical-skills",
    },
    {
      id: "training",
      icon: <FaUserTie size={getIconSize()} />,
      title: "Training & Placement",
      desc: "100% placement assistance with interview preparation and career counseling.",
      color: "#1E3679",
      link: "/services/training-placement",
    },
    {
      id: "internship",
      icon: <FaBriefcase size={getIconSize()} />,
      title: "Internship Programs",
      desc: "Real-world experience through internships in medical, clinical, IT, and pharmaceutical domains.",
      color: "#00AA8A",
      link: "/services/internship-programs",
    },
  ];

  return (
    <>
      {/* -------------------------------------------------- */}
      {/* 🟦 ZEPFTER INTRO SECTION (TOP) */}
      {/* -------------------------------------------------- */}
     {/* ================== STUNNING HERO SECTION ================== */}
<section
  className="position-relative d-flex align-items-center justify-content-center text-center"
  style={{
    marginTop: isMobile ? "60px" : "100px",
    height: isMobile ? "auto" : "107vh",
    padding: isMobile ? "80px 20px" : "0",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: isMobile ? "scroll" : "fixed",
    position: "relative",
  }}
>

  {/* Dark Gradient Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(135deg, rgba(0,0,0,0.65), rgba(30,54,121,0.75))",
      zIndex: 1,
    }}
  />

  {/* Floating Particles (Desktop Only) */}
  {!isMobile &&
    !isTablet &&
    [...Array(18)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          opacity: 0,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          y: [0, -1200],
        }}
        transition={{
          duration: Math.random() * 8 + 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "4px",
          height: "4px",
          background: "#00AA8A",
          borderRadius: "50%",
          boxShadow: "0 0 12px #00AA8A",
          zIndex: 1,
        }}
      />
    ))}

  {/* HERO CONTENT */}
  <div
    className="container position-relative"
    style={{ zIndex: 3, maxWidth: "900px" }}
  >
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fw-bold mb-3"
      style={{
        color: "#fff",
        fontSize: isMobile
          ? "2rem"
          : isTablet
          ? "2.6rem"
          : "clamp(2.8rem, 5vw, 4rem)",
        letterSpacing: "1px",
        lineHeight: "1.2",
      }}
    >
      Zepfter — Bridging <br />
      Innovation, Healthcare & Careers
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="fw-semibold mb-4"
      style={{
        color: "#00AA8A",
        fontSize: isMobile ? "1rem" : isTablet ? "1.15rem" : "1.3rem",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      Empowering Businesses & Professionals with Technology, Pharma Expertise &
      Job Placement.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mb-4"
      style={{
        color: "rgba(255,255,255,0.92)",
        fontSize: isMobile ? "1rem" : "1.1rem",
        lineHeight: "1.7",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      Zepfter is a multi-service company combining deep IT knowledge,
      pharmaceutical domain skills, and career placement support — so your
      organization runs smarter, healthcare operations are optimized, and
      your talent finds the right opportunities.
    </motion.p>

    {/* KEY PILLARS */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="text-start mx-auto"
      style={{ maxWidth: "850px", color: "white" }}
    >
      <p>
        <b style={{ color: "#00AA8A" }}>Technology & Information Services:</b>
        &nbsp;Custom IT solutions, software development & digital
        transformation that drive business growth.
      </p>

      <p>
        <b style={{ color: "#00AA8A" }}>Pharmaceutical & Medical Coding:</b>
        &nbsp;Accurate medical coding, compliance support & pharma expertise
        for seamless healthcare operations.
      </p>

      <p>
        <b style={{ color: "#00AA8A" }}>Placement & Career Support:</b>
        &nbsp;Placement assistance & recruitment support connecting skilled
        professionals to the right careers.
      </p>
    </motion.div>

    {/* CTA BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="d-flex justify-content-center gap-3 mt-4 flex-wrap"
    >
      <motion.a
        href="/services"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="btn fw-semibold"
        style={{
          background: "#00AA8A",
          color: "#fff",
          borderRadius: "0",
          padding: isMobile ? "10px 20px" : "14px 40px",
          fontSize: isMobile ? "0.9rem" : "1rem",
        }}
      >
        Discover Our Services
      </motion.a>

      <motion.a
        href="/contact"
        whileHover={{
          background: "#fff",
          color: "#1E3679",
          scale: 1.06,
        }}
        whileTap={{ scale: 0.95 }}
        className="btn fw-semibold"
        style={{
          background: "transparent",
          border: "2px solid #fff",
          color: "#fff",
          borderRadius: "0",
          padding: isMobile ? "10px 20px" : "14px 40px",
          fontSize: isMobile ? "0.9rem" : "1rem",
        }}
      >
        Get Started Today
      </motion.a>
    </motion.div>
  </div>
</section>

      {/* -------------------------------------------------- */}
      {/* 🎬 HERO SLIDER SECTION */}
      {/* -------------------------------------------------- */}
      <section className="hero-wrapper">
        <div
          className="position-relative"
          style={{
            marginTop:isMobile? '-3' : "-68px",
            height: isMobile ? "auto" : "100vh",
            minHeight: isMobile ? "600px" : "100vh",
          }}
        >
          <AnimatePresence mode="wait">
            {slides.map(
              (slide, index) =>
                index === currentSlide && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="hero-slide position-absolute w-100 h-100"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundAttachment: isMobile ? "scroll" : "fixed",
                      zIndex: 1,
                    }}
                  >
                    {/* Dark Overlay */}
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(30,54,121,0.7))",
                        zIndex: 1,
                      }}
                    />

                    {/* Particle effects */}
                    {!isMobile &&
                      !isTablet &&
                      [...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{
                            opacity: 0,
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                          }}
                          animate={{
                            opacity: [0.2, 0.5, 0.2],
                            y: [0, -1000],
                            x: Math.random() * window.innerWidth,
                          }}
                          transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            position: "absolute",
                            width: "3px",
                            height: "3px",
                            background: "#00AA8A",
                            borderRadius: "50%",
                            boxShadow: "0 0 10px #00AA8A",
                            zIndex: 1,
                          }}
                        />
                      ))}

                    {/* Slider Content */}
                    <div
                      className="position-relative h-100 d-flex align-items-center justify-content-center text-center"
                      style={{
                        zIndex: 2,
                        padding: isMobile
                          ? "100px 15px 60px"
                          : isTablet
                          ? "120px 30px 80px"
                          : "0 20px",
                      }}
                    >
                      <div className="container" style={{ maxWidth: "900px" }}>
                        <p
                          className="text-uppercase mb-3 fw-semibold"
                          style={{
                            color: "#00AA8A",
                            letterSpacing: isMobile ? "1px" : "3px",
                            fontSize: isMobile ? "0.7rem" : "1rem",
                          }}
                        >
                          {slide.subtitle}
                        </p>

                        <h1
                          className="fw-bold mb-4"
                          style={{
                            color: "white",
                            fontSize: isMobile
                              ? "1.75rem"
                              : "clamp(2.5rem, 6vw, 5rem)",
                          }}
                        >
                          {slide.title.toUpperCase()}
                        </h1>

                        <p
                          className="mb-5 mx-auto px-3 px-md-0"
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "700px",
                            fontSize: isMobile ? "0.9rem" : "1.25rem",
                          }}
                        >
                          {slide.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                          <motion.a
                            href="/services"
                            whileHover={{ scale: 1.05 }}
                            className="btn fw-semibold"
                            style={{
                              background: "#00AA8A",
                              color: "#fff",
                              padding: "14px 40px",
                              borderRadius: 0,
                            }}
                          >
                            Explore Courses →
                          </motion.a>

                          <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            className="btn fw-semibold"
                            style={{
                              background: "transparent",
                              border: "2px solid #fff",
                              color: "#fff",
                              padding: "14px 40px",
                              borderRadius: 0,
                            }}
                          >
                            Contact Us →
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Slider Arrows */}
          {!isMobile && !isTablet && (
            <>
              <motion.button
                className="position-absolute top-50 start-0 translate-middle-y bg-transparent border-0"
                style={{ zIndex: 10, marginLeft: "20px" }}
                onClick={() =>
                  setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)
                }
                whileHover={{ scale: 1.2, x: -8 }}
              >
                <span style={{ color: "#fff", fontSize: "2rem" }}>←</span>
              </motion.button>

              <motion.button
                className="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0"
                style={{ zIndex: 10, marginRight: "20px" }}
                onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
                whileHover={{ scale: 1.2, x: 8 }}
              >
                <span style={{ color: "#fff", fontSize: "2rem" }}>→</span>
              </motion.button>
            </>
          )}
        </div>
      </section>



      {/* Delivering Solutions Section - Responsive */}
      <section className="section" style={{ background: '#f8f9fa', padding: isMobile ? '50px 0' : isTablet ? '70px 0' : '100px 0' }}>
        <div className="container px-3 px-md-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 mb-md-5"
          >
            <h2 
              className="fw-bold mb-3 mb-md-4"
              style={{ 
                fontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: isMobile ? '1px' : '2px',
                color: '#1E3679'
              }}
            >
              DELIVERING SOLUTIONS
            </h2>
            <p 
              className="mx-auto px-3"
              style={{ 
                maxWidth: '900px',
                fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.1rem',
                color: '#666',
                lineHeight: '1.8'
              }}
            >
              We at ZEPFTER use business-driven, creative frameworks and solutions to enable clients 
              to reach new levels of performance and career growth at cost-effective levels.
            </p>
          </motion.div>

          <div className="row g-0">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="col-12 col-md-6 col-lg-4"
              >
                <motion.a
                  href={service.link}
                  className="text-decoration-none d-block"
                  onMouseEnter={() => !isMobile && setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}}
                >
                  <motion.div 
                    className="p-4 p-md-5 h-100 position-relative overflow-hidden"
                    style={{
                      background: hoveredCard === idx ? service.color : '#fff',
                      borderRight: !isMobile ? '1px solid rgba(0,0,0,0.1)' : 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.1)',
                      transition: 'all 0.4s ease',
                      minHeight: isMobile ? '280px' : isTablet ? '320px' : '350px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Animated Background - Desktop Only */}
                    {!isMobile && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={hoveredCard === idx ? { 
                          scale: 2, 
                          opacity: 0.1,
                          rotate: 180 
                        } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '300px',
                          height: '300px',
                          background: service.color,
                          borderRadius: '50%',
                          filter: 'blur(60px)',
                          pointerEvents: 'none'
                        }}
                      />
                    )}

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <motion.div 
                        animate={hoveredCard === idx && !isMobile ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-3 mb-md-4"
                        style={{
                          color: hoveredCard === idx ? 'white' : service.color,
                          transition: 'all 0.4s ease'
                        }}
                      >
                        {service.icon}
                      </motion.div>

                      <h4 
                        className="fw-bold mb-2 mb-md-3"
                        style={{
                          color: hoveredCard === idx ? 'white' : '#000',
                          fontSize: isMobile ? '1.1rem' : isTablet ? '1.2rem' : '1.3rem',
                          letterSpacing: '1px'
                        }}
                      >
                        {service.title.toUpperCase()}
                      </h4>

                      <p 
                        style={{
                          color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : '#666',
                          fontSize: isMobile ? '0.85rem' : '0.95rem',
                          lineHeight: '1.7',
                          marginBottom: isMobile ? '1rem' : '0'
                        }}
                      >
                        {service.desc}
                      </p>
                    </div>
                    
                    <motion.div 
                      animate={hoveredCard === idx && !isMobile ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="d-flex align-items-center gap-2 mt-3"
                      style={{
                        color: hoveredCard === idx ? 'white' : service.color,
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        fontWeight: '600',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <span>LEARN MORE</span>
                      <FaArrowRight />
                    </motion.div>
                  </motion.div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ===================== INDUSTRIES WE SERVE (PLACE BEFORE TESTIMONIALS) ===================== */}
{/* ===================== INDUSTRIES WE SERVE (ANIMATED HOVER) ===================== */}
<section 
  className="section"
  style={{
    background: "linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)",
    padding: isMobile ? "60px 0" : "100px 0",
    color: "white",
  }}
>
  <div className="container px-3 px-md-4">

    {/* Section Title */}
    <div className="text-center mb-5">
      <h2
        className="fw-bold"
        style={{
          fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "2px",
          color: "#fff",
        }}
      >
        INDUSTRIES WE SERVE
      </h2>
      <p
        className="mt-3"
        style={{
          color: "rgba(255,255,255,0.8)",
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: isMobile ? "0.9rem" : "1.05rem",
          lineHeight: "1.7",
        }}
      >
        Empowering talent across medical, clinical, pharmaceutical, IT and training industries 
        with future-ready professional skills.
      </p>
    </div>

    {/* Industry Boxes */}
    <div
      className="d-flex justify-content-center flex-wrap gap-4"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      {[
        { title: "Medical", icon: <FaHeartbeat size={50} />, color: "linear-gradient(135deg, #2b4ba3ff 10%, #00AA8A 100%)" },
        { title: "Clinical", icon: <FaFlask size={50} />, color: "linear-gradient(135deg, #2548abff 100%, #00AA8A 30%)" },
        { title: "Pharma", icon: <FaPills size={50} />, color: "linear-gradient(135deg, #2b4ba3ff 10%, #00AA8A 100%)" },
        { title: "IT", icon: <FaLaptopCode size={50} />, color: "linear-gradient(135deg, #2548abff 100%, #00AA8A 30%)" },
        { title: "Training & Placement", icon: <FaUserTie size={50} />, color: "linear-gradient(135deg, #2b4ba3ff 10%, #00AA8A 100%)" },
      ].map((industry, idx) => (
        <motion.div
          key={idx}
          whileHover={{
            scale: 1.08,
            boxShadow: `0 15px 40px ${industry.color}77`,
            y: -10,
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: isMobile ? "150px" : "180px",
            height: isMobile ? "150px" : "180px",
            background: industry.color,
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: industry.color === "#FBD21A" ? "#000" : "#fff",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Floating Icon Animation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {industry.icon}
          </motion.div>

          <motion.p
            className="fw-semibold text-uppercase mt-3"
            style={{ fontSize: "0.85rem", letterSpacing: "1px" }}
            whileHover={{ scale: 1.1 }}
          >
            {industry.title}
          </motion.p>

          {/* Glow Effect */}
          <motion.div
            style={{
              position: "absolute",
              bottom: -30,
              right: -30,
              width: "90px",
              height: "90px",
              background: "#fff",
              borderRadius: "50%",
              opacity: 0.1,
              filter: "blur(20px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>


      
      

      {/* Stats Section - Responsive */}
      <section 
        className="section" 
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)', 
          color: 'white', 
          paddingTop: 0,
          paddingBottom: isMobile ? '50px' : isTablet ? '70px' : '100px'
        }}
      >
        <div className="container px-3 px-md-4">
          <div className="row text-center g-3 g-md-4">
            {[
              { label: 'Students', value: stats.students, suffix: '+' },
              { label: 'Courses', value: stats.courses, suffix: '+' },
              { label: 'Placements', value: stats.placements, suffix: '+' },
              { label: 'Professionals', value: stats.professionals, suffix: '+' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  bounce: 0.5
                }}
                whileHover={!isMobile ? { scale: 1.1 } : {}}
                className="col-6 col-md-3"
              >
                <p 
                  className="text-uppercase mb-2 fw-semibold"
                  style={{ 
                    color: '#00AA8A',
                    fontSize: isMobile ? '0.7rem' : isTablet ? '0.75rem' : '0.85rem',
                    letterSpacing: isMobile ? '1px' : '2px'
                  }}
                >
                  {stat.label}
                </p>
                <motion.h2 
                  className="fw-bold mb-0"
                  style={{ 
                    fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: isMobile ? '1px' : '2px'
                  }}
                >
                  {stat.value}{stat.suffix}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Before CTA */}
      <PageCarousel 
        slides={[
          {
            type: 'testimonial',
            title: 'What Our Students Say',
            subtitle: 'Success stories from our alumni',
            name: 'Amit Sharma',
            role: 'Medical Coding Graduate',
            image: 'https://i.pravatar.cc/150?img=12',
            text: 'ZEPFTER has changed my career! The trainers are extremely skilled, the course content is industry-focused, and the placement support is amazing.',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Students Say',
            subtitle: 'Success stories from our alumni',
            name: 'Priya Nair',
            role: 'Clinical Research Student',
            image: 'https://i.pravatar.cc/150?img=45',
            text: 'The Clinical Research program helped me understand real-world applications. Amazing training and extremely helpful faculty!',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Students Say',
            subtitle: 'Success stories from our alumni',
            name: 'Rahul Verma',
            role: 'IT & Technology Student',
            image: 'https://i.pravatar.cc/150?img=33',
            text: 'I joined the Data Science program and got placed quickly. Highly practical training and hands-on experience!',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Students Say',
            subtitle: 'Success stories from our alumni',
            name: 'Sneha Gupta',
            role: 'Pharmaceutical QA Graduate',
            image: 'https://i.pravatar.cc/150?img=22',
            text: 'The pharmaceutical quality assurance course gave me the skills to land a job at a top pharmaceutical company. Excellent mentorship!',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Students Say',
            subtitle: 'Success stories from our alumni',
            name: 'Arjun Singh',
            role: 'IT Professional',
            image: 'https://i.pravatar.cc/150?img=28',
            text: 'The comprehensive IT services training helped me transition into cloud computing. The instructors were incredibly supportive throughout.',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Students Say',
            subtitle: 'Success stories from our alumni',
            name: 'Divya Patel',
            role: 'Medical Affairs Associate',
            image: 'https://i.pravatar.cc/150?img=50',
            text: 'Outstanding medical affairs training! The real-world case studies and industry connections made all the difference in my job search.',
            color: '#1E3679'
          }
        ]}
        autoPlay={true}
        autoPlayDelay={5000}
      />

      {/* CTA Section - Responsive */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section text-center"
        style={{
          background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          padding: isMobile ? '50px 0' : isTablet ? '70px 0' : '100px 0'
        }}
      >
        {/* Animated Background Shapes - Desktop Only */}
        {!isMobile && !isTablet && [...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)'
            }}
          />
        ))}

        <div className="container px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="fw-bold mb-3 mb-md-4"
            style={{ 
              fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: isMobile ? '1px' : '2px'
            }}
          >
            READY TO START YOUR CAREER?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 mb-md-5"
            style={{ fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.25rem' }}
          >
            Contact us today to enroll in our training programs.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={!isMobile ? { 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(255,255,255,0.3)'
            } : {}}
            whileTap={{ scale: 0.95 }}
            className="btn fw-semibold"
            style={{
              background: '#00AA8A',
              color: '#fff',
              border: 'none',
              borderRadius: '0',
              padding: isMobile ? '12px 30px' : isTablet ? '14px 40px' : '16px 50px',
              fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.1rem'
            }}
          >
            CONTACT US
          </motion.a>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
