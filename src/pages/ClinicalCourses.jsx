import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaFlask, 
  FaVial, 
  FaClipboardCheck, 
  FaMicroscope,
  FaCheckCircle
} from "react-icons/fa";

const ClinicalCoursesAccordion = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 'clinical-research',
      title: 'Clinical Research',
      icon: <FaFlask size={30} />,
      description: 'Comprehensive training in clinical research covering all phases of clinical trials, GCP guidelines, ethics, and regulatory compliance for pharmaceutical development.',
      image1: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      details: [
        'Clinical Trial Phases (I-IV)',
        'Good Clinical Practice (GCP)',
        'Ethics & Regulations',
        'Protocol Development',
        'Study Monitoring',
        'Safety Reporting',
        'Informed Consent',
        'Regulatory Submissions',
        'Site Management',
        'Patient Recruitment',
        'Data Collection',
        'ICH Guidelines'
      ]
    },
    {
      id: 'clinical-data-management',
      title: 'Clinical Data Management',
      icon: <FaVial size={30} />,
      description: 'Master clinical data management tools, database design, query management, data validation, and quality assurance for clinical trials.',
      image1: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
      details: [
        'CRF Design & Development',
        'Database Design & Build',
        'Query Management',
        'Data Validation & Cleaning',
        'CDM Tools (Oracle, Medidata)',
        'SAE Reconciliation',
        'Data Quality Assurance',
        'Database Lock Procedures',
        'CDISC Standards',
        'Data Management Plans',
        'Medical Coding',
        'EDC Systems'
      ]
    },
    {
      id: 'clinical-trials',
      title: 'Clinical Trials',
      icon: <FaClipboardCheck size={30} />,
      description: 'Learn comprehensive clinical trial management, site coordination, patient recruitment strategies, and monitoring procedures.',
      image1: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
      details: [
        'Trial Design & Planning',
        'Site Selection & Management',
        'Patient Recruitment & Retention',
        'Monitoring Visits',
        'Source Data Verification',
        'Trial Master File Management',
        'Budget & Contract Management',
        'Closeout Procedures',
        'Investigator Meetings',
        'Study Documentation',
        'Protocol Amendments',
        'Risk-Based Monitoring'
      ]
    },
    {
      id: 'ba-be-studies',
      title: 'Bioavailability & Bioequivalence Studies',
      icon: <FaMicroscope size={30} />,
      description: 'Specialized training in BA/BE studies for generic drug development with pharmacokinetics and regulatory requirements.',
      image1: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=600&q=80',
      details: [
        'Pharmacokinetics Principles',
        'BA/BE Study Design',
        'Analytical Method Validation',
        'Statistical Analysis',
        'Regulatory Guidelines (FDA, EMA)',
        'Generic Drug Development',
        'Study Protocol Development',
        'Data Interpretation',
        'ANDA Submissions',
        'PK Parameter Calculations',
        'Bioanalytical Testing',
        'Comparative Studies'
      ]
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>
      {/* Hero Section */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #0a0a1f 0%, #00AA8A 50%, #0a0a1f 100%)',
          padding: '100px 20px 80px',
          position: 'relative'
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '20px' }}>
              <FaFlask size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold mb-4 text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px' }}>
              CLINICAL COURSES
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.8' }}>
              Advanced clinical research, data management, and trial management programs for pharmaceutical and biotechnology industries with GCP certification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ marginBottom: '30px' }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Service Header */}
                <div
                  onClick={() => toggleService(service.id)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                    gap: '30px',
                    alignItems: 'center',
                    padding: '40px',
                    cursor: 'pointer'
                  }}
                >
                  {/* Images Section */}
                  <div 
                    style={{ 
                      order: idx % 2 === 0 ? 2 : 1,
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '15px'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      style={{
                        borderRadius: '15px',
                        overflow: 'hidden',
                        border: '3px solid rgba(0, 170, 138, 0.3)',
                        height: '200px'
                      }}
                    >
                      <img 
                        src={service.image1} 
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      style={{
                        borderRadius: '15px',
                        overflow: 'hidden',
                        border: '3px solid rgba(0, 170, 138, 0.3)',
                        height: '200px'
                      }}
                    >
                      <img 
                        src={service.image2} 
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div style={{ order: idx % 2 === 0 ? 1 : 2, color: 'white' }}>
                    <div style={{ marginBottom: '15px', color: '#FBD21A' }}>
                      {service.icon}
                    </div>
                    <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
                      {service.title}
                    </h2>
                    <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.7', marginBottom: '20px' }}>
                      {service.description}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FBD21A', fontWeight: '600' }}>
                      <span>View Curriculum</span>
                      {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div style={{ padding: '40px', color: 'white' }}>
                        <h3 className="fw-bold mb-4" style={{ fontSize: '1.5rem', color: '#FBD21A' }}>
                          What You'll Learn
                        </h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                          {service.details.map((detail, dIdx) => (
                            <motion.div
                              key={dIdx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dIdx * 0.05 }}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '12px',
                                padding: '15px',
                                background: 'rgba(0, 170, 138, 0.2)',
                                borderRadius: '12px',
                                border: '1px solid rgba(0, 170, 138, 0.3)'
                              }}
                              whileHover={{
                                background: 'rgba(251, 210, 26, 0.2)',
                                borderColor: 'rgba(251, 210, 26, 0.5)',
                                x: 5
                              }}
                            >
                              <FaCheckCircle style={{ color: '#FBD21A', marginTop: '3px', flexShrink: 0 }} size={18} />
                              <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>{detail}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                          <Link
                            to="/contact"
                            style={{
                              padding: '15px 40px',
                              background: 'linear-gradient(135deg, #00AA8A, #1E3679)',
                              color: 'white',
                              textDecoration: 'none',
                              borderRadius: '50px',
                              fontWeight: '600',
                              fontSize: '1rem',
                              transition: 'all 0.3s ease',
                              display: 'inline-block'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-3px)';
                              e.target.style.boxShadow = '0 10px 30px rgba(251, 210, 26, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            Enroll Now
                          </Link>
                          <button
                            style={{
                              padding: '15px 40px',
                              background: 'transparent',
                              color: 'white',
                              border: '2px solid white',
                              borderRadius: '50px',
                              fontWeight: '600',
                              fontSize: '1rem',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = 'white';
                              e.target.style.color = '#00AA8A';
                              e.target.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.background = 'transparent';
                              e.target.style.color = 'white';
                              e.target.style.transform = 'translateY(0)';
                            }}
                          >
                            Download Syllabus
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(135deg, #00AA8A 0%, #1E3679 100%)' }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4 text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to Start Your Clinical Research Career?
            </h2>
            <p className="text-white mb-5" style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px' }}>
              Join our next batch and get GCP certified with 100% placement assistance
            </p>
            <Link
              to="/contact"
              style={{
                padding: '18px 45px',
                background: 'white',
                color: '#00AA8A',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClinicalCoursesAccordion;