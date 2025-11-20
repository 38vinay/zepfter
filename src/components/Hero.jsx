import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaChevronDown } from "react-icons/fa";

// Import your hero images
import hero1 from "../assets/hero-medical.jpg";
import hero2 from "../assets/hero-clinical.jpg";
import hero3 from "../assets/hero-tech.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "Medical Courses",
      subtitle: "Medical Coding • Billing • Writing • Medical Affairs",
      description: "Transform your career with industry-recognized medical training programs",
      gradient: "from-blue-600 via-blue-500 to-cyan-500"
    },
    {
      image: hero2,
      title: "Clinical Courses",
      subtitle: "Clinical Research • Data Management • Clinical Trials",
      description: "Master clinical research with hands-on training from industry experts",
      gradient: "from-purple-600 via-pink-500 to-rose-500"
    },
    {
      image: hero3,
      title: "IT & Technology Courses",
      subtitle: "Data Science • Programming • Web Dev • AI/ML",
      description: "Build cutting-edge tech skills for the future of innovation",
      gradient: "from-green-600 via-teal-500 to-cyan-500"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

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

  return (
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
            {/* Animated Gradient Overlay */}
            <div 
              className="hero-overlay" 
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,82,255,0.4))`
              }}
            ></div>

            {/* Content */}
            <div className="hero-center-box">
              <div 
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: '0.2s' }}
              >
                <h1 
                  className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent mb-4`}
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {slide.title}
                </h1>
              </div>

              <div 
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: '0.4s' }}
              >
                <p className="fs-4 mb-3 text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {slide.subtitle}
                </p>
                <p className="fs-6 text-white-50 mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
                  {slide.description}
                </p>
              </div>

              <div 
                className="d-flex gap-3 justify-content-center flex-wrap animate__animated animate__fadeInUp"
                style={{ animationDelay: '0.6s' }}
              >
                <Link to="/services" className="btn-gradient btn-lg btn-pulse">
                  Explore Courses
                </Link>
                
              </div>
            </div>

            {/* Floating Elements */}
            <div className="position-absolute" style={{ bottom: '50px', left: '50px', opacity: 0.7 }}>
              <div className="glass-card d-inline-block px-4 py-3 float-animation">
                <div className="d-flex align-items-center gap-3 text-white">
                  <div className="fs-1 fw-bold">5000+</div>
                  <div className="text-start">
                    <div className="small">Students</div>
                    <div className="small text-white-50">Trained</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="position-absolute" style={{ bottom: '50px', right: '50px', opacity: 0.7 }}>
              <div className="glass-card d-inline-block px-4 py-3 float-animation" style={{ animationDelay: '1s' }}>
                <div className="d-flex align-items-center gap-3 text-white">
                  <div className="fs-1 fw-bold">95%</div>
                  <div className="text-start">
                    <div className="small">Placement</div>
                    <div className="small text-white-50">Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y ms-4"
          style={{ width: '60px', height: '60px', zIndex: 10 }}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="carousel-arrow">&#10094;</span>
        </button>

        <button 
          className="carousel-control-next position-absolute top-50 end-0 translate-middle-y me-4"
          style={{ width: '60px', height: '60px', zIndex: 10 }}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="carousel-arrow">&#10095;</span>
        </button>

        {/* Slide Indicators */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5" style={{ zIndex: 10 }}>
          <div className="d-flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`border-0 transition-all ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50'
                }`}
                style={{
                  width: index === currentSlide ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="position-absolute bottom-0 start-50 translate-middle-x mb-3"
          style={{ zIndex: 10, cursor: 'pointer' }}
          onClick={scrollToContent}
        >
          <div className="text-white text-center animate__animated animate__bounce animate__infinite">
            <FaChevronDown size={24} />
          </div>
        </div>
      </div>

      {/* Add Animate.css if not already included */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </section>
  );
};

export default Hero;