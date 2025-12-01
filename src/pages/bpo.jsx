import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeadset,
  FaChartLine,
  FaUserTie,
  FaCogs,
  FaGlobe,
  FaShieldAlt,
  FaCheckCircle,
  FaTimes,
  FaHandshake,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaUsers
} from "react-icons/fa";

const BPO = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Customer Support Services",
      icon: <FaHeadset size={40} />,
      desc: "24/7 multilingual customer support to enhance customer satisfaction.",
      details: "Our Customer Support Services provide round-the-clock assistance to your customers across multiple channels including voice, email, chat, and social media. We focus on delivering exceptional customer experiences, resolving issues efficiently, and building brand loyalty.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      keyPoints: [
        "24/7 Multilingual Support",
        "Omnichannel Support (Voice, Email, Chat)",
        "Technical Support & Helpdesk",
        "Customer Complaint Resolution",
        "Customer Satisfaction Surveys",
        "IVR Management",
        "Escalation Management"
      ],
      color: "#1E3679"
    },
    {
      title: "Data Entry & Processing",
      icon: <FaCogs size={40} />,
      desc: "Accurate and efficient data entry and processing solutions.",
      details: "We offer comprehensive data entry and processing services to help you manage your data effectively. Our team ensures high accuracy and quick turnaround times for all your data needs, from simple data entry to complex data processing and validation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      keyPoints: [
        "Online & Offline Data Entry",
        "Data Cleansing & Enrichment",
        "Form Processing",
        "Image Data Entry",
        "Document Digitization",
        "Data Mining & Extraction",
        "Catalog Management"
      ],
      color: "#00AA8A"
    },
    {
      title: "Human Resources Outsourcing",
      icon: <FaUserTie size={40} />,
      desc: "Streamlined HR processes for better workforce management.",
      details: "Our HR Outsourcing services cover the entire employee lifecycle, from recruitment to retirement. We help you streamline your HR processes, reduce administrative burden, and ensure compliance with labor laws, allowing you to focus on your core business.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      keyPoints: [
        "Recruitment & Staffing",
        "Payroll Processing",
        "Benefits Administration",
        "Employee Onboarding/Offboarding",
        "Performance Management",
        "HR Compliance & Policy",
        "Training & Development"
      ],
      color: "#FBD21A"
    },
    {
      title: "Finance & Accounting",
      icon: <FaFileInvoiceDollar size={40} />,
      desc: "Expert financial services to optimize your financial operations.",
      details: "We provide a full range of finance and accounting services to help you manage your finances more effectively. Our team of experts ensures accurate financial reporting, compliance with accounting standards, and improved financial visibility.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      keyPoints: [
        "Accounts Payable & Receivable",
        "General Ledger Management",
        "Financial Reporting & Analysis",
        "Tax Preparation & Filing",
        "Payroll Management",
        "Bank Reconciliation",
        "Audit Support"
      ],
      color: "#1E3679"
    },
    {
      title: "IT Helpdesk & Support",
      icon: <FaLaptopCode size={40} />,
      desc: "Reliable IT support to keep your business running smoothly.",
      details: "Our IT Helpdesk & Support services ensure that your IT infrastructure is always up and running. We provide technical support for hardware, software, and network issues, minimizing downtime and maximizing productivity.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      keyPoints: [
        "L1/L2/L3 Technical Support",
        "Remote Desktop Support",
        "Software Installation & Troubleshooting",
        "Network Monitoring & Management",
        "User Access Management",
        "Patch Management",
        "IT Asset Management"
      ],
      color: "#00AA8A"
    },
    {
      title: "Sales & Lead Generation",
      icon: <FaChartLine size={40} />,
      desc: "Boost your sales with our targeted lead generation services.",
      details: "We help you grow your business by identifying and qualifying potential leads. Our sales and lead generation services are designed to increase your sales pipeline and drive revenue growth through targeted campaigns and effective follow-up.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      keyPoints: [
        "Outbound Telemarketing",
        "Inbound Sales Support",
        "Lead Qualification & Nurturing",
        "Appointment Setting",
        "Market Research & Surveys",
        "Email Marketing Campaigns",
        "CRM Data Management"
      ],
      color: "#FBD21A"
    }
  ];

  return (
    <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>

      {/* HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80")',
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
              <FaHeadset size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              BUSINESS PROCESS OUTSOURCING
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              Streamline your operations and focus on your core business with our world-class BPO solutions. We deliver efficiency, cost savings, and superior customer experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE + DESCRIPTION SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '20px', border: '3px solid #00AA8A' }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="BPO Services"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ color: 'white' }}>
                <h2 className="fw-bold mb-4" style={{ color: '#FBD21A' }}>
                  Operational Excellence
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                  In today's competitive landscape, businesses need to be agile and efficient. Our BPO services allow you to outsource non-core functions to experts, enabling you to reduce costs and improve service delivery.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  From customer support to back-office operations, we provide scalable solutions tailored to your specific needs. Our technology-driven approach ensures transparency, security, and continuous improvement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(0,0,0,0.3)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              OUR <span style={{ color: '#00AA8A' }}>IMPACT</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Driving growth and efficiency for businesses globally
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              { number: '1M+', label: 'Interactions Handled', color: '#1E3679' },
              { number: '200+', label: 'Global Clients', color: '#00AA8A' },
              { number: '24/7', label: 'Support Coverage', color: '#FBD21A' },
              { number: '40%', label: 'Cost Savings', color: '#1E3679' }
            ].map((stat, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: `2px solid ${stat.color}`,
                    borderRadius: '20px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="display-3 fw-bold mb-3" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-white" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              WHY CHOOSE <span style={{ color: '#FBD21A' }}>US</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Your strategic partner for business process outsourcing
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: 'Skilled Workforce',
                desc: 'Access to a large pool of highly trained and qualified professionals across various domains.',
                icon: <FaUsers />,
                color: '#1E3679'
              },
              {
                title: 'Advanced Technology',
                desc: 'Utilization of latest technologies and automation tools to enhance efficiency and accuracy.',
                icon: <FaLaptopCode />,
                color: '#00AA8A'
              },
              {
                title: 'Data Security',
                desc: 'Robust data security measures and compliance with international standards like ISO 27001.',
                icon: <FaShieldAlt />,
                color: '#FBD21A'
              },
              {
                title: 'Scalability',
                desc: 'Flexible solutions that can scale up or down based on your business requirements.',
                icon: <FaChartLine />,
                color: '#1E3679'
              },
              {
                title: 'Global Presence',
                desc: 'Delivery centers in strategic locations to provide round-the-clock support.',
                icon: <FaGlobe />,
                color: '#00AA8A'
              },
              {
                title: 'Cost Effective',
                desc: 'Significant cost reduction without compromising on quality or service levels.',
                icon: <FaHandshake />,
                color: '#FBD21A'
              }
            ].map((benefit, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: '30px',
                    border: `2px solid ${benefit.color}30`,
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px', color: benefit.color }}>
                    {benefit.icon}
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: benefit.color }}>
                    {benefit.title}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>
                    {benefit.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE STANDARDS SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(0,0,0,0.3)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              COMPLIANCE <span style={{ color: '#1E3679' }}>STANDARDS</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              We adhere to global standards to ensure quality and security
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              { standard: 'ISO 27001', desc: 'Information Security', color: '#1E3679' },
              { standard: 'GDPR', desc: 'Data Protection', color: '#00AA8A' },
              { standard: 'PCI DSS', desc: 'Payment Security', color: '#FBD21A' },
              { standard: 'HIPAA', desc: 'Health Information', color: '#1E3679' },
              { standard: 'SOC 2', desc: 'Service Organization Control', color: '#00AA8A' },
              { standard: 'ISO 9001', desc: 'Quality Management', color: '#FBD21A' }
            ].map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: `${item.color}15`,
                    border: `2px solid ${item.color}`,
                    borderRadius: '15px',
                    padding: '30px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h4 className="fw-bold mb-2" style={{ color: item.color }}>
                    {item.standard}
                  </h4>
                  <p className="text-white" style={{ opacity: 0.8, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              OUR <span style={{ color: '#FBD21A' }}>SERVICES</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Comprehensive BPO solutions tailored for your business
            </p>
          </motion.div>

          <div className="row g-4">
            {services.map((service, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setSelectedService(service)}
                  style={{
                    background: hoveredCard === `service-${idx}` ? service.color : 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: '40px',
                    border: `2px solid ${hoveredCard === `service-${idx}` ? service.color : 'rgba(255,255,255,0.1)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={() => setHoveredCard(`service-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div>
                    <div style={{
                      color: hoveredCard === `service-${idx}` ? 'white' : service.color,
                      marginBottom: '20px',
                      transition: 'color 0.3s ease'
                    }}>
                      {service.icon}
                    </div>

                    <h3
                      className="fw-bold mb-3"
                      style={{
                        color: hoveredCard === `service-${idx}` ? 'white' : service.color,
                        fontSize: '1.3rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p style={{
                      color: hoveredCard === `service-${idx}` ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                      lineHeight: '1.6',
                      transition: 'color 0.3s ease'
                    }}>
                      {service.desc}
                    </p>
                  </div>

                  <div
                    className="fw-semibold"
                    style={{
                      color: hoveredCard === `service-${idx}` ? 'white' : service.color,
                      marginTop: '20px',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    Learn More →
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(15px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1c 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0',
                borderRadius: '24px',
                width: '80vw',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                color: 'white'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#ff4757';
                  e.target.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'rotate(0deg)';
                }}
              >
                <FaTimes size={18} />
              </button>

              {/* Modal Content */}
              <div className="row g-0">
                {/* Left Side - Image (Desktop) / Top (Mobile) */}
                <div className="col-lg-5" style={{ position: 'relative', minHeight: '300px' }}>
                  {selectedService.image && (
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(to bottom, transparent 0%, #1a1a2e 100%)`,
                        zIndex: 2
                      }} />
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderTopLeftRadius: '24px',
                          borderBottomLeftRadius: '0px'
                        }}
                      />
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    zIndex: 3,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(5px)',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    border: `1px solid ${selectedService.color}`
                  }}>
                    <div style={{ color: selectedService.color, marginBottom: '5px' }}>
                      {selectedService.icon}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
                      BPO Solution
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="col-lg-7">
                  <div style={{ padding: '40px' }}>
                    <h2
                      className="fw-bold mb-3"
                      style={{
                        color: selectedService.color,
                        fontSize: '2rem'
                      }}
                    >
                      {selectedService.title}
                    </h2>

                    <p style={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: '1.8',
                      fontSize: '1.05rem',
                      marginBottom: '30px',
                      borderLeft: `3px solid ${selectedService.color}`,
                      paddingLeft: '15px'
                    }}>
                      {selectedService.details}
                    </p>

                    {selectedService.keyPoints && (
                      <>
                        <h5 className="fw-bold mb-4" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '20px', height: '2px', background: selectedService.color }}></span>
                          Key Features
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
                          {selectedService.keyPoints.map((point, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '12px 15px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                border: '1px solid rgba(255,255,255,0.05)'
                              }}
                              whileHover={{ x: 5, background: 'rgba(255,255,255,0.06)' }}
                            >
                              <FaCheckCircle style={{ color: selectedService.color, flexShrink: 0 }} />
                              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}

                    <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <button
                        className="btn fw-bold"
                        style={{
                          background: selectedService.color,
                          color: 'white',
                          padding: '12px 30px',
                          borderRadius: '50px',
                          border: 'none',
                          boxShadow: `0 10px 20px -5px ${selectedService.color}60`
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BPO;
