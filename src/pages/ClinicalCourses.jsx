import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaClock, FaAward, FaBook, FaBriefcase, FaFlask, FaVial, FaClipboardCheck, FaMicroscope } from "react-icons/fa";

const ClinicalCourses = () => {
  const [selectedService, setSelectedService] = useState(null);

  const category = {
    title: 'Clinical Courses',
    icon: FaFlask,
    color: '#00AA8A',
    gradient: 'linear-gradient(135deg, #00AA8A 0%, #00d4aa 100%)',
    description: 'Advanced clinical research, data management, and trial management programs.'
  };

  const services = [
    {
      id: 'clinical-research',
      title: 'Clinical Research',
      icon: <FaFlask size={40} />,
      shortDesc: 'Drug discovery, clinical trials, and research fundamentals.',
      fullDesc: 'Comprehensive training in clinical research covering all phases of clinical trials, GCP guidelines, ethics, and regulatory compliance.',
      duration: '8 months',
      level: 'Beginner to Advanced',
      modules: [
        'Clinical Trial Phases (I-IV)',
        'Good Clinical Practice (GCP)',
        'Ethics & Regulations',
        'Protocol Development',
        'Study Monitoring',
        'Safety Reporting',
        'Informed Consent',
        'Regulatory Submissions'
      ],
      outcomes: [
        'Understand clinical trial processes',
        'Implement GCP standards',
        'Monitor clinical studies',
        'Ensure patient safety'
      ],
      career: ['Clinical Research Coordinator', 'Clinical Research Associate', 'Study Coordinator'],
      certifications: ['CCRC', 'CCRA', 'ACRP Certification']
    },
    {
      id: 'clinical-data-management',
      title: 'Clinical Data Management',
      icon: <FaVial size={40} />,
      shortDesc: 'Manage and analyze clinical trial data effectively.',
      fullDesc: 'Master clinical data management tools, database design, query management, data validation, and quality assurance.',
      duration: '7 months',
      level: 'Intermediate',
      modules: [
        'CRF Design & Development',
        'Database Design & Build',
        'Query Management',
        'Data Validation & Cleaning',
        'CDM Tools (Oracle, Medidata)',
        'SAE Reconciliation',
        'Data Quality Assurance',
        'Database Lock Procedures'
      ],
      outcomes: [
        'Design clinical databases',
        'Manage data queries efficiently',
        'Ensure data quality and integrity',
        'Generate data reports'
      ],
      career: ['Clinical Data Manager', 'Data Coordinator', 'CDM Specialist'],
      certifications: ['CCDM Certification']
    },
    {
      id: 'clinical-trials',
      title: 'Clinical Trials Management',
      icon: <FaClipboardCheck size={40} />,
      shortDesc: 'Comprehensive trial coordination and site management.',
      fullDesc: 'Learn comprehensive clinical trial management, site coordination, patient recruitment strategies, and monitoring visits.',
      duration: '6 months',
      level: 'Intermediate',
      modules: [
        'Trial Design & Planning',
        'Site Selection & Management',
        'Patient Recruitment & Retention',
        'Monitoring Visits',
        'Source Data Verification',
        'Trial Master File Management',
        'Budget & Contract Management',
        'Closeout Procedures'
      ],
      outcomes: [
        'Coordinate clinical trials effectively',
        'Conduct monitoring visits',
        'Manage trial documentation',
        'Ensure protocol compliance'
      ],
      career: ['Clinical Trial Manager', 'Site Coordinator', 'Project Manager'],
      certifications: ['PMP', 'Clinical Trial Management Certification']
    },
    {
      id: 'bioavailability-bioequivalence',
      title: 'Bioavailability & Bioequivalence Studies',
      icon: <FaMicroscope size={40} />,
      shortDesc: 'Specialized training in BA/BE studies for generic drug development.',
      fullDesc: 'Learn the principles of bioavailability and bioequivalence studies, pharmacokinetics, and regulatory requirements for generic drug approval.',
      duration: '5 months',
      level: 'Advanced',
      modules: [
        'Pharmacokinetics Principles',
        'BA/BE Study Design',
        'Analytical Method Validation',
        'Statistical Analysis',
        'Regulatory Guidelines (FDA, EMA)',
        'Generic Drug Development',
        'Study Protocol Development',
        'Data Interpretation'
      ],
      outcomes: [
        'Design BA/BE studies',
        'Understand PK parameters',
        'Navigate regulatory requirements',
        'Analyze bioequivalence data'
      ],
      career: ['BA/BE Specialist', 'Pharmacokinetics Analyst', 'Generic Drug Developer'],
      certifications: ['Clinical Pharmacology Certification']
    }
  ];

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

                {/* Key Modules */}
                <div className="mb-4 flex-grow-1">
                  <h6 className="fw-semibold mb-3">Key Modules:</h6>
                  <div className="row g-2">
                    {service.modules.slice(0, 6).map((module, i) => (
                      <div className="col-12" key={i}>
                        <div className="d-flex align-items-start gap-2">
                          <FaCheckCircle className="text-success mt-1 flex-shrink-0" size={14} />
                          <span className="small text-muted">{module}</span>
                        </div>
                      </div>
                    ))}
                    {service.modules.length > 6 && (
                      <div className="col-12">
                        <span className="small text-primary fw-semibold">
                          +{service.modules.length - 6} more modules
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Career Paths */}
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
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-5 mb-3">Why Choose Our Clinical Courses?</h2>
          </div>

          <div className="row g-4">
            {[
              { icon: '🔬', title: 'GCP Certified Training', desc: 'Learn from trainers certified in Good Clinical Practice standards' },
              { icon: '📊', title: 'Industry Tools', desc: 'Hands-on experience with Oracle Clinical, Medidata Rave, and more' },
              { icon: '🏥', title: 'Real Trial Experience', desc: 'Work on actual clinical trial documentation and processes' },
              { icon: '🎯', title: 'High Demand Skills', desc: 'Clinical research professionals are in high demand globally' }
            ].map((item, idx) => (
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

      {/* CTA Section */}
      <section 
        className="section text-center" 
        style={{ background: category.gradient, color: 'white' }}
      >
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Ready to Start Your Clinical Research Career?</h2>
          <p className="fs-5 mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join our next batch and get trained by GCP-certified professionals
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
                  <div className="d-flex gap-3 mt-2">
                    <span><FaClock className="me-1" />{selectedService.duration}</span>
                    <span><FaAward className="me-1" />{selectedService.level}</span>
                  </div>
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
                <div className="mb-4">
                  <h5 className="fw-bold mb-3 d-flex align-items-center">
                    <FaBook className="text-primary me-2" />
                    Course Overview
                  </h5>
                  <p className="text-muted lh-lg">{selectedService.fullDesc}</p>
                </div>

                {/* Modules */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">What You'll Learn</h5>
                  <div className="row g-3">
                    {selectedService.modules.map((module, idx) => (
                      <div className="col-md-6" key={idx}>
                        <div className="d-flex align-items-start gap-2">
                          <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                          <span className="text-muted">{module}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
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

                {/* Career & Certifications */}
                <div className="row g-4">
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
                </div>
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

export default ClinicalCourses;