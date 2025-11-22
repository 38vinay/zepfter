import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
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

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679, #2a4a9f)"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      details: ["support@zepfter.com", "admissions@zepfter.com"],
      color: "#00AA8A",
      gradient: "linear-gradient(135deg, #00AA8A, #00d4aa)"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Address",
      details: ["CBM Compound, Isukathota", "Maddilapalem, Visakhapatnam-530003"],
      color: "#FBD21A",
      gradient: "linear-gradient(135deg, #FBD21A, #ffd700)"
    },
    {
      icon: <FaClock size={24} />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      color: "#1E3679",
      gradient: "linear-gradient(135deg, #1E3679, #00AA8A)"
    }
  ];

  const courses = [
    "Medical Coding",
    "Medical Billing",
    "Medical Writing",
    "Clinical Research",
    "Clinical Data Management",
    "Clinical Trials",
    "Data Science",
    "Web Development",
    "AI & Machine Learning",
    "Python Programming"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section text-center position-relative" style={{
        background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
        color: 'white',
        padding: '120px 0 80px',
        overflow: 'hidden'
      }}>
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
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
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              background: 'white',
              filter: 'blur(5px)'
            }}
          />
        ))}

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="fw-bold display-3 mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="fs-4 mb-0" 
              style={{ maxWidth: '700px', margin: '0 auto' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="position-absolute" style={{ bottom: 0, left: 0, right: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <div className="row g-4">
          {contactInfo.map((info, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 20px 40px ${info.color}30`
                }}
                className="glass-card text-center p-4 h-100" 
                style={{ 
                  borderTop: `4px solid ${info.color}`,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Animated Background */}
                <motion.div
                  initial={{ scale: 0 }}
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
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="section container">
        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-7">
            <motion.div 
              className="glass-card p-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold mb-4">Send Us a Message</h2>
              
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="alert alert-success d-flex align-items-center mb-4" 
                    role="alert"
                  >
                    <FaCheckCircle className="me-2" />
                    <div>Thank you! Your message has been sent successfully. We'll get back to you soon.</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div onSubmit={handleSubmit}>
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
                        transition: 'all 0.3s ease'
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
                        transition: 'all 0.3s ease'
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
                        transition: 'all 0.3s ease'
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
                        transition: 'all 0.3s ease'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </motion.select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Message</label>
                    <motion.textarea 
                      name="message"
                      className="form-control form-control-lg" 
                      rows="5" 
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        borderColor: focusedField === 'message' ? '#00AA8A' : '',
                        transition: 'all 0.3s ease'
                      }}
                      whileFocus={{ scale: 1.01 }}
                    ></motion.textarea>
                  </div>

                  <div className="col-12">
                    <motion.button 
                      type="submit" 
                      className="btn-gradient btn-lg w-100 fw-semibold"
                      disabled={loading}
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(30, 54, 121, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'linear-gradient(135deg, #1E3679, #00AA8A)',
                        border: 'none',
                        borderRadius: '50px'
                      }}
                    >
                      {loading ? (
                        <>
                          <motion.span 
                            className="spinner-border spinner-border-sm me-2" 
                            role="status" 
                            aria-hidden="true"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Quick Contact */}
              <motion.div 
                className="glass-card p-4 mb-4"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <h4 className="fw-bold mb-4">Quick Contact</h4>
                
                {[
                  { icon: <FaPhoneAlt />, color: '#1E3679', title: 'Call Us', time: 'Mon-Sat: 9 AM - 7 PM', link: 'tel:+919876543210', text: '+91 98765 43210' },
                  { icon: <FaEnvelope />, color: '#00AA8A', title: 'Email Us', time: "We'll respond within 24 hours", link: 'mailto:support@zepfter.com', text: 'support@zepfter.com' },
                  { icon: <FaMapMarkerAlt />, color: '#FBD21A', title: 'Visit Us', time: 'CBM Compound, Isukathota\nMaddilapalem, Visakhapatnam-530003\nAndhra Pradesh, India', link: null, text: null }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="d-flex align-items-start gap-3 mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="rounded-circle bg-opacity-10 p-3 flex-shrink-0"
                      style={{ background: `${item.color}20` }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div style={{ color: item.color }}>{item.icon}</div>
                    </motion.div>
                    <div>
                      <div className="fw-semibold mb-1">{item.title}</div>
                      <div className="text-muted small" style={{ whiteSpace: 'pre-line' }}>{item.time}</div>
                      {item.link && (
                        <a href={item.link} className="text-primary text-decoration-none fw-semibold" style={{ color: item.color }}>
                          {item.text}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="glass-card p-4"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <h5 className="fw-bold mb-4">Follow Us</h5>
                <div className="d-flex gap-3">
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
                        width: '50px', 
                        height: '50px', 
                        background: social.gradient
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold display-5 mb-3">Our Location</h2>
            <p className="text-muted fs-5">Visit us at our Visakhapatnam campus</p>
          </motion.div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <motion.div 
                className="glass-card p-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <motion.div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
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
                  <h5 className="fw-semibold mb-2">Address:</h5>
                  <p className="text-muted mb-0">
                    CBM Compound, Isukathota<br />
                    Maddilapalem, Visakhapatnam-530003<br />
                    Andhra Pradesh, India
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-2">Contact:</h5>
                  <p className="mb-2">
                    <FaPhoneAlt className="text-primary me-2" />
                    <a href="tel:+919876543210" className="text-decoration-none text-dark">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="mb-0">
                    <FaEnvelope className="text-primary me-2" />
                    <a href="mailto:support@zepfter.com" className="text-decoration-none text-dark">
                      support@zepfter.com
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-2">Working Hours:</h5>
                  <p className="text-muted mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted mb-0">Sunday: Closed</p>
                </div>

                <motion.button 
                  className="btn btn-primary btn-lg w-100"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(30, 54, 121, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{ background: '#1E3679', border: 'none' }}
                >
                  Get Directions
                </motion.button>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div 
                className="glass-card p-0 overflow-hidden" 
                style={{ borderRadius: '20px', height: '500px' }}
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

      {/* CTA Section */}
      <motion.section 
        className="section text-center position-relative"
        style={{
          background: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
          color: 'white',
          overflow: 'hidden'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Shapes */}
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
          <motion.h2 
            className="fw-bold display-5 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Career?
          </motion.h2>
          
          <motion.p 
            className="fs-5 mb-5" 
            style={{ maxWidth: '700px', margin: '0 auto' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of successful professionals who started their journey with ZEPFTER
          </motion.p>
          
          <motion.div 
            className="d-flex gap-3 justify-content-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-light btn-lg px-5 py-3 fw-semibold"
            >
              Explore Courses
            </motion.a>
            
            <motion.button 
              whileHover={{ scale: 1.05, background: 'white', color: '#1E3679' }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
              style={{ transition: 'all 0.3s ease' }}
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;