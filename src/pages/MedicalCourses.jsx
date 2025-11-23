import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaCapsules, 
  FaHeartbeat, 
  FaClipboardCheck, 
  FaMicroscope,
  FaCheckCircle,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  
} from "react-icons/fa";

const MedicalCoursesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   ENHANCED COURSE CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'medical-coding',
      title: 'Medical Coding',
      icon: <FaCapsules size={30} />,
      duration: '6 months',
      level: 'Beginner to Advanced',
      salary: '₹3.5 - ₹8 LPA',
      description:
        'Become a skilled healthcare coding professional by mastering ICD-10, CPT, and HCPCS systems. Gain real experience with medical charts, EHR platforms, compliance workflows, and global coding standards essential for hospital and insurance-based careers.',
      image1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
      details: [
        'ICD-10-CM/PCS Coding',
        'CPT Coding',
        'HCPCS Level II',
        'Medical Terminology',
        'Anatomy & Physiology',
        'Healthcare Reimbursement',
        'Compliance & Regulations',
        'Medical Documentation',
        'EHR Systems Training',
        'CPC Exam Preparation',
        'Medical Billing Integration',
        'Coding Quality Audits'
      ],
      certifications: ['CPC (Certified Professional Coder)', 'CCS (Certified Coding Specialist)', 'CCA (Certified Coding Associate)'],
      careerPaths: ['Medical Coder', 'Coding Specialist', 'Billing Specialist', 'Health Information Technician', 'Revenue Cycle Analyst', 'Coding Auditor']
    },

    {
      id: 'medical-affairs',
      title: 'Medical Affairs',
      icon: <FaHeartbeat size={30} />,
      duration: '8 months',
      level: 'Intermediate to Advanced',
      salary: '₹6 - ₹15 LPA',
      description:
        'Unlock prestigious careers in pharmaceutical science and healthcare communication. Learn to interpret clinical data, support medical teams, interact with healthcare professionals, and drive evidence-based decision-making within pharma organizations.',
      image1: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      details: [
        'Medical Information Management',
        'Scientific Communication',
        'Publication Planning',
        'Medical Education',
        'KOL Engagement',
        'Clinical Development Support',
        'Post-Marketing Surveillance',
        'Medical Strategy',
        'Evidence-Based Medicine',
        'Healthcare Professional Engagement',
        'Medical Writing for Publications',
        'Advisory Board Management'
      ],
      certifications: ['Certified Medical Affairs Specialist', 'Board Certification in Medical Affairs'],
      careerPaths: ['Medical Affairs Associate', 'Medical Science Liaison', 'Medical Information Specialist', 'Medical Advisor', 'Field Medical Manager']
    },

    {
      id: 'medical-billing',
      title: 'Medical Billing',
      icon: <FaClipboardCheck size={30} />,
      duration: '5 months',
      level: 'Beginner to Intermediate',
      salary: '₹3 - ₹7 LPA',
      description:
        'Gain complete expertise in the healthcare revenue cycle, including claims processing, reimbursement workflows, insurance verification, and denial management. Work with real billing software and live patient record simulations.',
      image1: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      details: [
        'Insurance Verification',
        'Claims Processing & Submission',
        'Payment Posting',
        'Denial Management',
        'Medical Billing Software',
        'HIPAA Compliance',
        'Revenue Cycle Management',
        'Accounts Receivable',
        'Patient Billing',
        'EOB Processing',
        'Clearinghouse Operations',
        'Billing Compliance & Audits'
      ],
      certifications: ['CMRS (Certified Medical Reimbursement Specialist)', 'CPMA (Certified Professional Medical Auditor)', 'CPB (Certified Professional Biller)'],
      careerPaths: ['Medical Biller', 'Billing Coordinator', 'Revenue Cycle Analyst', 'Claims Specialist', 'Patient Account Representative']
    },

    {
      id: 'medical-writing',
      title: 'Medical Writing',
      icon: <FaMicroscope size={30} />,
      duration: '6 months',
      level: 'Intermediate to Advanced',
      salary: '₹4 - ₹12 LPA',
      description:
        'Master clinical, scientific, and regulatory writing for healthcare and pharmaceutical industries. Learn to create accurate research papers, regulatory documents, clinical study reports, and scientific publications following global standards.',
      image1: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
      details: [
        'Clinical Documentation',
        'Regulatory Writing',
        'Research Papers & Publications',
        'Medical Publications',
        'Protocol Writing',
        'Scientific Communication',
        'Grant Writing',
        'Medical Editing',
        'Clinical Study Reports',
        'Investigator Brochures',
        'Informed Consent Forms',
        'AMWA & EMWA Standards'
      ],
      certifications: ['AMWA Certification', 'EMWA Certification', 'RAC (Regulatory Affairs Certification)'],
      careerPaths: ['Medical Writer', 'Regulatory Writer', 'Scientific Writer', 'Clinical Research Writer', 'Medical Communications Specialist']
    }
  ];

  const stats = [
    { number: '1200+', label: 'Students Trained', icon: <FaUsers size={30} /> },
    { number: '95%', label: 'Placement Rate', icon: <FaChartLine size={30} /> },
    { number: '500+', label: 'Hiring Partners', icon: <FaBriefcase size={30} /> },
    { number: '8 LPA', label: 'Highest Package', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Industry Expert Trainers',
      description:
        'Learn from certified medical professionals with 10–15 years of experience in hospitals, pharma companies, and international healthcare organizations.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaAward size={50} />,
      title: 'Certification Preparation',
      description:
        'Get complete preparation for CPC, CCS, CPB, AMWA, and other certifications with mock exams, study guides, and instructor-led mentoring.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaClipboardCheck size={50} />,
      title: 'Hands-on Training',
      description:
        'Train with real patient charts, EHR coding software, billing platforms, clinical reports, and real-life documentation tasks.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      icon: <FaBriefcase size={50} />,
      title: '100% Placement Support',
      description:
        'Receive resume building, mock interviews, aptitude training, and interview opportunities with over 500 partnered healthcare employers.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *        ENHANCED FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What are the eligibility criteria for medical coding courses?',
      answer:
        'Anyone who has completed graduation in any stream can enroll. A science background helps but is not required since we teach medical terminology and anatomy from scratch.'
    },
    {
      id: 2,
      question: 'How long does it take to become a certified medical coder?',
      answer:
        'Our 6-month program includes complete CPC exam preparation. Once trained, you can appear for the CPC exam. Most students get placed within 2–3 months after certification.'
    },
    {
      id: 3,
      question: 'What is the difference between medical coding and billing?',
      answer:
        'Medical coding involves assigning standardized codes to diagnoses and procedures. Medical billing focuses on claim submission, reimbursement, and payment cycles. Both are vital parts of healthcare administration.'
    },
    {
      id: 4,
      question: 'Do these courses offer work-from-home opportunities?',
      answer:
        'Yes! Medical coding and medical writing especially offer great remote work opportunities. Many companies hire experienced coders and writers for work-from-home roles.'
    },
    {
      id: 5,
      question: 'What certifications do you help students prepare for?',
      answer:
        'We prepare for CPC, CCS, CCA, CPB, CMRS, AMWA, EMWA, and other top international healthcare certifications.'
    },
    {
      id: 6,
      question: 'Do you provide placement assistance?',
      answer:
        'Yes, we offer 100% placement support, interview training, resume building, communication training, and exclusive hiring drives.'
    },
    {
      id: 7,
      question: 'What salaries can I expect after completing the course?',
      answer:
        'Freshers typically earn ₹3.5–5 LPA in coding and billing, while medical writing and medical affairs may start from ₹6–8 LPA depending on role and company.'
    },
    {
      id: 8,
      question: 'Is online training available?',
      answer:
        'Yes, we offer both online and offline training with live classes, practice sessions, and access to recorded lectures.'
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
      {/* HERO SECTION */}
      <section 
  style={{
    background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80")',
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
              <FaCapsules size={60} style={{ color: '#00AA8A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              MEDICAL COURSES
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER’s Medical Courses prepare you for high-demand healthcare careers such as Medical Coding, Billing, Medical Writing, and Medical Affairs. Our programs blend essential theory with hands-on training using real patient charts, EHR tools, and certification guidance. With expert trainers and 100% placement support, we equip you with the skills and confidence to succeed in top hospitals, pharma companies, and healthcare BPOs.
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
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Course Offerings</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Choose from our advanced healthcare programs</p>
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
                      
                      <span style={{ padding: '8px 16px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                        <FaAward size={14} /> {service.level}
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
            <h2 className="fw-bold text-white">Why Choose ZEPFTER Medical Courses?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Transform your healthcare career with industry-leading training and global opportunities.
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


      {/* --------------------------
             FAQ SECTION
       --------------------------- */}
      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
        <div className="container">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white">Frequently Asked Questions</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Everything you need to know before starting your journey.
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

export default MedicalCoursesPage;
