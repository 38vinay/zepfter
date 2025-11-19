import React, { useState } from "react";
import { FaCapsules, FaFlask, FaLaptopCode, FaClock, FaUsers, FaCheckCircle, FaStar, FaDownload } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import * as bootstrap from "bootstrap";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalData, setModalData] = useState({
    title: "",
    desc: "",
    duration: "",
    level: "",
    modules: [],
    outcomes: [],
    price: ""
  });

  const openModal = (serviceData) => {
    setModalData(serviceData);
    const modalElement = document.getElementById("serviceModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  };

  const services = {
    medical: [
      {
        icon: <FaCapsules size={40} />,
        title: "Medical Coding",
        shortDesc: "Learn industry-level medical coding systems.",
        fullDesc: "Master comprehensive medical coding including ICD-10, CPT, and HCPCS. Learn to translate medical diagnoses and procedures into universal code numbers.",
        duration: "6 months",
        level: "Beginner to Advanced",
        students: "1200+",
        rating: 4.8,
        modules: ["ICD-10-CM/PCS", "CPT Coding", "HCPCS Level II", "Medical Terminology", "Anatomy & Physiology", "Healthcare Reimbursement"],
        outcomes: ["Certified Professional Coder (CPC) preparation", "Understanding of medical documentation", "Ability to assign accurate codes", "Knowledge of compliance and regulations"],
        price: "$899"
      },
      {
        icon: <FaCapsules size={40} />,
        title: "Medical Billing",
        shortDesc: "Professional billing procedures.",
        fullDesc: "Learn complete healthcare billing processes, insurance claims management, revenue cycle, and medical billing software operations.",
        duration: "4 months",
        level: "Intermediate",
        students: "850+",
        rating: 4.7,
        modules: ["Insurance Verification", "Claims Processing", "Payment Posting", "Denial Management", "Medical Billing Software", "HIPAA Compliance"],
        outcomes: ["Process insurance claims efficiently", "Handle billing software", "Manage accounts receivable", "Ensure regulatory compliance"],
        price: "$749"
      },
      {
        icon: <FaCapsules size={40} />,
        title: "Medical Writing",
        shortDesc: "Scientific & regulatory writing.",
        fullDesc: "Develop expertise in medical and scientific writing for research papers, clinical documents, regulatory submissions, and medical publications.",
        duration: "5 months",
        level: "Advanced",
        students: "650+",
        rating: 4.9,
        modules: ["Clinical Documentation", "Regulatory Writing", "Research Papers", "Medical Publications", "Protocol Writing", "Scientific Communication"],
        outcomes: ["Write clinical study reports", "Create regulatory documents", "Publish medical literature", "Maintain scientific accuracy"],
        price: "$999"
      }
    ],
    clinical: [
      {
        icon: <FaFlask size={40} />,
        title: "Clinical Research",
        shortDesc: "Learn drug discovery & trial fundamentals.",
        fullDesc: "Comprehensive training in clinical research covering all phases of clinical trials, GCP guidelines, ethics, and regulatory compliance.",
        duration: "6 months",
        level: "Intermediate",
        students: "900+",
        rating: 4.8,
        modules: ["Clinical Trial Phases", "GCP Guidelines", "Ethics & Regulations", "Protocol Development", "Study Monitoring", "Safety Reporting"],
        outcomes: ["Understand clinical trial process", "Implement GCP standards", "Monitor clinical studies", "Ensure patient safety"],
        price: "$899"
      },
      {
        icon: <FaFlask size={40} />,
        title: "Clinical Data Management",
        shortDesc: "Manage and analyze clinical data.",
        fullDesc: "Master clinical data management tools, database design, query management, data validation, and ensure data quality in clinical trials.",
        duration: "5 months",
        level: "Advanced",
        students: "680+",
        rating: 4.7,
        modules: ["CRF Design", "Database Design", "Query Management", "Data Validation", "CDM Tools (Oracle, Medidata)", "SAE Reconciliation"],
        outcomes: ["Design clinical databases", "Manage data queries", "Ensure data quality", "Generate data reports"],
        price: "$949"
      },
      {
        icon: <FaFlask size={40} />,
        title: "Clinical Trials",
        shortDesc: "Understand trial phases & monitoring.",
        fullDesc: "Learn comprehensive clinical trial management, site coordination, patient recruitment, monitoring visits, and trial documentation.",
        duration: "7 months",
        level: "Advanced",
        students: "750+",
        rating: 4.8,
        modules: ["Trial Design", "Site Management", "Patient Recruitment", "Monitoring Visits", "Source Data Verification", "Trial Master File"],
        outcomes: ["Coordinate clinical trials", "Conduct monitoring visits", "Manage trial documentation", "Ensure protocol compliance"],
        price: "$999"
      }
    ],
    technology: [
      {
        icon: <FaLaptopCode size={40} />,
        title: "Data Science",
        shortDesc: "Python, ML, Stats & Analytics.",
        fullDesc: "Complete Data Science program covering Python programming, machine learning algorithms, statistics, data visualization, and real-world projects.",
        duration: "8 months",
        level: "Intermediate",
        students: "1500+",
        rating: 4.9,
        modules: ["Python Programming", "Statistics & Probability", "Machine Learning", "Data Visualization", "SQL & Databases", "Deep Learning Basics"],
        outcomes: ["Build ML models", "Perform data analysis", "Create visualizations", "Deploy ML solutions"],
        price: "$1199"
      },
      {
        icon: <FaLaptopCode size={40} />,
        title: "Web Development",
        shortDesc: "Full-stack web development.",
        fullDesc: "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and modern development practices.",
        duration: "6 months",
        level: "Beginner to Advanced",
        students: "1800+",
        rating: 4.8,
        modules: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js & Express", "MongoDB", "RESTful APIs", "Git & Deployment"],
        outcomes: ["Build responsive websites", "Develop full-stack applications", "Create REST APIs", "Deploy web applications"],
        price: "$999"
      },
      {
        icon: <FaLaptopCode size={40} />,
        title: "AI & Machine Learning",
        shortDesc: "Neural networks & algorithms.",
        fullDesc: "Advanced AI and Machine Learning course covering neural networks, deep learning, NLP, computer vision, and practical AI applications.",
        duration: "10 months",
        level: "Advanced",
        students: "1100+",
        rating: 4.9,
        modules: ["Neural Networks", "Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "AI Ethics"],
        outcomes: ["Build AI models", "Implement deep learning", "Develop NLP applications", "Create computer vision systems"],
        price: "$1499"
      }
    ]
  };

  const getAllServices = () => {
    if (activeCategory === 'all') {
      return [...services.medical, ...services.clinical, ...services.technology];
    }
    return services[activeCategory] || [];
  };

  const categories = [
    { id: 'all', label: 'All Courses', icon: '🎓' },
    { id: 'medical', label: 'Medical', icon: '💊' },
    { id: 'clinical', label: 'Clinical', icon: '🔬' },
    { id: 'technology', label: 'Technology', icon: '💻' }
  ];

  return (
    <>
      <section className="section container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="fw-bold display-3 mb-3">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted fs-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Industry-focused training programs designed to accelerate your career growth
          </p>
        </div>

        {/* Category Filter */}
        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn px-4 py-2 fw-semibold d-flex align-items-center gap-2 ${
                activeCategory === cat.id
                  ? 'btn-gradient'
                  : 'btn-outline-primary'
              }`}
              style={{
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                transform: activeCategory === cat.id ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {getAllServices().map((service, idx) => (
            <div className="col-lg-4 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
              <div
                className="glass-card p-4 h-100 service-card position-relative"
                onClick={() => openModal(service)}
              >
                {/* Rating Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-warning text-dark d-flex align-items-center gap-1">
                    <FaStar size={12} />
                    {service.rating}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="fw-bold mb-3">{service.title}</h4>

                {/* Short Description */}
                <p className="text-muted mb-4">{service.shortDesc}</p>

                {/* Info Grid */}
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <div className="d-flex align-items-center gap-2 text-muted small">
                      <FaClock />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center gap-2 text-muted small">
                      <FaUsers />
                      <span>{service.students}</span>
                    </div>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="mb-3">
                  <span className="badge bg-primary-subtle text-primary px-3 py-2">
                    {service.level}
                  </span>
                </div>

                {/* CTA */}
                <button className="btn btn-outline-primary w-100 fw-semibold">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="row mt-5 pt-5" data-aos="fade-up">
          <div className="col-12">
            <div className="glass-card text-center p-5 bg-primary bg-opacity-10">
              <h3 className="fw-bold mb-3">Ready to Transform Your Career?</h3>
              <p className="text-muted mb-4 fs-5">
                Join thousands of successful professionals who started their journey with ZEPFTER
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn-gradient btn-lg">
                  Enroll Now
                </button>
                <button className="btn btn-outline-primary btn-lg d-flex align-items-center gap-2">
                  <FaDownload />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <div className="modal fade" id="serviceModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '25px' }}>
            
            {/* Modal Header */}
            <div className="modal-header border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4">
              <div>
                <h3 className="modal-title fw-bold mb-2">{modalData.title}</h3>
                <div className="d-flex gap-3 align-items-center">
                  <span className="badge bg-white text-primary px-3 py-2">
                    <FaClock className="me-1" />
                    {modalData.duration}
                  </span>
                  <span className="badge bg-white text-primary px-3 py-2">
                    {modalData.level}
                  </span>
                  <span className="badge bg-warning text-dark px-3 py-2">
                    <FaStar className="me-1" />
                    {modalData.rating}
                  </span>
                </div>
              </div>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-lg-8">
                  {/* Description */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Course Overview</h5>
                    <p className="text-muted fs-6 lh-lg">{modalData.fullDesc}</p>
                  </div>

                  {/* Modules */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">What You'll Learn</h5>
                    <div className="row g-2">
                      {modalData.modules?.map((module, idx) => (
                        <div className="col-md-6" key={idx}>
                          <div className="d-flex align-items-start gap-2 p-2">
                            <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                            <span className="text-muted">{module}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-3">Learning Outcomes</h5>
                    {modalData.outcomes?.map((outcome, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-2 mb-2">
                        <span className="badge bg-primary-subtle text-primary">✓</span>
                        <span className="text-muted">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                  <div className="glass-card p-4 sticky-top" style={{ top: '20px' }}>
                    <div className="text-center mb-4">
                      <div className="display-4 fw-bold text-primary mb-2">{modalData.price}</div>
                      <p className="text-muted small">One-time payment</p>
                    </div>

                    <div className="d-grid gap-2">
                      <button className="btn-gradient btn-lg">
                        Enroll Now
                      </button>
                      <button className="btn btn-outline-primary">
                        Request Callback
                      </button>
                    </div>

                    <hr className="my-4" />

                    <div className="small">
                      <div className="d-flex justify-content-between mb-3">
                        <span className="text-muted">Duration:</span>
                        <span className="fw-semibold">{modalData.duration}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span className="text-muted">Level:</span>
                        <span className="fw-semibold">{modalData.level}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span className="text-muted">Students:</span>
                        <span className="fw-semibold">{modalData.students}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Rating:</span>
                        <span className="fw-semibold text-warning">
                          <FaStar /> {modalData.rating}/5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;