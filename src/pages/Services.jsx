import React, { useState } from "react";
import { FaCapsules, FaFlask, FaLaptopCode, FaCheckCircle, FaBook } from "react-icons/fa";
import * as bootstrap from "bootstrap";

const Services = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (service) => {
    setModalData(service);
    const modalElement = document.getElementById("serviceModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  };

  const allServices = [
    // MEDICAL COURSES
    {
      category: "Medical",
      icon: <FaCapsules size={50} className="text-primary" />,
      title: "Medical Coding",
      shortDesc: "Learn industry-level medical coding systems including ICD-10, CPT, and HCPCS.",
      fullDesc: "Master comprehensive medical coding including ICD-10, CPT, and HCPCS. This course provides in-depth training on translating medical diagnoses, procedures, and services into universal code numbers used for billing and documentation. You'll learn medical terminology, anatomy, and the healthcare reimbursement system.",
      modules: [
        "ICD-10-CM/PCS Coding",
        "CPT Coding",
        "HCPCS Level II",
        "Medical Terminology",
        "Anatomy & Physiology",
        "Healthcare Reimbursement",
        "Compliance & Regulations",
        "Medical Documentation"
      ],
      outcomes: [
        "Certified Professional Coder (CPC) preparation",
        "Understanding of medical documentation",
        "Ability to assign accurate diagnostic and procedural codes",
        "Knowledge of compliance and regulatory requirements",
        "Proficiency in medical billing software"
      ]
    },
    {
      category: "Medical",
      icon: <FaCapsules size={50} className="text-primary" />,
      title: "Medical Billing",
      shortDesc: "Professional billing procedures and healthcare revenue cycle management.",
      fullDesc: "Learn complete healthcare billing processes, insurance claims management, revenue cycle operations, and medical billing software. This comprehensive program covers everything from patient registration to payment collection, including insurance verification, claims submission, denial management, and compliance with healthcare regulations.",
      modules: [
        "Insurance Verification",
        "Claims Processing & Submission",
        "Payment Posting",
        "Denial Management",
        "Medical Billing Software",
        "HIPAA Compliance",
        "Revenue Cycle Management",
        "Accounts Receivable"
      ],
      outcomes: [
        "Process insurance claims efficiently",
        "Handle medical billing software proficiently",
        "Manage accounts receivable effectively",
        "Ensure regulatory compliance",
        "Resolve claim denials"
      ]
    },
    {
      category: "Medical",
      icon: <FaCapsules size={50} className="text-primary" />,
      title: "Medical Writing",
      shortDesc: "Scientific & regulatory writing for healthcare and pharmaceutical industries.",
      fullDesc: "Develop expertise in medical and scientific writing for research papers, clinical documents, regulatory submissions, and medical publications. Learn to communicate complex medical information clearly and accurately while adhering to regulatory guidelines and scientific standards.",
      modules: [
        "Clinical Documentation",
        "Regulatory Writing",
        "Research Papers & Publications",
        "Medical Publications",
        "Protocol Writing",
        "Scientific Communication",
        "Grant Writing",
        "Medical Editing"
      ],
      outcomes: [
        "Write clinical study reports",
        "Create regulatory documents for submissions",
        "Publish medical literature",
        "Maintain scientific accuracy and clarity",
        "Edit and review medical content"
      ]
    },
    {
      category: "Medical",
      icon: <FaCapsules size={50} className="text-primary" />,
      title: "Medical Affairs",
      shortDesc: "Bridge between medical science and business in pharmaceutical companies.",
      fullDesc: "Comprehensive training in medical affairs covering scientific communication, medical information, publication planning, and healthcare professional engagement. Learn to support clinical development, post-marketing surveillance, and medical education initiatives.",
      modules: [
        "Medical Information Management",
        "Scientific Communication",
        "Publication Planning",
        "Medical Education",
        "KOL Engagement",
        "Clinical Development Support",
        "Post-Marketing Surveillance",
        "Medical Strategy"
      ],
      outcomes: [
        "Support clinical development programs",
        "Manage medical information requests",
        "Develop publication strategies",
        "Engage with healthcare professionals effectively"
      ]
    },

    // CLINICAL COURSES
    {
      category: "Clinical",
      icon: <FaFlask size={50} className="text-danger" />,
      title: "Clinical Research",
      shortDesc: "Drug discovery, clinical trials, and research fundamentals.",
      fullDesc: "Comprehensive training in clinical research covering all phases of clinical trials, GCP guidelines, ethics, and regulatory compliance. Learn about study design, protocol development, patient recruitment, monitoring, and safety reporting in the pharmaceutical and biotechnology industries.",
      modules: [
        "Clinical Trial Phases (I-IV)",
        "Good Clinical Practice (GCP)",
        "Ethics & Regulations",
        "Protocol Development",
        "Study Monitoring",
        "Safety Reporting",
        "Informed Consent",
        "Regulatory Submissions"
      ],
      outcomes: [
        "Understand clinical trial processes",
        "Implement GCP standards",
        "Monitor clinical studies",
        "Ensure patient safety",
        "Navigate regulatory requirements"
      ]
    },
    {
      category: "Clinical",
      icon: <FaFlask size={50} className="text-danger" />,
      title: "Clinical Data Management",
      shortDesc: "Manage and analyze clinical trial data effectively.",
      fullDesc: "Master clinical data management tools, database design, query management, data validation, and quality assurance. Learn to design case report forms, manage clinical databases, perform data cleaning, and ensure data integrity throughout the clinical trial lifecycle.",
      modules: [
        "CRF Design & Development",
        "Database Design & Build",
        "Query Management",
        "Data Validation & Cleaning",
        "CDM Tools (Oracle, Medidata)",
        "SAE Reconciliation",
        "Data Quality Assurance",
        "Database Lock Procedures"
      ],
      outcomes: [
        "Design clinical databases",
        "Manage data queries efficiently",
        "Ensure data quality and integrity",
        "Generate data reports and listings",
        "Use industry-standard CDM software"
      ]
    },
    {
      category: "Clinical",
      icon: <FaFlask size={50} className="text-danger" />,
      title: "Clinical Trials Management",
      shortDesc: "Comprehensive trial coordination and site management.",
      fullDesc: "Learn comprehensive clinical trial management, site coordination, patient recruitment strategies, monitoring visits, and trial documentation. Understand the roles and responsibilities of clinical trial teams and how to ensure protocol compliance throughout the study.",
      modules: [
        "Trial Design & Planning",
        "Site Selection & Management",
        "Patient Recruitment & Retention",
        "Monitoring Visits",
        "Source Data Verification",
        "Trial Master File Management",
        "Budget & Contract Management",
        "Closeout Procedures"
      ],
      outcomes: [
        "Coordinate clinical trials effectively",
        "Conduct monitoring visits",
        "Manage trial documentation",
        "Ensure protocol compliance",
        "Lead clinical trial teams"
      ]
    },
    {
      category: "Clinical",
      icon: <FaFlask size={50} className="text-danger" />,
      title: "Pharmacovigilance",
      shortDesc: "Drug safety monitoring and adverse event reporting.",
      fullDesc: "Comprehensive training in pharmacovigilance covering adverse event reporting, signal detection, risk management, and regulatory compliance. Learn to monitor drug safety throughout the product lifecycle and ensure patient safety.",
      modules: [
        "Adverse Event Reporting",
        "Signal Detection",
        "Risk Management Plans",
        "Regulatory Reporting",
        "Safety Database Management",
        "Medical Literature Review",
        "Benefit-Risk Assessment",
        "Pharmacoepidemiology"
      ],
      outcomes: [
        "Process adverse event reports",
        "Conduct signal detection",
        "Prepare regulatory submissions",
        "Assess benefit-risk profiles",
        "Ensure drug safety compliance"
      ]
    },

    // IT & TECHNOLOGY COURSES
    {
      category: "Technology",
      icon: <FaLaptopCode size={50} className="text-success" />,
      title: "Data Science",
      shortDesc: "Python, Machine Learning, Statistics & Analytics.",
      fullDesc: "Complete Data Science program covering Python programming, machine learning algorithms, statistics, data visualization, and real-world projects. Learn to extract insights from data, build predictive models, and communicate findings effectively using industry-standard tools and techniques.",
      modules: [
        "Python Programming",
        "Statistics & Probability",
        "Machine Learning Algorithms",
        "Data Visualization (Matplotlib, Seaborn)",
        "SQL & Database Management",
        "Deep Learning Basics",
        "Natural Language Processing",
        "Real-world Projects"
      ],
      outcomes: [
        "Build and deploy ML models",
        "Perform comprehensive data analysis",
        "Create compelling visualizations",
        "Deploy ML solutions in production",
        "Work with big data technologies"
      ]
    },
    {
      category: "Technology",
      icon: <FaLaptopCode size={50} className="text-success" />,
      title: "Web Development",
      shortDesc: "Full-stack web development with modern technologies.",
      fullDesc: "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and modern development practices. Learn to build responsive, scalable web applications from front-end to back-end with hands-on projects.",
      modules: [
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "React.js & Redux",
        "Node.js & Express",
        "MongoDB & Mongoose",
        "RESTful APIs",
        "Git & Version Control",
        "Deployment & DevOps"
      ],
      outcomes: [
        "Build responsive websites",
        "Develop full-stack applications",
        "Create RESTful APIs",
        "Deploy web applications",
        "Work in agile development teams"
      ]
    },
    {
      category: "Technology",
      icon: <FaLaptopCode size={50} className="text-success" />,
      title: "AI & Machine Learning",
      shortDesc: "Advanced neural networks, deep learning & AI applications.",
      fullDesc: "Advanced AI and Machine Learning course covering neural networks, deep learning frameworks, NLP, computer vision, and practical AI applications. Learn to build sophisticated AI systems using TensorFlow, PyTorch, and cutting-edge techniques.",
      modules: [
        "Neural Networks & Deep Learning",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Generative AI",
        "AI Ethics & Responsible AI"
      ],
      outcomes: [
        "Build advanced AI models",
        "Implement deep learning architectures",
        "Develop NLP applications",
        "Create computer vision systems",
        "Deploy AI solutions at scale"
      ]
    },
    {
      category: "Technology",
      icon: <FaLaptopCode size={50} className="text-success" />,
      title: "Python Programming",
      shortDesc: "Comprehensive Python for beginners to advanced developers.",
      fullDesc: "Complete Python programming course from basics to advanced topics. Learn Python syntax, data structures, OOP, file handling, libraries, and frameworks. Perfect for beginners starting their programming journey or professionals transitioning to Python.",
      modules: [
        "Python Basics & Syntax",
        "Data Structures",
        "Object-Oriented Programming",
        "File Handling & Exceptions",
        "Libraries (NumPy, Pandas)",
        "Web Scraping",
        "APIs & Web Services",
        "Testing & Debugging"
      ],
      outcomes: [
        "Write clean Python code",
        "Build Python applications",
        "Work with Python libraries",
        "Automate tasks with Python",
        "Prepare for advanced topics"
      ]
    }
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
            Explore our comprehensive range of professional training programs designed to accelerate your career
          </p>
        </div>

        {/* Medical Courses Section */}
        <div className="mb-5">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            <FaCapsules className="text-primary me-2" />
            Medical Courses
          </h2>
          <div className="row g-4">
            {allServices.filter(s => s.category === "Medical").map((service, idx) => (
              <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="glass-card p-4 h-100 d-flex flex-column">
                  {/* Icon */}
                  <div className="text-center mb-3">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h5 className="fw-bold text-center mb-3">{service.title}</h5>

                  {/* Short Description */}
                  <p className="text-muted small text-center mb-4 flex-grow-1">
                    {service.shortDesc}
                  </p>

                  {/* Button */}
                  <button 
                    className="btn btn-outline-primary w-100 fw-semibold"
                    onClick={() => openModal(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Courses Section */}
        <div className="mb-5">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            <FaFlask className="text-danger me-2" />
            Clinical Courses
          </h2>
          <div className="row g-4">
            {allServices.filter(s => s.category === "Clinical").map((service, idx) => (
              <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="glass-card p-4 h-100 d-flex flex-column">
                  {/* Icon */}
                  <div className="text-center mb-3">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h5 className="fw-bold text-center mb-3">{service.title}</h5>

                  {/* Short Description */}
                  <p className="text-muted small text-center mb-4 flex-grow-1">
                    {service.shortDesc}
                  </p>

                  {/* Button */}
                  <button 
                    className="btn btn-outline-primary w-100 fw-semibold"
                    onClick={() => openModal(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Courses Section */}
        <div className="mb-5">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            <FaLaptopCode className="text-success me-2" />
            IT & Technology Courses
          </h2>
          <div className="row g-4">
            {allServices.filter(s => s.category === "Technology").map((service, idx) => (
              <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="glass-card p-4 h-100 d-flex flex-column">
                  {/* Icon */}
                  <div className="text-center mb-3">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h5 className="fw-bold text-center mb-3">{service.title}</h5>

                  {/* Short Description */}
                  <p className="text-muted small text-center mb-4 flex-grow-1">
                    {service.shortDesc}
                  </p>

                  {/* Button */}
                  <button 
                    className="btn btn-outline-primary w-100 fw-semibold"
                    onClick={() => openModal(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modal */}
      <div className="modal fade" id="serviceModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '25px' }}>
            
            {modalData && (
              <>
                {/* Modal Header */}
                <div className="modal-header border-0 p-4" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}>
                  <div className="text-white">
                    <h3 className="modal-title fw-bold">{modalData.title}</h3>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                  ></button>
                </div>

                {/* Modal Body */}
                <div className="modal-body p-4">
                  <div className="row g-4">
                    {/* Main Content */}
                    <div className="col-12">
                      {/* Course Overview */}
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3 d-flex align-items-center">
                          <FaBook className="text-primary me-2" />
                          Course Overview
                        </h5>
                        <p className="text-muted lh-lg">{modalData.fullDesc}</p>
                      </div>

                      {/* What You'll Learn */}
                      <div className="mb-4">
                        <h5 className="fw-bold mb-3">What You'll Learn</h5>
                        <div className="row g-3">
                          {modalData.modules.map((module, idx) => (
                            <div className="col-md-6" key={idx}>
                              <div className="d-flex align-items-start gap-2">
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
                        {modalData.outcomes.map((outcome, idx) => (
                          <div key={idx} className="d-flex align-items-start gap-2 mb-2 p-2 rounded" style={{background: '#f8f9fa'}}>
                            <span className="badge bg-primary">✓</span>
                            <span className="text-muted">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;