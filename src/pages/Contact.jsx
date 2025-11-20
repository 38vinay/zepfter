import React, { useState } from "react";
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
      color: "#667eea"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      details: ["support@zepfter.com", "admissions@zepfter.com"],
      color: "#f093fb"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Address",
      details: ["CBM Compound, Isukathota", "Maddilapalem, Visakhapatnam-530003"],
      color: "#4facfe"
    },
    {
      icon: <FaClock size={24} />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      color: "#43e97b"
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '120px 0 80px'
      }}>
        <div className="container position-relative" data-aos="fade-up">
          <h1 className="fw-bold display-3 mb-5">Get in Touch</h1>
          <p className="fs-4 mb-0" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Decorative wave */}
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
            <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="glass-card text-center p-4 h-100" style={{ borderTop: `4px solid ${info.color}` }}>
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: info.color,
                    color: 'white'
                  }}
                >
                  {info.icon}
                </div>
                <h5 className="fw-bold mb-3">{info.title}</h5>
                {info.details.map((detail, i) => (
                  <p className="text-muted mb-1 small" key={i}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section container">
        <div className="row g-5">
          {/* Form */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="glass-card p-5">
              <h2 className="fw-bold mb-4">Send Us a Message</h2>
              
              {formStatus === 'success' && (
                <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                  <FaCheckCircle className="me-2" />
                  <div>Thank you! Your message has been sent successfully. We'll get back to you soon.</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-control form-control-lg" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control form-control-lg" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control form-control-lg" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Course Interested In *</label>
                    <select 
                      name="course"
                      className="form-select form-select-lg"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, idx) => (
                        <option key={idx} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea 
                      name="message"
                      className="form-control form-control-lg" 
                      rows="5" 
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn-gradient btn-lg w-100 fw-semibold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-5" data-aos="fade-left">
            {/* Quick Contact */}
            <div className="glass-card p-4 mb-4">
              <h4 className="fw-bold mb-4">Quick Contact</h4>
              
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="rounded-circle bg-primary bg-opacity-10 p-3 flex-shrink-0">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div>
                  <div className="fw-semibold mb-1">Call Us</div>
                  <div className="text-muted small">Mon-Sat: 9 AM - 7 PM</div>
                  <a href="tel:+919876543210" className="text-primary text-decoration-none fw-semibold">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="rounded-circle bg-danger bg-opacity-10 p-3 flex-shrink-0">
                  <FaEnvelope className="text-danger" />
                </div>
                <div>
                  <div className="fw-semibold mb-1">Email Us</div>
                  <div className="text-muted small">We'll respond within 24 hours</div>
                  <a href="mailto:support@zepfter.com" className="text-primary text-decoration-none fw-semibold">
                    support@zepfter.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle bg-success bg-opacity-10 p-3 flex-shrink-0">
                  <FaMapMarkerAlt className="text-success" />
                </div>
                <div>
                  <div className="fw-semibold mb-1">Visit Us</div>
                  <div className="text-muted small">
                    CBM Compound, Isukathota<br />
                    Maddilapalem, Visakhapatnam-530003<br />
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card p-4">
              <h5 className="fw-bold mb-4">Follow Us</h5>
              <div className="d-flex gap-3">
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center rounded-circle text-white"
                  style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #667eea, #764ba2)' }}
                >
                  <FaFacebookF size={20} />
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center rounded-circle text-white"
                  style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center rounded-circle text-white"
                  style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #4facfe, #00f2fe)' }}
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a 
                  href="#" 
                  className="d-flex align-items-center justify-content-center rounded-circle text-white"
                  style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #43e97b, #38f9d7)' }}
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-5 mb-3">Our Location</h2>
            <p className="text-muted fs-5">Visit us at our Visakhapatnam campus</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="glass-card p-5">
                <div className="mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)'
                    }}
                  >
                    <FaMapMarkerAlt size={40} className="text-white" />
                  </div>
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

                <button className="btn btn-primary btn-lg w-100">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="glass-card p-0 overflow-hidden" style={{ borderRadius: '20px', height: '500px' }}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center position-relative" style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        color: 'white'
      }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold display-5 mb-4">Ready to Transform Your Career?</h2>
          <p className="fs-5 mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join thousands of successful professionals who started their journey with ZEPFTER
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="/services" className="btn btn-light btn-lg px-5 py-3 fw-semibold">
              Explore Courses
            </a>
            <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;