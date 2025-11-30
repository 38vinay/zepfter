import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaPills, 
  FaHandshake,
  FaClipboardCheck, 
  FaIndustry,
  FaFileAlt,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaChartLine,
  FaGlobe
} from "react-icons/fa";

const PharmaConsultingServices = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   PHARMA CONSULTING SERVICES
   * ------------------------ */
  const services = [
    {
      id: 'quality-assurance',
      title: 'Quality Assurance & GxP Compliance',
      icon: <FaClipboardCheck size={30} />,
      duration: 'Compliant',
      level: 'Global',
      salary: 'Standard',
      description:
        'Ensure your pharmaceutical operations meet the highest global standards. We provide comprehensive QA consulting, GxP audits, and quality management system (QMS) implementation to ensure compliance with FDA, EMA, and other regulatory bodies.',
      image1: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
      details: [
        'QMS Implementation & Optimization',
        'GxP Audits (GMP, GLP, GCP, GDP)',
        'Mock Inspections & Readiness',
        'Data Integrity Assessments',
        'CAPA Management & Remediation',
        'Vendor Qualification & Audits',
        'Risk Management (ICH Q9)',
        'Standard Operating Procedures (SOPs)',
        'Training & Competency Assessment',
        'Validation Master Plan (VMP)',
        'Change Control Management',
        'Quality Culture Transformation'
      ],
      certifications: ['ISO 9001', '21 CFR Part 11', 'EU GMP'],
      careerPaths: ['Compliance Assurance', 'Audit Readiness', 'Quality Excellence', 'Risk Mitigation']
    },

    {
      id: 'regulatory-affairs',
      title: 'Regulatory Affairs Strategy',
      icon: <FaFileAlt size={30} />,
      duration: 'Strategic',
      level: 'Expert',
      salary: 'Approved',
      description:
        'Navigate the complex regulatory landscape with our expert guidance. We support your product lifecycle from development to post-market maintenance, ensuring successful submissions and approvals globally.',
      image1: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      details: [
        'Global Regulatory Strategy',
        'IND/NDA/ANDA/BLA Submissions',
        'MAA Submissions (Europe)',
        'Health Authority Interactions',
        'CMC Writing & Review',
        'Labeling & Advertising Review',
        'Regulatory Intelligence',
        'Lifecycle Management (Variations, Renewals)',
        'Orphan Drug Designations',
        'Pediatric Investigation Plans',
        'Gap Analysis & Due Diligence',
        'eCTD Publishing'
      ],
      certifications: ['FDA Guidelines', 'EMA Regulations', 'ICH Standards'],
      careerPaths: ['Market Access', 'Submission Success', 'Regulatory Compliance', 'Strategic Planning']
    },

    {
      id: 'validation-qualification',
      title: 'Validation & Qualification',
      icon: <FaCheckCircle size={30} />,
      duration: 'Verified',
      level: 'Robust',
      salary: 'Proven',
      description:
        'Validate your processes, equipment, and systems with confidence. Our validation experts ensure your manufacturing and laboratory operations are qualified and capable of consistently producing quality products.',
      image1: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80',
      details: [
        'Equipment Qualification (IQ/OQ/PQ)',
        'Process Validation',
        'Cleaning Validation',
        'Computer System Validation (CSV)',
        'Method Validation',
        'Utility System Qualification',
        'Transport & Cold Chain Validation',
        'Validation Master Plans',
        'Risk-Based Validation Approach',
        'Periodic Reviews',
        'Legacy System Remediation',
        'Automation Validation'
      ],
      certifications: ['GAMP 5', 'ASTM E2500', 'Annex 11'],
      careerPaths: ['Process Reliability', 'System Compliance', 'Operational Integrity', 'Quality Control']
    },

    {
      id: 'manufacturing-excellence',
      title: 'Manufacturing Excellence',
      icon: <FaIndustry size={30} />,
      duration: 'Efficient',
      level: 'Lean',
      salary: 'Productive',
      description:
        'Optimize your manufacturing operations for efficiency and quality. We apply Lean Six Sigma principles and industry best practices to improve yield, reduce waste, and enhance operational performance.',
      image1: 'https://images.unsplash.com/photo-1583912267550-bd9196830a0b?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      details: [
        'Operational Excellence (OpEx)',
        'Lean Six Sigma Implementation',
        'Process Optimization',
        'Tech Transfer Support',
        'Supply Chain Optimization',
        'Capacity Planning',
        'Root Cause Analysis',
        'Shop Floor Management',
        'Cost Reduction Initiatives',
        'Digital Manufacturing Strategy',
        'Facility Design & Layout',
        'Contract Manufacturing (CMO) Oversight'
      ],
      certifications: ['Lean Six Sigma', 'Operational Excellence', 'Supply Chain Mgmt'],
      careerPaths: ['Efficiency', 'Cost Savings', 'Productivity', 'Agility']
    }
  ];

  const stats = [
    { number: '300+', label: 'Audits Conducted', icon: <FaClipboardCheck size={30} /> },
    { number: '50+', label: 'Successful Approvals', icon: <FaFileAlt size={30} /> },
    { number: '20+', label: 'Countries Served', icon: <FaGlobe size={30} /> },
    { number: '100%', label: 'Compliance Rate', icon: <FaCheckCircle size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaUsers size={50} />,
      title: 'Industry Veterans',
      description:
        'Our consultants are former regulators and industry leaders with decades of experience in pharmaceutical quality and operations.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaGlobe size={50} />,
      title: 'Global Perspective',
      description:
        'We understand the nuances of global regulations and help you navigate the requirements of FDA, EMA, PMDA, and other major agencies.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaHandshake size={50} />,
      title: 'Tailored Solutions',
      description:
        'We don\'t believe in one-size-fits-all. We customize our consulting services to meet your specific business needs and challenges.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    },
    {
      icon: <FaChartLine size={50} />,
      title: 'Results Driven',
      description:
        'We focus on delivering tangible results—whether it\'s a successful inspection, a product approval, or improved operational metrics.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80'
    }
  ];

  /** ------------------------
   *   PHARMA FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'Can you help us prepare for an upcoming FDA inspection?',
      answer:
        'Yes, we specialize in inspection readiness. We conduct mock inspections, identify gaps, provide remediation plans, and train your staff to handle the inspection confidently.'
    },
    {
      id: 2,
      question: 'Do you support medical device companies as well?',
      answer:
        'Yes, we have expertise in medical device regulations (ISO 13485, MDR/IVDR, 21 CFR Part 820) and can support quality and regulatory needs for device manufacturers.'
    },
    {
      id: 3,
      question: 'What is your approach to Data Integrity?',
      answer:
        'We take a holistic approach to Data Integrity, assessing people, processes, and technology. We help you implement ALCOA+ principles and remediate any data integrity issues.'
    },
    {
      id: 4,
      question: 'Can you assist with responding to a Warning Letter or 483?',
      answer:
        'Absolutely. We have extensive experience in helping companies respond to regulatory observations and warning letters, developing comprehensive CAPA plans to address the issues.'
    },
    {
      id: 5,
      question: 'Do you offer remote consulting services?',
      answer:
        'Yes, we offer remote audits, document reviews, and consulting sessions. Our secure digital platforms ensure seamless collaboration and data protection.'
    },
    {
      id: 6,
      question: 'How do you handle confidential information?',
      answer:
        'We treat client confidentiality with the utmost importance. All our consultants are bound by strict non-disclosure agreements, and we have robust data security measures in place.'
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>
      
      {/* HERO SECTION */}
        <section 
  style={{
    background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '100px 20px 80px',
    position: 'relative',
  }}
>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '20px' }}>
              <FaPills size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              PHARMA CONSULTING
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER provides strategic consulting services to the pharmaceutical and life sciences industry. From regulatory strategy and quality assurance to manufacturing excellence and validation, we partner with you to ensure compliance, mitigate risk, and accelerate your product's journey to market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
          <section style={{ padding: '80px 20px', background: 'rgba(0,0,0,0.3)' }}>
            <div className="container">
              <div className="row g-4">
                {stats.map((stat, idx) => (
                  <div className="col-lg-3 col-md-6" key={idx}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      style={{
                        background: 'rgba(0,170,138,0.2)',
                        border: '2px solid rgba(251,210,26,0.3)',
                        borderRadius: '20px',
                        padding: '40px 20px',
                        textAlign: 'center',
                        color: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ color: '#FBD21A', marginBottom: '20px' }}>
                        {stat.icon}
                      </div>
                      <div className="display-4 fw-bold" style={{ color: '#00AA8A' }}>{stat.number}</div>
                      <div style={{ opacity: 0.9 }}>{stat.label}</div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* SERVICES ACCORDION */}
          <section style={{ padding: '80px 20px' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
    
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
                <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Consulting Services</h2>
                <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Expert guidance for your quality and regulatory needs</p>
              </motion.div>
    
              {services.map((service, idx) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-4">
    
                  <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
    
                    {/* Service Header */}
                    <div
                      onClick={() => toggleService(service.id)}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                        gap: '30px',
                        padding: '40px',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      {/* Images */}
                      <div style={{
                        order: idx % 2 === 0 ? 2 : 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px'
                      }}>
                        <motion.div whileHover={{ scale: 1.05 }} style={{ borderRadius: '15px', height: '200px', overflow: 'hidden' }}>
                          <img src={service.image1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} style={{ borderRadius: '15px', height: '200px', overflow: 'hidden' }}>
                          <img src={service.image2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                      </div>
    
                      {/* Text Content */}
                      <div style={{ order: idx % 2 === 0 ? 1 : 2, color: 'white' }}>
                        <div style={{ marginBottom: '10px', color: '#FBD21A' }}>{service.icon}</div>
    
                        <h2 className="fw-bold mb-3">{service.title}</h2>
    
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                          
                          <span style={{ padding: '8px 16px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
                            <FaAward size={14} /> {service.level}
                          </span>
                          
                        </div>
    
                        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{service.description}</p>
    
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FBD21A', fontWeight: 600 }}>
                          View Services {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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
                          style={{ background: 'rgba(0,0,0,0.3)' }}
                        >
                          <div style={{ padding: '40px', color: 'white' }}>
    
                            <h3 className="fw-bold mb-4" style={{ color: '#FBD21A' }}>What We Deliver</h3>
    
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '15px', marginBottom: '30px' }}>
                              {service.details.map((detail, idx) => (
                                <motion.div
                                  key={idx}
                                  whileHover={{ x: 5 }}
                                  style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                  <FaCheckCircle size={16} style={{ color: '#00AA8A', marginRight: '8px' }} />
                                  {detail}
                                </motion.div>
                              ))}
                            </div>
    
                            {/* Standards */}
                            <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Standards & Guidelines</h4>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                              {service.certifications.map((cert, idx) => (
                                <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '25px', border: '1px solid rgba(0,170,138,0.5)' }}>
                                  <FaAward style={{ marginRight: '8px' }} /> {cert}
                                </span>
                              ))}
                            </div>
    
                            {/* Benefits */}
                            <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Business Value</h4>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                              {service.careerPaths.map((career, idx) => (
                                <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                                  {career}
                                </span>
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
                              >
                                Get Expert Advice
                              </Link>
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
    
          {/* WHY CHOOSE SECTION */}
          <section style={{ padding: '80px 20px', background: 'rgba(0,170,138,0.1)' }}>
            <div className="container">
    
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
                <h2 className="fw-bold text-white">Why Partner with ZEPFTER?</h2>
                <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
                  We deliver compliance, quality, and operational excellence.
                </p>
              </motion.div>
    
              <div className="row g-4">
                {whyChoose.map((item, idx) => (
                  <div className="col-lg-6" key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.4 }}
                      style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}
                    >
                      <div className="row g-0">
                        <div className="col-md-5">
                          <img src={item.image} alt="" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-md-7">
                          <div style={{ padding: '30px', color: 'white' }}>
                            <div style={{ color: '#FBD21A' }}>{item.icon}</div>
                            <h4 className="fw-bold mt-2">{item.title}</h4>
                            <p style={{ opacity: 0.8 }}>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
    
            </div>
          </section>
    
          {/* FAQ SECTION */}
          <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
            <div className="container">
    
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
                <h2 className="fw-bold text-white">Frequently Asked Questions</h2>
                <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
                  Common questions about our Pharma Consulting Services.
                </p>
              </motion.div>
    
              <div className="accordion" style={{ maxWidth: '900px', margin: 'auto' }}>
                {faqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    style={{
                      background: 'rgba(0,0,0,0.3)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      marginBottom: '15px'
                    }}
                  >
                    <div
                      onClick={() => toggleFAQ(faq.id)}
                      style={{
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'white'
                      }}
                    >
                      <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{faq.question}</span>
                      {expandedFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
    
                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ padding: '0 20px 20px', color: '#fff', opacity: '0.9' }}
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
    
            </div>
          </section>
     
           
     
         </div>
           );
};

export default PharmaConsultingServices;