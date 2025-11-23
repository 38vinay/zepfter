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
  FaClock,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaStar
} from "react-icons/fa";

const ClinicalCoursesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   CLINICAL COURSE CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'clinical-research',
      title: 'Clinical Research',
      icon: <FaFlask size={30} />,
      duration: '8 months',
      level: 'Beginner to Advanced',
      salary: '₹4 - ₹10 LPA',
      description:
        'Master the fundamentals of clinical research with comprehensive training in drug discovery, clinical trial phases, Good Clinical Practice (GCP), ethics, regulatory compliance, and study monitoring. Gain hands-on experience in managing clinical trials from protocol development to study closeout.',
      image1: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      details: [
        'Clinical Trial Phases (I-IV)',
        'Good Clinical Practice (GCP)',
        'ICH Guidelines & Compliance',
        'Protocol Development & Review',
        'Informed Consent Process',
        'Study Site Management',
        'Patient Recruitment Strategies',
        'Safety Reporting & AE Management',
        'Regulatory Submissions',
        'Ethics Committee Procedures',
        'Study Monitoring Techniques',
        'Data Collection & Documentation'
      ],
      certifications: ['CCRC (Certified Clinical Research Coordinator)', 'CCRA (Certified Clinical Research Associate)', 'ACRP Certification'],
      careerPaths: ['Clinical Research Coordinator', 'Clinical Research Associate', 'Study Coordinator', 'Clinical Trial Manager', 'Site Manager', 'Clinical Monitor']
    },

    {
      id: 'clinical-data-management',
      title: 'Clinical Data Management',
      icon: <FaVial size={30} />,
      duration: '7 months',
      level: 'Intermediate to Advanced',
      salary: '₹5 - ₹12 LPA',
      description:
        'Become an expert in clinical data management with specialized training in database design, data validation, query management, and CDISC standards. Learn to use industry-leading CDM tools like Oracle Clinical, Medidata Rave, and ensure data quality and integrity throughout clinical trials.',
      image1: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
      details: [
        'CRF Design & Development',
        'Database Design & Build',
        'Edit Check Specifications',
        'Data Validation & Cleaning',
        'Query Management & Resolution',
        'Medical Coding (MedDRA, WHO-DD)',
        'CDISC Standards (SDTM, ADaM)',
        'CDM Tools (Oracle, Medidata Rave)',
        'SAE Reconciliation',
        'Database Lock Procedures',
        'Data Quality Assurance',
        'EDC System Management'
      ],
      certifications: ['CCDM (Certified Clinical Data Manager)', 'SAS Clinical Certification', 'CDISC Specialist'],
      careerPaths: ['Clinical Data Manager', 'Data Coordinator', 'CDM Specialist', 'Data Quality Lead', 'Database Programmer', 'Medical Coder']
    },

    {
      id: 'clinical-trials',
      title: 'Clinical Trials Management',
      icon: <FaClipboardCheck size={30} />,
      duration: '6 months',
      level: 'Intermediate',
      salary: '₹4.5 - ₹11 LPA',
      description:
        'Learn comprehensive clinical trial management from study initiation to closeout. Master site selection, patient recruitment strategies, monitoring visits, source data verification, and regulatory compliance. Understand trial budgets, contracts, and effective communication with investigators and sponsors.',
      image1: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
      details: [
        'Trial Design & Planning',
        'Site Selection & Feasibility',
        'Investigator Meetings',
        'Patient Recruitment & Retention',
        'Monitoring Visit Procedures',
        'Source Data Verification (SDV)',
        'Trial Master File Management',
        'Budget & Contract Negotiation',
        'Risk-Based Monitoring',
        'CAPA Management',
        'Study Closeout Procedures',
        'Vendor Management'
      ],
      certifications: ['PMP (Project Management Professional)', 'Clinical Trial Management Certification', 'SOCRA Certification'],
      careerPaths: ['Clinical Trial Manager', 'Site Coordinator', 'Project Manager', 'Clinical Operations Manager', 'Trial Lead', 'CRA Team Lead']
    },

    {
      id: 'ba-be-studies',
      title: 'Bioavailability & Bioequivalence Studies',
      icon: <FaMicroscope size={30} />,
      duration: '5 months',
      level: 'Advanced',
      salary: '₹5 - ₹13 LPA',
      description:
        'Specialize in BA/BE studies critical for generic drug development. Master pharmacokinetics principles, study design, analytical methods, statistical analysis, and regulatory requirements for FDA and EMA submissions. Understand bioanalytical testing and comparative bioavailability assessments.',
      image1: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=600&q=80',
      details: [
        'Pharmacokinetics Fundamentals',
        'BA/BE Study Design',
        'Crossover & Parallel Designs',
        'Bioanalytical Method Validation',
        'PK Parameter Calculations',
        'Statistical Analysis (90% CI)',
        'FDA & EMA Guidelines',
        'ANDA Submission Requirements',
        'Generic Drug Development',
        'Biowaiver Strategies',
        'Food Effect Studies',
        'Data Interpretation & Reporting'
      ],
      certifications: ['Clinical Pharmacology Certification', 'Bioanalytical Specialist', 'Regulatory Affairs (BA/BE)'],
      careerPaths: ['BA/BE Specialist', 'Pharmacokinetics Analyst', 'Bioanalytical Scientist', 'Generic Drug Developer', 'PK/PD Analyst', 'Clinical Pharmacologist']
    }
  ];

  const stats = [
    { number: '900+', label: 'Students Trained', icon: <FaUsers size={30} /> },
    { number: '93%', label: 'Placement Rate', icon: <FaChartLine size={30} /> },
    { number: '350+', label: 'CRO Partners', icon: <FaBriefcase size={30} /> },
    { number: '12 LPA', label: 'Highest Package', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'GCP Certified Trainers',
      description:
        'Learn from GCP-certified professionals with 10-15 years of hands-on experience in clinical research, working with leading CROs, pharmaceutical companies, and regulatory authorities worldwide.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaAward size={50} />,
      title: 'Industry Certifications',
      description:
        'Complete preparation for CCRC, CCRA, CCDM, SOCRA, and ACRP certifications with mock exams, study materials, and dedicated mentoring to ensure certification success.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaClipboardCheck size={50} />,
      title: 'Live Project Training',
      description:
        'Work on real clinical trial protocols, CRFs, databases, and study documents. Train with actual EDC systems, CTMS platforms, and industry-standard clinical data management tools.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      icon: <FaBriefcase size={50} />,
      title: 'CRO Placement Network',
      description:
        'Direct placement opportunities with 350+ partner CROs and pharmaceutical companies including Quintiles, Covance, Parexel, ICON, PPD, and leading Indian CROs.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *        CLINICAL FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What are the eligibility criteria for clinical research courses?',
      answer:
        'Life science graduates (B.Pharm, M.Pharm, B.Sc/M.Sc in Biotechnology, Microbiology, Biochemistry, etc.) and medical graduates (MBBS, BDS, BAMS, BHMS) are eligible. We also accept graduates from other streams with strong interest in healthcare research.'
    },
    {
      id: 2,
      question: 'How long does it take to become a clinical research professional?',
      answer:
        'Our comprehensive 6-8 month programs include theoretical training, practical exposure, and certification preparation. After completing the course and obtaining certifications like CCRC/CCRA, most students get placed within 2-4 months.'
    },
    {
      id: 3,
      question: 'What is the difference between Clinical Research and Clinical Data Management?',
      answer:
        'Clinical Research focuses on conducting trials, site management, patient recruitment, and monitoring. Clinical Data Management focuses on database design, data validation, query management, and ensuring data quality using specialized CDM tools and CDISC standards.'
    },
    {
      id: 4,
      question: 'Are there good career opportunities in clinical research in India?',
      answer:
        'Yes! India is a major hub for clinical trials with 350+ CROs and pharmaceutical companies. The sector is growing at 12-15% annually with excellent opportunities for CRAs, CRCs, Data Managers, and Clinical Operations professionals.'
    },
    {
      id: 5,
      question: 'What certifications do you prepare students for?',
      answer:
        'We prepare for CCRC (Clinical Research Coordinator), CCRA (Clinical Research Associate), CCDM (Clinical Data Manager), SOCRA, ACRP, and specialized certifications in Pharmacovigilance and Regulatory Affairs.'
    },
    {
      id: 6,
      question: 'Do you provide hands-on training with EDC systems?',
      answer:
        'Yes! Students get extensive hands-on training with industry-standard EDC systems like Medidata Rave, Oracle Clinical, OpenClinica, and CTMS platforms used by major CROs globally.'
    },
    {
      id: 7,
      question: 'What salary packages can freshers expect?',
      answer:
        'Freshers in clinical research typically earn ₹4-6 LPA as CRCs/Junior CRAs, while CDM specialists start at ₹5-7 LPA. Experienced professionals with certifications can earn ₹10-15 LPA at senior positions.'
    },
    {
      id: 8,
      question: 'Is work-from-home possible in clinical research?',
      answer:
        'Yes! Clinical Data Management and remote monitoring roles offer significant work-from-home opportunities. Many CROs now offer hybrid and remote positions for data managers, medical writers, and regulatory affairs professionals.'
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
              CLINICAL COURSES
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              ZEPFTER's Clinical Courses prepare you for high-impact careers in clinical research, data management, clinical trials, and bioequivalence studies. Our comprehensive programs combine GCP-certified training with hands-on experience in real trial protocols, EDC systems, and regulatory compliance. With expert trainers from leading CROs and 93% placement success, we prepare you for exciting opportunities in pharmaceutical research and drug development.
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

      {/* COURSE ACCORDION */}
      <section style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Clinical Course Offerings</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Choose from our advanced clinical research and data management programs</p>
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
                      View Curriculum {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#FBD21A' }}>What You Will Learn</h3>

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

                        {/* Certifications */}
                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Certifications Prepared</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.certifications.map((cert, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '25px', border: '1px solid rgba(0,170,138,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {cert}
                            </span>
                          ))}
                        </div>

                        {/* Career Paths */}
                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Career Opportunities</h4>
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

      {/* WHY CHOOSE SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(0,170,138,0.1)' }}>
        <div className="container">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white">Why Choose ZEPFTER Clinical Courses?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Transform your clinical research career with industry-leading training and CRO placements.
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
              Everything you need to know before starting your clinical research journey.
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

export default ClinicalCoursesPage;