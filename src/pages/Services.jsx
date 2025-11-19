import React, { useState } from "react";
import { FaCapsules, FaFlask, FaLaptopCode } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";

// Import Bootstrap Modal properly
import * as bootstrap from "bootstrap";

const Services = () => {

  const [modalData, setModalData] = useState({
    title: "",
    desc: ""
  });

  const openModal = (title, desc) => {
    setModalData({ title, desc });

    const modalElement = document.getElementById("serviceModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  };

  return (
    <>
      <section className="section container">
        <h2 className="fw-bold text-center mb-5">Our Services</h2>

        {/* MEDICAL COURSES */}
        <h3 className="fw-bold mb-3">Medical Courses</h3>
        <div className="row g-4 mb-5">

          <ServiceCard
            icon={<FaCapsules size={35} />}
            title="Medical Coding"
            desc="Learn industry-level medical coding systems."
            onClick={() =>
              openModal(
                "Medical Coding",
                "Covers ICD, CPT, HCPCS coding systems with real-world case studies and hands-on training."
              )
            }
          />

          <ServiceCard
            icon={<FaCapsules size={35} />}
            title="Medical Billing"
            desc="Professional billing procedures."
            onClick={() =>
              openModal(
                "Medical Billing",
                "Teaches healthcare billing, insurance claims, revenue cycle management, and compliance."
              )
            }
          />

          <ServiceCard
            icon={<FaCapsules size={35} />}
            title="Medical Writing"
            desc="Scientific & regulatory writing."
            onClick={() =>
              openModal(
                "Medical Writing",
                "Learn clinical documentation, regulatory writing, research papers, and medical publications."
              )
            }
          />

        </div>

        {/* CLINICAL COURSES */}
        <h3 className="fw-bold mb-3">Clinical Courses</h3>
        <div className="row g-4 mb-5">

          <ServiceCard
            icon={<FaFlask size={35} />}
            title="Clinical Research"
            desc="Learn drug discovery & trial fundamentals."
            onClick={() =>
              openModal(
                "Clinical Research",
                "Covers clinical trial phases, ethics, regulatory guidelines, and GCP compliance."
              )
            }
          />

          <ServiceCard
            icon={<FaFlask size={35} />}
            title="Clinical Data Management"
            desc="Manage and analyze clinical data."
            onClick={() =>
              openModal(
                "Clinical Data Management",
                "Learn CDM tools, CRF design, query management, and data validation."
              )
            }
          />

          <ServiceCard
            icon={<FaFlask size={35} />}
            title="Clinical Trials"
            desc="Understand trial phases & monitoring."
            onClick={() =>
              openModal(
                "Clinical Trials",
                "Study clinical trial protocols, monitoring, safety reporting, and trial management."
              )
            }
          />

        </div>

        {/* IT COURSES */}
        <h3 className="fw-bold mb-3">IT & Technology Courses</h3>
        <div className="row g-4">

          <ServiceCard
            icon={<FaLaptopCode size={35} />}
            title="Data Science"
            desc="Python, ML, Stats & Analytics."
            onClick={() =>
              openModal(
                "Data Science",
                "Deep dive into machine learning, statistics, Python, visualization, and hands-on projects."
              )
            }
          />

          <ServiceCard
            icon={<FaLaptopCode size={35} />}
            title="Web Development"
            desc="Full-stack web development."
            onClick={() =>
              openModal(
                "Web Development",
                "Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and full project development."
              )
            }
          />

          <ServiceCard
            icon={<FaLaptopCode size={35} />}
            title="AI & Machine Learning"
            desc="Neural networks & algorithms."
            onClick={() =>
              openModal(
                "AI & Machine Learning",
                "Study AI concepts, ML algorithms, neural networks, deep learning, and real-world model building."
              )
            }
          />

        </div>

      </section>

      {/* MODAL */}
      <div className="modal fade" id="serviceModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-4">

            <div className="modal-header">
              <h4 className="modal-title fw-bold">{modalData.title}</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <p className="text-muted fs-5">{modalData.desc}</p>
            </div>

            <div className="modal-footer">
              <button className="btn btn-gradient" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
