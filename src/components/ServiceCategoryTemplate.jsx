// src/components/ServiceCategoryTemplate.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaClock, FaAward, FaBook, FaBriefcase } from "react-icons/fa";

const ServiceCategoryTemplate = ({ category, services, whyChoose }) => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="section text-center position-relative" 
        style={{
          background: category.gradient,
          color: 'white',
          padding: '120px 0 80px',
          marginTop: '70px'
        }}
      >
        <div className="container position-relative" data-aos="fade-up">
          <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <category.icon size={50} />
          </div>
          <h1 className="fw-bold display-3 mb-4">{category.title}</h1>
          <p className="fs-4 mb-0" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {category.description}
          </p>
        </div>

        {/* Decorative wave */}
        <div className="position-absolute" style={{ bottom: 0, left: 0, right: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section container" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-lg-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div 
                className="glass-card p-4 h-100 d-flex flex-column"
                style={{ borderTop: `4px solid ${category.color}` }}
              >
                {/* Icon & Title */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: category.gradient
                    }}
                  >
                    {React.cloneElement(service.icon, { style: { color: 'white' }, size: 30 })}
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="fw-bold mb-1">{service.title}</h4>
                    <div className="d-flex gap-3 text-muted small">
                      <span><FaClock className="me-1" />{service.duration}</span>
                      <span><FaAward className="me-1" />{service.level}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted mb-4">{service.shortDesc}</p>

                {/* Key Modules or Courses */}
                <div className="mb-4 flex-grow-1">
                  <h6 className="fw-semibold mb-3">
                    {service.modules ? 'Key Modules:' : 'Courses Offered:'}
                  </h6>
                  <div className="row g-2">
                    {(service.modules || service.courses || []).slice(0, 6).map((item, i) => (
                      <div className="col-12" key={i}>
                        <div className="d-flex align-items-start gap-2">
                          <FaCheckCircle className="text-success mt-1 flex-shrink-0" size={14} />
                          <span className="small text-muted">{item}</span>
                        </div>
                      </div>
                    ))}
                    {(service.modules || service.courses || []).length > 6 && (
                      <div className="col-12">
                        <span className="small text-primary fw-semibold">
                          +{(service.modules || service.courses || []).length - 6} more
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Career Paths (if available) */}
                {service.career && (
                  <div className="mb-3">
                    <h6 className="fw-semibold mb-2">Career Opportunities:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {service.career.slice(0, 3).map((career, i) => (
                        <span 
                          key={i}
                          className="badge bg-light text-dark"
                          style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button 
                  className="btn w-100 py-3 fw-semibold"
                  style={{
                    background: category.gradient,
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px'
                  }}
                  onClick={() => openModal(service)}
                >
                  View Full Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      {whyChoose && (
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="fw-bold display-5 mb-3">Why Choose Our {category.title}?</h2>
            </div>

            <div className="row g-4">
              {whyChoose.map((item, idx) => (
                <div className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="glass-card text-center p-4 h-100">
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section 
        className="section text-center" 
        style={{ background: category.gradient, color: 'white' }}
      >
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Ready to Start Your Journey?</h2>
          <p className="fs-5 mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join our next batch and get trained by industry experts
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contact" className="btn btn-light btn-lg px-5 py-3 fw-semibold">
              Enroll Now
            </Link>
            <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">
              Download Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div 
          className="modal fade show d-block" 
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={closeModal}
        >
          <div 
            className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '25px' }}>
              {/* Modal Header */}
              <div 
                className="modal-header border-0 p-4"
                style={{ background: category.gradient }}
              >
                <div className="text-white">
                  <h3 className="modal-title fw-bold">{selectedService.title}</h3>
                  {selectedService.duration && (
                    <div className="d-flex gap-3 mt-2">
                      <span><FaClock className="me-1" />{selectedService.duration}</span>
                      <span><FaAward className="me-1" />{selectedService.level}</span>
                    </div>
                  )}
                </div>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={closeModal}
                />
              </div>

              {/* Modal Body */}
              <div className="modal-body p-4">
                {/* Overview */}
                {selectedService.fullDesc && (
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3 d-flex align-items-center">
                      <FaBook className="text-primary me-2" />
                      Course Overview
                    </h5>
                    <p className="text-muted lh-lg">{selectedService.fullDesc}</p>
                  </div>
                )}

                {/* Modules or Courses */}
                {(selectedService.modules || selectedService.courses) && (
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">
                      {selectedService.modules ? 'What You\'ll Learn' : 'Courses Included'}
                    </h5>
                    <div className="row g-3">
                      {(selectedService.modules || selectedService.courses).map((item, idx) => (
                        <div className="col-md-6" key={idx}>
                          <div className="d-flex align-items-start gap-2">
                            <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                            <span className="text-muted">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outcomes */}
                {selectedService.outcomes && (
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Learning Outcomes</h5>
                    {selectedService.outcomes.map((outcome, idx) => (
                      <div 
                        key={idx} 
                        className="d-flex align-items-start gap-2 mb-2 p-2 rounded" 
                        style={{background: '#f8f9fa'}}
                      >
                        <span className="badge bg-primary">✓</span>
                        <span className="text-muted">{outcome}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Career & Certifications */}
                {(selectedService.career || selectedService.certifications) && (
                  <div className="row g-4">
                    {selectedService.career && (
                      <div className="col-md-6">
                        <h5 className="fw-bold mb-3 d-flex align-items-center">
                          <FaBriefcase className="text-primary me-2" />
                          Career Paths
                        </h5>
                        <div className="d-flex flex-wrap gap-2">
                          {selectedService.career.map((career, idx) => (
                            <span 
                              key={idx}
                              className="badge"
                              style={{
                                background: category.gradient,
                                color: 'white',
                                padding: '8px 14px',
                                fontSize: '0.85rem'
                              }}
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedService.certifications && (
                      <div className="col-md-6">
                        <h5 className="fw-bold mb-3 d-flex align-items-center">
                          <FaAward className="text-success me-2" />
                          Certifications
                        </h5>
                        <div className="d-flex flex-wrap gap-2">
                          {selectedService.certifications.map((cert, idx) => (
                            <span 
                              key={idx}
                              className="badge bg-success"
                              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer border-0 p-4">
                <Link 
                  to="/contact" 
                  className="btn btn-lg fw-semibold w-100"
                  style={{
                    background: category.gradient,
                    color: 'white',
                    border: 'none'
                  }}
                >
                  Enroll in This Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCategoryTemplate;