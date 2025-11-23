import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaPills, 
  FaVial, 
  FaClipboardCheck, 
  FaMicroscope,
  FaIndustry,
  FaFileAlt,
  FaCheckCircle,
  FaAward,
  FaClock,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

const PharmaceuticalSkillsPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   PHARMACEUTICAL CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      icon: <FaClipboardCheck size={30} />,
      duration: '6 months',
      level: 'Intermediate to Advanced',
      salary: '₹4 - ₹12 LPA',
      description:
        'Master Quality Assurance principles with comprehensive training in Quality Management Systems, GMP compliance, pharmaceutical validations, and audit procedures. Learn to ensure product quality, regulatory compliance, and implement quality systems in pharmaceutical manufacturing environments.',
      image1: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
      details: [
        'Quality Management Systems (QMS)',
        'Good Manufacturing Practices (GMP)',
        'Pharmaceutical Validations',
        'Pharmaceutical Qualifications (IQ, OQ, PQ)',
        'Audit & Compliance Management',
        'Document Control Management',
        'Change Control Procedures',
        'Deviation Management',
        'CAPA (Corrective & Preventive Actions)',
        'Quality Risk Management (ICH Q9)',
        'Validation Master Plan (VMP)',
        'Standard Operating Procedures (SOPs)'
      ],
      certifications: ['ASQ Certified Quality Auditor (CQA)', 'Pharmaceutical Quality Professional', 'ISO 9001 Lead Auditor'],
      careerPaths: ['QA Manager', 'QA Executive', 'Quality Auditor', 'Validation Specialist', 'Compliance Manager', 'QA Documentation Specialist']
    },

    {
      id: 'quality-control',
      title: 'Quality Control & Pharmaceutical Analysis',
      icon: <FaVial size={30} />,
      duration: '6 months',
      level: 'Intermediate to Advanced',
      salary: '₹4 - ₹13 LPA',
      description:
        'Become an expert in pharmaceutical analysis and quality control with hands-on training in analytical techniques, laboratory management, and Good Laboratory Practices. Master HPLC, GC, spectroscopy, and other analytical methods essential for pharmaceutical testing and release.',
      image1: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      details: [
        'Pharmaceutical Analysis Techniques',
        'HPLC (High-Performance Liquid Chromatography)',
        'Gas Chromatography (GC)',
        'UV-Visible Spectroscopy',
        'Laboratory Information Management System (LIMS)',
        'Good Laboratory Practices (GLP)',
        'Analytical Method Validation',
        'Stability Testing & Studies',
        'Raw Material Testing',
        'In-Process Quality Control',
        'Finished Product Testing',
        'Out of Specification (OOS) Investigation'
      ],
      certifications: ['Pharmaceutical Analyst Certification', 'LIMS Specialist', 'Analytical Method Validation Expert'],
      careerPaths: ['QC Analyst', 'QC Manager', 'Analytical Chemist', 'Laboratory Manager', 'Stability Testing Specialist', 'Method Development Scientist']
    },

    {
      id: 'regulatory-affairs',
      title: 'Regulatory Affairs',
      icon: <FaFileAlt size={30} />,
      duration: '7 months',
      level: 'Advanced',
      salary: '₹5 - ₹15 LPA',
      description:
        'Master regulatory affairs with comprehensive training in drug registration, regulatory submissions, and compliance. Learn FDA, EMA, and ICH guidelines for pharmaceutical product approvals, including IND, NDA, ANDA, and international regulatory requirements.',
      image1: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      details: [
        'Drug Registration & Approval Process',
        'Regulatory Submissions (IND, NDA, ANDA)',
        'FDA Regulations & Guidelines',
        'EMA Regulations & Guidelines',
        'ICH Guidelines (Q, E, S, M)',
        'CMC (Chemistry, Manufacturing, Controls)',
        'Regulatory Strategy Development',
        'Post-Approval Changes (PAC)',
        'Health Authority Interactions',
        'Regulatory Intelligence',
        'Product Lifecycle Management',
        'Global Regulatory Requirements'
      ],
      certifications: ['RAC (Regulatory Affairs Certification)', 'FDA Regulatory Specialist', 'Global Regulatory Professional'],
      careerPaths: ['Regulatory Affairs Manager', 'Regulatory Affairs Specialist', 'Regulatory Submission Manager', 'CMC Specialist', 'Regulatory Compliance Officer']
    },

    {
      id: 'manufacturing-operations',
      title: 'Manufacturing Operations',
      icon: <FaIndustry size={30} />,
      duration: '5-8 months',
      level: 'Beginner to Intermediate',
      salary: '₹3.5 - ₹10 LPA',
      description:
        'Gain expertise in pharmaceutical manufacturing operations with training in production processes, equipment operation, GMP compliance, and warehouse management. Learn batch manufacturing, packaging operations, and pharmaceutical supply chain management.',
      image1: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80',
      details: [
        'Pharmaceutical Manufacturing Processes',
        'Good Manufacturing Practices (GMP)',
        'Batch Manufacturing Operations',
        'Equipment Operation & Maintenance',
        'Pharmaceutical Warehouse Management',
        'Inventory Management',
        'Packaging Operations',
        'Material Management',
        'Production Planning & Scheduling',
        'Batch Record Review',
        'Equipment Qualification',
        'Process Troubleshooting'
      ],
      certifications: ['GMP Certification', 'Manufacturing Excellence Professional', 'Lean Six Sigma Green Belt'],
      careerPaths: ['Production Officer', 'Manufacturing Manager', 'Production Supervisor', 'Warehouse Manager', 'Supply Chain Manager', 'Operations Executive']
    },

    {
      id: 'research-development',
      title: 'Research & Development',
      icon: <FaMicroscope size={30} />,
      duration: '8 months',
      level: 'Advanced',
      salary: '₹6 - ₹18 LPA',
      description:
        'Master pharmaceutical R&D with training in formulation development, pharmaceutical investigations, stability studies, and pharmaceutical informatics. Learn drug development processes, formulation optimization, and scale-up from laboratory to commercial production.',
      image1: 'https://images.unsplash.com/photo-1583912267550-bd9196830a0b?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      details: [
        'Pharmaceutical Formulation Development',
        'Pharmaceutical Investigation',
        'Pharmaceutical Stability Solutions',
        'Preformulation Studies',
        'Pharmaceutical Informatics',
        'Laboratory Informatics',
        'Drug Development Process',
        'Scale-Up & Technology Transfer',
        'Formulation Optimization',
        'Excipient Selection',
        'Analytical Method Development',
        'Process Development'
      ],
      certifications: ['Pharmaceutical R&D Professional', 'Formulation Scientist Certification', 'Drug Development Specialist'],
      careerPaths: ['R&D Scientist', 'Formulation Scientist', 'Research Associate', 'Product Development Manager', 'Process Development Engineer']
    },

    {
      id: 'pharmaceutical-systems',
      title: 'Pharmaceutical Systems & Documentation',
      icon: <FaPills size={30} />,
      duration: '5 months',
      level: 'Intermediate',
      salary: '₹4 - ₹11 LPA',
      description:
        'Specialize in pharmaceutical documentation systems, LIMS, calibrations, and Good Documentation Practices. Master document control, laboratory information systems, equipment calibration, and compliance documentation essential for pharmaceutical operations.',
      image1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
      details: [
        'Document Control Management',
        'Good Document Practices (GDP)',
        'Laboratory Information Management System (LIMS)',
        'Pharmaceutical Calibrations',
        'Calibration Management',
        'Equipment Qualification Documentation',
        'SOP Writing & Management',
        'Electronic Batch Records (EBR)',
        'Data Integrity & ALCOA Principles',
        'Pharmaceutical Informatics',
        'Laboratory Informatics',
        'Audit Trail Management'
      ],
      certifications: ['Document Control Specialist', 'LIMS Administrator', 'Calibration Management Professional'],
      careerPaths: ['Document Controller', 'LIMS Administrator', 'Calibration Specialist', 'QA Documentation Officer', 'Systems Administrator']
    }
  ];

  const stats = [
    { number: '800+', label: 'Students Trained', icon: <FaUsers size={30} /> },
    { number: '92%', label: 'Placement Rate', icon: <FaChartLine size={30} /> },
    { number: '300+', label: 'Pharma Companies', icon: <FaBriefcase size={30} /> },
    { number: '15 LPA', label: 'Highest Package', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'GMP/GLP Certified Trainers',
      description:
        'Learn from pharmaceutical professionals with 10-15 years of experience in leading pharma companies including Pfizer, Dr. Reddy\'s, Sun Pharma, Cipla, and other major pharmaceutical manufacturers.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaAward size={50} />,
      title: 'Industry Certifications',
      description:
        'Complete preparation for ASQ CQA, RAC, GMP/GLP certifications, ISO Lead Auditor, and pharmaceutical quality professional certifications with comprehensive study materials and mock exams.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaMicroscope size={50} />,
      title: 'Hands-on Laboratory Training',
      description:
        'Gain practical experience with pharmaceutical analytical instruments including HPLC, GC, UV-Vis spectroscopy, and modern laboratory equipment. Work with real pharmaceutical samples and SOPs.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80'
    },
    {
      icon: <FaBriefcase size={50} />,
      title: 'Pharma Industry Placements',
      description:
        'Direct placement opportunities with 300+ pharmaceutical companies including top Indian pharma companies, contract manufacturing organizations, and quality control laboratories.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *   PHARMACEUTICAL FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What are the eligibility criteria for pharmaceutical courses?',
      answer:
        'B.Pharm, M.Pharm, Pharm.D, B.Sc/M.Sc in Chemistry, Microbiology, Biotechnology, or related sciences are eligible. Freshers and experienced professionals looking to enhance pharmaceutical quality and regulatory skills can enroll.'
    },
    {
      id: 2,
      question: 'What is the difference between Quality Assurance and Quality Control?',
      answer:
        'Quality Assurance focuses on preventing defects through process control, documentation, audits, and compliance systems. Quality Control focuses on detecting defects through testing, analysis, and laboratory investigations of raw materials and finished products.'
    },
    {
      id: 3,
      question: 'Are pharmaceutical jobs in high demand?',
      answer:
        'Yes! India is the 3rd largest pharmaceutical producer globally. There\'s huge demand for QA/QC professionals, regulatory affairs specialists, production officers, and R&D scientists in pharmaceutical manufacturing, quality, and regulatory domains.'
    },
    {
      id: 4,
      question: 'What certifications do you prepare for?',
      answer:
        'We prepare for ASQ Certified Quality Auditor (CQA), RAC (Regulatory Affairs Certification), GMP/GLP certifications, ISO 9001 Lead Auditor, pharmaceutical quality professional certifications, and LIMS specialist certifications.'
    },
    {
      id: 5,
      question: 'Do you provide hands-on laboratory training?',
      answer:
        'Yes! Students get extensive hands-on training with pharmaceutical analytical instruments like HPLC, GC, UV-Vis spectroscopy, and quality control equipment. We conduct practical sessions with real pharmaceutical samples and SOPs.'
    },
    {
      id: 6,
      question: 'What salary can I expect after completing these courses?',
      answer:
        'Freshers in QA/QC typically earn ₹3.5-5 LPA, Regulatory Affairs professionals start at ₹5-7 LPA, while R&D and senior QA positions offer ₹8-15 LPA. Experienced professionals with certifications can earn ₹15-20 LPA+.'
    },
    {
      id: 7,
      question: 'Which pharmaceutical companies hire from ZEPFTER?',
      answer:
        'We have partnerships with 300+ pharma companies including Dr. Reddy\'s, Sun Pharma, Cipla, Lupin, Aurobindo Pharma, Biocon, Glenmark, Cadila, contract manufacturing organizations, and quality control laboratories.'
    },
    {
      id: 8,
      question: 'Is online training available for pharmaceutical courses?',
      answer:
        'Yes! We offer hybrid training with live online sessions for theory, virtual lab demonstrations, and optional on-site practical training at pharmaceutical facilities for hands-on experience with instruments and equipment.'
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
          background: 'linear-gradient(135deg, #0a0a1f 0%, #1E3679 50%, #00AA8A 100%)',
          padding: '100px 20px 80px'
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
              PHARMACEUTICAL SKILLS
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER's Pharmaceutical Skills programs provide comprehensive training in Quality Assurance, Quality Control, Regulatory Affairs, Manufacturing Operations, and R&D. Master GMP/GLP practices, pharmaceutical validations, analytical techniques, and regulatory compliance. With industry-expert trainers and 92% placement success in leading pharmaceutical companies, we prepare you for quality, regulatory, and manufacturing excellence in the pharma industry.
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
                    background: 'rgba(30,54,121,0.2)',
                    border: '2px solid rgba(0,170,138,0.3)',
                    borderRadius: '20px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ color: '#00AA8A', marginBottom: '20px' }}>
                    {stat.icon}
                  </div>
                  <div className="display-4 fw-bold" style={{ color: '#FBD21A' }}>{stat.number}</div>
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
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Pharmaceutical Programs</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Choose from our comprehensive pharmaceutical quality and regulatory training programs</p>
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
                    <div style={{ marginBottom: '10px', color: '#00AA8A' }}>{service.icon}</div>

                    <h2 className="fw-bold mb-3">{service.title}</h2>

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                      <span style={{ padding: '8px 16px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
                        <FaClock size={14} /> {service.duration}
                      </span>
                      <span style={{ padding: '8px 16px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                        <FaAward size={14} /> {service.level}
                      </span>
                      <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                        💰 {service.salary}
                      </span>
                    </div>

                    <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{service.description}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00AA8A', fontWeight: 600 }}>
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

                        <h3 className="fw-bold mb-4" style={{ color: '#00AA8A' }}>What You Will Learn</h3>
                        
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
                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Certifications Prepared</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.certifications.map((cert, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '25px', border: '1px solid rgba(251,210,26,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {cert}
                            </span>
                          ))}
                        </div>

                        {/* Career Paths */}
                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Career Opportunities</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.careerPaths.map((career, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
                              {career}
                            </span>
                          ))}
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
      <section style={{ padding: '80px 20px', background: 'rgba(30,54,121,0.1)' }}>
        <div className="container">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white">Why Choose ZEPFTER Pharmaceutical Programs?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Transform your pharmaceutical career with industry-leading quality and regulatory training.
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
                        <div style={{ color: '#00AA8A' }}>{item.icon}</div>
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
                   Everything you need to know before starting your IT career journey.
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

export default PharmaceuticalSkillsPage ;