import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaUserTie, 
  FaBriefcase, 
  FaHandshake,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaSearch
} from "react-icons/fa";

const TalentSolutions = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   TALENT SOLUTIONS CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'contract-staffing',
      title: 'Contract Staffing',
      icon: <FaBriefcase size={30} />,
      duration: 'Flexible',
      level: 'Skilled',
      salary: 'On-Demand',
      description:
        'Scale your workforce rapidly with our contract staffing solutions. We provide pre-vetted professionals for short-term projects, seasonal peaks, or specialized roles, allowing you to maintain agility and reduce overhead costs.',
      image1: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
      details: [
        'IT & Technical Staffing',
        'Clinical Research Staffing',
        'Pharmaceutical Manufacturing Staffing',
        'Project-Based Hiring',
        'Seasonal Workforce Management',
        'Remote & Hybrid Teams',
        'Payroll & Compliance Management',
        'Onboarding & Offboarding',
        'Performance Monitoring',
        'Skill-Specific Recruitment',
        'Rapid Deployment (24-48 hours)',
        'Contract-to-Hire Options'
      ],
      benefits: [
        'Reduce Hiring Costs',
        'Increase Operational Agility',
        'Access Niche Skills',
        'Mitigate Employment Risks'
      ],
      careerPaths: ['Project Support', 'Interim Roles', 'Specialized Consulting', 'Flexible Work']
    },

    {
      id: 'executive-search',
      title: 'Executive Search',
      icon: <FaUserTie size={30} />,
      duration: 'Leadership',
      level: 'C-Suite',
      salary: 'Premium',
      description:
        'Find visionary leaders who can drive your organization forward. Our executive search team specializes in identifying and attracting top-tier C-level executives, VPs, and Directors across Pharma, IT, and Healthcare sectors.',
      image1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
      details: [
        'C-Suite Recruitment (CEO, CTO, CMO)',
        'Board Member Selection',
        'Senior Management Hiring',
        'Leadership Assessment',
        'Succession Planning',
        'Market Mapping & Intelligence',
        'Confidential Search',
        'Diversity & Inclusion Hiring',
        'Compensation Benchmarking',
        'Candidate Vetting & Due Diligence',
        'Negotiation Support',
        'Onboarding Integration'
      ],
      benefits: [
        'Access Passive Candidates',
        'Confidentiality Guaranteed',
        'Strategic Leadership Fit',
        'Long-term Retention'
      ],
      careerPaths: ['Executive Leadership', 'Board Roles', 'Strategic Management', 'Organizational Growth']
    },

    {
      id: 'rpo',
      title: 'Recruitment Process Outsourcing (RPO)',
      icon: <FaHandshake size={30} />,
      duration: 'End-to-End',
      level: 'Strategic',
      salary: 'Optimized',
      description:
        'Transform your talent acquisition function with our RPO services. We act as an extension of your HR team, managing the entire recruitment lifecycle to improve quality of hire, reduce time-to-fill, and lower costs.',
      image1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
      details: [
        'End-to-End Recruitment Management',
        'Employer Branding',
        'Sourcing & Screening',
        'Interview Scheduling & Coordination',
        'Assessment & Testing',
        'Offer Management',
        'Vendor Management System (VMS)',
        'Talent Analytics & Reporting',
        'Diversity Hiring Initiatives',
        'Campus Recruitment Drives',
        'High-Volume Hiring',
        'Process Optimization'
      ],
      benefits: [
        'Scalable Recruitment Capacity',
        'Standardized Processes',
        'Enhanced Candidate Experience',
        'Data-Driven Insights'
      ],
      careerPaths: ['Talent Acquisition', 'HR Operations', 'Recruitment Strategy', 'Process Improvement']
    },

    {
      id: 'permanent-placement',
      title: 'Permanent Placement',
      icon: <FaSearch size={30} />,
      duration: 'Long-term',
      level: 'Core Team',
      salary: 'Career',
      description:
        'Build your core team with dedicated permanent placement services. We understand your company culture and technical requirements to find candidates who are not just skilled, but the right cultural fit for long-term success.',
      image1: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
      details: [
        'Full-Time Employee Recruitment',
        'Culture Fit Assessment',
        'Technical Screening',
        'Reference Checks',
        'Background Verification',
        'Salary Negotiation',
        'Counter-Offer Management',
        'Relocation Assistance',
        'Retention Strategy',
        'Niche Skill Hiring',
        'Mid-Level Management Hiring',
        'Graduate Hiring Programs'
      ],
      benefits: [
        'Dedicated Talent Pool',
        'Lower Turnover Rates',
        'Cultural Alignment',
        'Long-term Business Growth'
      ],
      careerPaths: ['Full-time Employment', 'Career Progression', 'Team Building', 'Organizational Stability']
    }
  ];

  const stats = [
    { number: '10k+', label: 'Candidates Placed', icon: <FaUsers size={30} /> },
    { number: '95%', label: 'Retention Rate', icon: <FaChartLine size={30} /> },
    { number: '500+', label: 'Corporate Partners', icon: <FaBriefcase size={30} /> },
    { number: '48h', label: 'Avg. Turnaround', icon: <FaRocket size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaUsers size={50} />,
      title: 'Vast Talent Network',
      description:
        'Access our proprietary database of over 1 million pre-screened candidates across IT, Pharma, and Clinical domains.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80'
    },
    {
      icon: <FaCheckCircle size={50} />,
      title: 'Rigorous Vetting',
      description:
        'Our multi-stage screening process ensures you only interview the top 5% of candidates who meet your technical and cultural requirements.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    },
    {
      icon: <FaRocket size={50} />,
      title: 'Speed to Hire',
      description:
        'We leverage AI-driven matching and dedicated recruitment teams to reduce your time-to-hire by up to 40%.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      icon: <FaHandshake size={50} />,
      title: 'Industry Expertise',
      description:
        'Our recruiters are industry specialists who understand the specific nuances and skill requirements of your sector.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80'
    }
  ];

  /** ------------------------
   *   FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What industries do you specialize in?',
      answer:
        'We specialize in Pharmaceutical, Life Sciences, Clinical Research, Information Technology, and Healthcare sectors. Our recruiters have deep domain knowledge in these areas.'
    },
    {
      id: 2,
      question: 'How quickly can you fill a position?',
      answer:
        'For contract roles, we can often provide candidates within 24-48 hours. For permanent roles, we typically present shortlisted candidates within 3-5 business days, depending on the role\'s complexity.'
    },
    {
      id: 3,
      question: 'Do you offer a replacement guarantee?',
      answer:
        'Yes, we offer a replacement guarantee period for all permanent placements. If a candidate leaves within this period, we will find a replacement at no additional cost.'
    },
    {
      id: 4,
      question: 'Can you help with remote hiring?',
      answer:
        'Absolutely. We have extensive experience in sourcing and vetting remote talent globally, including setting up remote teams and managing distributed workforce compliance.'
    },
    {
      id: 5,
      question: 'What is your RPO model?',
      answer:
        'Our RPO model is flexible and scalable. We can manage your entire recruitment function or specific projects/divisions. We bring our own technology, processes, and recruiters to deliver results.'
    },
    {
      id: 6,
      question: 'How do you ensure candidate quality?',
      answer:
        'We use a combination of AI screening, technical assessments, behavioral interviews, and background checks. We also conduct culture-fit assessments to ensure long-term retention.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80")',
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
              <FaUserTie size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              TALENT SOLUTIONS
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER connects world-class organizations with exceptional talent. Whether you need flexible contract staffing, strategic executive search, or comprehensive RPO services, we deliver workforce solutions that drive business success.
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

      {/* SERVICES ACCORDION */}
      <section style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Talent Services</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Comprehensive workforce solutions tailored to your needs</p>
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
                      View Details {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#00AA8A' }}>Service Features</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '15px', marginBottom: '30px' }}>
                          {service.details?.map((detail, idx) => (
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
                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Key Benefits</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.benefits?.map((benefit, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '25px', border: '1px solid rgba(251,210,26,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {benefit}
                            </span>
                          ))}
                        </div>

                        {/* Roles */}
                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Roles We Fill</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.careerPaths?.map((career, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
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
                            Hire Talent Now
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
      <section style={{ padding: '80px 20px', background: 'rgba(30,54,121,0.1)' }}>
        <div className="container">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white">Why Choose ZEPFTER Talent Solutions?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              We are more than just a staffing agency; we are your strategic talent partner.
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
              Common questions about our Talent Solutions.
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

export default TalentSolutions;
