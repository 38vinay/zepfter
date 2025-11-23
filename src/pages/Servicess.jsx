import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaCapsules, FaFlask, FaLaptopCode, FaPills, FaArrowRight, FaUsers, FaGraduationCap, FaUserTie, FaBriefcase, FaCheckCircle, FaTrophy, FaRocket } from "react-icons/fa";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [counters, setCounters] = useState({ students: 0, placement: 0, trainers: 0, companies: 0 });
  
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Animated counters
  useEffect(() => {
    if (!isStatsInView) return;

    const targets = { students: 5000, placement: 95, trainers: 150, companies: 500 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        students: Math.floor(targets.students * progress),
        placement: Math.floor(targets.placement * progress),
        trainers: Math.floor(targets.trainers * progress),
        companies: Math.floor(targets.companies * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isStatsInView]);

  const services = [
    {
      id: 'medical',
      icon: FaCapsules,
      title: 'Medical Courses',
      description: 'Medical Coding, Medical Affairs, Medical Billing, Medical Writing',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
      color: '#1E3679',
      stats: { courses: 4, students: '1200+' },
      slug: 'medical-courses'
    },
    {
      id: 'clinical',
      icon: FaFlask,
      title: 'Clinical Courses',
      description: 'Clinical Research, Clinical Data Management, Clinical Trials, BA/BE Studies',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
      color: '#00AA8A',
      stats: { courses: 4, students: '900+' },
      slug: 'clinical-courses'
    },
    {
      id: 'it',
      icon: FaLaptopCode,
      title: 'IT Services',
      description: 'Programming, Data Science, Cybersecurity, Cloud Computing, Networking, Database',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
      color: '#1E3679',
      stats: { courses: '30+', students: '2000+' },
      slug: 'it-services'
    },
    {
      id: 'pharmaceutical',
      icon: FaPills,
      title: 'Pharmaceutical Skills',
      description: 'Quality Assurance, Quality Control, Regulatory Affairs, Manufacturing Operations',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
      color: '#00AA8A',
      stats: { courses: '15+', students: '800+' },
      slug: 'pharmaceutical-skills'
    },
    {
      id: 'training',
      icon: FaUserTie,
      title: 'Training & Placement',
      description: 'Placement Assistance, Interview Preparation, Career Counseling',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
      color: '#1E3679',
      stats: { courses: 3, students: '5000+' },
      slug: 'training-placement'
    },
    {
      id: 'internship',
      icon: FaBriefcase,
      title: 'Internship Programs',
      description: 'Medical Coding, Clinical Research, IT & Software, Pharmaceutical QA/QC',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
      color: '#00AA8A',
      stats: { courses: 4, students: '1500+' },
      slug: 'internship-programs'
    }
  ];

  const testimonials = [
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
      color: "#1E3679"
    }
  ];

  const handleCategoryClick = (slug) => {
    window.location.href = `/services/${slug}`;
  };

  return (
    <>
      {/* Hero Section - Professional & Clean */}
    <motion.section 
        ref={heroRef}
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,10,0.75) 0%, rgba(30,54,121,0.7) 50%, rgba(0,0,0,0.75) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '70vh',
          paddingTop: '140px',
          paddingBottom: '80px',
          marginTop: '70px',
          opacity: heroOpacity,
          y: heroY
        }}
      >
        {/* Subtle Grid Pattern */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.3
          }}
        />

        {/* Subtle Gradient Orbs */}
        <motion.div
          className="position-absolute"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,170,138,0.15) 0%, transparent 70%)',
            top: '-250px',
            right: '-100px',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="fw-bold mb-4" 
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
                letterSpacing: '2px',
                color: 'white'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              OUR <span style={{ color: '#1E3679' }}>CORE</span> <span style={{ color: '#FBD21A' }}>EXPERTISE</span>
            </motion.h2>

            <motion.p 
              className="mx-auto mb-4" 
              style={{ 
                maxWidth: '900px', 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: 'rgba(255,255,255,0.85)' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A competent Development and Consulting team is required for digital success. Since more than four years, our Expert Teams have assisted in offering world-class solutions to a wide range of business difficulties.
            </motion.p>
            
            <motion.p 
              className="mb-4" 
              style={{ 
                fontSize: '1.15rem', 
                color: '#00AA8A', 
                fontWeight: '600' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Unlock opportunities of future towards digital revolution with us.
            </motion.p>
            
            <motion.p 
              className="mx-auto" 
              style={{ 
                maxWidth: '900px', 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: 'rgba(255,255,255,0.85)' 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              At ZEPFTER, we can build Reliable, Robust, and Scalable Solutions for all platforms and devices.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Cards - Professional with Subtle Animations */}
      <section className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <div className="row g-4">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                className="col-lg-4 col-md-6" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.div 
                  className="position-relative h-100 overflow-hidden rounded-4"
                  style={{
                    cursor: 'pointer',
                    minHeight: '500px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCategoryClick(service.slug)}
                >
                  {/* Background Image */}
                  <motion.div
                    className="position-absolute w-100 h-100"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.6)'
                    }}
                    animate={hoveredCard === idx ? {
                      scale: 1.05,
                      filter: 'brightness(0.5)'
                    } : {
                      scale: 1,
                      filter: 'brightness(0.6)'
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Gradient Overlay */}
                  <motion.div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, ${service.color}E0 100%)`
                    }}
                    animate={hoveredCard === idx ? {
                      background: service.gradient
                    } : {}}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="position-absolute w-100 h-100 p-4 d-flex flex-column justify-content-between" style={{ zIndex: 2 }}>
                    {/* Icon */}
                    <motion.div 
                      className="d-flex justify-content-center"
                      animate={hoveredCard === idx ? { y: -5 } : { y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid rgba(255,255,255,0.2)'
                        }}
                      >
                        <IconComponent 
                          size={36} 
                          style={{ color: 'white' }} 
                        />
                      </div>
                    </motion.div>

                    {/* Info */}
                    <div className="text-center text-white">
                      <h3 className="fw-bold mb-3">{service.title}</h3>
                      <p className="mb-4 small" style={{ opacity: 0.9 }}>
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="d-flex justify-content-center gap-3 mb-3">
                        <div 
                          className="px-3 py-2 rounded-3"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <div className="fw-bold">{service.stats.courses}</div>
                          <div className="small" style={{ fontSize: '0.75rem' }}>Courses</div>
                        </div>
                        <div 
                          className="px-3 py-2 rounded-3"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <div className="fw-bold">{service.stats.students}</div>
                          <div className="small" style={{ fontSize: '0.75rem' }}>Students</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                      className="btn btn-light fw-semibold w-100 d-flex align-items-center justify-content-center gap-2"
                      animate={hoveredCard === idx ? { y: -3 } : { y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Explore Courses 
                      <motion.div
                        animate={hoveredCard === idx ? { x: 3 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight size={14} />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Stats Section - Professional Numbers */}
      <section ref={statsRef} className="section" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',marginTop:'10px', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '2px' }}>
              WHY CHOOSE ZEPFTER?
            </h2>
          </motion.div>

          <div className="row g-4">
            {[
              { icon: <FaGraduationCap size={40} />, number: counters.students, suffix: '+', label: 'Students Trained', color: '#1E3679' },
              { icon: <FaTrophy size={40} />, number: counters.placement, suffix: '%', label: 'Placement Rate', color: '#00AA8A' },
              { icon: <FaUsers size={40} />, number: counters.trainers, suffix: '+', label: 'Expert Trainers', color: '#FBD21A' },
              { icon: <FaRocket size={40} />, number: counters.companies, suffix: '+', label: 'Hiring Partners', color: '#1E3679' }
            ].map((stat, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <motion.div
                  className="text-center p-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    className="mb-3"
                    style={{ color: stat.color }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <div className="display-4 fw-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}{stat.suffix}
                  </div>
                  
                  <div className="text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.9rem', opacity: 0.8 }}>
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Clean Two-Column Layout */}
      <section className="section" style={{ background: '#f5f5f5', padding: '100px 0' }}>
        <div className="container">
          <div className="row g-5 align-items-center mb-5">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '20px' }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Industry Expert Trainers"
                  className="img-fluid"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <FaCheckCircle size={36} style={{ color: '#1E3679', marginBottom: '20px' }} />
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#1E3679' }}>
                Industry Expert Trainers
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Learn from professionals with 10+ years of real-world experience in Medical, Clinical, IT, and Pharmaceutical industries. Our trainers bring practical insights and industry best practices directly to your learning experience.
              </p>
            </motion.div>
          </div>

          <div className="row g-5 align-items-center">
            <motion.div
              className="col-lg-6 order-lg-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '20px' }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                  alt="Placement Support"
                  className="img-fluid"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="col-lg-6 order-lg-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <FaBriefcase size={36} style={{ color: '#00AA8A', marginBottom: '20px' }} />
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#00AA8A' }}>
                100% Placement Assistance
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Our dedicated placement team works tirelessly to connect you with top companies. From resume building to interview preparation, we guide you through every step of your job search journey with 500+ hiring partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Cards */}
      <section className="section" style={{ background: '#fff', padding: '100px 0' }}>
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold display-5 mb-3" style={{ color: '#1E3679' }}>
              What Our Students Say
            </h2>
            <p className="text-muted fs-5">Success stories from our alumni</p>
          </motion.div>

          <div className="row g-4">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                className="col-lg-4" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="p-4 h-100 rounded-4"
                  style={{
                    background: 'white',
                    borderLeft: `4px solid ${testimonial.color}`,
                    boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `3px solid ${testimonial.color}`
                      }}
                    />
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: testimonial.color }}>
                        {testimonial.name}
                      </h5>
                      <p className="text-muted mb-0 small">{testimonial.role}</p>
                      <p className="small mb-0" style={{ color: testimonial.color, fontWeight: '600' }}>
                        @ {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3" style={{ color: testimonial.color }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#666', fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Services;