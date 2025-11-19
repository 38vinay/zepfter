import React from "react";
import { Link } from "react-router-dom";

// Import your hero images
import hero1 from "../assets/hero-medical.jpg";
import hero2 from "../assets/hero-clinical.jpg";
import hero3 from "../assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="hero-wrapper">

      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

        {/* Indicators */}
        <div className="carousel-indicators">
          <button data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div
            className="carousel-item active hero-slide"
            style={{ backgroundImage: `url(${hero1})` }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-center-box">
              <h1>Medical Courses</h1>
              <p>Medical Coding • Billing • Writing • Medical Affairs</p>
              <Link to="/services" className="btn-gradient">Explore Services</Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="carousel-item hero-slide"
            style={{ backgroundImage: `url(${hero2})` }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-center-box">
              <h1>Clinical Courses</h1>
              <p>Clinical Research • Data Management • Clinical Trials</p>
              <Link to="/services" className="btn-gradient">Explore Services</Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="carousel-item hero-slide"
            style={{ backgroundImage: `url(${hero3})` }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-center-box">
              <h1>IT & Technology Courses</h1>
              <p>Data Science • Programming • Web Dev • AI/ML</p>
              <Link to="/services" className="btn-gradient">Explore Services</Link>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-arrow">&#10094;</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-arrow">&#10095;</span>
        </button>

      </div>

    </section>
  );
};

export default Hero;
