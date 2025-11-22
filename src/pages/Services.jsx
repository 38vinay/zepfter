import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaCapsules, FaFlask, FaLaptopCode, FaPills, FaArrowRight, FaClock, FaAward, FaUsers, FaGraduationCap, FaUserTie, FaBriefcase, FaStar, FaCheckCircle, FaTrophy, FaRocket } from "react-icons/fa";

const Services = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [counters, setCounters] = useState({ students: 0, placement: 0, trainers: 0, companies: 0 });
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

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

  // 6 Main Services with Images
  const services = [
    {
      id: 'medical',
      icon: FaCapsules,
      title: 'Medical Courses',
      description: 'Medical Coding, Medical Affairs, Medical Billing, Medical Writing',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #2a4a9f 100%)',
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
      gradient: 'linear-gradient(135deg, #00AA8A 0%, #00d4aa 100%)',
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
      gradient: 'linear-gradient(135deg, #FBD21A 0%, #ffd700 100%)',
      color: '#FBD21A',
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
      color: '#1E3679',
      stats: { courses: '15+', students: '800+' },
      slug: 'pharmaceutical-skills'
    },
    {
      id: 'training',
      icon: FaUserTie,
      title: 'Training & Placement',
      description: 'Placement Assistance, Interview Preparation, Career Counseling',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #00AA8A 0%, #1E3679 100%)',
      color: '#00AA8A',
      stats: { courses: 3, students: '5000+' },
      slug: 'training-placement'
    },
    {
      id: 'internship',
      icon: FaBriefcase,
      title: 'Internship Programs',
      description: 'Medical Coding, Clinical Research, IT & Software, Pharmaceutical QA/QC',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      gradient: 'linear-gradient(135deg, #FBD21A 0%, #00AA8A 100%)',
      color: '#FBD21A',
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
      color: "#FBD21A"
    }
  ];

  const handleCategoryClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <>
 
 
    
      {/* Hero Section - Dark with Digital Matrix */}
      <section 
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
          minHeight: '70vh',
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

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-uppercase mb-3" style={{ color: '#00AA8A', letterSpacing: '3px', fontSize: '0.9rem' }}>
              Home / Services
            </p>
            
            <motion.h1 
              className="fw-bold display-3 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span style={{ color: 'white' }}>OUR </span>
              <span style={{ color: '#00AA8A' }}>SERVICES</span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-0"
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
              Choose from our comprehensive range of industry-aligned courses designed to accelerate your career in Medical, Clinical, IT, and Pharmaceutical domains.
            </motion.p>
          </motion.div>
        </div>

        <section className="section" style={{ background: '#000', color: 'white', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          {/* Heading */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '2px' }}>
              OUR <span style={{ color: '#1E3679' }}>CORE</span> <span style={{ color: '#FBD21A' }}>EXPERTISE</span>
            </h2>
            <p className="mx-auto mb-4" style={{ maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
              A competent Development and Consulting team is required for digital success. Since more than four years, our Expert Teams have assisted in offering world-class solutions to a wide range of business difficulties. Custom Software's assist enterprises and startups in developing digitized solutions.
            </p>
            <p className="mb-4" style={{ fontSize: '1.2rem', color: '#00AA8A', fontWeight: '600' }}>
              Unlock opportunities of future towards digital revolution with us.
            </p>
            <p className="mx-auto" style={{ maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
              At ZEPFTER, we can build Reliable, Robust, and Scalable Solutions for all platforms and devices. Minimize your expenditures and focus on innovation by utilizing our application outsourcing services.
            </p>
          </motion.div>

          {/* Expertise Cards */}
          <div className="row g-4 mt-5">
            {[
              {
                icon: '💻',
                title: 'Development',
                gradient: 'linear-gradient(135deg, #C724B1 0%, #9B1D8A 100%)',
                color: '#C724B1'
              },
              {
                icon: '👥',
                title: 'Consulting',
                gradient: 'linear-gradient(135deg, #5B4B8A 0%, #3D2F5E 100%)',
                color: '#5B4B8A'
              },
              {
                icon: '📊',
                title: 'Analytics',
                gradient: 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)',
                color: '#1565C0'
              },
              {
                icon: '🤖',
                title: 'Automation',
                gradient: 'linear-gradient(135deg, #0288D1 0%, #01579B 100%)',
                color: '#0288D1'
              },
              {
                icon: '🔄',
                title: 'Migration',
                gradient: 'linear-gradient(135deg, #0097A7 0%, #006064 100%)',
                color: '#0097A7'
              },
              {
                icon: '🛡️',
                title: 'Support',
                gradient: 'linear-gradient(135deg, #00897B 0%, #004D40 100%)',
                color: '#00897B'
              }
            ].map((item, idx) => (
              <div className="col-lg-2 col-md-4 col-sm-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center p-4 rounded-4 h-100"
                  style={{
                    background: item.gradient,
                    minHeight: '180px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <motion.div
                    className="mb-3"
                    style={{ fontSize: '3rem' }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  <h5 className="fw-bold mb-0" style={{ color: 'white' }}>
                    {item.title}
                  </h5>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>


        {/* Wave */}
        <div className="position-absolute" style={{ bottom: 0, left: 0, right: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Service Cards Grid with Images */}
      <section className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <div className="row g-4">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                className="col-lg-4 col-md-6" 
                key={idx}
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <motion.div 
                  className="position-relative h-100 overflow-hidden rounded-4"
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    minHeight: '500px'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCategoryClick(service.slug)}
                >
                  {/* Background Image */}
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="position-absolute w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      filter: hoveredCard === idx ? 'brightness(0.4) saturate(1.2)' : 'brightness(0.6)',
                      transition: 'all 0.5s ease'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div 
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{
                      background: hoveredCard === idx 
                        ? service.gradient 
                        : 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)',
                      transition: 'all 0.5s ease',
                      opacity: hoveredCard === idx ? 0.95 : 0.85
                    }}
                  />

                  {/* Content */}
                  <div className="position-absolute w-100 h-100 p-4 d-flex flex-column justify-content-between" style={{ zIndex: 2 }}>
                    {/* Top - Icon */}
                    <motion.div 
                      className="d-flex justify-content-center"
                      animate={hoveredCard === idx ? { scale: [1, 1.2, 1], rotate: [0, 360] } : {}}
                      transition={{ duration: 0.8 }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: hoveredCard === idx ? 'rgba(255,255,255,0.2)' : service.gradient,
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.5s ease'
                        }}
                      >
                        <IconComponent 
                          size={40} 
                          style={{ color: 'white' }} 
                        />
                      </div>
                    </motion.div>

                    {/* Middle - Info */}
                    <div className="text-center text-white">
                      <h3 className="fw-bold mb-3">{service.title}</h3>
                      <p 
                        className="mb-4 small"
                        style={{
                          opacity: hoveredCard === idx ? 1 : 0.8,
                          transition: 'all 0.3s ease'
                        }}
                      >
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

                    {/* Bottom - CTA */}
                    <motion.div 
                      className="text-center"
                      animate={hoveredCard === idx ? { y: [0, -5, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <div 
                        className="btn btn-light fw-semibold w-100"
                        style={{
                          opacity: hoveredCard === idx ? 1 : 0.9,
                          transform: hoveredCard === idx ? 'translateY(0)' : 'translateY(10px)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        Explore Courses <FaArrowRight className="ms-2" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section" style={{ background: '#000', color: 'white' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '2px' }}>
              WHY CHOOSE ZEPFTER?
            </h2>
          </motion.div>

          <div className="row g-4">
            {[
              { icon: <FaGraduationCap size={50} />, number: counters.students, suffix: '+', label: 'Students Trained', color: '#1E3679', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80' },
              { icon: <FaTrophy size={50} />, number: counters.placement, suffix: '%', label: 'Placement Rate', color: '#00AA8A', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
              { icon: <FaUsers size={50} />, number: counters.trainers, suffix: '+', label: 'Expert Trainers', color: '#FBD21A', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80' },
              { icon: <FaRocket size={50} />, number: counters.companies, suffix: '+', label: 'Hiring Partners', color: '#1E3679', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80' }
            ].map((stat, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="position-relative overflow-hidden rounded-4"
                  style={{
                    height: '350px',
                    cursor: 'pointer'
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="position-absolute w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      filter: 'brightness(0.4)'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                      background: `linear-gradient(180deg, ${stat.color}80 0%, ${stat.color}E0 100%)`
                    }}
                  />

                  {/* Content */}
                  <div className="position-absolute w-100 h-100 p-4 d-flex flex-column justify-content-center align-items-center text-center text-white" style={{ zIndex: 2 }}>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="mb-3"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="display-3 fw-bold mb-2">
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="fw-semibold text-uppercase" style={{ letterSpacing: '1px' }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Images */}
      <section className="section" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="row g-5 align-items-center mb-5">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Industry Expert Trainers"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <FaCheckCircle size={40} style={{ color: '#1E3679' }} />
              </div>
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1E3679' }}>
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                alt="Placement Support"
                className="img-fluid rounded-4 shadow-lg"
              />
            </motion.div>
            <motion.div
              className="col-lg-6 order-lg-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-3">
                <FaBriefcase size={40} style={{ color: '#00AA8A' }} />
              </div>
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#00AA8A' }}>
                100% Placement Assistance
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Our dedicated placement team works tirelessly to connect you with top companies. From resume building to interview preparation, we guide you through every step of your job search journey with 500+ hiring partners.
              </p>
            </motion.div>
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
            {testimonials.map((testimonial, idx) => (
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

      {/* CTA Section */}
      
</>
);
};
export default Services;