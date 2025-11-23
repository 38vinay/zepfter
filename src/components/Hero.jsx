import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHeartbeat, FaFlask, FaLaptopCode, FaPills, FaUserTie, FaBriefcase, FaArrowRight } from "react-icons/fa";

// Import hero images
const hero1 = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80";
const hero2 = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80";
const hero3 = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80";

// Import testimonial images
const user1 = "https://i.pravatar.cc/150?img=12";
const user2 = "https://i.pravatar.cc/150?img=45";
const user3 = "https://i.pravatar.cc/150?img=33";

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
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  

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
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Animated counters
  useEffect(() => {
    const targets = { students: 5000, courses: 50, placements: 350, professionals: 600 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        students: Math.floor(targets.students * progress),
        courses: Math.floor(targets.courses * progress),
        placements: Math.floor(targets.placements * progress),
        professionals: Math.floor(targets.professionals * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContent = () => {
    const vh = window.innerHeight;
    window.scrollTo({
      top: vh,
      behavior: 'smooth'
    });
  };

  // Responsive icon sizes
  const getIconSize = () => {
    if (isMobile) return 40;
    if (isTablet) return 50;
    return 60;
  };

  // Services with card-based design - Brand Colors Only
  const services = [
    {
      id: 'medical',
      icon: <FaHeartbeat size={getIconSize()} />,
      title: "Medical Courses",
      desc: "Master medical coding, billing, medical affairs, and medical writing with comprehensive training programs.",
      color: "#1E3679",
      link: "/services/medical-courses"
    },
    {
      id: 'clinical',
      icon: <FaFlask size={getIconSize()} />,
      title: "Clinical Courses",
      desc: "Advanced training in clinical research, data management, clinical trials, and BA/BE studies.",
      color: "#00AA8A",
      link: "/services/clinical-courses"
    },
    {
      id: 'it',
      icon: <FaLaptopCode size={getIconSize()} />,
      title: "IT Services",
      desc: "Comprehensive IT training in programming, data science, cybersecurity, and cloud computing.",
      color: "#1E3679",
      link: "/services/it-services"
    },
    {
      id: 'pharma',
      icon: <FaPills size={getIconSize()} />,
      title: "Pharmaceutical Skills",
      desc: "Quality assurance, regulatory affairs, and pharmaceutical operations training.",
      color: "#00AA8A",
      link: "/services/pharmaceutical-skills"
    },
    {
      id: 'training',
      icon: <FaUserTie size={getIconSize()} />,
      title: "Training & Placement",
      desc: "100% placement assistance with interview preparation and career counseling.",
      color: "#1E3679",
      link: "/services/training-placement"
    },
    {
      id: 'internship',
      icon: <FaBriefcase size={getIconSize()} />,
      title: "Internship Programs",
      desc: "Real-world experience through internships in medical, clinical, IT, and pharmaceutical domains.",
      color: "#00AA8A",
      link: "/services/internship-programs"
    }
  ];

 

  const testimonials = [
    {
      image: user1,
      name: "Amit Sharma",
      role: "Medical Coding Graduate",
      text: "ZEPFTER has changed my career! The trainers are extremely skilled, the course content is industry-focused, and the placement support is amazing."
    },
    {
      image: user2,
      name: "Priya Nair",
      role: "Clinical Research Student",
      text: "The Clinical Research program helped me understand real-world applications. Amazing training and extremely helpful faculty!"
    },
    {
      image: user3,
      name: "Rahul Verma",
      role: "IT & Technology Student",
      text: "I joined the Data Science program and got placed quickly. Highly practical training and hands-on experience!"
    }
  ];

  return (
    <>
      {/* Hero Section - Fully Responsive */}
      <section className="hero-wrapper">
        <div 
          className="position-relative" 
          style={{ 
            height: isMobile ? 'auto' : '100vh',
            minHeight: isMobile ? '600px' : '100vh'
          }}
        >
          
          {/* Slides */}
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                    zIndex: 1
                  }}
                >
                  {/* Dark Overlay with Brand Colors */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="position-absolute w-100 h-100"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.85), rgba(30,54,121,0.7))',
                      zIndex: 1
                    }}
                  />

                  {/* Animated Particles - Only on Desktop */}
                  {!isMobile && !isTablet && [...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        opacity: 0,
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight 
                      }}
                      animate={{ 
                        opacity: [0.2, 0.5, 0.2],
                        y: [0, -1000],
                        x: Math.random() * window.innerWidth
                      }}
                      transition={{ 
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        position: 'absolute',
                        width: '3px',
                        height: '3px',
                        background: '#00AA8A',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px #00AA8A',
                        zIndex: 1
                      }}
                    />
                  ))}

                  {/* Content */}
                  <div 
                    className="position-relative h-100 d-flex align-items-center justify-content-center text-center" 
                    style={{ 
                      zIndex: 2,
                      padding: isMobile ? '100px 15px 60px' : isTablet ? '120px 30px 80px' : '0 20px'
                    }}
                  >
                    <div className="container" style={{ maxWidth: '900px' }}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-uppercase mb-3 fw-semibold"
                          style={{ 
                            color: '#00AA8A',
                            letterSpacing: isMobile ? '1px' : isTablet ? '2px' : '3px',
                            fontSize: isMobile ? '0.7rem' : isTablet ? '0.8rem' : '0.9rem'
                          }}
                        >
                          {slide.subtitle}
                        </motion.p>

                        <motion.h1 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="fw-bold mb-3 mb-md-4"
                          style={{
                            color: 'white',
                            fontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : 'clamp(2.5rem, 6vw, 5rem)',
                            letterSpacing: isMobile ? '1px' : '2px',
                            lineHeight: '1.2',
                            wordBreak: 'break-word'
                          }}
                        >
                          {slide.title.toUpperCase()}
                        </motion.h1>

                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="mb-4 mb-md-5 mx-auto px-3 px-md-0"
                          style={{ 
                            color: 'rgba(255,255,255,0.9)',
                            maxWidth: '700px',
                            lineHeight: '1.6',
                            fontSize: isMobile ? '0.9rem' : isTablet ? '1rem' : '1.25rem'
                          }}
                        >
                          {slide.description}
                        </motion.p>

                        {/* STUNNING ANIMATED BUTTONS */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1 }}
                          className="d-flex gap-2 gap-md-3 justify-content-center flex-wrap px-3"
                        >
                          {/* Primary Button with Arrow Slide Effect */}
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
                            style={{ position: 'relative', overflow: 'hidden' }}
                          >
                            <motion.a
                              href="/services"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="btn fw-semibold d-flex align-items-center gap-2"
                              style={{
                                background: '#00AA8A',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '0',
                                padding: isMobile ? '10px 20px' : isTablet ? '12px 30px' : '14px 40px',
                                fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1rem',
                                whiteSpace: 'nowrap',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                const arrow = e.currentTarget.querySelector('.arrow-icon');
                                const bg = e.currentTarget.querySelector('.btn-bg-overlay');
                                if (arrow) {
                                  arrow.style.transform = 'translateX(8px)';
                                }
                                if (bg) {
                                  bg.style.transform = 'translateX(0)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                const arrow = e.currentTarget.querySelector('.arrow-icon');
                                const bg = e.currentTarget.querySelector('.btn-bg-overlay');
                                if (arrow) {
                                  arrow.style.transform = 'translateX(0)';
                                }
                                if (bg) {
                                  bg.style.transform = 'translateX(-100%)';
                                }
                              }}
                            >
                              {/* Sliding Background Overlay */}
                              <div 
                                className="btn-bg-overlay"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  background: '#1E3679',
                                  transform: 'translateX(-100%)',
                                  transition: 'transform 0.4s ease',
                                  zIndex: 0
                                }}
                              />
                              
                              <span style={{ position: 'relative', zIndex: 1 }}>EXPLORE COURSES</span>
                              <motion.span 
                                className="arrow-icon"
                                style={{ 
                                  position: 'relative', 
                                  zIndex: 1,
                                  transition: 'transform 0.3s ease',
                                  display: 'inline-block'
                                }}
                              >
                                →
                              </motion.span>
                            </motion.a>
                          </motion.div>

                          {/* Secondary Button with Border Slide Effect */}
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
                            style={{ position: 'relative', overflow: 'hidden' }}
                          >
                            <motion.a
                              href="/contact"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="btn fw-semibold d-flex align-items-center gap-2"
                              style={{ 
                                background: 'transparent',
                                color: '#fff',
                                border: '2px solid #fff',
                                borderRadius: '0', 
                                padding: isMobile ? '10px 20px' : isTablet ? '12px 30px' : '14px 40px',
                                fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1rem',
                                whiteSpace: 'nowrap',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                const arrow = e.currentTarget.querySelector('.arrow-icon-2');
                                const bg = e.currentTarget.querySelector('.btn-bg-overlay-2');
                                if (arrow) {
                                  arrow.style.transform = 'translateX(8px)';
                                }
                                if (bg) {
                                  bg.style.transform = 'translateX(0)';
                                }
                                e.currentTarget.style.color = '#1E3679';
                              }}
                              onMouseLeave={(e) => {
                                const arrow = e.currentTarget.querySelector('.arrow-icon-2');
                                const bg = e.currentTarget.querySelector('.btn-bg-overlay-2');
                                if (arrow) {
                                  arrow.style.transform = 'translateX(0)';
                                }
                                if (bg) {
                                  bg.style.transform = 'translateX(-100%)';
                                }
                                e.currentTarget.style.color = '#fff';
                              }}
                            >
                              {/* Sliding White Background */}
                              <div 
                                className="btn-bg-overlay-2"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  background: '#fff',
                                  transform: 'translateX(-100%)',
                                  transition: 'transform 0.4s ease',
                                  zIndex: 0
                                }}
                              />
                              
                              <span style={{ position: 'relative', zIndex: 1, transition: 'color 0.4s ease' }}>CONTACT US</span>
                              <motion.span 
                                className="arrow-icon-2"
                                style={{ 
                                  position: 'relative', 
                                  zIndex: 1,
                                  transition: 'transform 0.3s ease',
                                  display: 'inline-block'
                                }}
                              >
                                →
                              </motion.span>
                            </motion.a>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation Arrows - Desktop Only */}
          {!isMobile && !isTablet && (
            <>
              <motion.button 
                whileHover={{ scale: 1.2, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="position-absolute top-50 start-0 translate-middle-y ms-4 bg-transparent border-0"
                style={{ zIndex: 10 }}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <span style={{ color: 'white', fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>←</span>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.2, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="position-absolute top-50 end-0 translate-middle-y me-4 bg-transparent border-0"
                style={{ zIndex: 10 }}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <span style={{ color: 'white', fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>→</span>
              </motion.button>
            </>
          )}

          {/* Slide Indicators - Mobile & Tablet */}
          {(isMobile || isTablet) && (
            <div 
              className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2"
              style={{ zIndex: 10 }}
            >
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    background: currentSlide === idx ? '#00AA8A' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Scroll Down Indicator - Desktop Only */}
          {!isMobile && !isTablet && (
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
              style={{ zIndex: 10, cursor: 'pointer' }}
              onClick={scrollToContent}
            >
              <div className="text-white text-center">
                <FaChevronDown size={24} />
              </div>
            </motion.div>
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
        { title: "Medical", icon: <FaHeartbeat size={50} />, color: "#1E3679" },
        { title: "Clinical", icon: <FaFlask size={50} />, color: "#00AA8A" },
        { title: "Pharma", icon: <FaPills size={50} />, color: "#1E3679" },
        { title: "IT", icon: <FaLaptopCode size={50} />, color: "#00AA8A" },
        { title: "Training & Placement", icon: <FaUserTie size={50} />, color: "#FBD21A" },
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

      {/* Testimonials - Responsive */}
      <section 
        className="section" 
        style={{ 
          background: '#f8f9fa',
          padding: isMobile ? '50px 0' : isTablet ? '70px 0' : '100px 0'
        }}
      >
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
              WHAT OUR STUDENTS SAY
            </h2>
            <p 
              className="text-muted"
              style={{ fontSize: isMobile ? '0.95rem' : isTablet ? '1rem' : '1.25rem' }}
            >
              Success stories from our alumni
            </p>
          </motion.div>

          <div className="row g-3 g-md-4">
            {testimonials.map((testimonial, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={!isMobile ? { 
                    y: -10,
                    boxShadow: `0 20px 40px ${
                      idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'
                    }30`
                  } : {}}
                  style={{ 
                    background: 'white',
                    borderLeft: `4px solid ${idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'}`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '15px',
                    padding: isMobile ? '20px' : isTablet ? '25px' : '30px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Quote Icon Background */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      fontSize: isMobile ? '60px' : isTablet ? '80px' : '100px',
                      color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A',
                      opacity: 0.05,
                      fontFamily: 'Georgia, serif',
                      fontWeight: 'bold'
                    }}
                  >
                    "
                  </div>

                  {/* Profile Section */}
                  <div 
                    className="d-flex align-items-center gap-3 mb-3 mb-md-4" 
                    style={{ position: 'relative', zIndex: 1 }}
                  >
                    <motion.img
                      whileHover={!isMobile ? { scale: 1.1, rotate: 5 } : {}}
                      transition={{ duration: 0.3 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: isMobile ? '60px' : isTablet ? '65px' : '70px',
                        height: isMobile ? '60px' : isTablet ? '65px' : '70px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `3px solid ${idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'}`,
                        boxShadow: `0 5px 15px ${idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'}40`
                      }}
                    />
                    <div className="text-start">
                      <h5 
                        className="fw-bold mb-1" 
                        style={{ 
                          color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A',
                          fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.25rem'
                        }}
                      >
                        {testimonial.name}
                      </h5>
                      <p 
                        className="text-muted mb-0" 
                        style={{ fontSize: isMobile ? '0.8rem' : '0.85rem' }}
                      >
                        {testimonial.role}
                      </p>
                      <p 
                        className="mb-0" 
                        style={{ 
                          color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A', 
                          fontWeight: '600',
                          fontSize: isMobile ? '0.75rem' : '0.85rem'
                        }}
                      >
                        @ {idx === 0 ? 'Max Healthcare' : idx === 1 ? 'Quintiles IMS' : 'Tech Mahindra'}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div 
                    className="mb-3" 
                    style={{ 
                      color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#1E3679', 
                      position: 'relative', 
                      zIndex: 1,
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + i * 0.1 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p 
                    className="mb-0"
                    style={{
                      fontSize: isMobile ? '0.85rem' : isTablet ? '0.95rem' : '1rem',
                      lineHeight: '1.7',
                      color: '#666',
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

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