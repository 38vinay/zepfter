import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%231E3679' width='100' height='100' rx='20'/%3E%3Ctext x='50' y='70' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EZ%3C/text%3E%3C/svg%3E";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar navbar-expand-lg nav-custom fixed-top shadow-sm ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(30, 54, 121, 0.1)' : 'none'
      }}
    >
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <motion.img 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={logo}
            alt="ZEPFTER" 
            height="40" 
            className="me-2"
            style={{ borderRadius: '8px' }}
          />
          <motion.span 
            className="brand-text"
            whileHover={{ scale: 1.05 }}
            style={{
              background: 'linear-gradient(135deg, #1E3679, #00AA8A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              fontSize: '1.5rem',
              fontWeight: '700'
            }}
          >
            ZEPFTER
          </motion.span>
        </a>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <motion.div
            animate={mobileMenuOpen ? "open" : "closed"}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 }
              }}
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                background: '#1E3679',
                borderRadius: '2px',
                marginBottom: '5px',
                transformOrigin: 'center',
                transition: 'all 0.3s ease'
              }}
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                background: '#1E3679',
                borderRadius: '2px',
                marginBottom: '5px',
                transition: 'all 0.3s ease'
              }}
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 }
              }}
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                background: '#1E3679',
                borderRadius: '2px',
                transformOrigin: 'center',
                transition: 'all 0.3s ease'
              }}
            />
          </motion.div>
        </motion.button>

        {/* NAV MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.a 
                className="nav-link" 
                href="/"
                whileHover={{ scale: 1.05 }}
                style={{ position: 'relative' }}
              >
                Home
                <motion.span
                  className="position-absolute bottom-0 start-50"
                  style={{
                    width: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #FBD21A, #00AA8A)',
                    borderRadius: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>

            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a 
                className="nav-link" 
                href="/about"
                whileHover={{ scale: 1.05 }}
                style={{ position: 'relative' }}
              >
                About
                <motion.span
                  className="position-absolute bottom-0 start-50"
                  style={{
                    width: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #FBD21A, #00AA8A)',
                    borderRadius: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>

            {/* SERVICES DROPDOWN */}
            <motion.li 
              className="nav-item dropdown"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a 
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                whileHover={{ scale: 1.05 }}
                style={{ position: 'relative' }}
              >
                Services
                <motion.span
                  className="position-absolute bottom-0 start-50"
                  style={{
                    width: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #FBD21A, #00AA8A)',
                    borderRadius: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <ul 
                className="dropdown-menu shadow" 
                aria-labelledby="servicesDropdown"
                style={{
                  borderRadius: '15px',
                  border: 'none',
                  padding: '15px 0',
                  boxShadow: '0 10px 40px rgba(30, 54, 121, 0.15)',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px)',
                  minWidth: '250px'
                }}
              >

                <li><h6 className="dropdown-header" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1E3679' }}>Medical Courses</h6></li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #1E3679, #00AA8A)', color: 'white' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Medical Coding
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #1E3679, #00AA8A)', color: 'white' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Medical Billing
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #1E3679, #00AA8A)', color: 'white' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Medical Writing
                  </motion.a>
                </li>

                <li><hr className="dropdown-divider" style={{ margin: '10px 15px', opacity: 0.1 }} /></li>

                <li><h6 className="dropdown-header" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1E3679' }}>Clinical Courses</h6></li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #00AA8A, #00d4aa)', color: 'white' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Clinical Research
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #00AA8A, #00d4aa)', color: 'white' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Clinical Trials
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #00AA8A, #00d4aa)', color: 'white' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Clinical Data Management
                  </motion.a>
                </li>

                <li><hr className="dropdown-divider" style={{ margin: '10px 15px', opacity: 0.1 }} /></li>

                <li><h6 className="dropdown-header" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1E3679' }}>IT & Technology</h6></li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #FBD21A, #ffd700)', color: '#1E3679' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Data Science
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #FBD21A, #ffd700)', color: '#1E3679' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    AI & Machine Learning
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #FBD21A, #ffd700)', color: '#1E3679' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Web Development
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    className="dropdown-item" 
                    href="/services"
                    whileHover={{ x: 5, background: 'linear-gradient(135deg, #FBD21A, #ffd700)', color: '#1E3679' }}
                    style={{ 
                      padding: '12px 25px', 
                      borderRadius: '10px', 
                      margin: '3px 10px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Python
                  </motion.a>
                </li>

              </ul>
            </motion.li>

            <motion.li 
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                className="nav-link" 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                style={{ position: 'relative' }}
              >
                Contact
                <motion.span
                  className="position-absolute bottom-0 start-50"
                  style={{
                    width: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #FBD21A, #00AA8A)',
                    borderRadius: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>

          </ul>
        </div>

      </div>
    </motion.nav>
  );
};

export default Header;