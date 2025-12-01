import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section text-light">

      {/* Top Footer */}
      <div className="container py-5">
        <div className="row g-4">

          {/* ABOUT */}
          <div className="col-md-3">
            <h4 className="fw-bold">ZEPFTER</h4>
            <p className="mt-3 text-light opacity-75">
              A leading provider of comprehensive solutions in Pharma, IT, BPO, BPM, and BPS, alongside world-class training programs. We empower businesses and build careers through innovation and excellence.
            </p>

            {/* Social Icons */}
            <button type="button" className="social-icon" onClick={() => console.log('Facebook clicked')}>
              <FaFacebookF />
            </button>
            <button type="button" className="social-icon" onClick={() => console.log('Instagram clicked')}>
              <FaInstagram />
            </button>
            <button type="button" className="social-icon" onClick={() => console.log('LinkedIn clicked')}>
              <FaLinkedinIn />
            </button>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* COURSES */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Top Services</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/services">Medical Coding</a></li>
              <li><a href="/services">Clinical Research</a></li>
              <li><a href="/services">Data Science</a></li>
              <li><a href="/services">AI & Machine Learning</a></li>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/solutions/pharma">Pharma</a></li>
              <li><a href="/solutions/it">IT</a></li>
              <li><a href="/solutions/bpo">BPO</a></li>
              <li><a href="/solutions/bpm">BPM</a></li>
              <li><a href="/solutions/bps">BPS</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/terms">Terms &amp; Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>

            <p className="mb-2">
              <FaPhoneAlt className="me-2 text-primary" /> +91 98765 43210
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-2 text-primary" /> support@zepfter.com
            </p>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-2 text-primary" /> Bangalore, India
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center py-3">
        <p className="mb-0">© {new Date().getFullYear()} ZEPFTER. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
