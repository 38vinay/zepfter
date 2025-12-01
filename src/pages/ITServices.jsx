import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaLaptopCode,
  FaShieldAlt, 
  FaCloud,
  FaNetworkWired,
  FaProjectDiagram,
  FaBrain,
  FaCheckCircle,
  FaAward,
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaRocket
} from "react-icons/fa";

const DigitalTransformationServices = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   DIGITAL TRANSFORMATION SERVICES
   * ------------------------ */
  const services = [
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      icon: <FaCloud size={30} />,
      duration: 'Scalable',
      level: 'Secure',
      salary: 'Efficient',
      description:
        'Accelerate your journey to the cloud with our end-to-end cloud services. From migration strategy to cloud-native development and managed services, we help you leverage AWS, Azure, and Google Cloud to drive innovation and agility.',
      image1: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
      details: [
        'Cloud Strategy & Consulting',
        'Cloud Migration & Modernization',
        'Cloud-Native Application Development',
        'DevOps & CI/CD Automation',
        'Cloud Security & Compliance',
        'Hybrid & Multi-Cloud Management',
        'Serverless Computing',
        'Disaster Recovery Planning',
        'Cost Optimization',
        'Infrastructure as Code (IaC)',
        'Containerization (Kubernetes)',
        'Microservices Architecture'
      ],
      certifications: ['AWS Partners', 'Azure Certified', 'Google Cloud Experts'],
      careerPaths: ['Infrastructure Modernization', 'App Modernization', 'Data Analytics', 'Security']
    },

    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <FaBrain size={30} />,
      duration: 'Intelligent',
      level: 'Predictive',
      salary: 'Automated',
      description:
        'Harness the power of Artificial Intelligence to automate processes, gain predictive insights, and enhance customer experiences. We build custom AI/ML models, NLP solutions, and computer vision applications tailored to your business needs.',
      image1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
      details: [
        'AI Strategy & Roadmap',
        'Custom Machine Learning Models',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Generative AI Applications',
        'Chatbots & Virtual Assistants',
        'Recommendation Engines',
        'Process Automation (RPA)',
        'Data Engineering for AI',
        'Model Deployment & MLOps',
        'AI Ethics & Governance'
      ],
      certifications: ['TensorFlow', 'PyTorch', 'OpenAI Integration'],
      careerPaths: ['Process Automation', 'Customer Insights', 'Product Innovation', 'Decision Support']
    },

    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <FaShieldAlt size={30} />,
      duration: 'Resilient',
      level: 'Protected',
      salary: 'Compliant',
      description:
        'Protect your digital assets with our comprehensive cybersecurity services. We offer vulnerability assessments, penetration testing, security operations, and compliance consulting to safeguard your organization against evolving threats.',
      image1: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
      details: [
        'Vulnerability Assessment & Penetration Testing (VAPT)',
        'Security Operations Center (SOC) Services',
        'Identity & Access Management (IAM)',
        'Cloud Security Posture Management',
        'Data Loss Prevention (DLP)',
        'Incident Response & Forensics',
        'Compliance Consulting (ISO 27001, GDPR, HIPAA)',
        'Application Security',
        'Network Security Architecture',
        'Security Awareness Training',
        'Endpoint Detection & Response (EDR)',
        'Zero Trust Architecture'
      ],
      certifications: ['CISSP', 'CISM', 'CEH', 'ISO 27001 Lead Auditors'],
      careerPaths: ['Risk Management', 'Threat Defense', 'Compliance', 'Data Protection']
    },

    {
      id: 'software-development',
      title: 'Enterprise Software Development',
      icon: <FaLaptopCode size={30} />,
      duration: 'Robust',
      level: 'Custom',
      salary: 'Scalable',
      description:
        'Build robust, scalable, and secure enterprise applications that drive business growth. Our full-stack development teams specialize in web, mobile, and desktop applications using the latest technologies and agile methodologies.',
      image1: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      details: [
        'Custom Web Application Development',
        'Mobile App Development (iOS, Android, Cross-platform)',
        'Enterprise Resource Planning (ERP) Systems',
        'Customer Relationship Management (CRM) Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'UI/UX Design & Prototyping',
        'Quality Assurance & Testing',
        'Maintenance & Support',
        'SaaS Product Development',
        'E-commerce Solutions',
        'Blockchain Development'
      ],
      certifications: ['Agile/Scrum', 'Full Stack', 'Mobile Experts'],
      careerPaths: ['Digital Products', 'Operational Efficiency', 'Customer Engagement', 'Revenue Growth']
    },

    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      icon: <FaChartLine size={30} />,
      duration: 'Insightful',
      level: 'Visual',
      salary: 'Strategic',
      description:
        'Turn your data into actionable insights. We help you build modern data architectures, data warehouses, and interactive dashboards to support data-driven decision-making across your organization.',
      image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      details: [
        'Data Strategy & Governance',
        'Data Warehousing & Data Lakes',
        'ETL/ELT Pipeline Development',
        'Business Intelligence (Power BI, Tableau)',
        'Big Data Processing',
        'Real-time Analytics',
        'Data Quality Management',
        'Master Data Management',
        'Self-Service Analytics',
        'Data Visualization',
        'Customer 360 View',
        'Marketing Analytics'
      ],
      certifications: ['Microsoft Data Analysts', 'Tableau Experts', 'Snowflake Partners'],
      careerPaths: ['Business Intelligence', 'Data Strategy', 'Performance Management', 'Market Analysis']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <FaProjectDiagram size={30} /> },
    { number: '98%', label: 'Client Retention', icon: <FaChartLine size={30} /> },
    { number: '100+', label: 'Enterprise Clients', icon: <FaBriefcase size={30} /> },
    { number: '24/7', label: 'Support Coverage', icon: <FaNetworkWired size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaUsers size={50} />,
      title: 'Expert Team',
      description:
        'Our team consists of certified architects, developers, and consultants with deep expertise across various technology domains.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
    },
    {
      icon: <FaRocket size={50} />,
      title: 'Agile Delivery',
      description:
        'We follow agile methodologies to ensure rapid delivery, flexibility, and continuous alignment with your business goals.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaShieldAlt size={50} />,
      title: 'Security First',
      description:
        'Security is embedded in everything we do. We ensure your solutions are secure by design and compliant with industry standards.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
    },
    {
      icon: <FaCheckCircle size={50} />,
      title: 'Proven Track Record',
      description:
        'With over 500 successful projects delivered, we have a proven track record of helping businesses achieve their digital transformation goals.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *        IT FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'How do you ensure the security of our data?',
      answer:
        'We follow industry-leading security practices including encryption, secure coding standards, and regular security audits. We are ISO 27001 certified and compliant with GDPR and other relevant regulations.'
    },
    {
      id: 2,
      question: 'Can you help migrate our legacy systems to the cloud?',
      answer:
        'Yes, we specialize in legacy modernization. We can help you assess your current infrastructure, plan a migration strategy, and execute the migration with minimal disruption to your business.'
    },
    {
      id: 3,
      question: 'What engagement models do you offer?',
      answer:
        'We offer flexible engagement models including fixed-price projects, time and materials, and dedicated development teams. We can tailor our engagement to suit your specific needs and budget.'
    },
    {
      id: 4,
      question: 'Do you provide post-deployment support?',
      answer:
        'Yes, we provide comprehensive maintenance and support services to ensure your applications continue to perform optimally. We offer various support tiers including 24/7 coverage.'
    },
    {
      id: 5,
      question: 'What technologies do you specialize in?',
      answer:
        'We have expertise in a wide range of technologies including Java, .NET, Python, Node.js, React, Angular, AWS, Azure, Google Cloud, and various AI/ML frameworks.'
    },
    {
      id: 6,
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on the scope and complexity. We work with you to define clear milestones and deliverables to ensure timely completion.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80")',
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
              <FaLaptopCode size={60} style={{ color: '#1E3679' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              DIGITAL TRANSFORMATION
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER empowers businesses to navigate the digital age with confidence. Our comprehensive suite of digital services, from cloud computing and AI to cybersecurity and software development, drives innovation, operational efficiency, and sustainable growth. Partner with us to reimagine your business for the future.
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
                  <div style={{  color: '#00AA8A', marginBottom: '20px' }}>
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
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Digital Capabilities</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>End-to-end technology solutions to drive your business forward</p>
          </motion.div>

          {services.map((service, idx) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-4">

              <div style={{background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>

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
                      View Solutions {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#00AA8A' }}>Key Offerings</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '15px', marginBottom: '30px' }}>
                          {service.details.map((detail, idx) => (
                            <motion.div 
                              key={idx}
                              whileHover={{ x: 5 }}
                              style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                              <FaCheckCircle size={16} style={{color: '#00AA8A', marginRight: '8px' }} />
                              {detail}
                            </motion.div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <h4 className="fw-bold mb-3" style={{  color: '#FBD21A' }}>Technologies & Partners</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.certifications.map((cert, idx) => (
                            <span key={idx} style={{ padding: '10px 20px',  background: 'rgba(251,210,26,0.2)', borderRadius: '25px', border: '1px solid rgba(251,210,26,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {cert}
                            </span>
                          ))}
                        </div>

                        {/* Benefits */}
                        <h4 className="fw-bold mb-3" style={{color: '#00AA8A' }}>Business Impact</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.careerPaths.map((career, idx) => (
                            <span key={idx} style={{ padding: '10px 20px',  background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
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
                            Consult Our Experts
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
            <h2 className="fw-bold text-white">Why Partner with ZEPFTER?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              We bring deep technical expertise and industry knowledge to solve your most complex challenges.
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
              Common questions about our Digital Transformation Services.
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

export default DigitalTransformationServices;