import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_extracted-removebg-preview.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`navbar navbar-expand-lg fixed-top nav-custom ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container">
          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <motion.img
              transition={{ duration: 0.3 }}
              src={logo}
              alt="ZEPFTER Logo"
              className="d-block"
            />
          </Link>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              padding: "8px",
              background: mobileMenuOpen ? "rgba(30, 54, 121, 0.1)" : "transparent",
              borderRadius: "8px",
            }}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              style={{ position: "relative", width: "28px", height: "20px" }}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: 45, y: 8, opacity: 1 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  background: "#1E3679",
                  borderRadius: "2px",
                  top: 0,
                }}
              />
              <motion.span
                variants={{
                  closed: { opacity: 1, x: 0 },
                  open: { opacity: 0, x: -20 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  background: "#1E3679",
                  borderRadius: "2px",
                  top: "8px",
                }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -9, opacity: 1 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  background: "#1E3679",
                  borderRadius: "2px",
                  top: "16px",
                }}
              />
            </motion.div>
          </motion.button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto align-items-center">
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
                    className={`nav-link ${isActive(link.path) ? "active" : ""}`}
                  >
                    {link.label}
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
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                zIndex: 998,
              }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "85%",
                maxWidth: "400px",
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.2)",
                zIndex: 999,
                overflowY: "auto",
                padding: "80px 30px 30px",
              }}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(30, 54, 121, 0.1)",
                  color: "#1E3679",
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                ×
              </motion.button>

              <div style={{ marginBottom: "30px" }}>
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
                        display: "block",
                        padding: "16px 20px",
                        marginBottom: "8px",
                        borderRadius: "12px",
                        background: isActive(link.path)
                          ? "linear-gradient(135deg, rgba(30, 54, 121, 0.1), rgba(0, 170, 138, 0.1))"
                          : "transparent",
                        color: isActive(link.path) ? "#00AA8A" : "#1E3679",
                        fontWeight: isActive(link.path) ? "700" : "600",
                        fontSize: "1.1rem",
                        textDecoration: "none",
                        borderLeft: isActive(link.path)
                          ? "4px solid #00AA8A"
                          : "4px solid transparent",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;