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
      details: ["123 Education Street", "Bangalore, Karnataka 560001"],
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

  const locations = [
    {
      city: "Bangalore",
      address: "123 Education Street, Bangalore 560001",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80"
    },
    {
      city: "Hyderabad",
      address: "456 Tech Park, Hyderabad 500032",
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?w=400&q=80"
    },
    {
      city: "Chennai",
      address: "789 Knowledge Hub, Chennai 600001",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80"
    }
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
          <h1 className="fw-bold display-3 mb-4">Get in Touch</h1>
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
                    123 Education Street<br />
                    Bangalore, Karnataka 560001
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

      {/* Locations */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-5 mb-3">Our Locations</h2>
            <p className="text-muted fs-5">Find a ZEPFTER center near you</p>
          </div>

          <div className="row g-4">
            {locations.map((location, idx) => (
              <div className="col-lg-4 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="glass-card overflow-hidden p-0 h-100">
                  <div 
                    className="position-relative"
                    style={{ height: '200px', backgroundImage: `url(${location.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
                      <h3 className="text-white fw-bold">{location.city}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="d-flex align-items-start gap-2 mb-3">
                      <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                      <div className="text-muted small">{location.address}</div>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <FaPhoneAlt className="text-primary" />
                      <a href={`tel:${location.phone}`} className="text-decoration-none text-primary fw-semibold">
                        {location.phone}
                      </a>
                    </div>
                    <button className="btn btn-outline-primary w-100">Get Directions</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container" data-aos="fade-up">
          <div className="glass-card p-0 overflow-hidden" style={{ borderRadius: '20px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8864811964!2d77.49085284088229!3d12.953945614529528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZEPFTER Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;