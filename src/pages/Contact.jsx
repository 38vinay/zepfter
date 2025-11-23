import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaCheckCircle, FaWhatsapp, FaHeadset, FaUserFriends, FaRocket } from "react-icons/fa";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";





const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    preferredTime: '',
    contactMethod: 'email'
  });

  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setFormStatus('success');
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
        preferredTime: '',
        contactMethod: 'email'
      });

      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679, #2a4a9f)",
      link: "tel:+919876543210"
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: "WhatsApp",
      details: ["+91 98765 43210", "Quick Response 24/7"],
      color: "#00AA8A",
      gradient: "linear-gradient(135deg, #00AA8A, #00d4aa)",
      link: "https://wa.me/919876543210"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email Us",
      details: ["support@zepfter.com", "admissions@zepfter.com"],
      color: "#FBD21A",
      gradient: "linear-gradient(135deg, #FBD21A, #ffd700)",
      link: "mailto:support@zepfter.com"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Visit Us",
      details: ["CBM Compound, Isukathota", "Maddilapalem, Visakhapatnam"],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679, #00AA8A)",
      link: "#map"
    }
  ];

  const courses = [
    "Medical Coding",
    "Medical Billing",
    "Medical Writing",
    "Medical Affairs",
    "Clinical Research",
    "Clinical Data Management",
    "Clinical Trials",
    "BA/BE Studies",
    "Data Science",
    "Web Development",
    "AI & Machine Learning",
    "Python Programming",
    "Cloud Computing",
    "Cybersecurity",
    "Quality Assurance",
    "Quality Control",
    "Regulatory Affairs",
    "Pharmaceutical Operations"
  ];

 

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <>
      {/* Hero Section with Particle Effect */}
      <section className="position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1E3679 50%, #00AA8A 100%)',
        color: 'white',
        padding: '140px 0 100px',
        marginTop: '70px'
      }}>
        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 400
            }}
            animate={{
              y: [0, -1000],
              opacity: [0.3, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: 'white',
              filter: 'blur(1px)'
            }}
          />
        ))}

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle mx-auto"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.2)'
                }}
              >
                <FaHeadset size={50} />
              </div>
            </motion.div>

            <h1 className="fw-bold display-3 mb-4">Get in Touch</h1>
            <p className="fs-4 mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Have questions? We're here to help you start your learning journey. Reach out to us through any channel that works best for you.
            </p>

            <motion.div 
              className="d-flex gap-3 justify-content-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-light btn-lg px-4 py-3 d-flex align-items-center gap-2"
                style={{ borderRadius: '50px', fontWeight: '600' }}
              >
                <FaPhoneAlt /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-light btn-lg px-4 py-3 d-flex align-items-center gap-2"
                style={{ borderRadius: '50px', fontWeight: '600' }}
              >
                <FaWhatsapp /> WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        
      </section>

      {/* Contact Info Cards */}
      <section className="container" style={{ marginTop: '-100px', position: 'relative', zIndex: 10 }}>
        <div className="row g-4">
          {contactInfo.map((info, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <motion.a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-decoration-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${info.color}30`
                }}
              >
                <div
                  className="glass-card text-center p-4 h-100" 
                  style={{ 
                    borderTop: `4px solid ${info.color}`,
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'white'
                  }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 0.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      background: info.gradient,
                      borderRadius: '50%',
                      filter: 'blur(60px)'
                    }}
                  />

                  <motion.div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      background: info.color,
                      color: 'white',
                      position: 'relative',
                      zIndex: 1
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {info.icon}
                  </motion.div>
                  
                  <h5 className="fw-bold mb-3" style={{ position: 'relative', zIndex: 1 }}>
                    {info.title}
                  </h5>
                  {info.details.map((detail, i) => (
                    <p className="text-muted mb-1 small" key={i} style={{ position: 'relative', zIndex: 1 }}>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.a>
            </div>
          ))}
        </div>
      </section>

      
      

      {/* Contact Form & Sidebar */}
      <section className="section container">
        <div className="row g-5">
          {/* Enhanced Form */}
          <div className="col-lg-7">
            <motion.div 
              className="glass-card p-4 p-md-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="d-flex align-items-center gap-3 mb-4">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1E3679, #00AA8A)'
                  }}
                >
                  <FaEnvelope size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="fw-bold mb-0">Send Us a Message</h2>
                  <p className="text-muted mb-0">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="alert d-flex align-items-center mb-4" 
                    style={{ 
                      background: 'linear-gradient(135deg, #00AA8A, #00d4aa)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '15px'
                    }}
                  >
                    <FaCheckCircle className="me-2" size={24} />
                    <div>
                      <strong>Success!</strong> Your message has been sent. We'll get back to you soon.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <motion.input 
                      type="text" 
                      name="name"
                      className="form-control form-control-lg" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        borderColor: focusedField === 'name' ? '#1E3679' : '',
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <motion.input 
                      type="email" 
                      name="email"
                      className="form-control form-control-lg" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        borderColor: focusedField === 'email' ? '#00AA8A' : '',
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number *</label>
                    <motion.input 
                      type="tel" 
                      name="phone"
                      className="form-control form-control-lg" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        borderColor: focusedField === 'phone' ? '#FBD21A' : '',
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Course Interested In *</label>
                    <motion.select 
                      name="course"
                      className="form-select form-select-lg"
                      value={formData.course}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('course')}
                      onBlur={() => setFocusedField(null)}
                      required
                      style={{
                        borderColor: focusedField === 'course' ? '#1E3679' : '',
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </motion.select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Preferred Time to Contact</label>
                    <motion.select 
                      name="preferredTime"
                      className="form-select form-select-lg"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      style={{
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                    </motion.select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Preferred Contact Method</label>
                    <motion.select 
                      name="contactMethod"
                      className="form-select form-select-lg"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      style={{
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                    </motion.select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Message</label>
                    <motion.textarea 
                      name="message"
                      className="form-control form-control-lg" 
                      rows="5" 
                      placeholder="Tell us about your requirements and questions..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        borderColor: focusedField === 'message' ? '#00AA8A' : '',
                        borderWidth: '2px',
                        borderRadius: '12px'
                      }}
                      whileFocus={{ scale: 1.01 }}
                    ></motion.textarea>
                  </div>

                  <div className="col-12">
                    <motion.button 
                      type="submit" 
                      className="btn btn-lg w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      disabled={loading}
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(30, 54, 121, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'linear-gradient(135deg, #1E3679, #00AA8A)',
                        border: 'none',
                        borderRadius: '12px',
                        color: 'white',
                        padding: '16px'
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            className="spinner-border spinner-border-sm"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaEnvelope /> Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Working Hours */}
              <motion.div 
                className="glass-card p-4 mb-4"
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #FBD21A, #ffd700)'
                    }}
                  >
                    <FaClock size={24} className="text-white" />
                  </motion.div>
                  <h4 className="fw-bold mb-0">Working Hours</h4>
                </div>
                
                {workingHours.map((schedule, idx) => (
                  <motion.div 
                    key={idx}
                    className="d-flex justify-content-between align-items-center py-3"
                    style={{
                      borderBottom: idx < workingHours.length - 1 ? '1px solid #eee' : 'none'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="fw-semibold">{schedule.day}</span>
                    <span className="badge bg-primary px-3 py-2">{schedule.hours}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="glass-card p-4 mb-4"
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
              >
                <h5 className="fw-bold mb-4">Connect With Us</h5>
                <div className="d-flex gap-3 flex-wrap">
                  {[
                    { icon: <FaFacebookF size={20} />, gradient: 'linear-gradient(135deg, #1E3679, #2a4a9f)', link: '#' },
                    { icon: <FaInstagram size={20} />, gradient: 'linear-gradient(135deg, #00AA8A, #00d4aa)', link: '#' },
                    { icon: <FaLinkedinIn size={20} />, gradient: 'linear-gradient(135deg, #FBD21A, #ffd700)', link: '#' },
                    { icon: <FaTwitter size={20} />, gradient: 'linear-gradient(135deg, #1E3679, #00AA8A)', link: '#' }
                  ].map((social, idx) => (
                    <motion.a 
                      key={idx}
                      href={social.link}
                      className="d-flex align-items-center justify-content-center rounded-circle text-white"
                      style={{ 
                        width: '55px', 
                        height: '55px', 
                        background: social.gradient
                      }}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Help & Support */}
              <motion.div 
                className="glass-card p-4"
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'linear-gradient(135deg, rgba(30,54,121,0.05), rgba(0,170,138,0.05))'
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <FaHeadset size={30} className="text-primary" />
                  <h5 className="fw-bold mb-0">Need Immediate Help?</h5>
                </div>
                <p className="text-muted mb-3">
                  Our admissions team is available to answer your questions and guide you through the enrollment process.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary flex-grow-1"
                  >
                    <FaPhoneAlt className="me-2" /> Call Now
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919876543210"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-success flex-grow-1"
                  >
                    <FaWhatsapp className="me-2" /> WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Location Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold display-5 mb-3">Visit Our Campus</h2>
            <p className="text-muted fs-5">Experience our world-class training facilities</p>
          </motion.div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <motion.div 
                className="glass-card p-4 p-md-5 h-100"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="mb-4">
                  <motion.div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #1E3679, #00AA8A)'
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FaMapMarkerAlt size={40} className="text-white" />
                  </motion.div>
                  <h3 className="fw-bold mb-3">ZEPFTER Visakhapatnam</h3>
                </div>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-3 d-flex align-items-center gap-2">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '30px',
                        height: '30px',
                        background: 'linear-gradient(135deg, #1E3679, #00AA8A)'
                      }}
                    >
                      <FaMapMarkerAlt size={14} className="text-white" />
                    </div>
                    Address
                  </h5>
                  <p className="text-muted mb-0 ps-5">
                    CBM Compound, Isukathota<br />
                    Maddilapalem, Visakhapatnam-530003<br />
                    Andhra Pradesh, India
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-3 d-flex align-items-center gap-2">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '30px',
                        height: '30px',
                        background: 'linear-gradient(135deg, #00AA8A, #00d4aa)'
                      }}
                    >
                      <FaPhoneAlt size={14} className="text-white" />
                    </div>
                    Contact
                  </h5>
                  <div className="ps-5">
                    <p className="mb-2">
                      <a href="tel:+919876543210" className="text-decoration-none text-dark d-flex align-items-center gap-2">
                        <FaPhoneAlt className="text-primary" size={14} />
                        <strong>+91 98765 43210</strong>
                      </a>
                    </p>
                    <p className="mb-2">
                      <a href="tel:+919876543211" className="text-decoration-none text-dark d-flex align-items-center gap-2">
                        <FaPhoneAlt className="text-primary" size={14} />
                        +91 98765 43211
                      </a>
                    </p>
                    <p className="mb-0">
                      <a href="mailto:support@zepfter.com" className="text-decoration-none text-dark d-flex align-items-center gap-2">
                        <FaEnvelope className="text-primary" size={14} />
                        support@zepfter.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-3 d-flex align-items-center gap-2">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '30px',
                        height: '30px',
                        background: 'linear-gradient(135deg, #FBD21A, #ffd700)'
                      }}
                    >
                      <FaClock size={14} className="text-white" />
                    </div>
                    Working Hours
                  </h5>
                  <div className="ps-5 text-muted">
                    <p className="mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="mb-0">Sunday: Closed</p>
                  </div>
                </div>

                <motion.button 
                  className="btn btn-lg w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(30, 54, 121, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    background: 'linear-gradient(135deg, #1E3679, #00AA8A)', 
                    border: 'none',
                    color: 'white',
                    borderRadius: '12px',
                    padding: '16px'
                  }}
                >
                  <FaMapMarkerAlt /> Get Directions
                </motion.button>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div 
                className="glass-card p-0 overflow-hidden h-100" 
                style={{ 
                  borderRadius: '20px',
                  minHeight: '500px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0684699482466!2d83.30174231487721!3d17.73045998791891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6b0c7%3A0x8c7d5e5c1b2e5f6d!2sMaddilapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ZEPFTER Visakhapatnam Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Features Section - NEW */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold display-5 mb-3">Why Visit Our Campus?</h2>
            <p className="text-muted fs-5">Discover our state-of-the-art facilities</p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                icon: <FaGraduationCap size={40} />,
                title: "Modern Classrooms",
                description: "AC classrooms with smart boards and comfortable seating",
                color: "#1E3679"
              },
              {
                icon: <FaLaptopCode size={40} />,
                title: "Computer Labs",
                description: "Latest hardware and software for hands-on practice",
                color: "#00AA8A"
              },
              {
                icon: <FaUserFriends size={40} />,
                title: "Library & Resources",
                description: "Extensive collection of books and digital resources",
                color: "#FBD21A"
              },
              {
                icon: <FaHeadset size={40} />,
                title: "Career Counseling",
                description: "Dedicated placement cell with expert counselors",
                color: "#1E3679"
              }
            ].map((feature, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                  className="glass-card text-center p-4 h-100"
                >
                  <motion.div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `${feature.color}15`
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                  </motion.div>
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted mb-0">{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f4ff 100%)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold display-5 mb-3">Frequently Asked Questions</h2>
            <p className="text-muted fs-5">Quick answers to common questions</p>
          </motion.div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                {
                  question: "What are your admission requirements?",
                  answer: "Admission requirements vary by course. Generally, we accept students who have completed their graduation in any stream. For specific course requirements, please contact our admissions team."
                },
                {
                  question: "Do you offer online classes?",
                  answer: "Yes! We offer both online and offline training modes. Online students get access to live classes, recorded sessions, and all learning materials through our LMS platform."
                },
                {
                  question: "How long does it take to complete a course?",
                  answer: "Course duration varies from 3 to 12 months depending on the program. We offer flexible schedules including weekend batches for working professionals."
                },
                {
                  question: "Do you provide placement assistance?",
                  answer: "Absolutely! We offer 100% placement assistance with dedicated placement coordinators, resume building, mock interviews, and direct company referrals to 500+ partner companies."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 mb-3"
                  whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                >
                  <div className="d-flex gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #1E3679, #00AA8A)',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >
                      ?
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">{faq.question}</h5>
                      <p className="text-muted mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <motion.section 
        className="section text-center position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
          color: 'white',
          padding: '100px 0'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)'
            }}
          />
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
              style={{
                width: '100px',
                height: '100px',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaRocket size={50} />
            </motion.div>

            <h2 className="fw-bold display-4 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="fs-5 mb-5" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
              Take the first step towards your dream career. Our team is ready to guide you through the enrollment process and answer all your questions.
            </p>
            
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                style={{ borderRadius: '50px' }}
              >
                <FaPhoneAlt /> Call Now
              </motion.a>
              
              <motion.a
                href="https://wa.me/919876543210"
                whileHover={{ scale: 1.05, background: 'white', color: '#00AA8A' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                style={{ borderRadius: '50px', border: '2px solid white' }}
              >
                <FaWhatsapp /> WhatsApp Us
              </motion.a>
              
              
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;