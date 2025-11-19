import React, { useState, useEffect } from "react";
import { FaHeartbeat, FaFlask, FaLaptopCode, FaUserGraduate, FaClock, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [stats, setStats] = useState({ medical: 0, clinical: 0, tech: 0 });

  // Animated counter effect
  useEffect(() => {
    const targets = { medical: 1200, clinical: 900, tech: 2000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        medical: Math.floor(targets.medical * progress),
        clinical: Math.floor(targets.clinical * progress),
        tech: Math.floor(targets.tech * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    {
      id: 'medical',
      icon: <FaHeartbeat size={50} className="text-primary" />,
      title: "Medical Courses",
      desc: "Professional medical training programs including coding, billing, and medical writing.",
      courses: 12,
      students: stats.medical,
      duration: "4-8 months",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["ICD-10", "CPT", "Medical Terminology", "HIPAA Compliance"],
      color: "#667eea"
    },
    {
      id: 'clinical',
      icon: <FaFlask size={50} className="text-danger" />,
      title: "Clinical Courses",
      desc: "Advanced clinical research, data management, and trial management programs.",
      courses: 10,
      students: stats.clinical,
      duration: "5-10 months",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["GCP", "Clinical Trials", "Data Management", "Pharmacovigilance"],
      color: "#f5576c"
    },
    {
      id: 'tech',
      icon: <FaLaptopCode size={50} className="text-success" />,
      title: "IT & Technology",
      desc: "Modern IT courses including Data Science, AI/ML, and Web Development.",
      courses: 15,
      students: stats.tech,
      duration: "4-12 months",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Python", "Machine Learning", "Web Dev", "Cloud Computing"],
      color: "#4facfe"
    }
  ];

  return (
    <section className="section container">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold display-4 mb-3">
          Explore Our <span className="text-primary">Programs</span>
        </h2>
        <p className="text-muted fs-5 mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Choose from our comprehensive range of industry-aligned courses designed to accelerate your career
        </p>
      </div>

      <div className="row g-4">
        {categories.map((cat, i) => (
          <div 
            className="col-lg-4 col-md-6" 
            key={i} 
            data-aos="fade-up" 
            data-aos-delay={i * 100}
          >
            <div 
              className="glass-card text-center p-4 h-100 position-relative overflow-hidden"
              style={{
                borderTop: `4px solid ${cat.color}`,
                transform: hoveredCard === i ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient effect */}
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                style={{
                  background: cat.gradient,
                  opacity: hoveredCard === i ? 0.05 : 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 0
                }}
              />

              <div className="position-relative" style={{ zIndex: 1 }}>
                {/* Icon with animation */}
                <div 
                  className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '100px',
                    height: '100px',
                    background: cat.gradient,
                    transform: hoveredCard === i ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                    transition: 'all 0.6s ease'
                  }}
                >
                  <div style={{ color: 'white' }}>
                    {cat.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="fw-bold mb-3" style={{ color: cat.color }}>
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-muted mb-4">
                  {cat.desc}
                </p>

                {/* Stats Grid */}
                <div className="row g-2 mb-4">
                  <div className="col-4">
                    <div className="p-2 rounded bg-light">
                      <div className="fw-bold fs-5" style={{ color: cat.color }}>
                        {cat.courses}+
                      </div>
                      <div className="small text-muted">Courses</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded bg-light">
                      <div className="fw-bold fs-5" style={{ color: cat.color }}>
                        {cat.students}+
                      </div>
                      <div className="small text-muted">Students</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded bg-light">
                      <FaClock className="mb-1" style={{ color: cat.color }} />
                      <div className="small text-muted">{cat.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Features Tags */}
                <div className="mb-4">
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {cat.features.slice(0, 4).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="badge"
                        style={{
                          background: hoveredCard === i ? cat.gradient : '#f8f9fa',
                          color: hoveredCard === i ? 'white' : '#6c757d',
                          transition: 'all 0.3s ease',
                          padding: '8px 12px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to="/services" 
                  className="btn w-100 py-3 fw-semibold"
                  style={{
                    background: hoveredCard === i ? cat.gradient : 'transparent',
                    color: hoveredCard === i ? 'white' : cat.color,
                    border: `2px solid ${cat.color}`,
                    transition: 'all 0.3s ease',
                    borderRadius: '12px'
                  }}
                >
                  Explore Courses →
                </Link>

                {/* Animated particles */}
                {hoveredCard === i && (
                  <>
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className="position-absolute rounded-circle"
                        style={{
                          width: '8px',
                          height: '8px',
                          background: cat.color,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${2 + idx}s ease-in-out infinite`,
                          opacity: 0.3
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="row mt-5 pt-5" data-aos="fade-up">
        <div className="col-12">
          <div 
            className="glass-card text-center p-5"
            style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              borderRadius: '20px'
            }}
          >
            <FaUserGraduate size={60} className="text-primary mb-4" />
            <h3 className="fw-bold mb-3">Not Sure Which Course to Choose?</h3>
            <p className="text-muted mb-4 fs-5">
              Talk to our career counselors and get personalized course recommendations
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn-gradient btn-lg">
                Get Free Counseling
              </button>
              <button className="btn btn-outline-primary btn-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;