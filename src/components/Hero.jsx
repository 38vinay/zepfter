import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaHeartbeat, FaFlask, FaLaptopCode, FaPills, FaUserTie, FaBriefcase, FaStar, FaArrowRight } from "react-icons/fa";

// Import hero images
import hero1 from "../assets/hero-medical.jpg";
import hero2 from "../assets/hero-clinical.jpg";
import hero3 from "../assets/hero-tech.jpg";

// Import testimonial images
import user1 from "../assets/testimonials/user1.jpg";
import user2 from "../assets/testimonials/user2.jpg";
import user3 from "../assets/testimonials/user3.jpg";

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
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide position-absolute w-100 h-100 transition-all ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transition: 'opacity 1.5s ease-in-out',
                zIndex: index === currentSlide ? 1 : 0
              }}
            >
              {/* Dark Overlay with Brand Colors */}
              <div 
                className="position-absolute w-100 h-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.85), rgba(30,54,121,0.7))',
                  zIndex: 1
                }}
              ></div>

              {/* Content */}
              <div className="position-relative h-100 d-flex align-items-center justify-content-center text-center" style={{ zIndex: 2 }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                  <div data-aos="fade-up">
                    <p 
                      className="text-uppercase mb-3 fw-semibold"
                      style={{ 
                        color: '#00AA8A',
                        letterSpacing: '3px',
                        fontSize: '0.9rem'
                      }}
                    >
                      {slide.subtitle}
                    </p>
                    <h1 
                      className="fw-bold mb-4"
                      style={{
                        color: 'white',
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        letterSpacing: '2px',
                        lineHeight: '1.2'
                      }}
                    >
                      {slide.title.toUpperCase()}
                    </h1>
                    <p 
                      className="fs-5 mb-5 mx-auto"
                      style={{ 
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '700px',
                        lineHeight: '1.8'
                      }}
                    >
                      {slide.description}
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link 
                        to="/services" 
                        className="btn btn-lg px-5 py-3 fw-semibold"
                        style={{
                          background: '#00AA8A',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '0'
                        }}
                      >
                        EXPLORE COURSES
                      </Link>
                      <Link 
                        to="/contact" 
                        className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                        style={{ borderRadius: '0' }}
                      >
                        CONTACT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            className="position-absolute top-50 start-0 translate-middle-y ms-4 bg-transparent border-0"
            style={{ zIndex: 10 }}
            onClick={prevSlide}
          >
            <span style={{ color: 'white', fontSize: '2rem' }}>←</span>
          </button>

          <button 
            className="position-absolute top-50 end-0 translate-middle-y me-4 bg-transparent border-0"
            style={{ zIndex: 10 }}
            onClick={nextSlide}
          >
            <span style={{ color: 'white', fontSize: '2rem' }}>→</span>
          </button>

          {/* Scroll Down Indicator */}
          <div 
            className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
            style={{ zIndex: 10, cursor: 'pointer' }}
            onClick={scrollToContent}
          >
            <div className="text-white text-center animate__animated animate__bounce animate__infinite">
              <FaChevronDown size={24} />
            </div>
          </div>
        </div>

        {/* Animate.css */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </section>

      {/* Delivering Solutions Section */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
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
          </div>

          <div className="row g-0">
            {services.map((service, idx) => (
              <div 
                className="col-lg-4 col-md-6" 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Link
                  to={service.link}
                  className="text-decoration-none"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
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
                    <div>
                      <div 
                        className="mb-4"
                        style={{
                          color: hoveredCard === idx ? 'white' : service.color,
                          transition: 'all 0.4s ease'
                        }}
                      >
                        {service.icon}
                      </div>
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
                    
                    <div 
                      className="d-flex align-items-center gap-2 mt-3"
                      style={{
                        color: hoveredCard === idx ? 'white' : service.color,
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}
                    >
                      <span>LEARN MORE</span>
                      <FaArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="section" style={{ background: '#000', color: 'white' }}>
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="row g-3">
                {industries.map((industry, idx) => (
                  <div className="col-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div 
                      className="p-4 text-center d-flex flex-column align-items-center justify-content-center"
                      style={{
                        background: industry.color,
                        minHeight: '180px'
                      }}
                    >
                      <div className="fs-1 mb-3">{industry.icon}</div>
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
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-7">
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
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: '#000', color: 'white', paddingTop: 0 }}>
        <div className="container" data-aos="fade-up">
          <div className="row text-center">
            {[
              { label: 'Students', value: stats.students, suffix: '+' },
              { label: 'Courses', value: stats.courses, suffix: '+' },
              { label: 'Placements', value: stats.placements, suffix: '+' },
              { label: 'Professionals', value: stats.professionals, suffix: '+' }
            ].map((stat, idx) => (
              <div className="col-6 col-md-3 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
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
                <h2 
                  className="fw-bold mb-0"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    letterSpacing: '2px'
                  }}
                >
                  {stat.value}{stat.suffix}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container" data-aos="fade-up">
          <div className="text-center mb-5">
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
          </div>

          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {testimonials.map((testimonial, idx) => (
                <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                  <div 
                    className="mx-auto text-center p-5"
                    style={{ 
                      maxWidth: '800px',
                      background: 'white',
                      borderLeft: '4px solid #00AA8A'
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '3px solid #1E3679'
                        }}
                      />
                      <div className="text-start">
                        <h5 className="fw-bold mb-1" style={{ color: '#1E3679' }}>
                          {testimonial.name}
                        </h5>
                        <p className="text-muted mb-0">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-3" style={{ color: '#00AA8A' }}>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>

                    <p 
                      className="mb-0"
                      style={{ 
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#666',
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section text-center"
        style={{
          background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
          color: 'white'
        }}
      >
        <div className="container" data-aos="fade-up">
          <h2 
            className="fw-bold mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '2px'
            }}
          >
            READY TO START YOUR CAREER?
          </h2>
          <p className="fs-5 mb-5">Contact us today to enroll in our training programs.</p>
          <Link 
            to="/contact" 
            className="btn btn-lg px-5 py-3 fw-semibold"
            style={{
              background: '#00AA8A',
              color: '#fff',
              border: 'none',
              borderRadius: '0'
            }}
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;