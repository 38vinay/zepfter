import React from "react";
import { FaBullseye, FaHandshake, FaUsers, FaLightbulb, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <>

      {/* ABOUT HERO */}
      <section className="section text-center bg-light" data-aos="fade-up">
        <div className="container">
          <h1 className="fw-bold">About ZEPFTER</h1>
          <p className="mt-3 text-muted fs-5">
            Empowering individuals with industry-ready Medical, Clinical, and IT training programs.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section container" data-aos="fade-up">
        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              ZEPFTER is a leading professional training institution offering a wide range 
              of Medical, Clinical, and IT courses designed for real-world success.  
              We collaborate with industry experts, healthcare professionals, and 
              technology specialists to ensure that every learner receives the best 
              training possible.
            </p>
            <p className="text-muted">
              Our mission is not just to educate — but to transform careers through 
              practical, hands-on learning and globally relevant curriculum.
            </p>
          </div>

          <div className="col-md-6">
            <img 
              src="https://img.freepik.com/premium-vector/business-team-having-meeting-office-flat-vector-illustration_180601-2065.jpg"
              alt="Who We Are"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section bg-light">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center mb-5">What We Do</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="glass-card text-center p-4 h-100">
                <FaGraduationCap size={40} className="text-primary" />
                <h4 className="fw-bold mt-3">Professional Training</h4>
                <p className="text-muted">
                  We offer career-oriented training programs in Medical, Clinical, and IT fields.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card text-center p-4 h-100">
                <FaLightbulb size={40} className="text-primary" />
                <h4 className="fw-bold mt-3">Skill Development</h4>
                <p className="text-muted">
                  Our courses focus on building real-world skills through hands-on experience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="glass-card text-center p-4 h-100">
                <FaUsers size={40} className="text-primary" />
                <h4 className="fw-bold mt-3">Career Guidance</h4>
                <p className="text-muted">
                  We provide placement assistance, interview training, and long-term mentoring.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY WE EXIST / OUR PURPOSE */}
      <section className="section container" data-aos="fade-up">

        <div className="row align-items-center g-4">
          
          <div className="col-md-6">
            <img 
              src="https://img.freepik.com/free-vector/workflow-organization-isometric-concept_1284-59271.jpg"
              alt="Why We Exist"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Why We Exist</h2>
            <p className="text-muted">
              The industries we serve — healthcare, clinical research, and information 
              technology — are evolving rapidly. There is a strong demand for skilled 
              professionals who can adapt and excel.
            </p>
            <p className="text-muted">
              ZEPFTER was created to bridge the gap between education and industry 
              expectations, helping thousands of individuals build successful careers.
            </p>

            <ul className="list-unstyled fs-5 mt-3">
              <li className="mb-2"><FaBullseye className="text-primary me-2" /> Industry-relevant training</li>
              <li className="mb-2"><FaHandshake className="text-primary me-2" /> Commitment to quality education</li>
              <li className="mb-2"><FaUsers className="text-primary me-2" /> Strong focus on student success</li>
            </ul>
          </div>

        </div>

      </section>

      {/* OUR VALUES */}
      <section className="section bg-primary text-light" data-aos="fade-up">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">Our Values</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <h4 className="fw-bold">Integrity</h4>
              <p className="mt-2">We believe in honest, transparent, and ethical training practices.</p>
            </div>

            <div className="col-md-4">
              <h4 className="fw-bold">Innovation</h4>
              <p className="mt-2">We constantly upgrade our content to match industry standards.</p>
            </div>

            <div className="col-md-4">
              <h4 className="fw-bold">Excellence</h4>
              <p className="mt-2">We aim for quality and results in every learner's progress.</p>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default About;
