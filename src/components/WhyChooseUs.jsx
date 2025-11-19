import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="section bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="fw-bold text-center mb-4">Why Choose ZEPFTER?</h2>

        <ul className="list-unstyled fs-5 mx-auto" style={{maxWidth:"700px"}}>
          <li className="mb-3"><FaCheckCircle className="text-primary me-2" /> Industry Expert Trainers</li>
          <li className="mb-3"><FaCheckCircle className="text-primary me-2" /> Globally Recognized Curriculum</li>
          <li className="mb-3"><FaCheckCircle className="text-primary me-2" /> 100% Placement Assistance</li>
          <li className="mb-3"><FaCheckCircle className="text-primary me-2" /> Practical, Hands-on Training</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
