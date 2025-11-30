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
   *   ENHANCED SERVICE CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'medical-coding',
      title: 'Medical Coding & Auditing',
      icon: <FaCapsules size={30} />,
      tagline: 'Precision & Compliance',
      description:
        'Optimize your revenue cycle with our expert medical coding and auditing services. We ensure 99% accuracy in ICD-10, CPT, and HCPCS coding, reducing denials and ensuring compliance with global healthcare standards.',
      image1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
      details: [
        'Risk Adjustment Coding',
        'Clinical Documentation Improvement (CDI)',
        'DRG Validation',
        'Coding Quality Audits',
        'Denial Management',
        'Backlog Resolution',
        'Outpatient & Inpatient Coding',
        'Payer Specific Compliance'
      ],
      expertise: ['AAPC Certified Coders', 'AHIMA Certified Auditors', 'HIPAA Compliant Processes'],
      outcomes: ['Reduced Denial Rates', 'Accelerated Reimbursements', '100% Regulatory Compliance']
    },

    {
      id: 'medical-affairs',
      title: 'Strategic Medical Affairs',
      icon: <FaHeartbeat size={30} />,
      tagline: 'Scientific Leadership',
      description:
        'Bridge the gap between science and strategy. Our Medical Affairs team supports your product lifecycle with evidence-based scientific communication, KOL engagement, and strategic insights for successful market adoption.',
      image1: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      details: [
        'KOL Identification & Engagement',
        'Medical Strategy Development',
        'Advisory Board Management',
        'Scientific Platform Development',
        'Publication Planning',
        'Medical Information Services',
        'Field Medical Resourcing (MSLs)',
        'Competitor Intelligence'
      ],
      expertise: ['Therapeutic Area Experts', 'PhDs & MDs Team', 'Global Market Experience'],
      outcomes: ['Enhanced Scientific Share of Voice', 'Stronger KOL Relationships', 'Evidence-Based Launch Success']
    },

    {
      id: 'medical-billing',
      title: 'Revenue Cycle Management',
      icon: <FaClipboardCheck size={30} />,
      tagline: 'Financial Health',
      description:
        'End-to-end RCM solutions designed to maximize your financial performance. From patient access to payment posting, we streamline your operations, minimize revenue leakage, and improve cash flow.',
      image1: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      details: [
        'Eligibility Verification',
        'Claims Submission & Management',
        'Payment Posting & Reconciliation',
        'A/R Follow-up & Collections',
        'Denial Management & Appeals',
        'Patient Billing & Support',
        'Credentialing Services',
        'RCM Analytics & Reporting'
      ],
      expertise: ['Certified Billers', 'Multi-Specialty Experience', 'Advanced RCM Software Proficiency'],
      outcomes: ['Decreased Days in A/R', 'Increased Net Collection Rate', 'Operational Cost Reduction']
    },

    {
      id: 'medical-writing',
      title: 'Medical & Regulatory Writing',
      icon: <FaMicroscope size={30} />,
      tagline: 'Clear Scientific Communication',
      description:
        'High-quality clinical and regulatory documents that expedite your drug development process. Our writers deliver accurate, compliant, and clear documentation for regulatory authorities and scientific communities.',
      image1: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
      details: [
        'Clinical Study Reports (CSRs)',
        'Clinical Protocols',
        'Investigator Brochures (IBs)',
        'Regulatory Submissions (NDA/BLA)',
        'Manuscripts & Abstracts',
        'Patient Safety Narratives',
        'Literature Reviews',
        'Plain Language Summaries'
      ],
      expertise: ['AMWA/EMWA Guidelines', 'ICH-GCP Compliance', 'Therapeutic Area Specialists'],
      outcomes: ['Faster Regulatory Approvals', 'High-Impact Publications', 'Audit-Ready Documentation']
    }
  ];

  const stats = [
    { number: '500+', label: 'Global Partners', icon: <FaUsers size={30} /> },
    { number: '98%', label: 'Client Retention', icon: <FaChartLine size={30} /> },
    { number: '1200+', label: 'Projects Delivered', icon: <FaBriefcase size={30} /> },
    { number: '50+', label: 'Therapeutic Areas', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Subject Matter Experts',
      description:
        'Our teams are led by MDs, PhDs, and certified professionals with deep industry experience across various therapeutic areas.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaAward size={50} />,
      title: 'Regulatory Compliance',
      description:
        'We strictly adhere to global standards including ICH-GCP, HIPAA, GDPR, and ISO certifications to ensure your data and processes are secure.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaClipboardCheck size={50} />,
      title: 'Quality Assurance',
      description:
        'Rigorous multi-level quality control processes ensure 99.9% accuracy in all our deliverables, from coding to clinical writing.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      icon: <FaBriefcase size={50} />,
      title: 'Scalable Solutions',
      description:
        'Flexible engagement models that scale with your needs. Whether you need a dedicated team or project-based support, we adapt to you.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *        CLIENT FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What industries do you serve?',
      answer:
        'We primarily serve Pharmaceutical companies, Biotechnology firms, Medical Device manufacturers, CROs, and large Healthcare Provider networks.'
    },
    {
      id: 2,
      question: 'How do you ensure data security and compliance?',
      answer:
        'We are ISO 27001 certified and fully HIPAA/GDPR compliant. We utilize secure, encrypted platforms for data transfer and storage, with strict access controls.'
    },
    {
      id: 3,
      question: 'What is your typical turnaround time for projects?',
      answer:
        'Turnaround times vary by project scope. However, we are known for our agility and can offer expedited services for urgent regulatory submissions or audit deadlines.'
    },
    {
      id: 4,
      question: 'Can you integrate with our existing EHR/EMR systems?',
      answer:
        'Yes, our team is proficient in major EHR/EMR platforms (Epic, Cerner, Allscripts, etc.) and can seamlessly integrate into your existing workflows via VPN or remote desktop.'
    },
    {
      id: 5,
      question: 'Do you offer pilot programs?',
      answer:
        'Absolutely. We encourage starting with a pilot project to demonstrate our quality, efficiency, and compatibility with your team before scaling up.'
    },
    {
      id: 6,
      question: 'What are your engagement models?',
      answer:
        'We offer flexible models including FTE (Full-Time Equivalent), Unit-based pricing, and Project-based fixed costs to suit your budget and operational needs.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80")',
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
              <FaCapsules size={60} style={{ color: '#00AA8A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              MEDICAL AFFAIRS & SERVICES
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              ZEPFTER delivers premier Medical Affairs, Regulatory Writing, and Revenue Cycle Management solutions to the life sciences industry. We combine scientific expertise with operational excellence to accelerate your product's journey and optimize healthcare outcomes. Partner with us for strategic support, compliance, and clinical success.
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
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Service Portfolio</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Specialized solutions for the healthcare and pharmaceutical ecosystem</p>
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
                        <FaAward size={14} /> {service.tagline}
                      </span>

                    </div>

                    <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{service.description}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00AA8A', fontWeight: 600 }}>
                      View Deliverables {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#00AA8A' }}>Key Deliverables</h3>

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

                        {/* Expertise */}
                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Our Expertise</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.expertise.map((item, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '25px', border: '1px solid rgba(251,210,26,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {item}
                            </span>
                          ))}
                        </div>

                        {/* Outcomes */}
                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Key Outcomes</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.outcomes.map((outcome, idx) => (
                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
                              {outcome}
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
            <h2 className="fw-bold text-white">Why Partner With ZEPFTER?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Excellence, Compliance, and Innovation in every project.
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
              Common questions about our services and engagement models.
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