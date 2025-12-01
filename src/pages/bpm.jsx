import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCogs,
    FaChartPie,
    FaProjectDiagram,
    FaRobot,
    FaSyncAlt,
    FaClipboardCheck,
    FaCheckCircle,
    FaTimes,
    FaLightbulb,
    FaNetworkWired,
    FaUsersCog
} from "react-icons/fa";

const BPM = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            title: "Process Optimization",
            icon: <FaCogs size={40} />,
            desc: "Streamline workflows to eliminate bottlenecks and inefficiencies.",
            details: "Our Process Optimization services analyze your current business processes to identify inefficiencies and bottlenecks. We implement lean methodologies and best practices to streamline workflows, reduce cycle times, and improve overall operational efficiency.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
            keyPoints: [
                "Workflow Analysis & Mapping",
                "Bottleneck Identification",
                "Lean Process Implementation",
                "Cycle Time Reduction",
                "Resource Utilization Optimization",
                "Standard Operating Procedures (SOPs)",
                "Continuous Improvement Strategies"
            ],
            color: "#1E3679"
        },
        {
            title: "Business Process Automation",
            icon: <FaRobot size={40} />,
            desc: "Automate repetitive tasks to increase productivity and reduce errors.",
            details: "We leverage cutting-edge automation technologies, including RPA (Robotic Process Automation), to automate repetitive and rule-based tasks. This frees up your workforce to focus on higher-value activities, reduces human error, and accelerates process execution.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
            keyPoints: [
                "Robotic Process Automation (RPA)",
                "Workflow Automation",
                "Intelligent Document Processing",
                "Chatbots & Virtual Assistants",
                "Integration with Legacy Systems",
                "Automated Reporting",
                "Error Reduction"
            ],
            color: "#00AA8A"
        },
        {
            title: "Workflow Management",
            icon: <FaProjectDiagram size={40} />,
            desc: "Design and manage complex workflows for better collaboration.",
            details: "Our Workflow Management solutions help you design, execute, and monitor complex business processes. We provide tools to orchestrate tasks across departments, ensure accountability, and improve collaboration among teams.",
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
            keyPoints: [
                "Custom Workflow Design",
                "Task Assignment & Tracking",
                "Approval Hierarchies",
                "Cross-functional Collaboration",
                "Real-time Process Monitoring",
                "SLA Management",
                "Notification & Alerts"
            ],
            color: "#FBD21A"
        },
        {
            title: "Performance Monitoring",
            icon: <FaChartPie size={40} />,
            desc: "Track KPIs and metrics to measure process performance.",
            details: "We implement robust performance monitoring frameworks to track key performance indicators (KPIs) and process metrics. Our dashboards provide real-time visibility into process health, enabling data-driven decision-making and proactive management.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            keyPoints: [
                "KPI Definition & Tracking",
                "Real-time Dashboards",
                "Process Analytics",
                "Variance Analysis",
                "Benchmarking",
                "Performance Reporting",
                "Root Cause Analysis"
            ],
            color: "#1E3679"
        },
        {
            title: "Change Management",
            icon: <FaSyncAlt size={40} />,
            desc: "Facilitate smooth transitions during process changes.",
            details: "Effective Change Management is crucial for the success of any BPM initiative. We support your organization through the transition process, ensuring stakeholder buy-in, minimizing resistance, and promoting the adoption of new processes and technologies.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
            keyPoints: [
                "Change Impact Assessment",
                "Stakeholder Engagement",
                "Communication Strategy",
                "Training & Enablement",
                "Resistance Management",
                "Adoption Tracking",
                "Culture Transformation"
            ],
            color: "#00AA8A"
        },
        {
            title: "Compliance & Risk Management",
            icon: <FaClipboardCheck size={40} />,
            desc: "Ensure processes adhere to regulations and mitigate risks.",
            details: "Our BPM solutions integrate compliance and risk management into your business processes. We help you identify operational risks, implement controls, and ensure that your processes meet industry regulations and internal standards.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
            keyPoints: [
                "Regulatory Compliance Audit",
                "Risk Assessment & Mitigation",
                "Internal Control Implementation",
                "Audit Trail Maintenance",
                "Policy Enforcement",
                "Governance Frameworks",
                "Quality Assurance"
            ],
            color: "#FBD21A"
        }
    ];

    return (
        <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>

            {/* HERO SECTION */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80")',
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
                            <FaNetworkWired size={60} style={{ color: '#FBD21A' }} />
                        </div>
                        <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            BUSINESS PROCESS MANAGEMENT
                        </h1>
                        <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
                            Optimize, automate, and transform your business processes for agility and operational excellence. Drive innovation and efficiency with our comprehensive BPM solutions.
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
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                    alt="BPM Solutions"
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
                                    Process Transformation
                                </h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    Business Process Management (BPM) is the discipline of improving a company's performance by managing and optimizing its business processes. It involves modeling, analyzing, and improving end-to-end business processes.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Our BPM approach combines technology, methodology, and expertise to help you achieve operational agility. By aligning your processes with your business strategy, we help you deliver value to your customers faster and more efficiently.
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
                            Delivering measurable results through process excellence
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {[
                            { number: '30%', label: 'Efficiency Increase', color: '#1E3679' },
                            { number: '50%', label: 'Cost Reduction', color: '#00AA8A' },
                            { number: '99%', label: 'Process Accuracy', color: '#FBD21A' },
                            { number: '2x', label: 'Faster Delivery', color: '#1E3679' }
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
                            Partner with experts to transform your business operations
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {[
                            {
                                title: 'Holistic Approach',
                                desc: 'We look at the big picture, integrating people, processes, and technology for sustainable results.',
                                icon: <FaUsersCog />,
                                color: '#1E3679'
                            },
                            {
                                title: 'Innovation Driven',
                                desc: 'We leverage the latest technologies like AI and RPA to drive process innovation.',
                                icon: <FaLightbulb />,
                                color: '#00AA8A'
                            },
                            {
                                title: 'Data Centric',
                                desc: 'Our solutions are built on data analytics to ensure measurable and actionable insights.',
                                icon: <FaChartPie />,
                                color: '#FBD21A'
                            },
                            {
                                title: 'Agile Methodology',
                                desc: 'We use agile practices to deliver quick wins and adapt to changing business needs.',
                                icon: <FaSyncAlt />,
                                color: '#1E3679'
                            },
                            {
                                title: 'Expert Team',
                                desc: 'Our team consists of certified BPM professionals with deep industry experience.',
                                icon: <FaUsersCog />,
                                color: '#00AA8A'
                            },
                            {
                                title: 'Scalable Solutions',
                                desc: 'Our BPM frameworks are designed to scale with your business growth.',
                                icon: <FaNetworkWired />,
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
                            Ensuring your processes meet the highest industry standards
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {[
                            { standard: 'ISO 9001', desc: 'Quality Management', color: '#1E3679' },
                            { standard: 'Six Sigma', desc: 'Process Improvement', color: '#00AA8A' },
                            { standard: 'BPMN 2.0', desc: 'Process Modeling', color: '#FBD21A' },
                            { standard: 'CMMI', desc: 'Capability Maturity', color: '#1E3679' },
                            { standard: 'ITIL', desc: 'IT Service Management', color: '#00AA8A' },
                            { standard: 'GDPR', desc: 'Data Privacy', color: '#FBD21A' }
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
                            Comprehensive BPM solutions to drive operational excellence
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
                                            BPM Solution
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

export default BPM;
