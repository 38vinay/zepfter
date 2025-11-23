import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%231E3679' width='100' height='100' rx='20'/%3E%3Ctext x='50' y='70' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E";

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(30, 54, 121, 0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
          padding: scrolled ? '8px 0' : '12px 0',
          zIndex: 1000
        }}
      >
        <div className="container">

          {/* LOGO */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <motion.img 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={logo}
              alt="ZEPFTER" 
              height={scrolled ? "40" : "45"}
              className="me-2"
              style={{ 
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                background: 'linear-gradient(135deg, #1E3679, #00AA8A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '2px',
                fontSize: scrolled ? '1.4rem' : '1.5rem',
                fontWeight: '700',
                transition: 'all 0.3s ease'
              }}
            >
              ZEPFTER
            </motion.div>
          </Link>

          {/* Mobile Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              padding: '8px',
              background: mobileMenuOpen ? 'rgba(30, 54, 121, 0.1)' : 'transparent',
              borderRadius: '8px'
            }}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              style={{ position: 'relative', width: '28px', height: '20px' }}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: 45, y: 8, opacity: 1 }
                }}
                style={{
                  position: 'absolute',
                  display: 'block',
                  width: '100%',
                  height: '3px',
                  background: '#1E3679',
                  borderRadius: '2px',
                  top: 0,
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease'
                }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1, x: 0 },
                  open: { opacity: 0, x: -20 }
                }}
                style={{
                  position: 'absolute',
                  display: 'block',
                  width: '100%',
                  height: '3px',
                  background: '#1E3679',
                  borderRadius: '2px',
                  top: '8px',
                  transition: 'all 0.3s ease'
                }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -9, opacity: 1 }
                }}
                style={{
                  position: 'absolute',
                  display: 'block',
                  width: '100%',
                  height: '3px',
                  background: '#1E3679',
                  borderRadius: '2px',
                  top: '16px',
                  transformOrigin: 'center',
                  transition: 'all 0.3s ease'
                }}
              />
            </motion.div>
          </motion.button>

          {/* NAV MENU - Desktop */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.path}
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="nav-link"
                    style={{
                      position: 'relative',
                      padding: '10px 18px',
                      color: isActive(link.path) ? '#00AA8A' : '#1E3679',
                      fontWeight: isActive(link.path) ? '700' : '600',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      borderRadius: '8px'
                    }}
                  >
                    {link.label}
                    
                    {/* Active Indicator */}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="activeTab"
                        className="position-absolute"
                        style={{
                          width: '100%',
                          height: '3px',
                          background: 'linear-gradient(90deg, #00AA8A, #1E3679)',
                          borderRadius: '10px',
                          bottom: '2px',
                          left: 0
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover Effect */}
                    {!isActive(link.path) && (
                      <motion.span
                        className="position-absolute"
                        style={{
                          width: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #FBD21A, #00AA8A)',
                          borderRadius: '10px',
                          bottom: '2px',
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                        whileHover={{ width: '80%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}

            </ul>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 998
              }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '85%',
                maxWidth: '400px',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.2)',
                zIndex: 999,
                overflowY: 'auto',
                padding: '80px 30px 30px'
              }}
            >
              {/* Close Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(30, 54, 121, 0.1)',
                  color: '#1E3679',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                ×
              </motion.button>

              {/* Mobile Nav Links */}
              <div style={{ marginBottom: '30px' }}>
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '16px 20px',
                        marginBottom: '8px',
                        borderRadius: '12px',
                        background: isActive(link.path) 
                          ? 'linear-gradient(135deg, rgba(30, 54, 121, 0.1), rgba(0, 170, 138, 0.1))'
                          : 'transparent',
                        color: isActive(link.path) ? '#00AA8A' : '#1E3679',
                        fontWeight: isActive(link.path) ? '700' : '600',
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        borderLeft: isActive(link.path) ? '4px solid #00AA8A' : '4px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  marginTop: '40px',
                  padding: '20px',
                  background: 'rgba(30, 54, 121, 0.05)',
                  borderRadius: '12px'
                }}
              >
                <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '12px' }}>
                  📞 <strong>Phone:</strong><br />
                  <a href="tel:+919876543210" style={{ color: '#1E3679', textDecoration: 'none' }}>
                    +91 98765 43210
                  </a>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                  ✉️ <strong>Email:</strong><br />
                  <a href="mailto:support@zepfter.com" style={{ color: '#1E3679', textDecoration: 'none' }}>
                    support@zepfter.com
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{
                  marginTop: '30px',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center'
                }}
              >
                {['F', 'I', 'L', 'T'].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1E3679, #00AA8A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      fontWeight: '700'
                    }}
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;