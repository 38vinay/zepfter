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
  FaCheckCircle,
  FaAward,
  FaBriefcase,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaHandshake
} from "react-icons/fa";

const ClinicalResearchServices = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   CLINICAL RESEARCH SERVICES
   * ------------------------ */
  const services = [
    {
      id: 'clinical-operations',
      title: 'Clinical Operations',
      icon: <FaClipboardCheck size={30} />,
      duration: 'Phase I-IV',
      level: 'Global Trials',
      salary: 'Efficiency',
      description:
        'End-to-end clinical trial management services ensuring study timelines, budget adherence, and data quality. We provide experienced CRAs, project managers, and site support staff for seamless trial execution.',
      image1: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      details: [
        'Study Feasibility & Site Selection',
        'Project Management',
        'Clinical Monitoring (On-site & Remote)',
        'Patient Recruitment & Retention',
        'Vendor Management',
        'Risk-Based Monitoring',
        'Trial Master File (TMF) Management',
        'Investigator Meeting Organization',
        'Site Initiation & Close-out',
        'Budget & Contract Negotiation',
        'Ethics Committee Submissions',
        'Audit Readiness'
      ],
      certifications: ['ICH-GCP Compliant', '21 CFR Part 11', 'ISO 14155'],
      careerPaths: ['Trial Management', 'Site Monitoring', 'Project Oversight', 'Vendor Coordination']
    },

    {
      id: 'clinical-data-management',
      title: 'Clinical Data Management',
      icon: <FaVial size={30} />,
      duration: 'Data Integrity',
      level: 'High Quality',
      salary: 'Accuracy',
      description:
        'Comprehensive data management solutions from database build to lock. We ensure your clinical data is accurate, complete, and ready for statistical analysis using industry-leading EDC platforms.',
      image1: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
      details: [
        'eCRF Design & Development',
        'Database Build & Validation',
        'Data Management Plan (DMP)',
        'Data Validation Specifications',
        'Discrepancy Management',
        'Medical Coding (MedDRA, WHO-DD)',
        'SAE Reconciliation',
        'External Data Integration',
        'Database Lock & Archival',
        'Data Quality Assessments',
        'EDC User Management',
        'CDISC Implementation'
      ],
      certifications: ['CDISC Standards', 'GCDMP Guidelines', 'HIPAA Compliant'],
      careerPaths: ['Database Design', 'Data Validation', 'Medical Coding', 'Quality Control']
    },

    {
      id: 'biostatistics',
      title: 'Biostatistics & Programming',
      icon: <FaChartLine size={30} />,
      duration: 'Statistical Power',
      level: 'Advanced Analysis',
      salary: 'Insight',
      description:
        'Expert statistical consulting and SAS programming services. We provide robust study designs, statistical analysis plans, and CDISC-compliant datasets for regulatory submissions.',
      image1: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
      details: [
        'Sample Size Calculation',
        'Statistical Analysis Plan (SAP)',
        'Randomization Schedules',
        'TLF Generation (Tables, Listings, Figures)',
        'CDISC SDTM & ADaM Datasets',
        'Interim Analysis',
        'CSR Statistical Sections',
        'ISS/ISE Integration',
        'DSMB Support',
        'PK/PD Analysis',
        'Adaptive Trial Design',
        'Regulatory Response Support'
      ],
      certifications: ['SAS Certified', 'CDISC SDTM/ADaM', 'FDA Guidance'],
      careerPaths: ['Study Design', 'Statistical Analysis', 'SAS Programming', 'Data Visualization']
    },

    {
      id: 'medical-monitoring',
      title: 'Medical Monitoring',
      icon: <FaMicroscope size={30} />,
      duration: 'Safety First',
      level: 'Physician Led',
      salary: 'Patient Care',
      description:
        'Physician-led medical monitoring to ensure protocol adherence and subject safety. Our medical monitors provide 24/7 support to investigative sites and project teams.',
      image1: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=600&q=80',
      details: [
        'Medical Monitoring Plan',
        '24/7 Medical Coverage',
        'Eligibility Review',
        'Protocol Deviation Review',
        'Safety Signal Review',
        'Coding Review',
        'Medical Training for Sites',
        'Investigator Brochure Review',
        'Safety Management Plan',
        'Benefit-Risk Assessment',
        'Regulatory Interaction Support',
        'Patient Safety Oversight'
      ],
      certifications: ['Board Certified MDs', 'GCP Training', 'Safety Guidelines'],
      careerPaths: ['Medical Oversight', 'Safety Review', 'Protocol Compliance', 'Site Support']
    }
  ];

  const stats = [
    { number: '200+', label: 'Clinical Trials', icon: <FaFlask size={30} /> },
    { number: '50+', label: 'Global Clients', icon: <FaGlobe size={30} /> },
    { number: '99%', label: 'Data Accuracy', icon: <FaCheckCircle size={30} /> },
    { number: '25+', label: 'Countries', icon: <FaUsers size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaUsers size={50} />,
      title: 'Experienced Team',
      description:
        'Our clinical operations team averages 10+ years of experience across various therapeutic areas and trial phases.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaGlobe size={50} />,
      title: 'Global Reach',
      description:
        'We have the capability to manage multi-center, multi-national trials with local regulatory expertise in key regions.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaClipboardCheck size={50} />,
      title: 'Technology Driven',
      description:
        'We leverage cutting-edge eClinical technologies (EDC, CTMS, eTMF) to streamline trial management and data oversight.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      icon: <FaHandshake size={50} />,
      title: 'Flexible Partnership',
      description:
        'We act as an extension of your team, offering flexible resourcing models from FSP to full-service outsourcing.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *        CLINICAL FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What phases of clinical trials do you support?',
      answer:
        'We support Phase I through Phase IV clinical trials, as well as observational studies and registries, across a wide range of therapeutic indications.'
    },
    {
      id: 2,
      question: 'Do you offer rescue study services?',
      answer:
        'Yes, we specialize in rescue studies. Our rapid response team can step in to recover failing timelines, address data quality issues, and get your trial back on track.'
    },
    {
      id: 3,
      question: 'What EDC systems do you work with?',
      answer:
        'Our data management team is proficient in all major EDC platforms including Medidata Rave, Oracle InForm, OpenClinica, and others. We can also build custom databases.'
    },
    {
      id: 4,
      question: 'Can you handle medical device trials?',
      answer:
        'Yes, we have specific expertise in medical device clinical investigations and are well-versed in ISO 14155 and MDR requirements.'
    },
    {
      id: 5,
      question: 'How do you ensure site compliance?',
      answer:
        'We employ a risk-based monitoring approach combined with robust site management. Our CRAs build strong relationships with sites to ensure protocol adherence and high-quality data.'
    },
    {
      id: 6,
      question: 'Do you provide CDISC compliant datasets?',
      answer:
        'Yes, our biostatistics team delivers fully CDISC-compliant SDTM and ADaM datasets ready for submission to the FDA and PMDA.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.3) 0%, rgba(30,54,121,0.35) 50%, rgba(10,10,31,0.3) 100%), url("https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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
              <FaFlask size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              CLINICAL RESEARCH SERVICES
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              ZEPFTER delivers excellence in clinical trial management and data solutions. We accelerate your drug development journey with efficient clinical operations, high-quality data management, and expert biostatistics. From startup to submission, our dedicated team ensures your trials are executed with precision, compliance, and patient safety at the forefront.
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
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Clinical Capabilities</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Comprehensive solutions for your clinical development needs</p>
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
                      View Capabilities {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#FBD21A' }}>Key Deliverables</h3>

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
                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Compliance Standards</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.certifications.map((cert, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '25px', border: '1px solid rgba(0,170,138,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {cert}
                            </span>
                          ))}
                        </div>

                        {/* Focus Areas */}
                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Service Focus</h4>
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
                            Request Proposal
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
              We deliver quality, compliance, and efficiency to accelerate your clinical development.
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
              Common questions about our Clinical Research Services.
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

export default ClinicalResearchServices;