import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHeartbeat, FaFlask, FaLaptopCode, FaPills, FaUserTie, FaBriefcase, FaStar, FaArrowRight } from "react-icons/fa";

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
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Services with card-based design - Brand Colors Only
  const services = [
    {
      id: 'medical',
      icon: <FaHeartbeat size={60} />,
      title: "Medical Courses",
      desc: "Master medical coding, billing, medical affairs, and medical writing with comprehensive training programs.",
      color: "#1E3679",
      link: "/services/medical-courses"
    },
    {
      id: 'clinical',
      icon: <FaFlask size={60} />,
      title: "Clinical Courses",
      desc: "Advanced training in clinical research, data management, clinical trials, and BA/BE studies.",
      color: "#00AA8A",
      link: "/services/clinical-courses"
    },
    {
      id: 'it',
      icon: <FaLaptopCode size={60} />,
      title: "IT Services",
      desc: "Comprehensive IT training in programming, data science, cybersecurity, and cloud computing.",
      color: "#1E3679",
      link: "/services/it-services"
    },
    {
      id: 'pharma',
      icon: <FaPills size={60} />,
      title: "Pharmaceutical Skills",
      desc: "Quality assurance, regulatory affairs, and pharmaceutical operations training.",
      color: "#00AA8A",
      link: "/services/pharmaceutical-skills"
    },
    {
      id: 'training',
      icon: <FaUserTie size={60} />,
      title: "Training & Placement",
      desc: "100% placement assistance with interview preparation and career counseling.",
      color: "#1E3679",
      link: "/services/training-placement"
    },
    {
      id: 'internship',
      icon: <FaBriefcase size={60} />,
      title: "Internship Programs",
      desc: "Real-world experience through internships in medical, clinical, IT, and pharmaceutical domains.",
      color: "#00AA8A",
      link: "/services/internship-programs"
    }
  ];

  // Industry sections - Brand Colors Only
  const industries = [
    { icon: '💊', title: 'PHARMA', color: '#1E3679' },
    { icon: '💻', title: 'INFORMATION TECHNOLOGY', color: '#1E3679' },
    { icon: '🛒', title: 'CONSUMER PRODUCTS', color: '#00AA8A' },
    { icon: '🌾', title: 'AGRICULTURE', color: '#1E3679' }
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
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="position-relative" style={{ height: '100vh' }}>
          
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

                  {/* Animated Particles */}
                  {[...Array(20)].map((_, i) => (
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
                  <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center" style={{ zIndex: 2 }}>
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
                            letterSpacing: '3px',
                            fontSize: '0.9rem'
                          }}
                        >
                          {slide.subtitle}
                        </motion.p>

                        <motion.h1 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          className="fw-bold mb-4"
                          style={{
                            color: 'white',
                            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                            letterSpacing: '2px',
                            lineHeight: '1.2'
                          }}
                        >
                          {slide.title.toUpperCase()}
                        </motion.h1>

                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="fs-5 mb-5 mx-auto"
                          style={{ 
                            color: 'rgba(255,255,255,0.9)',
                            maxWidth: '700px',
                            lineHeight: '1.8'
                          }}
                        >
                          {slide.description}
                        </motion.p>

                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1 }}
                          className="d-flex gap-3 justify-content-center flex-wrap"
                        >
                          <motion.a
                            href="/services"
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,170,138,0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-lg px-5 py-3 fw-semibold"
                            style={{
                              background: '#00AA8A',
                              color: '#fff',
                              border: 'none',
                              borderRadius: '0'
                            }}
                          >
                            EXPLORE COURSES
                          </motion.a>

                          <motion.a
                            href="/contact"
                            whileHover={{ 
                              scale: 1.05,
                              background: '#fff',
                              color: '#1E3679'
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                            style={{ borderRadius: '0', transition: 'all 0.3s ease' }}
                          >
                            CONTACT US
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button 
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="position-absolute top-50 start-0 translate-middle-y ms-4 bg-transparent border-0"
            style={{ zIndex: 10 }}
            onClick={prevSlide}
          >
            <span style={{ color: 'white', fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>←</span>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="position-absolute top-50 end-0 translate-middle-y me-4 bg-transparent border-0"
            style={{ zIndex: 10 }}
            onClick={nextSlide}
          >
            <span style={{ color: 'white', fontSize: '2rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>→</span>
          </motion.button>

          {/* Scroll Down Indicator */}
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
        </div>
      </section>

      {/* Delivering Solutions Section */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 
              className="fw-bold mb-4"
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '2px',
                color: '#1E3679'
              }}
            >
              DELIVERING SOLUTIONS
            </h2>
            <p 
              className="mx-auto"
              style={{ 
                maxWidth: '900px',
                fontSize: '1.1rem',
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
                className="col-lg-4 col-md-6"
              >
                <motion.a
                  href={service.link}
                  className="text-decoration-none"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                >
                  <motion.div 
                    className="p-5 h-100 position-relative overflow-hidden"
                    style={{
                      background: hoveredCard === idx ? service.color : '#fff',
                      borderRight: '1px solid rgba(0,0,0,0.1)',
                      borderBottom: '1px solid rgba(0,0,0,0.1)',
                      transition: 'all 0.4s ease',
                      minHeight: '350px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Animated Background */}
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

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <motion.div 
                        animate={hoveredCard === idx ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-4"
                        style={{
                          color: hoveredCard === idx ? 'white' : service.color,
                          transition: 'all 0.4s ease'
                        }}
                      >
                        {service.icon}
                      </motion.div>

                      <h4 
                        className="fw-bold mb-3"
                        style={{
                          color: hoveredCard === idx ? 'white' : '#000',
                          fontSize: '1.3rem',
                          letterSpacing: '1px'
                        }}
                      >
                        {service.title.toUpperCase()}
                      </h4>

                      <p 
                        style={{
                          color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : '#666',
                          fontSize: '0.95rem',
                          lineHeight: '1.7'
                        }}
                      >
                        {service.desc}
                      </p>
                    </div>
                    
                    <motion.div 
                      animate={hoveredCard === idx ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="d-flex align-items-center gap-2 mt-3"
                      style={{
                        color: hoveredCard === idx ? 'white' : service.color,
                        fontSize: '0.9rem',
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

      {/* Industry Section */}
      <section className="section" style={{ background: '#000', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-lg-5 mb-5 mb-lg-0"
            >
              <div className="row g-3">
                {industries.map((industry, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="col-6"
                  >
                    <div 
                      className="p-4 text-center d-flex flex-column align-items-center justify-content-center"
                      style={{
                        background: industry.color,
                        minHeight: '180px'
                      }}
                    >
                      <motion.div 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="fs-1 mb-3"
                      >
                        {industry.icon}
                      </motion.div>
                      <h6 
                        className="fw-bold mb-0 text-white"
                        style={{ 
                          fontSize: '0.85rem',
                          letterSpacing: '1px'
                        }}
                      >
                        {industry.title}
                      </h6>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-lg-7"
            >
              <h2 
                className="fw-bold mb-4"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  letterSpacing: '2px',
                  color: '#00AA8A'
                }}
              >
                INDUSTRY
              </h2>
              <p 
                style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'rgba(255,255,255,0.8)'
                }}
              >
                The data stored can be structured, semi-structured, or unstructured, which means it 
                can be stored in a more flexible format for future use. When data is stored, it is 
                associated with identifiers and metadata tags for faster retrieval.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: '#000', color: 'white', paddingTop: 0 }}>
        <div className="container">
          <div className="row text-center">
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
                whileHover={{ scale: 1.1 }}
                className="col-6 col-md-3 mb-4"
              >
                <p 
                  className="text-uppercase mb-2 fw-semibold"
                  style={{ 
                    color: '#00AA8A',
                    fontSize: '0.85rem',
                    letterSpacing: '2px'
                  }}
                >
                  {stat.label}
                </p>
                <motion.h2 
                  className="fw-bold mb-0"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '2px'
                  }}
                >
                  {stat.value}{stat.suffix}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 
              className="fw-bold mb-4"
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '2px',
                color: '#1E3679'
              }}
            >
              WHAT OUR STUDENTS SAY
            </h2>
            <p className="text-muted fs-5">Success stories from our alumni</p>
          </motion.div>

          <div className="row g-4">
            {testimonials.map((testimonial, idx) => (
              <div className="col-lg-4" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: `0 20px 40px ${
                      idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'
                    }30`
                  }}
                  style={{ 
                    maxWidth: '800px',
                    background: 'white',
                    borderLeft: `4px solid ${idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'}`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '15px',
                    padding: '30px',
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
                      fontSize: '100px',
                      color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A',
                      opacity: 0.05,
                      fontFamily: 'Georgia, serif',
                      fontWeight: 'bold'
                    }}
                  >
                    "
                  </div>

                  {/* Profile Section */}
                  <div className="d-flex align-items-center gap-3 mb-4" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `3px solid ${idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'}`,
                        boxShadow: `0 5px 15px ${idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A'}40`
                      }}
                    />
                    <div className="text-start">
                      <h5 className="fw-bold mb-1" style={{ color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A' }}>
                        {testimonial.name}
                      </h5>
                      <p className="text-muted mb-0 small">{testimonial.role}</p>
                      <p className="small mb-0" style={{ color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A', fontWeight: '600' }}>
                        @ {idx === 0 ? 'Max Healthcare' : idx === 1 ? 'Quintiles IMS' : 'Tech Mahindra'}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="mb-3" style={{ color: idx === 0 ? '#1E3679' : idx === 1 ? '#00AA8A' : '#FBD21A', position: 'relative', zIndex: 1 }}>
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
                      fontSize: '1rem',
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

      {/* CTA Section */}
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
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Shapes */}
        {[...Array(5)].map((_, i) => (
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="fw-bold mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '2px'
            }}
          >
            READY TO START YOUR CAREER?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="fs-5 mb-5"
          >
            Contact us today to enroll in our training programs.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 40px rgba(255,255,255,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-lg px-5 py-3 fw-semibold"
            style={{
              background: '#00AA8A',
              color: '#fff',
              border: 'none',
              borderRadius: '0'
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