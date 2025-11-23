import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaBriefcase, 
  FaCapsules, 
  FaFlask, 
  FaLaptopCode,
  FaPills,
  FaCheckCircle,
  FaAward,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaMoneyBillWave,
  FaCertificate,
  FaHandshake
} from "react-icons/fa";

const InternshipProgramsPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   INTERNSHIP PROGRAMS CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'medical-coding-internship',
      title: 'Medical Coding Internship',
      icon: <FaCapsules size={30} />,
      duration: '3-6 months',
      level: 'Post-Training',
      salary: '₹8k - ₹15k/month (Stipend)',
      description:
        'Gain hands-on experience in medical coding with real patient records, working alongside experienced coders in actual healthcare settings. This internship provides practical exposure to ICD-10, CPT, and HCPCS coding with live projects from hospitals and healthcare BPOs.',
      image1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
      details: [
        'Live Coding Projects with Real Patient Records',
        'Real-time Medical Record Analysis',
        'Medical Billing Integration & Revenue Cycle',
        'EHR Systems Training (Epic, Cerner)',
        'Quality Audits & Accuracy Checks',
        'Coding Compliance & HIPAA Training',
        'Productivity Targets & Benchmarking',
        'Team Collaboration with Senior Coders',
        'CPT & ICD-10 Advanced Applications',
        'Specialty-Specific Coding Practice',
        'Denials Management Experience',
        'Case Study Analysis & Problem Solving'
      ],
      benefits: [
        'Monthly Stipend: ₹8,000 - ₹15,000',
        'Industry-recognized Certificate of Completion',
        'Letter of Recommendation from Healthcare Provider',
        'Job Assistance & Interview Preparation Post-Internship',
        'Real-world Hospital/BPO Environment Exposure',
        'Mentorship from Certified Medical Coders',
        'Resume Building & Portfolio Development',
        'Networking with Healthcare Professionals'
      ],
      outcomes: [
        'Work on 200+ real medical records',
        'Build a professional coding portfolio',
        'Get industry recommendation letters',
        'Network with healthcare professionals',
        'Increase job readiness by 80%',
        'Learn advanced specialty coding',
        'Master EHR navigation and workflows'
      ],
      partners: ['Max Healthcare', 'Apollo Hospitals', 'Fortis Healthcare', 'Omega Healthcare', 'Access Healthcare'],
      careerPaths: ['Medical Coder', 'Coding Specialist', 'Quality Auditor', 'Billing Specialist', 'Revenue Cycle Analyst']
    },

    {
      id: 'clinical-research-internship',
      title: 'Clinical Research Internship',
      icon: <FaFlask size={30} />,
      duration: '3-6 months',
      level: 'Post-Training',
      salary: '₹10k - ₹18k/month (Stipend)',
      description:
        'Work with leading CROs and pharmaceutical companies on ongoing clinical trials. Get exposure to protocol development, patient recruitment, data collection, regulatory compliance, and clinical trial management from site initiation to closeout.',
      image1: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      details: [
        'Clinical Trial Operations & Management',
        'Protocol Implementation & Study Design',
        'Patient Recruitment & Screening',
        'Data Collection & CRF Completion',
        'Adverse Event Reporting & Documentation',
        'Regulatory Documentation & Submissions',
        'Site Monitoring & Source Data Verification',
        'Study Close-out Procedures',
        'Good Clinical Practice (GCP) Application',
        'Electronic Data Capture (EDC) Systems',
        'Clinical Trial Management Systems (CTMS)',
        'Ethics Committee & IRB Interactions'
      ],
      benefits: [
        'Monthly Stipend: ₹10,000 - ₹18,000',
        'Work with Leading CROs (Quintiles, Covance, ICON)',
        'GCP Certification Support',
        'Industry Exposure in Pharmaceutical Research',
        'Mentorship from Senior CRAs & Project Managers',
        'Letter of Recommendation',
        'Job Placement Assistance',
        'Real Clinical Trial Experience'
      ],
      outcomes: [
        'Real clinical trial experience',
        'GCP compliance knowledge',
        'Regulatory documentation skills',
        'Professional network in CRO industry',
        'Hands-on EDC system training',
        'Patient interaction experience',
        'Site management exposure'
      ],
      partners: ['Quintiles IMS', 'Covance', 'Parexel', 'ICON', 'PPD', 'Syngene', 'Lambda Therapeutic Research'],
      careerPaths: ['Clinical Research Coordinator', 'Clinical Research Associate', 'Study Coordinator', 'Site Manager', 'Clinical Data Manager']
    },

    {
      id: 'it-software-internship',
      title: 'IT & Software Development Internship',
      icon: <FaLaptopCode size={30} />,
      duration: '2-6 months',
      level: 'Post-Training',
      salary: '₹5k - ₹20k/month (Stipend)',
      description:
        'Work on cutting-edge technology projects with leading IT companies. Build full-stack applications, contribute to open-source projects, and gain experience in agile development environments. Learn modern frameworks, cloud technologies, and industry best practices.',
      image1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
      details: [
        'Real Project Development & Deployment',
        'Version Control (Git, GitHub, Bitbucket)',
        'Agile/Scrum Methodology & Daily Standups',
        'Code Reviews & Pair Programming',
        'Testing & Debugging (Unit, Integration)',
        'Deployment & DevOps (CI/CD Pipelines)',
        'Team Collaboration Tools (Jira, Slack)',
        'Client Interactions & Requirements Gathering',
        'API Development & Integration',
        'Database Design & Management',
        'Cloud Deployment (AWS, Azure, GCP)',
        'Performance Optimization & Scalability'
      ],
      benefits: [
        'Performance-based Stipend: ₹5,000 - ₹20,000',
        'Work from Home/Hybrid Options Available',
        'Project Completion Certificate',
        'LinkedIn Recommendations from Tech Leads',
        'Pre-placement Offers (PPOs) for High Performers',
        'GitHub Portfolio Development',
        'Mentorship from Senior Developers',
        'Tech Stack Training (React, Node, Python, etc.)'
      ],
      outcomes: [
        'Build 2-3 production-ready projects',
        'Learn industry best practices',
        'Work in team environments',
        'Get job-ready skills',
        'Professional GitHub portfolio',
        'Experience with modern tech stacks',
        'Client interaction exposure'
      ],
      partners: ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'Cognizant', 'Startups', 'Product Companies'],
      careerPaths: ['Software Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Quality Analyst']
    },

    {
      id: 'pharmaceutical-qa-internship',
      title: 'Pharmaceutical QA/QC Internship',
      icon: <FaPills size={30} />,
      duration: '3-4 months',
      level: 'Post-Training',
      salary: '₹8k - ₹12k/month (Stipend)',
      description:
        'Get hands-on experience in pharmaceutical manufacturing facilities, quality control laboratories, and regulatory affairs departments. Learn GMP practices, quality systems, analytical testing, and documentation in real-world pharmaceutical settings.',
      image1: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
      details: [
        'GMP Operations & Standard Operating Procedures',
        'Quality Control Testing & Analysis',
        'Documentation Practices & Record Keeping',
        'Stability Studies & Sample Management',
        'Method Validation & Verification',
        'Quality Audits & Inspection Preparation',
        'Deviation Management & CAPA',
        'CAPA Implementation & Effectiveness Checks',
        'Raw Material & Finished Product Testing',
        'Laboratory Equipment Operation',
        'Batch Record Review & Release',
        'Pharmaceutical Regulatory Compliance'
      ],
      benefits: [
        'Monthly Stipend: ₹8,000 - ₹12,000',
        'Pharma Manufacturing Facility Access',
        'GMP/GLP Certification Support',
        'Industry Mentorship from QA Professionals',
        'Regulatory Exposure (FDA, WHO, DCGI)',
        'Analytical Lab Training',
        'Job Placement Support Post-Internship',
        'Hands-on Pharmaceutical Operations'
      ],
      outcomes: [
        'Pharma industry exposure',
        'GMP/GLP practical knowledge',
        'Quality systems understanding',
        'Manufacturing operations experience',
        'Laboratory analytical skills',
        'Documentation expertise',
        'Audit readiness training'
      ],
      partners: ['Dr. Reddy\'s Labs', 'Sun Pharma', 'Cipla', 'Lupin', 'Aurobindo Pharma', 'Biocon', 'Cadila Healthcare'],
      careerPaths: ['QA Executive', 'QC Analyst', 'Production Officer', 'Quality Auditor', 'Documentation Specialist', 'Regulatory Affairs Associate']
    },

    {
      id: 'data-science-internship',
      title: 'Data Science & Analytics Internship',
      icon: <FaChartLine size={30} />,
      duration: '3-6 months',
      level: 'Post-Training',
      salary: '₹10k - ₹25k/month (Stipend)',
      description:
        'Work on real-world data science projects involving machine learning, data analysis, visualization, and predictive modeling. Gain hands-on experience with Python, R, SQL, and modern data science tools while solving business problems.',
      image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      details: [
        'Real-world Data Analysis Projects',
        'Machine Learning Model Development',
        'Data Cleaning & Preprocessing',
        'Exploratory Data Analysis (EDA)',
        'Statistical Analysis & Hypothesis Testing',
        'Data Visualization (Tableau, Power BI)',
        'Python Libraries (Pandas, NumPy, Scikit-learn)',
        'SQL Database Querying & Management',
        'Big Data Technologies (Spark, Hadoop)',
        'Model Deployment & MLOps',
        'A/B Testing & Experimentation',
        'Business Intelligence Dashboards'
      ],
      benefits: [
        'Performance-based Stipend: ₹10,000 - ₹25,000',
        'Remote Work Options Available',
        'Portfolio Projects for Resume',
        'Kaggle Competition Participation',
        'Industry Mentorship from Data Scientists',
        'Certificate of Completion',
        'Letter of Recommendation',
        'Job Referrals & Placement Support'
      ],
      outcomes: [
        'Build 3-4 data science projects',
        'Master data analysis tools',
        'Develop ML models',
        'Create compelling visualizations',
        'Solve real business problems',
        'Professional portfolio development',
        'Industry-ready skills'
      ],
      partners: ['Analytics Companies', 'FinTech Startups', 'E-commerce Giants', 'Consulting Firms', 'Healthcare Analytics'],
      careerPaths: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Business Analyst', 'BI Developer', 'Analytics Consultant']
    },

    {
      id: 'medical-writing-internship',
      title: 'Medical Writing Internship',
      icon: <FaCertificate size={30} />,
      duration: '3-5 months',
      level: 'Post-Training',
      salary: '₹8k - ₹15k/month (Stipend)',
      description:
        'Gain practical experience in medical and scientific writing for pharmaceutical companies and CROs. Write clinical study reports, regulatory documents, research manuscripts, and medical publications under expert guidance.',
      image1: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
      details: [
        'Clinical Study Report (CSR) Writing',
        'Protocol Development & Review',
        'Informed Consent Form Preparation',
        'Investigator Brochure Writing',
        'Scientific Manuscript Preparation',
        'Regulatory Document Writing',
        'Medical Publication Support',
        'Medical Review & Editing',
        'Literature Review & Referencing',
        'Plain Language Summaries',
        'Adverse Event Narratives',
        'Medical Communication Materials'
      ],
      benefits: [
        'Monthly Stipend: ₹8,000 - ₹15,000',
        'Work with Leading CROs & Pharma Companies',
        'AMWA/EMWA Certification Guidance',
        'Portfolio of Writing Samples',
        'Remote Work Opportunities',
        'Mentorship from Senior Medical Writers',
        'Publication Credits (if applicable)',
        'Job Placement Assistance'
      ],
      outcomes: [
        'Develop medical writing portfolio',
        'Learn regulatory writing standards',
        'Master medical terminology',
        'Understand clinical trial documentation',
        'Gain publication experience',
        'Network with medical writers',
        'Industry-ready writing skills'
      ],
      partners: ['Medical Writing Agencies', 'CROs', 'Pharmaceutical Companies', 'Healthcare Publishers'],
      careerPaths: ['Medical Writer', 'Regulatory Writer', 'Scientific Writer', 'Clinical Writer', 'Medical Editor', 'Medical Communications Specialist']
    }
  ];

  const stats = [
    { number: '1500+', label: 'Interns Placed', icon: <FaUsers size={30} /> },
    { number: '85%', label: 'Conversion to Full-time', icon: <FaChartLine size={30} /> },
    { number: '200+', label: 'Partner Companies', icon: <FaBriefcase size={30} /> },
    { number: '₹18 LPA', label: 'Highest Package Post-Internship', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Industry-Expert Mentors',
      description:
        'Learn from experienced professionals with 10-15 years in Medical, Clinical, IT, and Pharmaceutical industries. Get personalized guidance and real-world insights.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80'
    },
    {
      icon: <FaMoneyBillWave size={50} />,
      title: 'Competitive Stipends',
      description:
        'Earn while you learn! Get monthly stipends ranging from ₹5,000 to ₹25,000 based on your performance and project contributions.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80'
    },
    {
      icon: <FaCertificate size={50} />,
      title: 'Industry Certifications',
      description:
        'Receive completion certificates, letters of recommendation, and LinkedIn endorsements. Build a strong professional profile with verified credentials.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaHandshake size={50} />,
      title: 'Pre-Placement Offers (PPOs)',
      description:
        '85% of our high-performing interns receive Pre-Placement Offers or direct job offers from partner companies. Turn your internship into a career.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *   INTERNSHIP FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What are the eligibility criteria for internship programs?',
      answer:
        'Students who have completed or are currently pursuing relevant courses at ZEPFTER are eligible. For Medical/Clinical internships: Life science graduates. For IT internships: Any graduate with programming knowledge. For Pharma: B.Pharm/M.Pharm or related science background.'
    },
    {
      id: 2,
      question: 'Do I get a stipend during the internship?',
      answer:
        'Yes! All our internship programs offer competitive stipends ranging from ₹5,000 to ₹25,000 per month based on the domain, your performance, and the partner company. High performers may receive performance bonuses.'
    },
    {
      id: 3,
      question: 'Can I do a remote/work-from-home internship?',
      answer:
        'Yes! IT & Software Development, Data Science, and Medical Writing internships offer remote work options. Medical Coding may have hybrid options. Clinical Research and Pharmaceutical internships typically require on-site presence due to regulatory requirements.'
    },
    {
      id: 4,
      question: 'Will I get a job after completing the internship?',
      answer:
        '85% of our high-performing interns receive Pre-Placement Offers (PPOs) or direct job offers from partner companies. We also provide comprehensive job placement assistance, interview preparation, and resume building support.'
    },
    {
      id: 5,
      question: 'What kind of certificate will I receive?',
      answer:
        'You will receive an Industry-Recognized Internship Completion Certificate, Letter of Recommendation from your mentor, and LinkedIn endorsements. These certifications significantly enhance your resume and professional profile.'
    },
    {
      id: 6,
      question: 'How many hours per day do I need to work?',
      answer:
        'Most internships require 6-8 hours per day (full-time), similar to regular office hours. Part-time internships (4-5 hours/day) may be available for students currently pursuing education. Flexible timing options available for remote internships.'
    },
    {
      id: 7,
      question: 'Which companies do you partner with for internships?',
      answer:
        'We partner with 200+ companies including Max Healthcare, Apollo Hospitals, Quintiles IMS, Covance, TCS, Infosys, Dr. Reddy\'s, Sun Pharma, and many leading CROs, pharmaceutical companies, IT firms, and healthcare organizations.'
    },
    {
      id: 8,
      question: 'Can I choose my internship location?',
      answer:
        'Yes! We have internship opportunities across major cities including Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, and more. For remote internships, location is not a constraint. We try to place you based on your preference and company availability.'
    },
    {
      id: 9,
      question: 'What is the selection process for internships?',
      answer:
        'After completing your course, you\'ll go through: (1) Resume screening, (2) Technical assessment, (3) Interview preparation sessions, (4) Company interviews, (5) Final selection and onboarding. Our placement team guides you through each step.'
    },
    {
      id: 10,
      question: 'Can international students apply for internships?',
      answer:
        'Yes! International students can apply for remote internships in IT, Data Science, and Medical Writing domains. On-site internships in India require valid work permits and compliance with local regulations.'
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div style={{ background: '#0a0a1f', minHeight: '100vh', paddingTop: '70px' }}>
      
      {/* HERO SECTION */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #0a0a1f 0%, #FBD21A 50%, #00AA8A 100%)',
          padding: '100px 20px 80px'
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '20px' }}>
              <FaBriefcase size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              INTERNSHIP PROGRAMS
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER's Internship Programs provide real-world experience through hands-on projects with leading companies. Gain practical skills in Medical Coding, Clinical Research, IT Development, Data Science, Pharmaceutical QA/QC, and Medical Writing. With competitive stipends, industry mentorship, and 85% conversion to full-time roles, our internships transform learning into successful careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ padding: '80px 20px', background: 'rgba(0,0,0,0.3)' }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  style={{
                    background: 'rgba(251,210,26,0.2)',
                    border: '2px solid rgba(0,170,138,0.3)',
                    borderRadius: '20px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ color: '#FBD21A', marginBottom: '20px' }}>
                    {stat.icon}
                  </div>
                  <div className="display-4 fw-bold" style={{ color: '#00AA8A' }}>{stat.number}</div>
                  <div style={{ opacity: 0.9 }}>{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP ACCORDION */}
      <section style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Internship Opportunities</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Choose from our diverse internship programs across multiple domains</p>
          </motion.div>

          {services.map((service, idx) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-4">

              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>

                {/* Service Header */}
                <div 
                  onClick={() => toggleService(service.id)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                    gap: '30px',
                    padding: '40px',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {/* Images */}
                  <div style={{ 
                    order: idx % 2 === 0 ? 2 : 1,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px'
                  }}>
                    <motion.div whileHover={{ scale: 1.05 }} style={{ borderRadius: '15px', height: '200px', overflow: 'hidden' }}>
                      <img src={service.image1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} style={{ borderRadius: '15px', height: '200px', overflow: 'hidden' }}>
                      <img src={service.image2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div style={{ order: idx % 2 === 0 ? 1 : 2, color: 'white' }}>
                    <div style={{ marginBottom: '10px', color: '#FBD21A' }}>{service.icon}</div>

                    <h2 className="fw-bold mb-3">{service.title}</h2>

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                      <span style={{ padding: '8px 16px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                        <FaClock size={14} /> {service.duration}
                      </span>
                      <span style={{ padding: '8px 16px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
                        <FaAward size={14} /> {service.level}
                      </span>
                      <span style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                        💰 {service.salary}
                      </span>
                    </div>

                    <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{service.description}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FBD21A', fontWeight: 600 }}>
                      View Details {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                 <AnimatePresence>
                                  {expandedService === service.id && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      style={{ background: 'rgba(0,0,0,0.3)' }}
                                    >
                                      <div style={{ padding: '40px', color: 'white' }}>
                
                                        <h3 className="fw-bold mb-4" style={{ color: '#FBD21A' }}>What You Will Learn</h3>
                                        
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '15px', marginBottom: '30px' }}>
                                          {service.details.map((detail, idx) => (
                                            <motion.div 
                                              key={idx}
                                              whileHover={{ x: 5 }}
                                              style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                                            >
                                              <FaCheckCircle size={16} style={{ color: '#00AA8A', marginRight: '8px' }} />
                                              {detail}
                                            </motion.div>
                                          ))}
                                        </div>
                
                                        {/* Certifications */}
                                        <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Certifications Prepared</h4>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                          {service.certifications.map((cert, idx) => (
                                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '25px', border: '1px solid rgba(0,170,138,0.5)' }}>
                                              <FaAward style={{ marginRight: '8px' }} /> {cert}
                                            </span>
                                          ))}
                                        </div>
                
                                        {/* Career Paths */}
                                        <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Career Opportunities</h4>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                          {service.careerPaths.map((career, idx) => (
                                            <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                                              {career}
                                            </span>
                                          ))}
                                        </div>
                
                                        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                          <Link
                                            to="/contact"
                                            style={{
                                              padding: '15px 40px',
                                              background: 'linear-gradient(135deg, #00AA8A, #1E3679)',
                                              color: 'white',
                                              textDecoration: 'none',
                                              borderRadius: '50px',
                                              fontWeight: '600',
                                              fontSize: '1rem',
                                              transition: 'all 0.3s ease',
                                              display: 'inline-block'
                                            }}
                                          >
                                            Enroll Now
                                          </Link>
                                          <button
                                            style={{
                                              padding: '15px 40px',
                                              background: 'transparent',
                                              color: 'white',
                                              border: '2px solid white',
                                              borderRadius: '50px',
                                              fontWeight: '600',
                                              fontSize: '1rem',
                                              cursor: 'pointer',
                                              transition: 'all 0.3s ease'
                                            }}
                                          >
                                            Download Syllabus
                                          </button>
                                        </div>
                
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </section>
                
                      {/* WHY CHOOSE SECTION */}
                      <section style={{ padding: '80px 20px', background: 'rgba(0,170,138,0.1)' }}>
                        <div className="container">
                
                          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
                            <h2 className="fw-bold text-white">Why Choose ZEPFTER Clinical Courses?</h2>
                            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
                              Transform your clinical research career with industry-leading training and CRO placements.
                            </p>
                          </motion.div>
                
                          <div className="row g-4">
                            {whyChoose.map((item, idx) => (
                              <div className="col-lg-6" key={idx}>
                                <motion.div
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  whileHover={{ y: -10 }}
                                  transition={{ duration: 0.4 }}
                                  style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}
                                >
                                  <div className="row g-0">
                                    <div className="col-md-5">
                                      <img src={item.image} alt="" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                    </div>
                                    <div className="col-md-7">
                                      <div style={{ padding: '30px', color: 'white' }}>
                                        <div style={{ color: '#FBD21A' }}>{item.icon}</div>
                                        <h4 className="fw-bold mt-2">{item.title}</h4>
                                        <p style={{ opacity: 0.8 }}>{item.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>
                            ))}
                          </div>
                
                        </div>
                      </section>
                
                      {/* FAQ SECTION */}
                      <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
                        <div className="container">
                
                          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
                            <h2 className="fw-bold text-white">Frequently Asked Questions</h2>
                            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
                              Everything you need to know before starting your clinical research journey.
                            </p>
                          </motion.div>
                
                          <div className="accordion" style={{ maxWidth: '900px', margin: 'auto' }}>
                            {faqs.map((faq) => (
                              <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                style={{
                                  background: 'rgba(0,0,0,0.3)',
                                  borderRadius: '15px',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  marginBottom: '15px'
                                }}
                              >
                                <div
                                  onClick={() => toggleFAQ(faq.id)}
                                  style={{
                                    padding: '20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: 'white'
                                  }}
                                >
                                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{faq.question}</span>
                                  {expandedFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                
                                <AnimatePresence>
                                  {expandedFAQ === faq.id && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      style={{ padding: '0 20px 20px', color: '#fff', opacity: '0.9' }}
                                    >
                                      {faq.answer}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ))}
                          </div>
                
                        </div>
                      </section>
                
                
                    </div>
                  );
                };
                
                export default InternshipProgramsPage;