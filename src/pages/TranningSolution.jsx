import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaCapsules,
  FaFlask,
  FaLaptopCode,
  FaPills,
  FaCheckCircle,
  FaAward,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaMoneyBillWave,
  FaCertificate,
  FaHandshake
} from "react-icons/fa";

const InternshipProgramsPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   CORPORATE TRAINING CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'medical-coding-training',
      title: 'Medical Coding Workforce Training',
      icon: <FaCapsules size={30} />,
      duration: 'Customizable Duration',
      level: 'Corporate / B2B',
      salary: 'Upskilling & Certification',
      description:
        'Empower your coding team with advanced ICD-10, CPT, and HCPCS training. Our corporate modules are designed to reduce denial rates, improve coding accuracy, and ensure compliance with the latest payer guidelines.',
      image1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
      details: [
        'Advanced ICD-10-CM/PCS & CPT Coding',
        'Clinical Documentation Improvement (CDI)',
        'Risk Adjustment (HCC) Coding',
        'Audit & Compliance Workshops',
        'Denial Management Strategies',
        'E/M Coding Updates',
        'Specialty-Specific Coding (Cardiology, Radiology, etc.)',
        'Productivity Enhancement Techniques'
      ],
      benefits: [
        'Reduced Claim Denials & Rejections',
        'Increased Coder Productivity',
        'Standardized Coding Practices',
        'AAPC/AHIMA Certification Support',
        'Customized Training Modules',
        'Pre & Post-Assessment Reports',
        'Continuous Education Units (CEUs)',
        'On-site or Virtual Delivery'
      ],
      outcomes: [
        '98% Coding Accuracy Target',
        '30% Reduction in DNFB Days',
        'Enhanced Revenue Integrity',
        'Compliant Documentation',
        'Certified Coding Workforce'
      ],
      partners: ['Hospitals', 'RCM Companies', 'Healthcare Payers', 'Medical Billing Firms'],
      careerPaths: ['Senior Medical Coder', 'Coding Auditor', 'Compliance Officer', 'Coding Manager']
    },

    {
      id: 'clinical-research-training',
      title: 'Clinical Research Professional Development',
      icon: <FaFlask size={30} />,
      duration: 'Customizable Duration',
      level: 'Corporate / B2B',
      salary: 'GCP & Regulatory Compliance',
      description:
        'Accelerate your clinical trials with a well-trained workforce. We offer comprehensive training on GCP, regulatory affairs, data management, and site monitoring for CROs and pharmaceutical companies.',
      image1: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      details: [
        'ICH-GCP Guidelines & Updates',
        'Clinical Trial Management Systems (CTMS)',
        'Risk-Based Monitoring (RBM)',
        'Regulatory Submissions (US FDA, EMA, CDSCO)',
        'Safety Reporting & Pharmacovigilance',
        'Data Management & EDC Systems',
        'Site Initiation & Close-out Procedures',
        'Protocol Compliance & Deviation Management'
      ],
      benefits: [
        'Audit-Ready Clinical Teams',
        'Faster Study Start-up Times',
        'Reduced Protocol Deviations',
        'Global Regulatory Compliance',
        'Role-Based Training (CRA, CRC, DM)',
        'Real-world Case Studies',
        'Interactive Workshops',
        'Certification of Competency'
      ],
      outcomes: [
        'Zero Major Audit Findings',
        'Improved Data Quality',
        'Efficient Site Management',
        'Streamlined Regulatory Approvals',
        'Enhanced Patient Safety'
      ],
      partners: ['CROs', 'Pharmaceutical Companies', 'Biotech Firms', 'Academic Research Centers'],
      careerPaths: ['Clinical Research Associate', 'Clinical Project Manager', 'Regulatory Affairs Specialist', 'Data Manager']
    },

    {
      id: 'it-software-training',
      title: 'Enterprise IT & Software Training',
      icon: <FaLaptopCode size={30} />,
      duration: 'Bootcamps / Workshops',
      level: 'Corporate / B2B',
      salary: 'Tech Stack Modernization',
      description:
        'Keep your tech team ahead of the curve. We provide specialized training in full-stack development, cloud computing, DevOps, and cybersecurity to bridge skill gaps and drive digital transformation.',
      image1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
      details: [
        'Full Stack Development (MERN/MEAN)',
        'Cloud Architecture (AWS, Azure, GCP)',
        'DevOps & CI/CD Pipelines',
        'Cybersecurity & Data Privacy',
        'Microservices & Containerization (Docker, K8s)',
        'Agile & Scrum Methodologies',
        'API Design & Management',
        'Legacy Code Modernization'
      ],
      benefits: [
        'Accelerated Product Delivery',
        'Reduced Technical Debt',
        'Enhanced System Security',
        'Cross-Functional Team Agility',
        'Hands-on Coding Labs',
        'Project-Based Learning',
        'Expert Code Reviews',
        'Scalable Training Solutions'
      ],
      outcomes: [
        'Modernized Tech Stack',
        'High-Performing Engineering Teams',
        'Secure Application Development',
        'Efficient Cloud Utilization',
        'Innovation-Driven Culture'
      ],
      partners: ['IT Services', 'Product Companies', 'Startups', 'FinTech'],
      careerPaths: ['Full Stack Developer', 'Cloud Architect', 'DevOps Engineer', 'Security Analyst']
    },

    {
      id: 'pharmaceutical-qa-training',
      title: 'GMP & Quality Systems Workshop',
      icon: <FaPills size={30} />,
      duration: 'Workshops / Seminars',
      level: 'Corporate / B2B',
      salary: 'Quality Excellence',
      description:
        'Ensure the highest standards of quality in pharmaceutical manufacturing. Our training covers cGMP, Quality Management Systems (QMS), data integrity, and audit readiness for QA/QC professionals.',
      image1: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      details: [
        'Current Good Manufacturing Practices (cGMP)',
        'Quality Risk Management (QRM)',
        'Data Integrity & ALCOA+',
        'CAPA & Root Cause Analysis',
        'Validation & Qualification (IQ/OQ/PQ)',
        'Change Control Management',
        'Laboratory Information Management Systems (LIMS)',
        'Regulatory Inspection Readiness'
      ],
      benefits: [
        'Regulatory Compliance Assurance',
        'Reduced Batch Failures',
        'Effective Problem Solving',
        'Culture of Quality',
        'SOP Development & Adherence',
        'Mock Audits & Gap Analysis',
        'Technical Skill Enhancement',
        'Global Quality Standards'
      ],
      outcomes: [
        'Inspection-Ready Facilities',
        'Robust Quality Systems',
        'Zero Data Integrity Issues',
        'Efficient CAPA Management',
        'High-Quality Product Release'
      ],
      partners: ['Pharma Manufacturers', 'Biotech Companies', 'Nutraceutical Firms'],
      careerPaths: ['QA Manager', 'QC Lead', 'Validation Engineer', 'Compliance Auditor']
    },

    {
      id: 'data-analytics-training',
      title: 'Data Analytics for Healthcare',
      icon: <FaChartLine size={30} />,
      duration: 'Customizable Duration',
      level: 'Corporate / B2B',
      salary: 'Data-Driven Decisions',
      description:
        'Transform your organization with data literacy. We train healthcare professionals to leverage data analytics, visualization tools, and predictive modeling for better clinical and operational decision-making.',
      image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      details: [
        'Healthcare Data Analytics Fundamentals',
        'Data Visualization with Tableau/Power BI',
        'Predictive Analytics in Healthcare',
        'Population Health Management',
        'Operational Efficiency Metrics',
        'Patient Outcome Analysis',
        'Financial Analytics for RCM',
        'Data Governance & Ethics'
      ],
      benefits: [
        'Informed Decision Making',
        'Improved Patient Outcomes',
        'Operational Cost Savings',
        'Strategic Planning Insights',
        'Custom Dashboards & Reporting',
        'Hands-on Tool Training',
        'Real Healthcare Datasets',
        'Cross-Departmental Data Literacy'
      ],
      outcomes: [
        'Actionable Business Insights',
        'Optimized Resource Allocation',
        'Enhanced Patient Care Pathways',
        'Data-Driven Culture',
        'Competitive Advantage'
      ],
      partners: ['Hospitals', 'Insurers', 'Public Health Orgs', 'Health Tech'],
      careerPaths: ['Healthcare Data Analyst', 'Clinical Analyst', 'Business Intelligence Manager']
    },

    {
      id: 'scientific-communication-training',
      title: 'Scientific Communication Workshop',
      icon: <FaCertificate size={30} />,
      duration: 'Workshops',
      level: 'Corporate / B2B',
      salary: 'Publication Success',
      description:
        'Enhance the impact of your scientific research. Our workshops train medical writers and researchers in creating clear, compliant, and compelling clinical documents and publications.',
      image1: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
      details: [
        'Clinical Study Reports (CSRs) Writing',
        'Manuscript Preparation & Publication Strategy',
        'Regulatory Writing (Protocols, IBs)',
        'Plain Language Summaries',
        'Effective Scientific Presentations',
        'Publication Ethics & Guidelines (ICMJE, GPP)',
        'Visual Communication of Data',
        'Medical Education Content'
      ],
      benefits: [
        'High-Impact Publications',
        'Faster Regulatory Approvals',
        'Clear & Accurate Communication',
        'Compliance with Global Standards',
        'Enhanced Brand Reputation',
        'Expert Feedback & Editing',
        'Template Development',
        'Team Writing Efficiency'
      ],
      outcomes: [
        'Increased Acceptance Rates',
        'Streamlined Document Review',
        'Engaging Scientific Content',
        'Professional Medical Writers',
        'Thought Leadership'
      ],
      partners: ['Pharma Medical Affairs', 'MedComms Agencies', 'Research Institutes'],
      careerPaths: ['Senior Medical Writer', 'Scientific Communications Lead', 'Publication Manager']
    }
  ];

  const stats = [
    { number: '5000+', label: 'Professionals Trained', icon: <FaUsers size={30} /> },
    { number: '95%', label: 'Skill Retention Rate', icon: <FaChartLine size={30} /> },
    { number: '150+', label: 'Corporate Clients', icon: <FaBriefcase size={30} /> },
    { number: '10+', label: 'Industries Covered', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Customized Curriculum',
      description:
        'We tailor every training module to your specific business needs, technology stack, and organizational goals to ensure maximum relevance and impact.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaMoneyBillWave size={50} />,
      title: 'ROI-Driven Training',
      description:
        'Our programs are designed to deliver measurable business results, from increased productivity and reduced errors to faster time-to-market.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80'
    },
    {
      icon: <FaCertificate size={50} />,
      title: 'Certified Trainers',
      description:
        'Learn from industry veterans and subject matter experts who bring real-world experience and global best practices to the classroom.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaHandshake size={50} />,
      title: 'Flexible Delivery',
      description:
        'We offer flexible training delivery models including on-site workshops, virtual instructor-led training (VILT), and self-paced e-learning.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *   CORPORATE FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'Do you offer customized training programs?',
      answer:
        'Yes, absolutely. We conduct a thorough training needs analysis (TNA) to understand your specific requirements and customize the curriculum, case studies, and duration to align with your business objectives.'
    },
    {
      id: 2,
      question: 'Can training be delivered at our office location?',
      answer:
        'Yes, we offer on-site corporate training at your premises. We also provide virtual instructor-led training (VILT) and hybrid models to accommodate distributed teams.'
    },
    {
      id: 3,
      question: 'How do you measure the effectiveness of the training?',
      answer:
        'We use a multi-level evaluation approach including pre- and post-assessments, participant feedback, and follow-up evaluations to measure knowledge retention and application on the job.'
    },
    {
      id: 4,
      question: 'Do you provide certification for employees?',
      answer:
        'Yes, all participants receive a Certificate of Completion. We can also prepare your teams for industry-recognized certifications (e.g., AAPC, PMP, AWS) as part of the training.'
    },
    {
      id: 5,
      question: 'What is the typical duration of a corporate training program?',
      answer:
        'Durations are flexible. We offer everything from 1-day executive workshops and 3-5 day intensive bootcamps to long-term upskilling programs spanning several weeks or months.'
    },
    {
      id: 6,
      question: 'Do you offer group discounts?',
      answer:
        'Yes, we offer attractive pricing packages for group enrollments and annual training contracts. Please contact our corporate sales team for a customized quote.'
    },
    {
      id: 7,
      question: 'Can you provide training reports to HR/Management?',
      answer:
        'Yes, we provide detailed training reports including attendance, assessment scores, engagement metrics, and trainer feedback to help you track the progress and ROI of the training.'
    },
    {
      id: 8,
      question: 'Do you have trainers for niche technologies or domains?',
      answer:
        'We have a vast network of subject matter experts across Healthcare, Pharma, IT, and Management. If you have a niche requirement, we can source the right expert for you.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80")',
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
              <FaBriefcase size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              CORPORATE TRAINING SOLUTIONS
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              ZEPFTER empowers organizations with industry-ready skills through customized corporate training programs. From Medical Coding and Clinical Research to Enterprise IT and Leadership, we bridge the talent gap and drive business excellence. Partner with us to upskill your workforce, enhance productivity, and achieve your strategic goals.
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
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Training Solutions</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Comprehensive upskilling programs for high-performance teams</p>
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
                        <FaAward size={14} /> {service.salary}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#FBD21A' }}>Training Modules</h3>

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

                        {/* Benefits */}
                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Corporate Benefits</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.benefits.map((benefit, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '25px', border: '1px solid rgba(0,170,138,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {benefit}
                            </span>
                          ))}
                        </div>

                        {/* Outcomes */}
                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Key Outcomes</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.outcomes.map((outcome, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                              {outcome}
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
                            Download Brochure
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
            <h2 className="fw-bold text-white">Why Choose ZEPFTER Corporate Training?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Transform your workforce with industry-leading training and measurable ROI.
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
              Common questions about our corporate training solutions.
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

export default InternshipProgramsPage;