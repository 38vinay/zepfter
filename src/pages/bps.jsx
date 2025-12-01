import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaHandshake,
    FaShippingFast,
    FaFileInvoiceDollar,
    FaBullhorn,
    FaUserFriends,
    FaBrain,
    FaCheckCircle,
    FaTimes,
    FaGlobeAmericas,
    FaChartBar,
    FaCogs,
    FaShieldAlt
} from "react-icons/fa";

const BPS = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            title: "Strategic Sourcing",
            icon: <FaHandshake size={40} />,
            desc: "Optimize procurement and sourcing strategies for cost efficiency.",
            details: "Our Strategic Sourcing services help you identify the best suppliers, negotiate favorable terms, and manage supplier relationships. We focus on total cost of ownership reduction, risk mitigation, and supply chain resilience.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
            keyPoints: [
                "Supplier Identification & Qualification",
                "Contract Negotiation",
                "Spend Analysis",
                "Category Management",
                "Supplier Relationship Management (SRM)",
                "Risk Management",
                "Cost Reduction Strategies"
            ],
            color: "#1E3679"
        },
        {
            title: "Supply Chain Management",
            icon: <FaShippingFast size={40} />,
            desc: "End-to-end supply chain solutions for seamless operations.",
            details: "We provide comprehensive Supply Chain Management services to optimize the flow of goods and information. From demand planning to logistics execution, we ensure your supply chain is agile, efficient, and responsive to market demands.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
            keyPoints: [
                "Demand Planning & Forecasting",
                "Inventory Management",
                "Logistics & Distribution",
                "Warehouse Management",
                "Order Fulfillment",
                "Supply Chain Analytics",
                "Sustainability Initiatives"
            ],
            color: "#00AA8A"
        },
        {
            title: "Finance & Accounting BPS",
            icon: <FaFileInvoiceDollar size={40} />,
            desc: "Transform your financial operations with expert BPS solutions.",
            details: "Our Finance & Accounting BPS services go beyond transaction processing to provide strategic insights and process improvements. We handle accounts payable/receivable, general ledger, tax compliance, and financial reporting with high accuracy and compliance.",
            image: "https://images.unsplash.com/photo-1554224155-9ffd4cd95525?w=800&q=80",
            keyPoints: [
                "Procure-to-Pay (P2P)",
                "Order-to-Cash (O2C)",
                "Record-to-Report (R2R)",
                "Financial Planning & Analysis (FP&A)",
                "Tax & Compliance",
                "Treasury Management",
                "Audit Support"
            ],
            color: "#FBD21A"
        },
        {
            title: "Marketing BPS",
            icon: <FaBullhorn size={40} />,
            desc: "Drive brand growth with targeted marketing operations services.",
            details: "We support your marketing efforts with scalable operations services. From campaign management to digital asset management and marketing analytics, we help you execute your marketing strategy effectively and measure ROI.",
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
            keyPoints: [
                "Campaign Management",
                "Digital Asset Management",
                "Social Media Management",
                "Marketing Analytics",
                "Lead Management",
                "Content Moderation",
                "Customer Insights"
            ],
            color: "#1E3679"
        },
        {
            title: "HR BPS",
            icon: <FaUserFriends size={40} />,
            desc: "Comprehensive HR services to manage your global workforce.",
            details: "Our HR BPS solutions cover the full employee lifecycle. We manage payroll, benefits, talent acquisition, and learning & development, allowing your HR team to focus on strategic initiatives and employee engagement.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
            keyPoints: [
                "Global Payroll Administration",
                "Benefits Administration",
                "Talent Acquisition & RPO",
                "Learning & Development Administration",
                "HR Helpdesk",
                "Employee Data Management",
                "Compliance & Reporting"
            ],
            color: "#00AA8A"
        },
        {
            title: "Knowledge Process Outsourcing",
            icon: <FaBrain size={40} />,
            desc: "High-value knowledge services for specialized business needs.",
            details: "Our Knowledge Process Outsourcing (KPO) services provide specialized domain expertise. We offer market research, data analytics, legal process outsourcing, and other high-end services to support critical business decisions.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
            keyPoints: [
                "Market Research & Analysis",
                "Data Analytics & Modeling",
                "Legal Process Outsourcing (LPO)",
                "Investment Research",
                "Intellectual Property Management",
                "Technical Writing",
                "Consulting Support"
            ],
            color: "#FBD21A"
        }
    ];

    return (
        <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>

            {/* HERO SECTION */}
            <section
                style={{
                    background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80")',
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
                            <FaGlobeAmericas size={60} style={{ color: '#FBD21A' }} />
                        </div>
                        <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            BUSINESS PROCESS SERVICES
                        </h1>
                        <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px' }}>
                            Transforming business operations with intelligent, scalable, and outcome-based services. We drive value through domain expertise, technology, and process excellence.
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
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                                    alt="BPS Solutions"
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
                                    Strategic Value Delivery
                                </h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    Business Process Services (BPS) represents the next evolution of outsourcing, moving beyond cost arbitrage to value creation. We combine deep industry knowledge with digital technologies to transform your business operations.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Our BPS solutions are designed to deliver measurable business outcomes, such as improved customer satisfaction, faster time-to-market, and enhanced operational agility. We partner with you to co-create value and drive sustainable growth.
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
                            Creating tangible value for our clients worldwide
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {[
                            { number: '$2B+', label: 'Spend Managed', color: '#1E3679' },
                            { number: '35%', label: 'Productivity Gain', color: '#00AA8A' },
                            { number: '100+', label: 'Enterprise Clients', color: '#FBD21A' },
                            { number: '99.9%', label: 'SLA Compliance', color: '#1E3679' }
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
                            Differentiating factors that set our BPS apart
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {[
                            {
                                title: 'Domain Expertise',
                                desc: 'Deep industry knowledge across verticals to deliver specialized solutions.',
                                icon: <FaBrain />,
                                color: '#1E3679'
                            },
                            {
                                title: 'Technology Led',
                                desc: 'Integration of AI, ML, and automation to drive process efficiency.',
                                icon: <FaCogs />,
                                color: '#00AA8A'
                            },
                            {
                                title: 'Global Delivery',
                                desc: 'Right-shore delivery model (onshore, nearshore, offshore) for optimal value.',
                                icon: <FaGlobeAmericas />,
                                color: '#FBD21A'
                            },
                            {
                                title: 'Outcome Based',
                                desc: 'Pricing models linked to business outcomes and value delivered.',
                                icon: <FaChartBar />,
                                color: '#1E3679'
                            },
                            {
                                title: 'Agile & Flexible',
                                desc: 'Adaptive engagement models to meet changing business requirements.',
                                icon: <FaShippingFast />,
                                color: '#00AA8A'
                            },
                            {
                                title: 'Risk & Compliance',
                                desc: 'Robust framework to manage operational risk and regulatory compliance.',
                                icon: <FaShieldAlt />,
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
                            Adhering to global standards for excellence and security
                        </p>
                    </motion.div>

                    <div className="row g-4">
                        {[
                            { standard: 'ISO 27001', desc: 'Information Security', color: '#1E3679' },
                            { standard: 'SSAE 18', desc: 'Audit Standards', color: '#00AA8A' },
                            { standard: 'GDPR', desc: 'Data Privacy', color: '#FBD21A' },
                            { standard: 'SOX', desc: 'Financial Compliance', color: '#1E3679' },
                            { standard: 'PCI DSS', desc: 'Payment Security', color: '#00AA8A' },
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
                            Comprehensive BPS solutions for your business needs
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
                                            BPS Solution
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

export default BPS;
