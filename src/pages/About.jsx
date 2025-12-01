import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBullseye, FaHandshake, FaLightbulb, FaRocket, FaEye, } from "react-icons/fa";
import PageCarousel from "../components/PageCarousel";

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experts: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Animated counters
  useEffect(() => {
    if (!isStatsInView) return;

    const targets = { projects: 1500, clients: 450, experts: 200, satisfaction: 99 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        experts: Math.floor(targets.experts * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isStatsInView]);

  return (
    <>
      {/* Hero Section - Dark with Digital Matrix */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
          padding: 'clamp(60px, 12vw, 100px) 15px clamp(40px, 8vw, 80px)',
          position: 'relative',
          marginTop: window.innerWidth <= 768 ? '70px' : '80px',
        }}
      >
        {/* Digital Matrix Background - Desktop Only */}
        {window.innerWidth > 768 && (
          <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.15 }}>
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: Math.random() * window.innerWidth, y: -100 }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  y: window.innerHeight + 100
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  position: 'absolute',
                  color: '#00AA8A',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  pointerEvents: 'none'
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        )}

        <div className="container position-relative text-center px-3" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="fw-bold mb-3 mb-md-4"
              style={{ fontSize: 'clamp(1.75rem, 6vw, 4rem)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span style={{ color: '#1E3679' }}>ZEPFTER</span>
              <span style={{ color: 'white' }}> - TRANSFORMING </span>
              <span style={{ color: '#00AA8A' }}>PHARMA & IT</span>
            </motion.h1>

            <motion.p
              className="mx-auto px-2"
              style={{
                maxWidth: '900px',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.7'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We deliver world-class pharmaceutical and IT solutions that drive innovation, ensure compliance, and accelerate digital transformation for businesses globally.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section" style={{ background: '#f5f5f5', padding: 'clamp(40px, 8vw, 80px) 20px' }}>
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <motion.div
              className="col-lg-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our Story"
                className="img-fluid rounded-4 shadow-lg"
                style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', margin: '0 auto' }}
              />
            </motion.div>

            <motion.div
              className="col-lg-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-3 mb-md-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: '#1E3679' }}>
                Our Story
              </h2>

              <p className="mb-3 mb-md-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#666', lineHeight: '1.7' }}>
                ZEPFTER is a global professional services company specializing in pharmaceutical and IT solutions. We provide comprehensive services across quality assurance, regulatory compliance, validation, digital transformation, cloud infrastructure, and cybersecurity to pharmaceutical, biotech, and technology industries worldwide.
              </p>

              <p className="mb-0" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#666', lineHeight: '1.7' }}>
                We combine deep domain expertise with cutting-edge technology to deliver innovative solutions that help our clients achieve operational excellence, maintain regulatory compliance, and drive digital innovation. Our commitment is to provide scalable, secure, and sustainable solutions that create lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Dark Section */}
      <section
        className="section position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1E3679 100%)',
          color: 'white',
          padding: 'clamp(40px, 8vw, 80px) 20px'
        }}
      >
        <div className="container">
          <div className="row g-3 g-md-4 g-lg-5 align-items-stretch">
            {/* Vision Card - Yellow */}
            <motion.div
              className="col-lg-4 col-md-6 col-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(251, 210, 26, 0.3)' }}
                className="p-4 p-md-5 h-100 rounded-4"
                style={{
                  background: '#FBD21A',
                  color: '#000',
                  minHeight: window.innerWidth <= 768 ? '200px' : '250px'
                }}
              >
                <div className="mb-3 mb-md-4">
                  <FaEye size={window.innerWidth <= 768 ? 40 : 50} />
                </div>
                <h3 className="fw-bold mb-2 mb-md-3" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>Our Vision</h3>
                <p className="mb-0" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.6' }}>
                  To be the global leader in pharmaceutical and IT services, recognized for innovation, quality excellence, and transformative solutions that shape the future of healthcare and technology.
                </p>
              </motion.div>
            </motion.div>

            {/* Who We Are */}
            <motion.div
              className="col-lg-4 col-md-12 col-12 order-md-first order-lg-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center h-100 d-flex flex-column justify-content-center" style={{ minHeight: window.innerWidth <= 768 ? '150px' : '250px', padding: window.innerWidth <= 768 ? '20px 0' : '0' }}>
                <h2 className="fw-bold mb-3 mb-md-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                  Who<br />We are
                </h2>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: window.innerWidth <= 768 ? '60px' : '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1E3679, #00AA8A)',
                    margin: '0 auto'
                  }}
                />
              </div>
            </motion.div>

            {/* Mission Card - Blue */}
            <motion.div
              className="col-lg-4 col-md-6 col-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(30, 54, 121, 0.5)' }}
                className="p-4 p-md-5 h-100 rounded-4"
                style={{
                  background: '#1E3679',
                  color: 'white',
                  minHeight: window.innerWidth <= 768 ? '200px' : '250px'
                }}
              >
                <div className="mb-3 mb-md-4">
                  <FaBullseye size={window.innerWidth <= 768 ? 40 : 50} />
                </div>
                <h3 className="fw-bold mb-2 mb-md-3" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>Our Mission</h3>
                <p className="mb-0" style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: '1.6' }}>
                  To deliver exceptional pharmaceutical and IT solutions that ensure regulatory compliance, drive operational efficiency, and enable digital transformation for our clients worldwide.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            className="row mt-4 mt-md-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="col-12">
              <div className="p-3 p-md-4 p-lg-5 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                <p className="mb-3 mb-md-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: '1.7' }}>
                  We, at ZEPFTER, are a team of 200+ industry experts, certified professionals, and technology specialists driven to deliver exceptional pharmaceutical and IT solutions that help our clients achieve their business objectives with confidence and precision.
                </p>

                <p className="mb-3 mb-md-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: '1.7' }}>
                  We empower organizations to transform their operations through industry-leading practices, cutting-edge technology, and deep domain expertise. Our solutions ensure regulatory compliance, operational excellence, and sustainable growth in an ever-evolving business landscape.
                </p>

                <p className="mb-0" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: '1.7' }}>
                  We optimize processes and drive innovation to offer client-centric solutions with unmatched domain expertise. Our services deliver systems that are stable, secure, scalable, and compliant with global standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section" style={{ background: '#fff', padding: 'clamp(40px, 8vw, 80px) 20px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold mb-3 mb-md-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: '#000' }}>
              HOW WE WORK
            </h2>
            <p className="mb-4 mb-md-5" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#666', maxWidth: '900px' }}>
              We, at ZEPFTER, are a team of 200+ industry experts, driven to deliver exceptional pharmaceutical and IT solutions that help our clients navigate complex regulatory landscapes and digital transformation challenges with confidence.
            </p>
          </motion.div>

          <div className="row g-4 g-md-5">
            {[
              {
                icon: <FaBullseye size={50} style={{ color: '#00AA8A' }} />,
                title: 'Client Centricity',
                desc: 'Our clients are at the heart of everything we do. We deliver tailored solutions that address unique business challenges, ensuring exceptional value and long-term partnerships built on trust and results.',
                delay: 0
              },
              {
                icon: <FaLightbulb size={50} style={{ color: '#00AA8A' }} />,
                title: 'Innovation and Execution',
                desc: 'We constantly challenge conventional approaches to drive innovation with cutting-edge solutions. Our agile methodology ensures rapid delivery of world-class pharmaceutical and IT services that maximize business impact.',
                delay: 0.2
              },
              {
                icon: <FaHandshake size={50} style={{ color: '#00AA8A' }} />,
                title: 'Collaboration',
                desc: 'We build highly capable teams and foster collaborative partnerships to deliver maximum value to all stakeholders while maintaining the highest standards of business ethics, integrity, and corporate governance.',
                delay: 0.4
              },
              {
                icon: <FaRocket size={50} style={{ color: '#00AA8A' }} />,
                title: 'Proven Methodology',
                desc: 'Our structured approach includes comprehensive requirement analysis, strategic planning, agile implementation, rigorous validation, and ongoing support to ensure successful project delivery and sustained value.',
                delay: 0.6
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="col-lg-6 col-md-6 col-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="d-flex flex-column flex-sm-row gap-3 gap-md-4 align-items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{ flexShrink: 0 }}
                  >
                    {React.cloneElement(item.icon, { size: window.innerWidth <= 768 ? 40 : 50 })}
                  </motion.div>
                  <div>
                    <h4 className="fw-bold mb-2 mb-md-3" style={{ color: '#1E3679', fontSize: 'clamp(1.1rem, 3vw, 1.25rem)' }}>{item.title}</h4>
                    <p style={{ color: '#666', lineHeight: '1.6', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Values - Dark with Images */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
          color: 'white',
          padding: 'clamp(50px, 10vw, 100px) 20px'
        }}
      >
        <div className="container">
          <motion.div
            className="text-center mb-4 mb-md-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(0, 170, 138, 0.15)',
                borderRadius: '30px',
                border: '1px solid rgba(0, 170, 138, 0.3)',
                marginBottom: '20px'
              }}
            >
              <span style={{ color: '#00AA8A', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontWeight: '600', letterSpacing: '1px' }}>
                WHAT DRIVES US
              </span>
            </motion.div>
            <h2 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: window.innerWidth <= 768 ? '2px' : '4px' }}>
              OUR VALUES
            </h2>
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
              The core principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="row g-3 g-md-4">
            {[
              {
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
                title: 'Quality with Excellence',
                description: 'We are committed to delivering world-class pharmaceutical and IT solutions with the highest standards of quality. Excellence is not just a goal, it\'s our promise to every client and project we undertake.',
                color: '#1E3679',
                icon: '⭐'
              },
              {
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
                title: 'Client Centricity',
                description: 'Clients are at the heart of everything we do. We design our solutions, support systems, and delivery methods keeping your business success and growth as our top priority.',
                color: '#00AA8A',
                icon: '🤝'
              },
              {
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
                title: 'Innovation and Execution',
                description: 'We embrace cutting-edge technologies and methodologies to deliver innovative pharmaceutical and IT solutions. We don\'t just plan - we execute with precision, agility, and measurable results.',
                color: '#FBD21A',
                icon: '💡'
              },
              {
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
                title: 'Regulatory Compliance',
                description: 'We ensure strict adherence to FDA, EMA, ICH, and international standards. Our compliance-first approach guarantees that all solutions meet regulatory requirements and industry best practices.',
                color: '#1E3679',
                icon: '✓'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  whileHover={{ 
                    y: -15, 
                    scale: 1.03,
                    boxShadow: `0 25px 50px -12px ${value.color}80`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="position-relative overflow-hidden rounded-4"
                  style={{ 
                    height: window.innerWidth <= 768 ? '300px' : window.innerWidth <= 1024 ? '340px' : '380px', 
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    border: `2px solid ${value.color}40`
                  }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.value-overlay');
                    const description = e.currentTarget.querySelector('.value-description');
                    const titleBottom = e.currentTarget.querySelector('.title-bottom');
                    if (overlay) overlay.style.opacity = '0.97';
                    if (description) description.style.opacity = '1';
                    if (titleBottom) titleBottom.style.opacity = '0';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.value-overlay');
                    const description = e.currentTarget.querySelector('.value-description');
                    const titleBottom = e.currentTarget.querySelector('.title-bottom');
                    if (overlay) overlay.style.opacity = '0';
                    if (description) description.style.opacity = '0';
                    if (titleBottom) titleBottom.style.opacity = '1';
                  }}
                >
                  {/* Image */}
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    src={value.image}
                    alt={value.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '100%',
                      background: `linear-gradient(180deg, transparent 0%, ${value.color}D0 70%, ${value.color}F0 100%)`
                    }}
                  />

                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: window.innerWidth <= 768 ? '45px' : '50px',
                      height: window.innerWidth <= 768 ? '45px' : '50px',
                      background: 'rgba(255,255,255,0.95)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: window.innerWidth <= 768 ? '20px' : '24px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      zIndex: 6
                    }}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Hover Overlay with Description */}
                  <div
                    className="value-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${value.color}F8 0%, ${value.color}E8 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 3,
                      backdropFilter: 'blur(2px)'
                    }}
                  />

                  {/* Title at Bottom */}
                  <div
                    className="title-bottom position-absolute bottom-0 start-0 p-3 p-md-4 w-100"
                    style={{ zIndex: 4, transition: 'opacity 0.3s ease' }}
                  >
                    <h4 className="fw-bold text-white mb-0" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                      {value.title}
                    </h4>
                  </div>

                  {/* Description (shown on hover) */}
                  <div
                    className="value-description position-absolute top-50 start-50 translate-middle p-3 p-md-4 text-center"
                    style={{
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 5,
                      width: '92%'
                    }}
                  >
                    <div style={{
                      fontSize: window.innerWidth <= 768 ? '28px' : '36px',
                      marginBottom: '15px'
                    }}>
                      {value.icon}
                    </div>
                    <h4 className="fw-bold text-white mb-2 mb-md-3" style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)' }}>
                      {value.title}
                    </h4>
                    <p className="text-white mb-0" style={{ fontSize: 'clamp(0.88rem, 2vw, 0.98rem)', lineHeight: '1.6' }}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section ref={statsRef} className="section" style={{ background: '#f5f5f5', padding: 'clamp(40px, 8vw, 80px) 20px' }}>
        <div className="container">
          <div className="row g-3 g-md-4">
            {[
              { number: counters.projects, suffix: '+', label: 'Projects Delivered', color: '#1E3679' },
              { number: counters.clients, suffix: '+', label: 'Global Clients', color: '#00AA8A' },
              { number: counters.experts, suffix: '+', label: 'Industry Experts', color: '#FBD21A' },
              { number: counters.satisfaction, suffix: '%', label: 'Client Satisfaction', color: '#1E3679' }
            ].map((stat, idx) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-3 p-md-4 rounded-4"
                  style={{
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="fw-bold mb-2" style={{ color: stat.color, fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}>
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="fw-semibold text-uppercase" style={{ color: '#666', letterSpacing: '1px', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <PageCarousel
        slides={[
          {
            type: 'testimonial',
            title: 'What Our Clients Say',
            subtitle: 'Success stories from our partners',
            name: 'Dr. Rajesh Kumar',
            role: 'VP Quality Assurance, PharmaCorp India',
            image: 'https://i.pravatar.cc/150?img=12',
            text: 'ZEPFTER transformed our quality management system. Their expertise in GMP compliance and validation helped us achieve FDA approval ahead of schedule. Outstanding professional service!',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Clients Say',
            subtitle: 'Success stories from our partners',
            name: 'Sarah Mitchell',
            role: 'CTO, BioTech Solutions USA',
            image: 'https://i.pravatar.cc/150?img=45',
            text: 'The cloud migration and IT infrastructure services provided by ZEPFTER were exceptional. They delivered on time, within budget, and exceeded our expectations for security and scalability.',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Clients Say',
            subtitle: 'Success stories from our partners',
            name: 'Michael Chen',
            role: 'Director of Operations, MedLife Pharma',
            image: 'https://i.pravatar.cc/150?img=33',
            text: 'ZEPFTER\'s regulatory affairs team guided us through complex EMA submissions. Their deep knowledge and attention to detail were instrumental in our successful product launch in Europe.',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Clients Say',
            subtitle: 'Success stories from our partners',
            name: 'Priya Deshmukh',
            role: 'Head of IT, Global Biotech Ltd',
            image: 'https://i.pravatar.cc/150?img=22',
            text: 'The custom software development and AI automation solutions from ZEPFTER revolutionized our laboratory operations. Efficiency increased by 40% within the first quarter!',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Clients Say',
            subtitle: 'Success stories from our partners',
            name: 'James Anderson',
            role: 'Quality Director, European Pharma Group',
            image: 'https://i.pravatar.cc/150?img=28',
            text: 'ZEPFTER\'s validation services and LIMS implementation were flawless. Their team\'s professionalism and technical expertise made the entire process smooth and compliant with all regulations.',
            color: '#1E3679'
          },
          {
            type: 'testimonial',
            title: 'What Our Clients Say',
            subtitle: 'Success stories from our partners',
            name: 'Anita Sharma',
            role: 'CEO, HealthTech Innovations',
            image: 'https://i.pravatar.cc/150?img=50',
            text: 'Outstanding cybersecurity and compliance consulting! ZEPFTER helped us achieve ISO 27001 certification and implement robust data protection measures. Highly recommended!',
            color: '#1E3679'
          }
        ]}
        autoPlay={true}
        autoPlayDelay={5000}
      />


    </>
  );
};

export default About;
