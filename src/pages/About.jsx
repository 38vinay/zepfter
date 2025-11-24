import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBullseye, FaHandshake, FaUsers, FaLightbulb, FaGraduationCap, FaAward, FaChartLine, FaHeart, FaRocket, FaShieldAlt, FaEye, FaBullhorn } from "react-icons/fa";

const About = () => {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    satisfaction: 0
  });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Animated counters
  useEffect(() => {
    if (!isStatsInView) return;

    const targets = { students: 5000, courses: 50, instructors: 150, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        students: Math.floor(targets.students * progress),
        courses: Math.floor(targets.courses * progress),
        instructors: Math.floor(targets.instructors * progress),
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
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
          minHeight: '60vh',
          paddingTop: '140px',
          paddingBottom: '80px',
          marginTop: '70px'
        }}
      >
        {/* Digital Matrix Background */}
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

        <div className="container position-relative text-center" style={{ zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            
            <motion.h1 
              className="fw-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span style={{ color: '#1E3679' }}>ZEPFTER</span>
              <span style={{ color: 'white' }}> IS ALL ABOUT </span>
              <span style={{ color: 'white' }}>EDUCATION</span>
            </motion.h1>

            <motion.p
              className="mx-auto"
              style={{
                maxWidth: '900px',
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.8'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We assist with reevaluating students' careers, share significant reasoning and team up across partners through the power of quality training solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="row align-items-center g-5">
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
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              className="col-lg-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E3679' }}>
                Our Story
              </h2>
              
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                ZEPFTER is a global education-focused company specializing in Medical, Clinical, and IT training domains (pharmaceutical, biotech, and technology industries). Our commitment is to offer platforms & products for building careers and creating future-ready professionals in the training sector.
              </p>

              <p className="mb-0" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                We specialize in transforming career paths through innovation using industry-standard cutting-edge training, improving employability and efficiency. Our programs help students with stable, secure, and scalable skill development from the ground up which align with industry needs.
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
          color: 'white'
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* Vision Card - Yellow */}
            <motion.div
              className="col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(251, 210, 26, 0.3)' }}
                className="p-5 h-100 rounded-4"
                style={{
                  background: '#FBD21A',
                  color: '#000'
                }}
              >
                <div className="mb-4">
                  <FaEye size={50} />
                </div>
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  We serve our stakeholders through market leadership in providing world-class training and education solutions.
                </p>
              </motion.div>
            </motion.div>

            {/* Who We Are */}
            <motion.div
              className="col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center h-100 d-flex flex-column justify-content-center">
                <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  Who<br />We are
                </h2>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1E3679, #00AA8A)',
                    margin: '0 auto'
                  }}
                />
              </div>
            </motion.div>

            {/* Mission Card - Blue */}
            <motion.div
              className="col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(30, 54, 121, 0.5)' }}
                className="p-5 h-100 rounded-4"
                style={{
                  background: '#1E3679',
                  color: 'white'
                }}
              >
                <div className="mb-4">
                  <FaBullseye size={50} />
                </div>
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  To attain student success and to provide value and innovation to our students globally through excellent training programs.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            className="row mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="col-12">
              <div className="p-5 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We, at ZEPFTER, are a team of Top Talented Professionals, driven to build incredible training programs that help our students navigate their way through the entire career journey – with confidence!
                </p>
                
                <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We facilitate students to transform into future-proof professionals using industry-standard cutting-edge knowledge fuelled by ideal levels of employability and efficiency thereby ensuring career growth and success along with enhanced skill development.
                </p>
                
                <p className="mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We optimize learning and innovation to offer Student Centric programs with domain expertise. Our solutions translate to systems that are stable, secure and scalable to accomplish career goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#000' }}>
              HOW WE WORK
            </h2>
            <p className="mb-5" style={{ fontSize: '1.1rem', color: '#666', maxWidth: '900px' }}>
              We, at ZEPFTER, are a team of 150+ experts, driven to build incredible training programs that help our students navigate their way through the entire career journey – paperless!
            </p>
          </motion.div>

          <div className="row g-5">
            {[
              {
                icon: <FaBullseye size={50} style={{ color: '#00AA8A' }} />,
                title: 'Student Centricity',
                desc: 'We believe that our students are the reason for our existence. By delighting our students and stakeholders, we will go to infinite ends and deliver the best learning experience.',
                delay: 0
              },
              {
                icon: <FaLightbulb size={50} style={{ color: '#00AA8A' }} />,
                title: 'Innovation and Execution',
                desc: 'We constantly strive to challenge conventional views that drive innovation with new ideas. Be agile and maximize impact by delivering world-class solutions leveraging education and training platforms.',
                delay: 0.2
              },
              {
                icon: <FaHandshake size={50} style={{ color: '#00AA8A' }} />,
                title: 'Collaboration',
                desc: 'Build a highly capable and committed team to deliver the highest value to all stakeholders while practicing the highest standards of business ethics, humility, and governance.',
                delay: 0.4
              },
              {
                icon: <FaRocket size={50} style={{ color: '#00AA8A' }} />,
                title: '3-4-5 Approach',
                desc: '3 days workshop with training team on requirement gathering, 4 weeks curriculum setup and 5 months training & placement support with continuous mentoring.',
                delay: 0.6
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="col-lg-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="d-flex gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="fw-bold mb-3" style={{ color: '#1E3679' }}>{item.title}</h4>
                    <p style={{ color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values - Dark with Images */}
     {/* Our Values - Dark with Images */}
      <section 
        className="section"
        style={{
          background: '#000',
          color: 'white'
        }}
      >
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '4px' }}>
              OUR VALUES
            </h2>
          </motion.div>

          <div className="row g-4">
            {[
              {
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
                title: 'Quality with Excellence',
                description: 'We are committed to delivering world-class training with the highest standards of quality. Excellence is not just a goal, it\'s our promise to every student.',
                color: '#1E3679'
              },
              {
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
                title: 'Student Centricity',
                description: 'Students are at the heart of everything we do. We design our programs, support systems, and teaching methods keeping your success and growth as our top priority.',
                color: '#00AA8A'
              },
              {
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
                title: 'Innovation and Execution',
                description: 'We embrace cutting-edge teaching methodologies and technology to deliver innovative learning experiences. We don\'t just plan - we execute with precision and agility.',
                color: '#FBD21A'
              },
              {
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
                title: 'Collaboration',
                description: 'Together we achieve more. We foster a collaborative environment where students, trainers, and industry partners work together to create meaningful learning outcomes.',
                color: '#1E3679'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="col-lg-3 col-md-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="position-relative overflow-hidden rounded-4"
                  style={{ height: '400px', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.value-overlay');
                    const description = e.currentTarget.querySelector('.value-description');
                    if (overlay) overlay.style.opacity = '0.95';
                    if (description) description.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.value-overlay');
                    const description = e.currentTarget.querySelector('.value-description');
                    if (overlay) overlay.style.opacity = '0';
                    if (description) description.style.opacity = '0';
                  }}
                >
                  {/* Image */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
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
                      background: `linear-gradient(180deg, transparent 0%, ${value.color}E0 100%)`
                    }}
                  />

                  {/* Hover Overlay with Description */}
                  <div
                    className="value-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${value.color}F5 0%, ${value.color}E5 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 3
                    }}
                  />

                  {/* Title */}
                  <div
                    className="position-absolute bottom-0 start-0 p-4 w-100"
                    style={{ zIndex: 4 }}
                  >
                    <h4 className="fw-bold text-white mb-0">{value.title}</h4>
                  </div>

                  {/* Description (shown on hover) */}
                  <div
                    className="value-description position-absolute top-50 start-50 translate-middle p-4 text-center"
                    style={{
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 5,
                      width: '90%'
                    }}
                  >
                    <h4 className="fw-bold text-white mb-3">{value.title}</h4>
                    <p className="text-white mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
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
      <section ref={statsRef} className="section" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="row g-4">
            {[
              { number: counters.students, suffix: '+', label: 'Students Trained', color: '#1E3679' },
              { number: counters.courses, suffix: '+', label: 'Courses Offered', color: '#00AA8A' },
              { number: counters.instructors, suffix: '+', label: 'Expert Instructors', color: '#FBD21A' },
              { number: counters.satisfaction, suffix: '%', label: 'Satisfaction Rate', color: '#1E3679' }
            ].map((stat, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="text-center p-4 rounded-4"
                  style={{
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                >
                  <div className="display-3 fw-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="fw-semibold text-uppercase" style={{ color: '#666', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#1E3679' }}>What Our Students Say</h2>
            <p className="text-muted fs-5">Success stories from our alumni</p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                name: "Amit Sharma",
                role: "Medical Coding Graduate",
                image: "https://i.pravatar.cc/150?img=12",
                text: "ZEPFTER has changed my career! The trainers are extremely skilled, the course content is industry-focused, and the placement support is amazing.",
                company: "Max Healthcare",
                color: "#1E3679"
              },
              {
                name: "Priya Nair",
                role: "Clinical Research Student",
                image: "https://i.pravatar.cc/150?img=45",
                text: "The Clinical Research program helped me understand real-world applications. Amazing training and extremely helpful faculty!",
                company: "Quintiles IMS",
                color: "#00AA8A"
              },
              {
                name: "Rahul Verma",
                role: "IT & Technology Student",
                image: "https://i.pravatar.cc/150?img=33",
                text: "I joined the Data Science program and got placed quickly. Highly practical training and hands-on experience!",
                company: "Tech Mahindra",
                color: "#FBD21A"
              }
            ].map((testimonial, idx) => (
              <div className="col-lg-4" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -10, boxShadow: `0 20px 40px ${testimonial.color}30` }}
                  className="p-4 h-100 rounded-4"
                  style={{
                    background: 'white',
                    borderLeft: `4px solid ${testimonial.color}`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      fontSize: '100px',
                      color: testimonial.color,
                      opacity: 0.05,
                      fontFamily: 'Georgia, serif'
                    }}
                  >
                    "
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-4" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.img
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `3px solid ${testimonial.color}`
                      }}
                    />
                    <div className="text-start">
                      <h5 className="fw-bold mb-1" style={{ color: testimonial.color }}>{testimonial.name}</h5>
                      <p className="text-muted mb-0 small">{testimonial.role}</p>
                      <p className="small mb-0" style={{ color: testimonial.color, fontWeight: '600' }}>
                        @ {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3" style={{ color: testimonial.color }}>
                    {[...Array(5)].map((_, i) => (
                      <motion.span key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 + i * 0.1 }}>⭐</motion.span>
                    ))}
                  </div>

                  <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.7', color: '#666', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                    "{testimonial.text}"
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="section text-center"
        style={{ background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)', color: 'white' }}
      >
        <div className="container">
          <motion.h2 className="fw-bold display-5 mb-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p className="fs-5 mb-5" style={{ maxWidth: '700px', margin: '0 auto' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Join thousands of successful professionals who transformed their careers with ZEPFTER
          </motion.p>
          <motion.div className="d-flex gap-3 justify-content-center flex-wrap" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-light btn-lg px-5 py-3 fw-semibold">Explore Courses</motion.button>
            <motion.button whileHover={{ scale: 1.05, background: 'white', color: '#1E3679' }} whileTap={{ scale: 0.95 }} className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" style={{ transition: 'all 0.3s ease' }}>Contact Us</motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;