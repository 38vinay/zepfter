import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCheckCircle,
  FaCapsules,
  FaDatabase,
  FaNetworkWired,
  FaClipboardList,
  FaShieldAlt,
  FaWeight,
  FaFlask,
  FaFileAlt,
  FaWarehouse,
  FaCog,
  FaMicroscope,
  FaChartLine,
  FaClipboardCheck,
  FaBook,
  FaBalanceScale,
  FaCertificate,
} from "react-icons/fa";

const Pharma = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      title: "Execution Platform (Elog)",
      icon: <FaClipboardList size={40} />,
      desc: "Our Vision for Digital Manufacturing & Future Quality Control.",
      details: "Elog is a comprehensive digital execution platform designed to revolutionize pharmaceutical manufacturing through automation and real-time monitoring. It streamlines quality control processes, ensures regulatory compliance, and provides complete traceability throughout the manufacturing lifecycle. The platform integrates seamlessly with existing systems to create a unified digital ecosystem for pharmaceutical operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      keyPoints: [
        "Digitalization of logs and forms with real-time execution tracking",
        "Digital systems inventory for entire pharmaceutical plant",
        "Automated task generation for any manufacturing activity",
        "Execution of tasks with approval workflow systems",
        "Product changeovers and cleaning logs management",
        "One unified platform for all plant execution processes",
        "Equipment and instrument maintenance activities"
      ],
      color: "#1E3679"
    },
    {
      title: "Integrated Data Hub (IDH)",
      icon: <FaDatabase size={40} />,
      desc: "An innovative publish–subscribe data hub approach for seamless integrations.",
      details: "The Integrated Data Hub (IDH) serves as the central nervous system for pharmaceutical data management. Using an innovative publish-subscribe architecture, it enables secure, scalable, and real-time data exchange across multiple pharmaceutical systems. IDH supports data harmonization, standardization, and acts as a centralized integration framework, eliminating data silos and ensuring consistent information flow across your organization.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      keyPoints: [
        "Real-time data synchronization across multiple systems",
        "Secure publish-subscribe messaging architecture",
        "Data harmonization and standardization",
        "Scalable integration framework for pharma systems",
        "API-first approach for seamless connectivity",
        "Master data management capabilities",
        "Advanced data security and encryption"
      ],
      color: "#00AA8A"
    },
    {
      title: "Intelligent CDS Hub",
      icon: <FaNetworkWired size={40} />,
      desc: "Our Vision for Digital Manufacturing & Future Quality Control.",
      details: "The Intelligent CDS Hub is an advanced content distribution and control system specifically designed for managing regulated pharmaceutical documentation and quality assets. It provides intelligent document routing, version control, and ensures that the right information reaches the right people at the right time, maintaining complete audit trails and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      keyPoints: [
        "Centralized content distribution and management",
        "Automated document version control",
        "Regulatory compliance documentation",
        "Secure access control and audit trails",
        "Multi-site content synchronization",
        "Intelligent document routing",
        "Electronic signature integration"
      ],
      color: "#FBD21A"
    },
    {
      title: "Quality Assurance",
      icon: <FaCheckCircle size={40} />,
      desc: "Ensuring product quality through systematic processes and compliance.",
      details: "Our Quality Assurance services provide comprehensive support for establishing and maintaining robust quality systems in pharmaceutical manufacturing. We help organizations implement systematic processes, conduct thorough quality assessments, and ensure continuous improvement. Our expert team works closely with you to develop quality strategies that not only meet regulatory requirements but also drive operational excellence and product quality.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      keyPoints: [
        "Quality System Implementation and optimization",
        "Process Validation & Verification programs",
        "Continuous Improvement Programs (Lean, Six Sigma)",
        "Quality Risk Management (ICH Q9)",
        "Supplier Quality Management and audits",
        "Quality metrics and KPI development",
        "Quality culture transformation"
      ],
      color: "#1E3679"
    },
    {
      title: "Quality Control / Pharmaceutical Analysis",
      icon: <FaMicroscope size={40} />,
      desc: "Advanced analytical testing and quality control services.",
      details: "State-of-the-art pharmaceutical analysis and quality control testing services utilizing the latest analytical techniques and instrumentation. Our laboratories are equipped with advanced HPLC, GC-MS, FTIR, and other sophisticated analytical instruments. We provide comprehensive testing services from raw materials to finished products, ensuring safety, efficacy, and compliance with pharmacopeial and regulatory standards.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
      keyPoints: [
        "Raw Material Testing and qualification",
        "In-Process Quality Control monitoring",
        "Finished Product Testing (release and stability)",
        "Stability Testing (ICH guidelines)",
        "Method Development & Validation (USP, ICH)",
        "Impurity profiling and characterization",
        "Microbiological testing"
      ],
      color: "#00AA8A"
    },
    {
      title: "Research & Development",
      icon: <FaFlask size={40} />,
      desc: "Innovative R&D support and pharmaceutical development services.",
      details: "Comprehensive research and development services supporting the entire drug development lifecycle from discovery to commercialization. Our R&D team brings extensive experience in formulation development, process optimization, and analytical method development. We accelerate pharmaceutical innovation through scientific excellence, cutting-edge technology, and strategic planning.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
      keyPoints: [
        "Formulation Development (oral, parenteral, topical)",
        "Process Development and optimization",
        "Analytical Method Development",
        "Scale-up Studies and tech transfer",
        "Technology Transfer support",
        "Preformulation studies",
        "Bioavailability and bioequivalence studies"
      ],
      color: "#FBD21A"
    },
    {
      title: "Manufacturing Operations",
      icon: <FaCapsules size={40} />,
      desc: "Efficient manufacturing operations and production management.",
      details: "Optimized manufacturing operations management services designed to maximize efficiency, ensure compliance, and maintain product quality. We provide end-to-end support for pharmaceutical production including planning, execution, monitoring, and continuous improvement. Our approach combines lean manufacturing principles with GMP requirements to deliver operational excellence.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
      keyPoints: [
        "Production Planning & Scheduling optimization",
        "Batch Manufacturing execution",
        "Process Optimization (lean manufacturing)",
        "Equipment Management and utilization",
        "Production Documentation (batch records)",
        "Yield improvement programs",
        "Manufacturing capacity planning"
      ],
      color: "#1E3679"
    },
    {
      title: "Regulatory Affairs",
      icon: <FaFileAlt size={40} />,
      desc: "Expert regulatory affairs and compliance management services.",
      details: "Professional regulatory affairs services providing strategic guidance and tactical support for navigating complex pharmaceutical regulations globally. Our regulatory experts have extensive experience with FDA, EMA, and other international regulatory agencies. We manage the entire regulatory lifecycle from initial submissions to post-approval changes, ensuring timely approvals and ongoing compliance.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      keyPoints: [
        "Regulatory Submissions (IND, NDA, ANDA, MAA)",
        "Product Registration (global markets)",
        "Regulatory Intelligence and horizon scanning",
        "Compliance Management and gap assessments",
        "Health Authority Interactions and meetings",
        "Post-approval change management",
        "Regulatory strategy development"
      ],
      color: "#00AA8A"
    },
    {
      title: "Quality Management Systems",
      icon: <FaCog size={40} />,
      desc: "Comprehensive QMS implementation and management.",
      details: "Design, implementation, and maintenance of robust Quality Management Systems aligned with international standards (ISO 9001, ISO 13485) and pharmaceutical regulations (21 CFR Part 11, EU GMP). We help organizations build quality into their processes, establish effective quality governance, and create a culture of continuous improvement that drives business success.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      keyPoints: [
        "QMS Design & Implementation (ISO certified)",
        "Document Control Systems setup",
        "Change Control Management processes",
        "CAPA Management systems",
        "Management Review programs",
        "Quality manual development",
        "Internal audit programs"
      ],
      color: "#FBD21A"
    },
    {
      title: "Document Control Management",
      icon: <FaBook size={40} />,
      desc: "Efficient document control and management systems.",
      details: "Comprehensive document control management services ensuring proper creation, review, approval, distribution, and archival of pharmaceutical documentation. We implement electronic document management systems (EDMS) that streamline document workflows, maintain version control, and provide complete audit trails. Our solutions ensure compliance with 21 CFR Part 11 and EU Annex 11 requirements.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
      keyPoints: [
        "Document Lifecycle Management",
        "Version Control and change tracking",
        "Electronic Document Management Systems (EDMS)",
        "Training Records Management",
        "Archive Management and retrieval",
        "Document templates and standards",
        "Electronic signatures (21 CFR Part 11)"
      ],
      color: "#1E3679"
    },
    {
      title: "Laboratory Information Management System (LIMS)",
      icon: <FaDatabase size={40} />,
      desc: "Advanced LIMS solutions for laboratory management.",
      details: "Implementation and management of state-of-the-art Laboratory Information Management Systems to streamline laboratory operations, enhance data integrity, and ensure regulatory compliance. Our LIMS solutions integrate with analytical instruments, automate workflows, and provide real-time visibility into laboratory operations. We support the entire LIMS lifecycle from selection and validation to ongoing support.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8e0?w=800&q=80",
      keyPoints: [
        "Sample Management and tracking",
        "Test Management and scheduling",
        "Data Management & Integrity (ALCOA+)",
        "Instrument Integration (chromatography, spectroscopy)",
        "Reporting & Analytics dashboards",
        "Inventory management",
        "Electronic lab notebook integration"
      ],
      color: "#00AA8A"
    },
    {
      title: "Pharmaceutical Informatics",
      icon: <FaChartLine size={40} />,
      desc: "Data-driven pharmaceutical informatics solutions.",
      details: "Advanced pharmaceutical informatics services leveraging data analytics, artificial intelligence, and digital technologies to optimize pharmaceutical operations. We help organizations harness the power of their data through advanced analytics, predictive modeling, and business intelligence. Our solutions drive informed decision-making, process optimization, and digital transformation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      keyPoints: [
        "Data Analytics & Visualization (Power BI, Tableau)",
        "Process Automation and RPA",
        "Digital Transformation strategies",
        "System Integration and APIs",
        "Business Intelligence solutions",
        "Predictive analytics and AI/ML",
        "Real-time dashboards and reporting"
      ],
      color: "#FBD21A"
    },
    {
      title: "Laboratory Informatics",
      icon: <FaWeight size={40} />,
      desc: "Comprehensive laboratory informatics and data management.",
      details: "Laboratory informatics solutions including electronic lab notebooks (ELN), scientific data management systems (SDMS), and analytical data management for modern pharmaceutical laboratories. We help laboratories transition to paperless operations, improve data integrity, and enhance collaboration. Our solutions ensure compliance with data integrity requirements (ALCOA+) and regulatory standards.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
      keyPoints: [
        "Electronic Lab Notebooks (ELN) implementation",
        "Analytical Data Management",
        "Laboratory Workflow Automation",
        "Data Integration across systems",
        "Compliance & Audit Trail (21 CFR Part 11)",
        "Scientific Data Management Systems (SDMS)",
        "Chromatography Data Systems (CDS)"
      ],
      color: "#1E3679"
    },
    {
      title: "Pharmaceutical Investigation",
      icon: <FaClipboardCheck size={40} />,
      desc: "Thorough investigation and root cause analysis services.",
      details: "Expert pharmaceutical investigation services providing systematic approaches to deviation investigations, root cause analysis, and corrective/preventive action (CAPA) implementation. Our investigators use proven methodologies including Fishbone diagrams, 5-Why analysis, and Failure Mode Effects Analysis (FMEA) to identify root causes and implement effective solutions that prevent recurrence.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      keyPoints: [
        "Deviation Investigation (systematic approach)",
        "Root Cause Analysis (5-Why, Fishbone, FMEA)",
        "CAPA Implementation and effectiveness checks",
        "Trend Analysis and data mining",
        "Investigation Reporting and documentation",
        "Out-of-specification (OOS) investigations",
        "Contamination investigations"
      ],
      color: "#00AA8A"
    },
    {
      title: "Pharmaceutical Stability Solutions",
      icon: <FaBalanceScale size={40} />,
      desc: "Comprehensive stability testing and management programs.",
      details: "Complete pharmaceutical stability solutions including stability study design, testing, data analysis, and shelf-life determination for pharmaceutical products. We design stability programs compliant with ICH guidelines (Q1A-Q1F) and support regulatory submissions. Our stability services cover long-term, accelerated, and stress testing for all dosage forms.",
      image: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=800&q=80",
      keyPoints: [
        "Stability Study Design (ICH Q1A-Q1F)",
        "Stability Testing Programs (long-term, accelerated)",
        "Data Analysis & Trending (statistical analysis)",
        "Shelf-Life Determination and extension",
        "Stability Protocol Development",
        "Photostability testing (ICH Q1B)",
        "Stability chamber qualification"
      ],
      color: "#FBD21A"
    },
    {
      title: "Pharmaceutical Warehouse Management",
      icon: <FaWarehouse size={40} />,
      desc: "Efficient warehouse management and inventory control.",
      details: "Optimized pharmaceutical warehouse management including inventory control, storage management, and distribution operations ensuring product integrity and compliance with GDP (Good Distribution Practices). We implement warehouse management systems (WMS), optimize storage layouts, and establish procedures for temperature-controlled storage, ensuring product quality throughout the supply chain.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      keyPoints: [
        "Inventory Management (FIFO, FEFO)",
        "Storage Condition Management (temperature, humidity)",
        "Material Handling procedures",
        "Distribution Management and logistics",
        "Warehouse Qualification (mapping studies)",
        "Warehouse Management Systems (WMS)",
        "Cold chain management"
      ],
      color: "#1E3679"
    },
    {
      title: "Pharmaceutical Qualifications",
      icon: <FaCertificate size={40} />,
      desc: "Complete qualification services for equipment and systems.",
      details: "Comprehensive qualification services including Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) for pharmaceutical equipment, facilities, utilities, and computerized systems. We ensure GMP compliance through risk-based qualification approaches, comprehensive documentation, and thorough testing protocols.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      keyPoints: [
        "Installation Qualification (IQ) - equipment installation",
        "Operational Qualification (OQ) - functional testing",
        "Performance Qualification (PQ) - process validation",
        "Equipment Qualification (manufacturing equipment)",
        "Facility Qualification (cleanrooms, HVAC)",
        "Utility qualification (water, HVAC, compressed air)",
        "Computer System Validation (CSV)"
      ],
      color: "#00AA8A"
    },
    {
      title: "Pharmaceutical Calibrations",
      icon: <FaBalanceScale size={40} />,
      desc: "Precise calibration services for pharmaceutical equipment.",
      details: "Professional calibration services for pharmaceutical instruments and equipment ensuring accuracy, reliability, and compliance with regulatory requirements. We provide traceable calibrations using NIST-certified standards, establish calibration schedules, and manage calibration programs. Our services cover analytical instruments, process equipment, and environmental monitoring systems.",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8e0?w=800&q=80",
      keyPoints: [
        "Instrument Calibration (NIST traceable)",
        "Calibration Program Management",
        "Calibration Standards and certificates",
        "Calibration Documentation and records",
        "Out-of-Calibration Investigations",
        "Calibration interval optimization",
        "Temperature mapping and monitoring"
      ],
      color: "#FBD21A"
    },
    {
      title: "Pharmaceutical Validations",
      icon: <FaCheckCircle size={40} />,
      desc: "Comprehensive validation services for processes and systems.",
      details: "Complete validation services including process validation, cleaning validation, analytical method validation, and computer system validation ensuring pharmaceutical operations meet regulatory requirements. We follow FDA, EMA, and ICH guidelines to develop validation strategies, execute validation protocols, and maintain validated states through change control and revalidation programs.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      keyPoints: [
        "Process Validation (Stage 1, 2, 3 per FDA)",
        "Cleaning Validation (visual and analytical)",
        "Computer System Validation (GAMP 5)",
        "Method Validation (ICH Q2)",
        "Validation Master Plans (VMP)",
        "Revalidation programs",
        "Transport validation (shipping)"
      ],
      color: "#1E3679"
    },
    {
      title: "Good Manufacturing Practices (GMP)",
      icon: <FaCapsules size={40} />,
      desc: "GMP compliance and implementation services.",
      details: "Expert GMP consulting and implementation services ensuring pharmaceutical manufacturing operations comply with current Good Manufacturing Practices (cGMP). We provide gap assessments, remediation support, GMP training, and ongoing compliance monitoring. Our services cover FDA 21 CFR Parts 210/211, EU GMP, and PIC/S guidelines.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
      keyPoints: [
        "GMP Compliance Assessment and gap analysis",
        "GMP Training Programs (customized)",
        "GMP Documentation (SOPs, batch records)",
        "GMP Audits (internal and mock regulatory)",
        "GMP Gap Analysis and remediation",
        "cGMP implementation (FDA 21 CFR 210/211)",
        "EU GMP compliance (Annex 1-20)"
      ],
      color: "#00AA8A"
    },
    {
      title: "Good Laboratory Practices (GLP)",
      icon: <FaMicroscope size={40} />,
      desc: "GLP compliance for pharmaceutical laboratories.",
      details: "Good Laboratory Practices implementation and compliance services ensuring pharmaceutical laboratories meet international GLP standards for non-clinical studies. We help organizations achieve and maintain GLP compliance through facility design, SOP development, training programs, and quality assurance oversight. Our services support FDA, OECD, and other GLP regulations.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
      keyPoints: [
        "GLP Compliance Programs (FDA, OECD)",
        "GLP Training for study personnel",
        "Laboratory Audits (GLP compliance)",
        "Study Documentation and archiving",
        "Quality Assurance Programs (QAU)",
        "GLP facility design and setup",
        "Study director support"
      ],
      color: "#FBD21A"
    },
    {
      title: "Good Document Practices (GDP)",
      icon: <FaBook size={40} />,
      desc: "GDP compliance and documentation excellence.",
      details: "Good Documentation Practices services ensuring pharmaceutical documentation meets regulatory requirements with accuracy, completeness, and integrity. We train personnel on proper documentation techniques, implement electronic documentation systems, and conduct documentation audits. Our services ensure compliance with data integrity principles (ALCOA+) and regulatory expectations.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
      keyPoints: [
        "Documentation Standards and templates",
        "GDP Training (ALCOA+ principles)",
        "Document Review and audits",
        "Electronic Records (21 CFR Part 11)",
        "Data Integrity programs",
        "Documentation best practices",
        "Handwritten record requirements"
      ],
      color: "#1E3679"
    },
    {
      title: "Audit & Compliance",
      icon: <FaShieldAlt size={40} />,
      desc: "Comprehensive audit and compliance management services.",
      details: "Professional audit and compliance services including internal audits, supplier audits, regulatory inspection readiness, and compliance management programs. Our experienced auditors conduct risk-based audits, identify compliance gaps, and provide actionable recommendations. We prepare organizations for regulatory inspections and help maintain continuous compliance.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      keyPoints: [
        "Internal Audits (GMP, GDP, GLP)",
        "Supplier Audits and qualification",
        "Regulatory Inspection Readiness (mock inspections)",
        "Compliance Management programs",
        "Audit Remediation and CAPA",
        "Audit program development",
        "Third-party audit support"
      ],
      color: "#00AA8A"
    }
  ];

  return (
    <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>

      {/* HERO SECTION */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80")',
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
              <FaCapsules size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              PHARMACEUTICAL SOLUTIONS
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
              The most recent technologies and scientific breakthroughs that will revolutionize pharmaceutical manufacturing. Our exceptional pharmaceutical IT solutions ensure management and protection of your applications, network, data, and more.
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Pharma"
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
                  Pharmaceutical Innovation
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                  It is time for pharmaceutical companies and their supply chain partners to establish clear expectations for projects. Regulations across the world now demand serialization, ensuring drug integrity and supply chain transparency.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Serialization influences all aspects of pharma operations—from manufacturing to packaging. It enables unique identification of products, improves traceability, and ensures long-term accountability across the supply chain.
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
              Delivering excellence in pharmaceutical services worldwide
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              { number: '500+', label: 'Projects Completed', color: '#1E3679' },
              { number: '150+', label: 'Pharmaceutical Clients', color: '#00AA8A' },
              { number: '25+', label: 'Countries Served', color: '#FBD21A' },
              { number: '98%', label: 'Client Satisfaction', color: '#1E3679' }
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
              WHY CHOOSE <span style={{ color: '#FBD21A' }}>ZEPFTER</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Your trusted partner for comprehensive pharmaceutical solutions
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: 'Regulatory Expertise',
                desc: 'Deep understanding of FDA, EMA, and global regulatory requirements with proven track record of successful submissions and inspections.',
                icon: '📋',
                color: '#1E3679'
              },
              {
                title: 'Industry Experience',
                desc: 'Over 15 years of pharmaceutical industry experience with expertise across all major therapeutic areas and dosage forms.',
                icon: '🏆',
                color: '#00AA8A'
              },
              {
                title: 'Quality Assurance',
                desc: 'Rigorous quality standards ensuring compliance with cGMP, GLP, and international quality management systems.',
                icon: '✓',
                color: '#FBD21A'
              },
              {
                title: 'Technology Integration',
                desc: 'Cutting-edge digital solutions including LIMS, ERP, and data analytics platforms for modern pharmaceutical operations.',
                icon: '💻',
                color: '#1E3679'
              },
              {
                title: 'Global Reach',
                desc: 'International presence with local expertise in major pharmaceutical markets across North America, Europe, and Asia.',
                icon: '🌍',
                color: '#00AA8A'
              },
              {
                title: 'Cost Efficiency',
                desc: 'Optimized processes and lean methodologies delivering high-quality services at competitive pricing with measurable ROI.',
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

      {/* INDUSTRY EXPERTISE SECTION */}
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
                INDUSTRY <span style={{ color: '#00AA8A' }}>EXPERTISE</span>
              </h2>
              <p className="text-white mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9 }}>
                Our team comprises seasoned pharmaceutical professionals with extensive experience across diverse therapeutic areas and product types. We bring deep domain knowledge and practical insights to every project.
              </p>
              <div className="row g-3">
                {[
                  'Small Molecules & APIs',
                  'Biologics & Biosimilars',
                  'Sterile Products',
                  'Oral Solid Dosage',
                  'Parenteral Products',
                  'Medical Devices'
                ].map((area, idx) => (
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
                      <span className="text-white">{area}</span>
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
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Pharmaceutical Expertise"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE STANDARDS SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
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
              We adhere to the highest international pharmaceutical standards
            </p>
          </motion.div>

          <div className="row g-4">
            {[
              { standard: 'FDA 21 CFR', desc: 'US FDA Regulations', color: '#1E3679' },
              { standard: 'EU GMP', desc: 'European Union Guidelines', color: '#00AA8A' },
              { standard: 'ICH Guidelines', desc: 'International Harmonization', color: '#FBD21A' },
              { standard: 'WHO GMP', desc: 'World Health Organization', color: '#1E3679' },
              { standard: 'PIC/S', desc: 'Pharmaceutical Inspection', color: '#00AA8A' },
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
              SOME OF OUR <span style={{ color: '#FBD21A' }}>PHARMA RELATED PRODUCTS</span>
            </h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>
              Innovative solutions for modern pharmaceutical manufacturing
            </p>
          </motion.div>

          <div className="row g-4">
            {products.map((product, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    background: hoveredCard === `product-${idx}` ? product.color : 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    padding: '40px',
                    border: `2px solid ${hoveredCard === `product-${idx}` ? product.color : 'rgba(255,255,255,0.1)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={() => setHoveredCard(`product-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div>
                    <div style={{
                      color: hoveredCard === `product-${idx}` ? 'white' : product.color,
                      marginBottom: '20px',
                      transition: 'color 0.3s ease'
                    }}>
                      {product.icon}
                    </div>

                    <h3
                      className="fw-bold mb-3"
                      style={{
                        color: hoveredCard === `product-${idx}` ? 'white' : product.color,
                        fontSize: '1.3rem',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {product.title}
                    </h3>

                    <p style={{
                      color: hoveredCard === `product-${idx}` ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                      lineHeight: '1.6',
                      transition: 'color 0.3s ease'
                    }}>
                      {product.desc}
                    </p>
                  </div>

                  <div
                    className="fw-semibold"
                    style={{
                      color: hoveredCard === `product-${idx}` ? 'white' : product.color,
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

      {/* PRODUCT MODAL */}
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
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                color: 'white'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
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
                  {selectedProduct.image && (
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
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
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
                    border: `1px solid ${selectedProduct.color}`
                  }}>
                    <div style={{ color: selectedProduct.color, marginBottom: '5px' }}>
                      {selectedProduct.icon}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
                      Pharmaceutical Solution
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="col-lg-7">
                  <div style={{ padding: '40px' }}>
                    <h2
                      className="fw-bold mb-3"
                      style={{
                        color: selectedProduct.color,
                        fontSize: '2rem'
                      }}
                    >
                      {selectedProduct.title}
                    </h2>

                    <p style={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: '1.8',
                      fontSize: '1.05rem',
                      marginBottom: '30px',
                      borderLeft: `3px solid ${selectedProduct.color}`,
                      paddingLeft: '15px'
                    }}>
                      {selectedProduct.details}
                    </p>

                    {selectedProduct.keyPoints && (
                      <>
                        <h5 className="fw-bold mb-4" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ width: '20px', height: '2px', background: selectedProduct.color }}></span>
                          Key Features
                        </h5>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
                          {selectedProduct.keyPoints.map((point, idx) => (
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
                              <FaCheckCircle style={{ color: selectedProduct.color, flexShrink: 0 }} />
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
                          background: selectedProduct.color,
                          color: 'white',
                          padding: '12px 30px',
                          borderRadius: '50px',
                          border: 'none',
                          boxShadow: `0 10px 20px -5px ${selectedProduct.color}60`
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

export default Pharma;
