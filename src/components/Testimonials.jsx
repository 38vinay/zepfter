import React from "react";
import { FaStar } from "react-icons/fa";

// Add or replace with your own images inside /src/assets/testimonials/
import user1 from "../assets/testimonials/user1.jpg";
import user2 from "../assets/testimonials/user2.jpg";
import user3 from "../assets/testimonials/user3.jpg";

const Testimonials = () => {
  return (
    <section className="section testimonial-section">
      <div className="container" data-aos="fade-up">

        <h2 className="fw-bold text-center mb-5">What Our Students Say</h2>

        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-inner">

            {/* Testimonial 1 */}
            <div className="carousel-item active">
              <div className="testimonial-card mx-auto text-center">
                <img src={user1} alt="Student" className="testimonial-img" />
                <h5 className="fw-bold mt-3">Amit Sharma</h5>
                <p className="text-muted">Medical Coding Graduate</p>
                
                {/* Stars */}
                <div className="text-warning mb-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="testimonial-text">
                  “ZEPFTER has changed my career! The trainers are extremely skilled,
                  the course content is industry-focused, and the placement support is amazing.”
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="carousel-item">
              <div className="testimonial-card mx-auto text-center">
                <img src={user2} alt="Student" className="testimonial-img" />
                <h5 className="fw-bold mt-3">Priya Nair</h5>
                <p className="text-muted">Clinical Research Student</p>

                <div className="text-warning mb-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="testimonial-text">
                  “The Clinical Research program helped me understand real-world applications.
                  Amazing training and extremely helpful faculty!”
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="carousel-item">
              <div className="testimonial-card mx-auto text-center">
                <img src={user3} alt="Student" className="testimonial-img" />
                <h5 className="fw-bold mt-3">Rahul Verma</h5>
                <p className="text-muted">IT & Technology Student</p>

                <div className="text-warning mb-2">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <p className="testimonial-text">
                  “I joined the Data Science program and got placed quickly.
                  Highly practical training and hands-on experience!”
                </p>
              </div>
            </div>

          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
