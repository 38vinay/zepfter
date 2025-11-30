import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCloud,
  FaLaptopCode,
  FaShieldAlt,
  FaRobot,
  FaNetworkWired,
  FaUsersCog,
  FaCheckCircle,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaServer,
  FaBrain,
  FaCogs
} from "react-icons/fa";

const EnhancedIT = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const itProducts = [
    {
      title: "Cloud Infrastructure Services",
      icon: <FaCloud size={40} />,
      desc: "Secure, scalable cloud solutions for modern enterprises.",
      details: "We provide comprehensive cloud infrastructure deployment, optimization, and management across AWS, Azure, and Google Cloud Platform. Our cloud experts design and implement high-performance, cost-efficient, and secure cloud ecosystems tailored to your business needs. From initial migration to ongoing optimization, we ensure your cloud infrastructure delivers maximum value with minimal complexity.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      keyPoints: [
        "Multi-cloud architecture design and implementation",
        "Auto-scaling infrastructure for peak performance",
        "Cloud migration and modernization services",
        "Cost optimization and resource management",
        "High-availability and disaster recovery setup",
        "Cloud security and compliance management",
        "24/7 cloud monitoring and support"
      ],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679 0%, #2a4a9f 100%)"
    },
    {
      title: "Custom Software Development",
      icon: <FaLaptopCode size={40} />,
      desc: "Tailored applications designed for your business workflow.",
      details: "From web applications to enterprise-level systems, our custom software solutions are developed using modern frameworks, optimized architecture, and scalable APIs. We specialize in building robust, user-friendly applications that streamline operations, enhance productivity, and drive digital transformation. Our agile development approach ensures rapid delivery without compromising quality.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      keyPoints: [
        "Enterprise application development (full-stack)",
        "Custom CRM and ERP solutions",
        "RESTful API development and integration",
        "Mobile and progressive web applications",
        "Legacy system modernization and migration",
        "Microservices architecture implementation",
        "Continuous integration and deployment (CI/CD)"
      ],
      color: "#00AA8A",
      gradient: "linear-gradient(135deg, #00AA8A 0%, #00d4aa 100%)"
    },
    {
      title: "Cybersecurity Solutions",
      icon: <FaShieldAlt size={40} />,
      desc: "Protect your applications, data, and networks from threats.",
      details: "We implement comprehensive cybersecurity solutions including advanced threat detection, penetration testing, firewall configuration, identity access management, and end-to-end cyber defense systems. Our security experts conduct thorough vulnerability assessments, implement industry best practices, and provide ongoing monitoring to safeguard your IT infrastructure against evolving cyber threats.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      keyPoints: [
        "Advanced threat detection and prevention (SIEM)",
        "Penetration testing and vulnerability assessment",
        "Security incident response and recovery",
        "Identity and access management (IAM)",
        "Data encryption and DLP solutions",
        "Security compliance (ISO 27001, SOC 2)",
        "Security awareness training programs"
      ],
      color: "#FBD21A",
      gradient: "linear-gradient(135deg, #FBD21A 0%, #ffd700 100%)"
    },
    {
      title: "IT Consulting & Digital Strategy",
      icon: <FaUsersCog size={40} />,
      desc: "Expert guidance to modernize your technology stack.",
      details: "Our IT consulting services help organizations plan, implement, and scale their digital infrastructure with future-ready strategies and industry best practices. We provide strategic guidance on technology selection, digital transformation roadmaps, process optimization, and change management. Our consultants bring deep technical expertise and business acumen to drive successful IT initiatives.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      keyPoints: [
        "Digital transformation roadmap development",
        "Technology stack evaluation and selection",
        "IT infrastructure assessment and optimization",
        "Process automation strategy and implementation",
        "Change management and training programs",
        "IT governance and compliance consulting",
        "Technology vendor selection and management"
      ],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)"
    },
    {
      title: "AI & Automation Solutions",
      icon: <FaRobot size={40} />,
      desc: "Intelligent automation to boost operational efficiency.",
      details: "We build AI-powered solutions and intelligent automation workflows that streamline business processes, reduce manual work, and provide data-driven insights for better decision-making. From robotic process automation (RPA) to machine learning models, we leverage cutting-edge AI technologies to transform your operations and unlock new business opportunities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      keyPoints: [
        "Intelligent process automation (RPA)",
        "Machine learning model development and deployment",
        "Natural language processing solutions",
        "Predictive analytics and forecasting",
        "Chatbot and virtual assistant development",
        "Computer vision and image recognition",
        "AI-powered business intelligence"
      ],
      color: "#00AA8A",
      gradient: "linear-gradient(135deg, #00AA8A 0%, #1E3679 100%)"
    },
    {
      title: "Network & Server Management",
      icon: <FaNetworkWired size={40} />,
      desc: "Reliable network architecture and server administration.",
      details: "We offer end-to-end network configuration, monitoring, and server management to ensure maximum uptime and smooth operations across your organization. Our infrastructure experts design resilient network architectures, implement robust security measures, and provide 24/7 monitoring and support to keep your systems running at peak performance.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      keyPoints: [
        "Network architecture design and implementation",
        "Server provisioning and configuration (Windows/Linux)",
        "24/7 monitoring and proactive maintenance",
        "Load balancing and failover setup",
        "Performance tuning and optimization",
        "Network security and firewall management",
        "Backup and disaster recovery solutions"
      ],
      color: "#FBD21A",
      gradient: "linear-gradient(135deg, #FBD21A 0%, #00AA8A 100%)"
    },
    {
      title: "Data Analytics & Business Intelligence",
      icon: <FaDatabase size={40} />,
      desc: "Transform data into actionable business insights.",
      details: "Our data analytics and business intelligence solutions help organizations harness the power of their data through advanced analytics, visualization, and reporting. We implement comprehensive BI platforms, develop custom dashboards, and create predictive models that drive informed decision-making and competitive advantage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      keyPoints: [
        "Business intelligence platform implementation (Power BI, Tableau)",
        "Data warehouse design and development",
        "ETL pipeline development and optimization",
        "Custom dashboard and reporting solutions",
        "Predictive analytics and data modeling",
        "Real-time analytics and streaming data",
        "Data governance and quality management"
      ],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679 0%, #2a4a9f 100%)"
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt size={40} />,
      desc: "Native and cross-platform mobile applications.",
      details: "We develop high-performance mobile applications for iOS and Android platforms using native and cross-platform technologies. Our mobile development team creates intuitive, feature-rich apps that deliver exceptional user experiences, integrate seamlessly with backend systems, and scale to millions of users.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      keyPoints: [
        "Native iOS development (Swift, SwiftUI)",
        "Native Android development (Kotlin, Jetpack Compose)",
        "Cross-platform development (React Native, Flutter)",
        "Mobile backend and API integration",
        "App store optimization and deployment",
        "Mobile security and data encryption",
        "Push notifications and real-time features"
      ],
      color: "#00AA8A",
      gradient: "linear-gradient(135deg, #00AA8A 0%, #00d4aa 100%)"
    },
    {
      title: "DevOps & CI/CD",
      icon: <FaCogs size={40} />,
      desc: "Streamline development with modern DevOps practices.",
      details: "We implement DevOps best practices and CI/CD pipelines that accelerate software delivery, improve code quality, and enhance collaboration between development and operations teams. Our DevOps solutions automate build, test, and deployment processes, enabling rapid iteration and reliable releases.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
      keyPoints: [
        "CI/CD pipeline design and implementation",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Container orchestration (Docker, Kubernetes)",
        "Automated testing and quality assurance",
        "Release management and deployment automation",
        "Monitoring and logging (Prometheus, ELK Stack)",
        "GitOps and version control strategies"
      ],
      color: "#FBD21A",
      gradient: "linear-gradient(135deg, #FBD21A 0%, #ffd700 100%)"
    },
    {
      title: "Web Development",
      icon: <FaCode size={40} />,
      desc: "Modern, responsive websites and web applications.",
      details: "We create stunning, high-performance websites and web applications using the latest web technologies and frameworks. From corporate websites to complex web portals, our development team delivers responsive, SEO-optimized, and user-friendly solutions that engage audiences and drive business results.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      keyPoints: [
        "Responsive web design (mobile-first approach)",
        "Modern JavaScript frameworks (React, Vue, Angular)",
        "E-commerce platform development",
        "Content management systems (WordPress, Drupal)",
        "Progressive Web Apps (PWA)",
        "SEO optimization and performance tuning",
        "Web accessibility (WCAG compliance)"
      ],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)"
    },
    {
      title: "Database Management",
      icon: <FaServer size={40} />,
      desc: "Robust database design, optimization, and administration.",
      details: "Our database experts provide comprehensive database management services including design, optimization, migration, and ongoing administration. We work with both SQL and NoSQL databases to ensure your data infrastructure is scalable, performant, and secure.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
      keyPoints: [
        "Database design and architecture (SQL, NoSQL)",
        "Performance tuning and query optimization",
        "Database migration and consolidation",
        "Backup and recovery strategies",
        "High availability and replication setup",
        "Database security and access control",
        "Cloud database management (RDS, CosmosDB)"
      ],
      color: "#00AA8A",
      gradient: "linear-gradient(135deg, #00AA8A 0%, #1E3679 100%)"
    },
    {
      title: "IT Support & Managed Services",
      icon: <FaBrain size={40} />,
      desc: "Comprehensive IT support and managed services.",
      details: "We provide end-to-end IT support and managed services to keep your technology infrastructure running smoothly. Our support team offers proactive monitoring, rapid issue resolution, and strategic guidance to minimize downtime and maximize productivity.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      keyPoints: [
        "24/7 helpdesk and technical support",
        "Proactive system monitoring and maintenance",
        "Patch management and software updates",
        "Asset management and inventory tracking",
        "Remote and on-site support services",
        "SLA-based service delivery",
        "IT documentation and knowledge base"
      ],
      color: "#FBD21A",
      gradient: "linear-gradient(135deg, #FBD21A 0%, #00AA8A 100%)"
    }
  ];

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
              <FaLaptopCode size={60} style={{ color: '#00AA8A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              IT SOLUTIONS
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              Empowering businesses with modern digital solutions, enterprise-grade technology, and secure IT infrastructure tailored to your growth. We transform ideas into powerful digital experiences.
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
              <div style={{ overflow: 'hidden', borderRadius: '20px', border: '3px solid #1E3679' }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                  alt="IT Solutions"
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
                <h2 className="fw-bold mb-4" style={{ color: '#00AA8A' }}>
                  Digital Transformation Excellence
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                  Our IT solutions are crafted to help businesses adopt the latest digital tools, strengthen their infrastructure, and achieve operational excellence. We empower teams through automation, robust networks, and modern software.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  By combining cloud computing, cybersecurity, automation, and IT consulting, we enable enterprises to remain competitive in today's evolving technological landscape.
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
              OUR <span style={{ color: '#00AA8A' }}>ACHIEVEMENTS</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Delivering cutting-edge IT solutions globally
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              { number: '1000+', label: 'Projects Delivered', color: '#1E3679' },
              { number: '300+', label: 'Enterprise Clients', color: '#00AA8A' },
              { number: '50+', label: 'Countries Worldwide', color: '#FBD21A' },
              { number: '99%', label: 'Client Retention', color: '#1E3679' }
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
              WHY CHOOSE <span style={{ color: '#FBD21A' }}>ZEPFTER IT</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Your trusted technology partner for digital innovation
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: 'Technical Excellence',
                desc: 'Expert team of certified professionals with deep expertise in latest technologies including cloud, AI, cybersecurity, and enterprise software development.',
                icon: '🎯',
                color: '#1E3679'
              },
              {
                title: 'Agile Methodology',
                desc: 'Fast, iterative development approach with continuous delivery, regular feedback loops, and adaptive planning for maximum flexibility.',
                icon: '⚡',
                color: '#00AA8A'
              },
              {
                title: 'Scalable Solutions',
                desc: 'Future-proof architecture designed to grow with your business, handling increased load and expanding functionality seamlessly.',
                icon: '📈',
                color: '#FBD21A'
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock technical support and monitoring ensuring maximum uptime and rapid issue resolution for business continuity.',
                icon: '🛡️',
                color: '#1E3679'
              },
              {
                title: 'Innovation Focus',
                desc: 'Continuous research and adoption of emerging technologies to keep your solutions at the cutting edge of digital innovation.',
                icon: '💡',
                color: '#00AA8A'
              },
              {
                title: 'Cost Optimization',
                desc: 'Efficient resource utilization and smart automation reducing operational costs while maintaining high quality and performance.',
                icon: '💰',
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
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
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

      {/* TECHNOLOGY STACK SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(0,0,0,0.3)' }}>
        <div className="container">
          <div className="row g-4 align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                TECHNOLOGY <span style={{ color: '#00AA8A' }}>STACK</span>
              </h2>
              <p className="text-white mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>
                We leverage industry-leading technologies and frameworks to build robust, scalable, and innovative solutions. Our technology expertise spans across multiple domains and platforms.
              </p>
              <div className="row g-3">
                {[
                  'React, Angular, Vue.js',
                  'Node.js, Python, Java',
                  'AWS, Azure, Google Cloud',
                  'Docker, Kubernetes',
                  'MongoDB, PostgreSQL, MySQL',
                  'TensorFlow, PyTorch'
                ].map((tech, idx) => (
                  <div className="col-md-6" key={idx}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      style={{
                        background: 'rgba(0,170,138,0.1)',
                        padding: '15px 20px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0,170,138,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#00AA8A',
                        borderRadius: '50%'
                      }} />
                      <span className="text-white">{tech}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '20px', border: '3px solid #FBD21A' }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
                  alt="Technology Stack"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              CERTIFICATIONS & <span style={{ color: '#1E3679' }}>PARTNERSHIPS</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Industry-recognized certifications and strategic partnerships
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              { cert: 'AWS Partner', desc: 'Advanced Consulting Partner', color: '#1E3679' },
              { cert: 'Microsoft Gold', desc: 'Cloud Platform Partner', color: '#00AA8A' },
              { cert: 'Google Cloud', desc: 'Premier Partner', color: '#FBD21A' },
              { cert: 'ISO 27001', desc: 'Information Security', color: '#1E3679' },
              { cert: 'ISO 9001', desc: 'Quality Management', color: '#00AA8A' },
              { cert: 'CMMI Level 5', desc: 'Process Maturity', color: '#FBD21A' }
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
                    {item.cert}
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

      {/* PRODUCTS GRID */}
      <section style={{ padding: '80px 20px', background: 'rgba(0,0,0,0.3)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              SOME OF OUR <span style={{ color: '#00AA8A' }}>IT RELATED SERVICES</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Comprehensive technology solutions for modern businesses
            </p>
          </motion.div>

          <div className="row g-4">
            {itProducts.map((item, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedProduct(item)}
                  style={{
                    background: hoveredCard === idx ? item.gradient : 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: '40px',
                    border: `2px solid ${hoveredCard === idx ? item.color : 'rgba(255,255,255,0.1)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <motion.div
                      style={{
                        color: hoveredCard === idx ? 'white' : item.color,
                        marginBottom: '20px',
                        transition: 'color 0.3s ease'
                      }}
                      animate={hoveredCard === idx ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>

                    <h3
                      className="fw-bold mb-3"
                      style={{
                        color: hoveredCard === idx ? 'white' : item.color,
                        fontSize: '1.3rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p style={{
                      color: hoveredCard === idx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                      lineHeight: '1.6',
                      transition: 'color 0.3s ease'
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className="fw-semibold"
                    style={{
                      color: hoveredCard === idx ? 'white' : item.color,
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '25px',
                maxWidth: '80%',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0,0,0,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => e.target.style.background = selectedProduct.color}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.1)'}
              >
                <FaTimes size={20} />
              </button>

              {selectedProduct.image && (
                <div style={{
                  marginBottom: '30px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: `3px solid ${selectedProduct.color}`
                }}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}

              <div style={{ color: selectedProduct.color, marginBottom: '20px' }}>
                {selectedProduct.icon}
              </div>

              <h2
                className="fw-bold mb-4"
                style={{ color: selectedProduct.color }}
              >
                {selectedProduct.title}
              </h2>

              <p style={{ color: '#555', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px' }}>
                {selectedProduct.details}
              </p>

              {selectedProduct.keyPoints && (
                <>
                  <h4 className="fw-bold mb-3" style={{ color: selectedProduct.color }}>
                    Key Features & Capabilities
                  </h4>
                  <div style={{ marginBottom: '30px' }}>
                    {selectedProduct.keyPoints.map((point, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '12px',
                          padding: '12px',
                          background: `${selectedProduct.color}10`,
                          borderRadius: '8px',
                          border: `1px solid ${selectedProduct.color}30`
                        }}
                      >
                        <FaCheckCircle style={{ color: selectedProduct.color, minWidth: '20px' }} />
                        <span style={{ color: '#333', fontSize: '0.95rem' }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProduct(null)}
                style={{
                  width: '100%',
                  padding: '15px 40px',
                  background: selectedProduct.gradient,
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedIT;