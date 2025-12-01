import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaCapsules, FaFlask, FaLaptopCode, FaPills, FaArrowRight, FaUsers, FaGraduationCap, FaUserTie, FaBriefcase, FaCheckCircle, FaTrophy, FaRocket } from "react-icons/fa";
import PageCarousel from "../components/PageCarousel";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [counters, setCounters] = useState({ projects: 0, retention: 0, experts: 0, clients: 0 });
  
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

    const targets = { projects: 1500, retention: 98, experts: 200, clients: 450 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        retention: Math.floor(targets.retention * progress),
        experts: Math.floor(targets.experts * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isStatsInView]);

  const services = [
    {
      id: 'medical',
      icon: FaCapsules,
      title: 'Medical Affairs',
      description: 'Medical Writing, Pharmacovigilance, Regulatory Strategy, Medical Information',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
      color: '#1E3679',
      stats: { projects: '150+', clients: '40+' },
      slug: 'medical-affairs'
    },
    {
      id: 'clinical',
      icon: FaFlask,
      title: 'Clinical Research',
      description: 'Clinical Data Management, Biostatistics, Clinical Trial Management, Safety Monitoring',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
      color: '#00AA8A',
      stats: { projects: '200+', clients: '50+' },
      slug: 'clinical-research'
    },
    {
      id: 'it',
      icon: FaLaptopCode,
      title: 'Digital Transformation',
      description: 'Cloud Computing, AI/ML Solutions, Cybersecurity, Enterprise Software Development',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
      color: '#1E3679',
      stats: { projects: '500+', clients: '100+' },
      slug: 'digital-transformation'
    },
    {
      id: 'pharmaceutical',
      icon: FaPills,
      title: 'Pharma Consulting',
      description: 'GxP Compliance, Quality Assurance, Validation Services, Regulatory Audits',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
      color: '#00AA8A',
      stats: { projects: '300+', clients: '80+' },
      slug: 'pharma-consulting'
    },
    {
      id: 'training',
      icon: FaUserTie,
      title: 'Talent Solutions',
      description: 'Specialized Staffing, RPO, Executive Search, Contract Resourcing',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #000000 100%)',
      color: '#1E3679',
      stats: { placements: '1000+', clients: '200+' },
      slug: 'talent-solutions'
    },
    {
      id: 'internship',
      icon: FaBriefcase,
      title: 'Corporate Training',
      description: 'Workforce Upskilling, GMP Training, Leadership Development, Technical Workshops',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
      color: '#00AA8A',
      stats: { programs: '100+', clients: '50+' },
      slug: 'corporate-training'
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
              OUR <span style={{ color: '#00AA8A' }}>CORE</span> <span style={{ color: '#FBD21A' }}>EXPERTISE</span>
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
              We deliver scalable, robust, and compliant solutions that drive digital transformation and operational excellence. Our expert teams provide world-class services to address complex business challenges in Pharma and IT.
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
                          <div className="fw-bold">{Object.values(service.stats)[0]}</div>
                          <div className="small" style={{ fontSize: '0.75rem' }}>{Object.keys(service.stats)[0] === 'placements' ? 'Placements' : Object.keys(service.stats)[0] === 'programs' ? 'Programs' : 'Projects'}</div>
                        </div>
                        <div 
                          className="px-3 py-2 rounded-3"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <div className="fw-bold">{Object.values(service.stats)[1]}</div>
                          <div className="small" style={{ fontSize: '0.75rem' }}>Clients</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                      className="btn btn-light fw-semibold w-100 d-flex align-items-center justify-content-center gap-2"
                      animate={hoveredCard === idx ? { y: -3 } : { y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Explore Solutions 
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
              { icon: <FaGraduationCap size={40} />, number: counters.projects, suffix: '+', label: 'Projects Delivered', color: '#1E3679' },
              { icon: <FaTrophy size={40} />, number: counters.retention, suffix: '%', label: 'Client Retention', color: '#00AA8A' },
              { icon: <FaUsers size={40} />, number: counters.experts, suffix: '+', label: 'Industry Experts', color: '#FBD21A' },
              { icon: <FaRocket size={40} />, number: counters.clients, suffix: '+', label: 'Global Clients', color: '#1E3679' }
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
                Expert Team
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Partner with industry veterans having 15+ years of experience in Pharmaceutical and Technology sectors. Our experts bring deep domain knowledge and technical precision to every project, ensuring world-class delivery.
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
                Global Delivery Model
              </h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                Our seamless delivery model ensures 24/7 support and rapid turnaround times. We leverage global talent pools to provide scalable, cost-effective, and high-quality solutions tailored to your business needs.
              </p>
            </motion.div>
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

export default Services;
