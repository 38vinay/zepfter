import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCapsules, FaFlask, FaLaptopCode, FaPills, FaArrowRight, FaClock, FaAward, FaUsers, FaGraduationCap, FaUserTie, FaBriefcase } from "react-icons/fa";
import { serviceCategories } from "../data/servicesData";

const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const coreExpertise = [
    {
      ...serviceCategories.medical,
      icon: FaCapsules,
      stats: { courses: 4, students: '1200+', duration: '5-8 months' }
    },
    {
      ...serviceCategories.clinical,
      icon: FaFlask,
      stats: { courses: 4, students: '900+', duration: '5-8 months' }
    },
    {
      ...serviceCategories.it,
      icon: FaLaptopCode,
      stats: { courses: '30+', students: '2000+', duration: '4-12 months' }
    },
    {
      ...serviceCategories.pharmaceutical,
      icon: FaPills,
      stats: { courses: '15+', students: '800+', duration: '5-7 months' }
    },
    {
      ...serviceCategories.training,
      icon: FaUserTie,
      stats: { courses: 3, students: '5000+', duration: 'Ongoing' }
    },
    {
      ...serviceCategories.internship,
      icon: FaBriefcase,
      stats: { courses: 4, students: '1500+', duration: '2-6 months' }
    }
  ];

  const handleCategoryClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <>
      {/* Hero Section with Dark Background */}
      <section 
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
          minHeight: '100vh',
          paddingTop: '140px',
          paddingBottom: '100px',
          marginTop: '70px'
        }}
      >
        {/* Animated Background Particles */}
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.3 }}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="position-absolute rounded-circle"
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                background: `radial-gradient(circle, ${
                  ['#1E367920', '#00AA8A20', '#FBD21A20'][Math.floor(Math.random() * 3)]
                }, transparent)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          {/* Core Expertise Header */}
          <div className="text-center mb-5" data-aos="fade-up">
            <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              <span style={{ color: '#FFFFFF' }}>OUR </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>CORE </span>
              <span style={{ 
                background: 'linear-gradient(135deg, #FBD21A 0%, #00AA8A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>EXPERTISE</span>
            </h1>
            
            <p 
              className="mx-auto mb-4 lh-lg" 
              style={{ 
                maxWidth: '900px', 
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.85)'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A competent Development and Consulting team is required for digital success. Since more than four
              years, our Expert Teams have assisted in offering world-class solutions to a wide range of business
              difficulties. Custom Software's assist enterprises and startups in developing digitized solutions.
            </p>

            <p 
              className="mx-auto mb-4 fw-semibold" 
              style={{ 
                maxWidth: '800px', 
                fontSize: '1.2rem',
                color: '#ffffff'
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Unlock opportunities of future towards digital revolution with us.
            </p>

            <div 
              className="mx-auto mb-5 p-4 rounded-4"
              style={{ 
                maxWidth: '900px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p 
                className="mb-0 lh-lg" 
                style={{ 
                  fontSize: '1.05rem',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                At <span className="fw-bold" style={{ color: '#4facfe' }}>ZEPFTER</span>, we can build Reliable, Robust, and Scalable
                Solutions for all platforms and devices. Minimize
                your expenditures and focus on innovation by utilizing our
                application outsourcing services.
              </p>
            </div>
          </div>

          {/* Service Category Cards Grid */}
          <div className="row g-4 mt-5">
            {coreExpertise.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div 
                  className="col-lg-4 col-md-6" 
                  key={idx}
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <div 
                    className="position-relative h-100 overflow-hidden rounded-4 p-4 d-flex flex-column align-items-center justify-content-center text-center"
                    style={{
                      background: hoveredCard === idx ? service.gradient : 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      minHeight: '300px',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      transform: hoveredCard === idx ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
                      boxShadow: hoveredCard === idx 
                        ? `0 20px 60px ${service.color}40` 
                        : '0 10px 30px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCategoryClick(service.slug)}
                  >
                    {/* Animated Background Effect */}
                    <div 
                      className="position-absolute w-100 h-100 top-0 start-0"
                      style={{
                        background: `radial-gradient(circle at center, ${service.color}30, transparent)`,
                        opacity: hoveredCard === idx ? 1 : 0,
                        transition: 'opacity 0.5s ease'
                      }}
                    />

                    {/* Content */}
                    <div className="position-relative" style={{ zIndex: 2 }}>
                      {/* Icon */}
                      <div 
                        className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          width: '120px',
                          height: '120px',
                          transform: hoveredCard === idx ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                          transition: 'all 0.5s ease'
                        }}
                      >
                        <IconComponent 
                          size={80} 
                          style={{ 
                            color: hoveredCard === idx ? '#ffffff' : service.color,
                            filter: hoveredCard === idx ? 'drop-shadow(0 0 20px rgba(255,255,255,0.5))' : 'none',
                            transition: 'all 0.5s ease'
                          }} 
                        />
                      </div>

                      {/* Title */}
                      <h3 
                        className="fw-bold mb-3"
                        style={{ 
                          color: hoveredCard === idx ? '#ffffff' : service.color,
                          fontSize: '1.5rem',
                          transition: 'all 0.3s ease',
                          textShadow: hoveredCard === idx ? '0 2px 10px rgba(0,0,0,0.3)' : 'none'
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Stats */}
                      <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
                        <div 
                          className="px-3 py-2 rounded-3"
                          style={{
                            background: hoveredCard === idx 
                              ? 'rgba(255, 255, 255, 0.2)' 
                              : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div 
                            className="fw-bold small"
                            style={{ 
                              color: hoveredCard === idx ? '#ffffff' : service.color 
                            }}
                          >
                            {service.stats.courses}
                          </div>
                          <div 
                            className="small"
                            style={{ 
                              color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                              fontSize: '0.75rem'
                            }}
                          >
                            Courses
                          </div>
                        </div>

                        <div 
                          className="px-3 py-2 rounded-3"
                          style={{
                            background: hoveredCard === idx 
                              ? 'rgba(255, 255, 255, 0.2)' 
                              : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div 
                            className="fw-bold small"
                            style={{ 
                              color: hoveredCard === idx ? '#ffffff' : service.color 
                            }}
                          >
                            {service.stats.students}
                          </div>
                          <div 
                            className="small"
                            style={{ 
                              color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                              fontSize: '0.75rem'
                            }}
                          >
                            Students
                          </div>
                        </div>
                      </div>

                      {/* Explore Arrow */}
                      <div 
                        className="mt-3"
                        style={{
                          opacity: hoveredCard === idx ? 1 : 0,
                          transform: hoveredCard === idx ? 'translateY(0)' : 'translateY(10px)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FaArrowRight 
                          size={24} 
                          style={{ 
                            color: '#ffffff',
                            animation: hoveredCard === idx ? 'bounceRight 1s ease-in-out infinite' : 'none'
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-5 mb-3">Why Choose ZEPFTER?</h2>
            <p className="text-muted fs-5">Industry-recognized training with proven results</p>
          </div>

          <div className="row g-4">
            {[
              { icon: <FaGraduationCap size={40} />, number: '5000+', label: 'Students Trained', color: '#667eea' },
              { icon: <FaAward size={40} />, number: '95%', label: 'Placement Rate', color: '#f5576c' },
              { icon: <FaUsers size={40} />, number: '50+', label: 'Expert Trainers', color: '#4facfe' },
              { icon: <FaClock size={40} />, number: '100%', label: 'Practical Training', color: '#43e97b' }
            ].map((stat, idx) => (
              <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div 
                  className="glass-card text-center p-4 h-100"
                  style={{
                    borderTop: `4px solid ${stat.color}`
                  }}
                >
                  <div className="mb-3" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="display-4 fw-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-muted fw-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section text-center position-relative" 
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Ready to Transform Your Career?</h2>
          <p className="fs-5 mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join thousands of successful professionals who started their journey with ZEPFTER
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contact" className="btn btn-light btn-lg px-5 py-3 fw-semibold">
              Get Free Counseling
            </Link>
            <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Keyframe for arrow animation */}
      <style>{`
        @keyframes bounceRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }
      `}</style>
    </>
  );
};

export default Services;