import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2-removebg-preview.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false); // ADDED
  const [solutionsMobileOpen, setSolutionsMobileOpen] = useState(false); // ADDED
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Solutions" },

    // Solutions is handled manually below — do not remove this
    { path: "/solutions", label: "Services", dropdown: true },

    { path: "/contact", label: "Contact" },
  ];

  const solutionsDropdown = [
    { path: "/solutions/pharma", label: "Pharma" },
    { path: "/solutions/it", label: "IT" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`navbar navbar-expand-lg fixed-top nav-custom ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid container-header">

          {/* LOGO */}
          <Link className="navbar-brand navbar-brand-responsive" to="/">
            <motion.img
              transition={{ duration: 0.3 }}
              src={logo}
              alt="ZEPFTER Logo"
              className="d-block brand-logo"
              style={{ maxHeight: "100%", width: "auto" }}
            />
          </Link>

          {/* MOBILE TOGGLE */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="navbar-toggler border-0 d-lg-none hamburger-menu"
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
              style={{ position: "relative", width: "24px", height: "18px" }}
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: 45, y: 7, opacity: 1 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "2.5px",
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
                  height: "2.5px",
                  background: "#1E3679",
                  borderRadius: "2px",
                  top: "7px",
                }}
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -8, opacity: 1 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "2.5px",
                  background: "#1E3679",
                  borderRadius: "2px",
                  top: "14px",
                }}
              />
            </motion.div>
          </motion.button>

          {/* DESKTOP MENU */}
          <div className="collapse navbar-collapse navbar-collapse-custom">
            <ul className="navbar-nav ms-auto align-items-center desktop-nav-menu">
              {navLinks.map((link, idx) => {
                if (!link.dropdown) {
                  return (
                    <motion.li
                      key={link.path}
                      className="nav-item nav-item-responsive"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`nav-link nav-link-responsive ${isActive(link.path) ? "active" : ""}`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                }

                // SOLUTIONS DROPDOWN (Desktop)
                return (
                  <motion.li
                    key={link.path}
                    className="nav-item dropdown nav-item-responsive position-relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span
                      className={`nav-link nav-link-responsive dropdown-toggle ${
                        isActive(link.path) ? "active" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      Services
                    </span>

                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.25 }}
                          className="dropdown-menu show"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            background: "#fff",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            borderRadius: "8px",
                            padding: "10px 0",
                            zIndex: 999,
                          }}
                        >
                          {solutionsDropdown.map((item) => (
                            <li key={item.path}>
                              <Link
                                className="dropdown-item"
                                to={item.path}
                                style={{ padding: "10px 20px", fontWeight: 500 }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)", zIndex: 998,
              }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-menu-drawer"
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, width:
                  screenWidth < 375
                    ? "100%"
                    : screenWidth < 576
                    ? "90%"
                    : "85%",
                maxWidth: "400px",
                background: "linear-gradient(135deg,#ffffff,#f8f9fa)",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.2)",
                zIndex: 999, overflowY: "auto",
                padding: screenWidth < 576 ? "70px 20px" : "80px 30px",
              }}
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-close-btn"
                style={{
                  position: "absolute", top: 20, right: 20,
                  width: "40px", height: "40px", borderRadius: "50%",
                  border: "none",
                  background: "rgba(30, 54, 121, 0.1)", color: "#1E3679",
                  fontSize: "1.5rem", display: "flex", alignItems: "center",
                  justifyContent: "center", cursor: "pointer",
                }}
              >
                ×
              </motion.button>

              {/* MOBILE ITEMS */}
              <div className="mobile-menu-items">
                {navLinks.map((link, idx) => {
                  if (!link.dropdown) {
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="mobile-nav-link"
                          style={{
                            display: "block",
                            padding: "16px 20px",
                            marginBottom: "8px",
                            borderRadius: "12px",
                            background: isActive(link.path)
                              ? "rgba(30,54,121,0.1)"
                              : "transparent",
                            color: isActive(link.path) ? "#00AA8A" : "#1E3679",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            textDecoration: "none",
                          }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  }

                  // **MOBILE DROPDOWN FOR SOLUTIONS**
                  return (
                    <motion.div
                      key="solutions-mobile"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div
                        onClick={() => setSolutionsMobileOpen(!solutionsMobileOpen)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "16px 20px",
                          marginBottom: "8px",
                          borderRadius: "12px",
                          background: solutionsMobileOpen
                            ? "rgba(30,54,121,0.1)"
                            : "transparent",
                          color: "#1E3679",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          cursor: "pointer",
                        }}
                      >
                        Services 
                        <span>{solutionsMobileOpen ? "▲" : "▼"}</span>
                      </div>

                      {/* DROPDOWN ITEMS */}
                      <AnimatePresence>
                        {solutionsMobileOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            style={{ marginLeft: "10px" }}
                          >
                            {solutionsDropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                  display: "block",
                                  padding: "12px 20px",
                                  marginBottom: "6px",
                                  borderRadius: "10px",
                                  color: "#1E3679",
                                  background: "rgba(0,0,0,0.05)",
                                  textDecoration: "none",
                                  fontWeight: 500,
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
