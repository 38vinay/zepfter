import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaHeartbeat,
  FaFlask,
  FaLaptopCode,
  FaPills,
  FaUserTie,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import PageCarousel from "./PageCarousel";

// Hero images
const hero1 =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80";
const hero2 =
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80";
const hero3 =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experts: 0,
    satisfaction: 0,
  });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isShort, setIsShort] = useState(false);

  // Detect device size
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsLandscape(width > height);
      setIsShort(height <= 600);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Slides
  const slides = [
    {
      image: hero1,
      title: "Pharmaceutical Solutions",
      subtitle: "Excellence Through Innovation",
      description:
        "Comprehensive medical coding services, regulatory compliance, and industry-leading training programs.",
    },
    {
      image: hero2,
      title: "Clinical Research",
      subtitle: "Advancing Medical Science",
      description:
        "Expert clinical data management, trial support services, and specialized research education.",
    },
    {
      image: hero3,
      title: "IT & Digital Transformation",
      subtitle: "Empowering Business Growth",
      description:
        "Cutting-edge IT services, custom software solutions, and advanced technology skill development.",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Counters - triggered when stats section is in view
  useEffect(() => {
    if (!isStatsInView) return;

    const targets = { projects: 1500, clients: 450, experts: 200, satisfaction: 99 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        experts: Math.floor(targets.experts * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isStatsInView]);

  const getIconSize = () => (isMobile ? 40 : isTablet ? 50 : 60);

  const services = [
    {
      id: "medical",
      icon: <FaHeartbeat size={getIconSize()} />,
      title: "Medical Affairs",
      desc: "Medical Writing, Pharmacovigilance, Regulatory Strategy, Medical Information",
      color: "#1E3679",
      link: "/services/medical-courses",
    },
    {
      id: "clinical",
      icon: <FaFlask size={getIconSize()} />,
      title: "Clinical Research",
      desc: "Clinical Data Management, Biostatistics, Clinical Trial Management, Safety Monitoring",
      color: "#00AA8A",
      link: "/services/clinical-courses",
    },
    {
      id: "it",
      icon: <FaLaptopCode size={getIconSize()} />,
      title: "Digital Transformation",
      desc: "Cloud Computing, AI/ML Solutions, Cybersecurity, Enterprise Software Development",
      color: "#1E3679",
      link: "/services/it-services",
    },
    {
      id: "pharma",
      icon: <FaPills size={getIconSize()} />,
      title: "Pharma Consulting",
      desc: "Quality Assurance, Regulatory Compliance, GMP Standards, Process Optimization",
      color: "#00AA8A",
      link: "/services/pharmaceutical-skills",
    },
    {
      id: "training",
      icon: <FaUserTie size={getIconSize()} />,
      title: "Talent Solutions",
      desc: "Strategic Recruitment, Workforce Planning, Career Development, Talent Acquisition",
      color: "#1E3679",
      link: "/services/training-placement",
    },
    {
      id: "internship",
      icon: <FaBriefcase size={getIconSize()} />,
      title: "Corporate Training",
      desc: "Professional Development, Skills Enhancement, Industry Certifications, Custom Training Programs",
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
          // When in landscape or very short viewports, avoid forcing a tall viewport height
          height: isMobile || isLandscape || isShort ? "auto" : "107vh",
          padding: isMobile || isLandscape || isShort ? "80px 20px" : "0",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: isMobile || isLandscape ? "scroll" : "fixed",
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
            Zepfter — Your Trusted Partner in IT, Pharma & Workforce Solutions
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
            Delivering technology excellence, pharmaceutical support, and smart workforce solutions for modern businesses.
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
            Zepfter provides end-to-end services across IT development, pharmaceutical operations, and workforce management. We help businesses streamline processes, enhance healthcare accuracy, and hire the right talent — all through reliable, industry-ready service delivery.
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
              <b style={{ color: "#00AA8A" }}>
                Pharmaceutical & Medical Coding Services:
              </b>
              &nbsp;Specialized pharma domain operations to support healthcare providers:
               End-to-end medical coding services,
              Pharma data management & compliance support,
              Documentation accuracy & audit assistance,
              Streamlined workflows for hospitals & healthcare companies.
            </p>

            <p>
              <b style={{ color: "#00AA8A" }}>
                Technology & IT Services:
              </b>
              &nbsp;Custom IT solutions, software development & digital
              transformation that drive business growth.
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
              className="btn fw-semibold position-relative overflow-hidden"
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                background: "linear-gradient(135deg, #00AA8A, #1E3679)",

                borderRadius: "50px",
                border: "none",
                padding: isMobile ? "12px 24px" : "14px 40px",
                color: "#fff",
                zIndex: 1,
              }}
            >
              {/* Sliding Gradient Fill Layer */}
              <motion.div
                variants={{
                  rest: { x: "-100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)",
                  zIndex: -1,
                }}
              />

              {/* Button Text */}
              <motion.span
                variants={{
                  rest: { color: "#fff" },
                  hover: { color: "#fff" },
                }}
                transition={{ duration: 0.3 }}
                className="fw-semibold"
                style={{ position: "relative", zIndex: 2 }}
              >
                Discover Our Services
              </motion.span>

              {/* Arrow Reveal */}
              <motion.span
                variants={{
                  rest: { x: 0, opacity: 0.7 },
                  hover: { x: 8, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "relative",
                  marginLeft: "8px",
                  zIndex: 2,
                  display: "inline-block",
                }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/Contact"
              className="btn fw-semibold position-relative overflow-hidden"
              initial="rest"
              whileHover="hover"
              animate="rest"
              style={{
                background: "linear-gradient(135deg, #00AA8A, #1E3679)",
                borderRadius: "50px",
                border: "none ",
                padding: isMobile ? "12px 24px" : "14px 40px",
                color: "#fff",
                zIndex: 1,
              }}
            >
              {/* Sliding Gradient Fill Layer */}
              <motion.div
                variants={{
                  rest: { x: "-100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)",

                  zIndex: -1,
                }}
              />

              {/* Button Text */}
              <motion.span
                variants={{
                  rest: { color: "#fff" },
                  hover: { color: "#fff" },
                }}
                transition={{ duration: 0.3 }}
                className="fw-semibold"
                style={{ position: "relative", zIndex: 2 }}
              >
                Contact Us
              </motion.span>

              {/* Arrow Reveal */}
              <motion.span
                variants={{
                  rest: { x: 0, opacity: 0.7 },
                  hover: { x: 8, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "relative",
                  marginLeft: "8px",
                  zIndex: 2,
                  display: "inline-block",
                }}
              >
                →
              </motion.span>
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
            marginTop: isMobile ? "-3" : "-68px",
            // for landscape / short viewports use auto height so content doesn't get clipped
            height: isMobile || isLandscape || isShort ? "auto" : "100vh",
            minHeight: isMobile || isLandscape || isShort ? "600px" : "100vh",
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
                        // reduce large vertical padding on landscape / short viewports
                        padding:
                          isMobile || isLandscape || isShort
                            ? "80px 15px 40px"
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
                  setCurrentSlide(
                    (p) => (p - 1 + slides.length) % slides.length
                  )
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

      {/* Delivering Solutions Section - Enhanced UI */}
      <section
        className="section"
        style={{
          background: "#f8f9fa",
          padding: isMobile ? "60px 0" : isTablet ? "80px 0" : "110px 0",
        }}
      >
        <div className="container px-3 px-md-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <motion.h2
              className="fw-bold mb-3 mb-md-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: isMobile
                  ? "2rem"
                  : isTablet
                    ? "2.8rem"
                    : "clamp(2.5rem, 4.5vw, 3.8rem)",
                letterSpacing: isMobile ? "2px" : "3px",
                color: "#1E3679",
                textTransform: "uppercase",
                position: "relative",
                paddingBottom: "15px",
              }}
            >
              DELIVERING SOLUTIONS
              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: isMobile ? "80px" : "120px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  height: "4px",
                  background: "linear-gradient(90deg, #00AA8A, #1E3679)",
                  margin: "15px auto 0",
                  borderRadius: "2px",
                }}
              />
            </motion.h2>
            <motion.p
              className="mx-auto px-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                maxWidth: "900px",
                fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.15rem",
                color: "#666",
                lineHeight: "1.9",
                fontWeight: "400",
              }}
            >
              We at ZEPFTER use business-driven, creative frameworks and
              solutions to enable clients to reach new levels of performance and
              career growth at cost-effective levels.
            </motion.p>
          </motion.div>

          <div className="row g-3 g-md-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="col-12 col-md-6 col-lg-4"
              >
                <motion.a
                  href={service.link}
                  className="text-decoration-none d-block h-100"
                  onMouseEnter={() => !isMobile && setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={!isMobile ? { y: -12 } : {}}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <motion.div
                    className="p-4 p-md-5 h-100 position-relative overflow-hidden"
                    style={{
                      background: hoveredCard === idx ? service.color : "#fff",
                      border: hoveredCard === idx
                        ? `2px solid ${service.color}`
                        : "2px solid rgba(0,0,0,0.06)",
                      borderRadius: "16px",
                      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      minHeight: isMobile
                        ? "300px"
                        : isTablet
                          ? "340px"
                          : "370px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: hoveredCard === idx
                        ? `0 20px 50px -12px ${service.color}50, 0 8px 16px -8px ${service.color}30`
                        : "0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Animated Background Gradient - Desktop Only */}
                    {!isMobile && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          hoveredCard === idx
                            ? {
                              scale: 2.2,
                              opacity: 0.12,
                              rotate: 180,
                            }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "320px",
                          height: "320px",
                          background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)`,
                          borderRadius: "50%",
                          filter: "blur(50px)",
                          pointerEvents: "none",
                        }}
                      />
                    )}

                    {/* Subtle Corner Accent */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === idx ? 0.15 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100px",
                        height: "100px",
                        background: `linear-gradient(135deg, transparent 0%, ${service.color} 100%)`,
                        borderTopRightRadius: "14px",
                        pointerEvents: "none",
                      }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <motion.div
                        animate={
                          hoveredCard === idx && !isMobile
                            ? {
                              scale: [1, 1.15, 1.08],
                              rotate: [0, -8, 8, 0],
                            }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut"
                        }}
                        className="mb-4"
                        style={{
                          color: hoveredCard === idx ? "white" : service.color,
                          filter: hoveredCard === idx
                            ? "drop-shadow(0 4px 12px rgba(255,255,255,0.3))"
                            : `drop-shadow(0 2px 8px ${service.color}30)`,
                          transition: "all 0.35s ease",
                        }}
                      >
                        {service.icon}
                      </motion.div>

                      <h4
                        className="fw-bold mb-3"
                        style={{
                          color: hoveredCard === idx ? "white" : "#1a1a1a",
                          fontSize: isMobile
                            ? "1.2rem"
                            : isTablet
                              ? "1.3rem"
                              : "1.4rem",
                          letterSpacing: "1.2px",
                          lineHeight: "1.3",
                          transition: "color 0.35s ease",
                        }}
                      >
                        {service.title.toUpperCase()}
                      </h4>

                      <p
                        style={{
                          color:
                            hoveredCard === idx
                              ? "rgba(255,255,255,0.95)"
                              : "#555",
                          fontSize: isMobile ? "0.9rem" : "0.98rem",
                          lineHeight: "1.75",
                          marginBottom: isMobile ? "1.2rem" : "0",
                          transition: "color 0.35s ease",
                          fontWeight: "400",
                        }}
                      >
                        {service.desc}
                      </p>
                    </div>

                    {/* Enhanced Learn More with Better Animation */}
                    <motion.div
                      className="d-flex align-items-center gap-2 mt-4"
                      style={{
                        color: hoveredCard === idx ? "white" : service.color,
                        fontSize: isMobile ? "0.9rem" : "0.95rem",
                        fontWeight: "700",
                        position: "relative",
                        zIndex: 1,
                        letterSpacing: "1px",
                        transition: "color 0.35s ease",
                      }}
                    >
                      <span>EXPLORE</span>
                      <motion.div
                        animate={
                          hoveredCard === idx && !isMobile
                            ? { x: [0, 6, 0] }
                            : { x: 0 }
                        }
                        transition={{
                          duration: 0.8,
                          repeat: hoveredCard === idx ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      >
                        <FaArrowRight />
                      </motion.div>
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
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)",
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
              Empowering talent across medical, clinical, pharmaceutical, IT and
              training industries with future-ready professional skills.
            </p>
          </div>

          {/* Industry Boxes */}
          <div
            className="d-flex justify-content-center flex-wrap gap-4"
            style={{ maxWidth: "1000px", margin: "0 auto" }}
          >
            {[
              {
                title: "Medical",
                icon: <FaHeartbeat size={50} />,
                color: "linear-gradient(135deg, #2b4ba3ff 10%, #00AA8A 100%)",
              },
              {
                title: "Clinical",
                icon: <FaFlask size={50} />,
                color: "linear-gradient(135deg, #2548abff 100%, #00AA8A 30%)",
              },
              {
                title: "Pharma",
                icon: <FaPills size={50} />,
                color: "linear-gradient(135deg, #2b4ba3ff 10%, #00AA8A 100%)",
              },
              {
                title: "IT",
                icon: <FaLaptopCode size={50} />,
                color: "linear-gradient(135deg, #2548abff 100%, #00AA8A 30%)",
              },
              {
                title: "Training & Placement",
                icon: <FaUserTie size={50} />,
                color: "linear-gradient(135deg, #2b4ba3ff 10%, #00AA8A 100%)",
              },
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

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="section"
        style={{
          background: '#f5f5f5',
          padding: isMobile ? '40px 20px' : isTablet ? '60px 20px' : 'clamp(40px, 8vw, 80px) 20px'
        }}
      >
        <div className="container">
          <div className="row g-3 g-md-4">
            {[
              { number: stats.projects, suffix: '+', label: 'Projects Delivered', color: '#1E3679' },
              { number: stats.clients, suffix: '+', label: 'Global Clients', color: '#00AA8A' },
              { number: stats.experts, suffix: '+', label: 'Industry Experts', color: '#FBD21A' },
              { number: stats.satisfaction, suffix: '%', label: 'Client Satisfaction', color: '#1E3679' }
            ].map((stat, idx) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-3 p-md-4 rounded-4"
                  style={{
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="fw-bold mb-2" style={{ color: stat.color, fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="fw-semibold text-uppercase" style={{ color: '#666', letterSpacing: '1px', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Before CTA */}
      <PageCarousel
        slides={[
          {
            type: "testimonial",
            title: "What Our Clients Say",
            subtitle: "Success stories from our partners",
            name: "Dr. Rajesh Kumar",
            role: "VP Quality Assurance, PharmaCorp India",
            image: "https://i.pravatar.cc/150?img=12",
            text: "ZEPFTER transformed our quality management system. Their expertise in GMP compliance and validation helped us achieve FDA approval ahead of schedule. Outstanding professional service!",
            color: "#1E3679",
          },
          {
            type: "testimonial",
            title: "What Our Clients Say",
            subtitle: "Success stories from our partners",
            name: "Sarah Mitchell",
            role: "CTO, BioTech Solutions USA",
            image: "https://i.pravatar.cc/150?img=45",
            text: "The cloud migration and IT infrastructure services provided by ZEPFTER were exceptional. They delivered on time, within budget, and exceeded our expectations for security and scalability.",
            color: "#1E3679",
          },
          {
            type: "testimonial",
            title: "What Our Clients Say",
            subtitle: "Success stories from our partners",
            name: "Michael Chen",
            role: "Director of Operations, MedLife Pharma",
            image: "https://i.pravatar.cc/150?img=33",
            text: "ZEPFTER's regulatory affairs team guided us through complex EMA submissions. Their deep knowledge and attention to detail were instrumental in our successful product launch in Europe.",
            color: "#1E3679",
          },
          {
            type: "testimonial",
            title: "What Our Clients Say",
            subtitle: "Success stories from our partners",
            name: "Priya Deshmukh",
            role: "Head of IT, Global Biotech Ltd",
            image: "https://i.pravatar.cc/150?img=22",
            text: "The custom software development and AI automation solutions from ZEPFTER revolutionized our laboratory operations. Efficiency increased by 40% within the first quarter!",
            color: "#1E3679",
          },
          {
            type: "testimonial",
            title: "What Our Clients Say",
            subtitle: "Success stories from our partners",
            name: "James Anderson",
            role: "Quality Director, European Pharma Group",
            image: "https://i.pravatar.cc/150?img=28",
            text: "ZEPFTER's validation services and LIMS implementation were flawless. Their team's professionalism and technical expertise made the entire process smooth and compliant with all regulations.",
            color: "#1E3679",
          },
          {
            type: "testimonial",
            title: "What Our Clients Say",
            subtitle: "Success stories from our partners",
            name: "Anita Sharma",
            role: "CEO, HealthTech Innovations",
            image: "https://i.pravatar.cc/150?img=50",
            text: "Outstanding cybersecurity and compliance consulting! ZEPFTER helped us achieve ISO 27001 certification and implement robust data protection measures. Highly recommended!",
            color: "#1E3679",
          },
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
          background: "linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "50px 0" : isTablet ? "70px 0" : "100px 0",
        }}
      >
        {/* Animated Background Shapes - Desktop Only */}
        {!isMobile &&
          !isTablet &&
          [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(60px)",
              }}
            />
          ))}

        <div
          className="container px-3 px-md-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="fw-bold mb-3 mb-md-4"
            style={{
              fontSize: isMobile
                ? "1.5rem"
                : isTablet
                  ? "2rem"
                  : "clamp(2rem, 4vw, 3rem)",
              letterSpacing: isMobile ? "1px" : "2px",
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
            style={{
              fontSize: isMobile ? "0.95rem" : isTablet ? "1rem" : "1.25rem",
            }}
          >
            Contact us today to enroll in our training programs.
          </motion.p>

          <motion.a
            href="/services"
            className="btn fw-semibold position-relative overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)",
              borderRadius: "50px",
              border: "none",
              padding: isMobile ? "12px 24px" : "14px 40px",
              color: "#fff",
              zIndex: 1,
            }}
          >
            {/* Sliding Gradient Fill Layer */}
            <motion.div
              variants={{
                rest: { x: "-100%" },
                hover: { x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #00AA8A, #1E3679)",
                zIndex: -1,
              }}
            />

            {/* Button Text */}
            <motion.span
              variants={{
                rest: { color: "#fff" },
                hover: { color: "#fff" },
              }}
              transition={{ duration: 0.3 }}
              className="fw-semibold"
              style={{ position: "relative", zIndex: 2 }}
            >
              Contact Us
            </motion.span>

            {/* Arrow Reveal */}
            <motion.span
              variants={{
                rest: { x: 0, opacity: 0.7 },
                hover: { x: 8, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginLeft: "8px",
                zIndex: 2,
                display: "inline-block",
              }}
            >
              →
            </motion.span>
          </motion.a>

        </div>
      </motion.section>
    </>
  );
};

export default Home;
