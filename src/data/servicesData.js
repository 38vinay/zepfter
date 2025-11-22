// src/data/servicesData.js
import { FaCapsules, FaFlask, FaLaptopCode, FaPills, FaHeartbeat, FaMicroscope, FaVial, FaClipboardCheck, FaUserTie, FaBriefcase } from "react-icons/fa";

export const serviceCategories = {
  medical: {
    id: 'medical',
    title: 'Medical Courses',
    icon: FaCapsules,
    color: '#1E3679',
    gradient: 'linear-gradient(135deg, #1E3679 0%, #2a4a9f 100%)',
    description: 'Professional medical training programs including coding, billing, and medical writing.',
    slug: 'medical-courses'
  },
  clinical: {
    id: 'clinical',
    title: 'Clinical Courses',
    icon: FaFlask,
    color: '#00AA8A',
    gradient: 'linear-gradient(135deg, #00AA8A 0%, #00d4aa 100%)',
    description: 'Advanced clinical research, data management, and trial management programs.',
    slug: 'clinical-courses'
  },
  it: {
    id: 'it',
    title: 'IT Services',
    icon: FaLaptopCode,
    color: '#FBD21A',
    gradient: 'linear-gradient(135deg, #FBD21A 0%, #ffd700 100%)',
    description: 'Comprehensive IT training in programming, data science, cybersecurity, and cloud computing.',
    slug: 'it-services'
  },
  pharmaceutical: {
    id: 'pharmaceutical',
    title: 'Pharmaceutical Skills',
    icon: FaPills,
    color: '#1E3679',
    gradient: 'linear-gradient(135deg, #1E3679 0%, #00AA8A 100%)',
    description: 'Quality assurance, regulatory affairs, and pharmaceutical operations training.',
    slug: 'pharmaceutical-skills'
  },
  training: {
    id: 'training',
    title: 'Training & Placement',
    icon: FaUserTie,
    color: '#00AA8A',
    gradient: 'linear-gradient(135deg, #00AA8A 0%, #1E3679 100%)',
    description: 'Comprehensive placement assistance, interview preparation, and career counseling services.',
    slug: 'training-placement'
  },
  internship: {
    id: 'internship',
    title: 'Internship Programs',
    icon: FaBriefcase,
    color: '#FBD21A',
    gradient: 'linear-gradient(135deg, #FBD21A 0%, #00AA8A 100%)',
    description: 'Real-world internship opportunities to gain hands-on experience in your field.',
    slug: 'internship-programs'
  }
};

export const servicesData = {
  // MEDICAL COURSES
  medical: [
    {
      id: 'medical-coding',
      title: 'Medical Coding',
      icon: <FaCapsules size={40} />,
      shortDesc: 'Learn industry-level medical coding systems including ICD-10, CPT, and HCPCS.',
      fullDesc: 'Master comprehensive medical coding including ICD-10, CPT, and HCPCS. This course provides in-depth training on translating medical diagnoses, procedures, and services into universal code numbers used for billing and documentation.',
      duration: '6 months',
      level: 'Beginner to Advanced',
      modules: [
        'ICD-10-CM/PCS Coding',
        'CPT Coding',
        'HCPCS Level II',
        'Medical Terminology',
        'Anatomy & Physiology',
        'Healthcare Reimbursement',
        'Compliance & Regulations',
        'Medical Documentation'
      ],
      outcomes: [
        'Certified Professional Coder (CPC) preparation',
        'Understanding of medical documentation',
        'Ability to assign accurate diagnostic and procedural codes',
        'Knowledge of compliance and regulatory requirements',
        'Proficiency in medical billing software'
      ],
      career: ['Medical Coder', 'Coding Specialist', 'Billing Specialist', 'Health Information Technician'],
      certifications: ['CPC (Certified Professional Coder)', 'CCS (Certified Coding Specialist)']
    },
    {
      id: 'medical-affairs',
      title: 'Medical Affairs',
      icon: <FaHeartbeat size={40} />,
      shortDesc: 'Bridge between medical science and business in pharmaceutical companies.',
      fullDesc: 'Comprehensive training in medical affairs covering scientific communication, medical information, publication planning, and healthcare professional engagement.',
      duration: '8 months',
      level: 'Intermediate to Advanced',
      modules: [
        'Medical Information Management',
        'Scientific Communication',
        'Publication Planning',
        'Medical Education',
        'KOL Engagement',
        'Clinical Development Support',
        'Post-Marketing Surveillance',
        'Medical Strategy'
      ],
      outcomes: [
        'Support clinical development programs',
        'Manage medical information requests',
        'Develop publication strategies',
        'Engage with healthcare professionals effectively'
      ],
      career: ['Medical Affairs Associate', 'Medical Science Liaison', 'Medical Information Specialist'],
      certifications: ['Certified Medical Affairs Specialist']
    },
    {
      id: 'medical-billing',
      title: 'Medical Billing',
      icon: <FaClipboardCheck size={40} />,
      shortDesc: 'Professional billing procedures and healthcare revenue cycle management.',
      fullDesc: 'Learn complete healthcare billing processes, insurance claims management, revenue cycle operations, and medical billing software.',
      duration: '5 months',
      level: 'Beginner to Intermediate',
      modules: [
        'Insurance Verification',
        'Claims Processing & Submission',
        'Payment Posting',
        'Denial Management',
        'Medical Billing Software',
        'HIPAA Compliance',
        'Revenue Cycle Management',
        'Accounts Receivable'
      ],
      outcomes: [
        'Process insurance claims efficiently',
        'Handle medical billing software proficiently',
        'Manage accounts receivable effectively',
        'Ensure regulatory compliance'
      ],
      career: ['Medical Biller', 'Billing Coordinator', 'Revenue Cycle Analyst'],
      certifications: ['CMRS (Certified Medical Reimbursement Specialist)']
    },
    {
      id: 'medical-writing',
      title: 'Medical Writing',
      icon: <FaMicroscope size={40} />,
      shortDesc: 'Scientific & regulatory writing for healthcare and pharmaceutical industries.',
      fullDesc: 'Develop expertise in medical and scientific writing for research papers, clinical documents, regulatory submissions, and medical publications.',
      duration: '6 months',
      level: 'Intermediate to Advanced',
      modules: [
        'Clinical Documentation',
        'Regulatory Writing',
        'Research Papers & Publications',
        'Medical Publications',
        'Protocol Writing',
        'Scientific Communication',
        'Grant Writing',
        'Medical Editing'
      ],
      outcomes: [
        'Write clinical study reports',
        'Create regulatory documents',
        'Publish medical literature',
        'Maintain scientific accuracy'
      ],
      career: ['Medical Writer', 'Regulatory Writer', 'Scientific Writer'],
      certifications: ['AMWA Certification', 'EMWA Certification']
    }
  ],

  // CLINICAL COURSES
  clinical: [
    {
      id: 'clinical-research',
      title: 'Clinical Research',
      icon: <FaFlask size={40} />,
      shortDesc: 'Drug discovery, clinical trials, and research fundamentals.',
      fullDesc: 'Comprehensive training in clinical research covering all phases of clinical trials, GCP guidelines, ethics, and regulatory compliance.',
      duration: '8 months',
      level: 'Beginner to Advanced',
      modules: [
        'Clinical Trial Phases (I-IV)',
        'Good Clinical Practice (GCP)',
        'Ethics & Regulations',
        'Protocol Development',
        'Study Monitoring',
        'Safety Reporting',
        'Informed Consent',
        'Regulatory Submissions'
      ],
      outcomes: [
        'Understand clinical trial processes',
        'Implement GCP standards',
        'Monitor clinical studies',
        'Ensure patient safety'
      ],
      career: ['Clinical Research Coordinator', 'Clinical Research Associate', 'Study Coordinator'],
      certifications: ['CCRC', 'CCRA', 'ACRP Certification']
    },
    {
      id: 'clinical-data-management',
      title: 'Clinical Data Management',
      icon: <FaVial size={40} />,
      shortDesc: 'Manage and analyze clinical trial data effectively.',
      fullDesc: 'Master clinical data management tools, database design, query management, data validation, and quality assurance.',
      duration: '7 months',
      level: 'Intermediate',
      modules: [
        'CRF Design & Development',
        'Database Design & Build',
        'Query Management',
        'Data Validation & Cleaning',
        'CDM Tools (Oracle, Medidata)',
        'SAE Reconciliation',
        'Data Quality Assurance',
        'Database Lock Procedures'
      ],
      outcomes: [
        'Design clinical databases',
        'Manage data queries efficiently',
        'Ensure data quality and integrity',
        'Generate data reports'
      ],
      career: ['Clinical Data Manager', 'Data Coordinator', 'CDM Specialist'],
      certifications: ['CCDM Certification']
    },
    {
      id: 'clinical-trials',
      title: 'Clinical Trials Management',
      icon: <FaClipboardCheck size={40} />,
      shortDesc: 'Comprehensive trial coordination and site management.',
      fullDesc: 'Learn comprehensive clinical trial management, site coordination, patient recruitment strategies, and monitoring visits.',
      duration: '6 months',
      level: 'Intermediate',
      modules: [
        'Trial Design & Planning',
        'Site Selection & Management',
        'Patient Recruitment & Retention',
        'Monitoring Visits',
        'Source Data Verification',
        'Trial Master File Management',
        'Budget & Contract Management',
        'Closeout Procedures'
      ],
      outcomes: [
        'Coordinate clinical trials effectively',
        'Conduct monitoring visits',
        'Manage trial documentation',
        'Ensure protocol compliance'
      ],
      career: ['Clinical Trial Manager', 'Site Coordinator', 'Project Manager'],
      certifications: ['PMP', 'Clinical Trial Management Certification']
    },
    {
      id: 'bioavailability-bioequivalence',
      title: 'Bioavailability & Bioequivalence Studies',
      icon: <FaMicroscope size={40} />,
      shortDesc: 'Specialized training in BA/BE studies for generic drug development.',
      fullDesc: 'Learn the principles of bioavailability and bioequivalence studies, pharmacokinetics, and regulatory requirements for generic drug approval.',
      duration: '5 months',
      level: 'Advanced',
      modules: [
        'Pharmacokinetics Principles',
        'BA/BE Study Design',
        'Analytical Method Validation',
        'Statistical Analysis',
        'Regulatory Guidelines (FDA, EMA)',
        'Generic Drug Development',
        'Study Protocol Development',
        'Data Interpretation'
      ],
      outcomes: [
        'Design BA/BE studies',
        'Understand PK parameters',
        'Navigate regulatory requirements',
        'Analyze bioequivalence data'
      ],
      career: ['BA/BE Specialist', 'Pharmacokinetics Analyst', 'Generic Drug Developer'],
      certifications: ['Clinical Pharmacology Certification']
    }
  ],

  // IT SERVICES
  it: [
    {
      id: 'programming-development',
      title: 'Programming and Development',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'Comprehensive programming courses from beginners to full-stack development.',
      courses: [
        'Python for Beginners',
        'Java Programming',
        'Web Development (HTML, CSS, JavaScript)',
        'Full Stack Development',
        'Mobile App Development (iOS/Android)'
      ],
      duration: '4-12 months',
      level: 'All Levels'
    },
    {
      id: 'data-science-analytics',
      title: 'Data Science and Analytics',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'Master data science, machine learning, and analytics tools.',
      courses: [
        'Data Science with Python',
        'Machine Learning',
        'Data Analysis with R',
        'Big Data Technologies (Hadoop, Spark)',
        'Data Visualization (Tableau, Power BI)'
      ],
      duration: '6-10 months',
      level: 'Intermediate to Advanced'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'Learn ethical hacking, network security, and penetration testing.',
      courses: [
        'Introduction to Cybersecurity',
        'Ethical Hacking',
        'Network Security',
        'Penetration Testing',
        'Security Compliance and Risk Management'
      ],
      duration: '6-8 months',
      level: 'Intermediate'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'AWS, Azure, and Google Cloud Platform certifications.',
      courses: [
        'AWS Certified Solutions Architect',
        'Azure Fundamentals',
        'Google Cloud Platform Essentials',
        'Cloud Security',
        'DevOps on the Cloud'
      ],
      duration: '4-8 months',
      level: 'Intermediate to Advanced'
    },
    {
      id: 'networking',
      title: 'Networking',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'CCNA, CompTIA Network+, and advanced networking courses.',
      courses: [
        'Cisco Certified Network Associate (CCNA)',
        'CompTIA Network+',
        'Network Administration',
        'Wireless Networking',
        'Virtualization and Cloud Networking'
      ],
      duration: '5-9 months',
      level: 'Beginner to Advanced'
    },
    {
      id: 'database-management',
      title: 'Database Management',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'SQL, NoSQL, and database administration courses.',
      courses: [
        'SQL for Data Science',
        'Database Design and Management',
        'NoSQL Databases (MongoDB)',
        'Data Warehousing and ETL',
        'Oracle Database Administration'
      ],
      duration: '4-7 months',
      level: 'Beginner to Advanced'
    }
  ],

  // PHARMACEUTICAL SKILLS
  pharmaceutical: [
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      icon: <FaPills size={40} />,
      shortDesc: 'Quality systems, GMP compliance, and validation processes.',
      modules: [
        'Quality Management Systems',
        'Good Manufacturing Practices (GMP)',
        'Pharmaceutical Validations',
        'Pharmaceutical Qualifications',
        'Audit & Compliance',
        'Document Control Management',
        'Quality Risk Management'
      ],
      duration: '6 months',
      level: 'Intermediate'
    },
    {
      id: 'quality-control',
      title: 'Quality Control/Pharmaceutical Analysis',
      icon: <FaVial size={40} />,
      shortDesc: 'Analytical testing, method validation, and quality control operations.',
      modules: [
        'Pharmaceutical Analysis Techniques',
        'Laboratory Information Management System (LIMS)',
        'Good Laboratory Practices (GLP)',
        'Stability Testing',
        'Method Validation',
        'Out of Specification (OOS) Investigation'
      ],
      duration: '6 months',
      level: 'Intermediate'
    },
    {
      id: 'regulatory-affairs',
      title: 'Regulatory Affairs',
      icon: <FaClipboardCheck size={40} />,
      shortDesc: 'Drug registration, regulatory submissions, and compliance.',
      modules: [
        'Regulatory Submissions (IND, NDA, ANDA)',
        'Global Regulatory Requirements',
        'CMC Documentation',
        'Post-Approval Changes',
        'Regulatory Intelligence',
        'Health Authority Interactions'
      ],
      duration: '7 months',
      level: 'Advanced'
    },
    {
      id: 'manufacturing-operations',
      title: 'Manufacturing Operations',
      icon: <FaHeartbeat size={40} />,
      shortDesc: 'Production processes, equipment operation, and GMP compliance.',
      modules: [
        'Manufacturing Processes',
        'Good Manufacturing Practices (GMP)',
        'Pharmaceutical Warehouse Management',
        'Equipment Qualification',
        'Process Validation',
        'Batch Record Review'
      ],
      duration: '5 months',
      level: 'Beginner to Intermediate'
    }
  ],

  // TRAINING & PLACEMENT
  training: [
    {
      id: 'placement-assistance',
      title: 'Placement Assistance',
      icon: <FaUserTie size={40} />,
      shortDesc: '100% placement support with personalized career guidance and job opportunities.',
      fullDesc: 'Our comprehensive placement assistance program ensures that every student gets the best career opportunities. We have partnerships with 500+ companies across healthcare, pharmaceutical, and IT sectors.',
      duration: 'Throughout Course',
      level: 'All Levels',
      modules: [
        'Resume Building & Optimization',
        'LinkedIn Profile Development',
        'Mock Interviews (Technical & HR)',
        'Group Discussions',
        'Aptitude & Reasoning Tests',
        'Soft Skills Training',
        'Company-Specific Preparation',
        'Salary Negotiation Skills'
      ],
      outcomes: [
        'Build a professional resume and portfolio',
        'Ace technical and HR interviews',
        'Get placed in top companies',
        'Negotiate better salary packages',
        'Develop strong communication skills'
      ],
      career: ['All Industry Sectors', 'Top MNCs', 'Healthcare Organizations', 'IT Companies', 'Pharmaceutical Giants'],
      stats: {
        placementRate: '95%',
        averageSalary: '4.5 LPA',
        hiringPartners: '500+',
        highestPackage: '12 LPA'
      }
    },
    {
      id: 'interview-preparation',
      title: 'Interview Preparation',
      icon: <FaClipboardCheck size={40} />,
      shortDesc: 'Intensive interview training with mock sessions and feedback.',
      fullDesc: 'Master the art of interviews with our comprehensive preparation program. Get trained by industry experts and HR professionals who have hired thousands of candidates.',
      duration: '4 weeks',
      level: 'All Levels',
      modules: [
        'Interview Fundamentals',
        'Common Interview Questions',
        'Behavioral Interview Techniques',
        'Technical Interview Preparation',
        'Case Study Discussions',
        'Telephonic Interview Skills',
        'Video Interview Etiquette',
        'Follow-up Strategies'
      ],
      outcomes: [
        'Confidence in facing interviews',
        'Perfect body language and communication',
        'Handle pressure situations',
        'Answer tricky questions effectively'
      ]
    },
    {
      id: 'career-counseling',
      title: 'Career Counseling',
      icon: <FaBriefcase size={40} />,
      shortDesc: 'Personalized career guidance to help you choose the right path.',
      fullDesc: 'Get one-on-one career counseling from industry experts who understand market trends and can guide you towards the best career options based on your skills and interests.',
      duration: 'Ongoing',
      level: 'All Levels',
      modules: [
        'Career Assessment',
        'Industry Trends Analysis',
        'Skill Gap Identification',
        'Course Recommendations',
        'Career Path Mapping',
        'Personal Branding',
        'Networking Strategies',
        'Long-term Career Planning'
      ],
      outcomes: [
        'Clear career roadmap',
        'Identify strengths and weaknesses',
        'Make informed decisions',
        'Set achievable career goals'
      ]
    }
  ],

  // INTERNSHIP PROGRAMS
  internship: [
    {
      id: 'medical-internship',
      title: 'Medical Coding Internship',
      icon: <FaCapsules size={40} />,
      shortDesc: 'Real-world medical coding experience with live projects.',
      fullDesc: 'Gain hands-on experience in medical coding with real patient records, working alongside experienced coders in actual healthcare settings. This internship provides practical exposure to ICD-10, CPT, and HCPCS coding.',
      duration: '3 months',
      level: 'Post-Training',
      modules: [
        'Live Coding Projects',
        'Real Patient Record Analysis',
        'Medical Billing Integration',
        'EHR Systems Training',
        'Quality Audits',
        'Coding Compliance',
        'Productivity Targets',
        'Team Collaboration'
      ],
      outcomes: [
        'Work on real medical records',
        'Build a professional portfolio',
        'Get industry recommendation letters',
        'Network with healthcare professionals',
        'Increase job readiness'
      ],
      benefits: [
        'Stipend provided',
        'Certificate of completion',
        'Letter of recommendation',
        'Job assistance post-internship',
        'Real-world exposure'
      ]
    },
    {
      id: 'clinical-research-internship',
      title: 'Clinical Research Internship',
      icon: <FaFlask size={40} />,
      shortDesc: 'Hands-on experience in clinical trials and research operations.',
      fullDesc: 'Work with our partner CROs and pharmaceutical companies on ongoing clinical trials. Get exposure to protocol development, patient recruitment, data collection, and regulatory compliance.',
      duration: '3-6 months',
      level: 'Post-Training',
      modules: [
        'Clinical Trial Operations',
        'Protocol Implementation',
        'Patient Recruitment',
        'Data Collection & Entry',
        'Adverse Event Reporting',
        'Regulatory Documentation',
        'Site Monitoring',
        'Study Close-out'
      ],
      outcomes: [
        'Real clinical trial experience',
        'GCP compliance knowledge',
        'Regulatory documentation skills',
        'Professional network in CRO industry'
      ],
      benefits: [
        'Work with leading CROs',
        'Stipend provided',
        'Industry exposure',
        'Mentorship from experts',
        'Job placement assistance'
      ]
    },
    {
      id: 'it-internship',
      title: 'IT & Software Development Internship',
      icon: <FaLaptopCode size={40} />,
      shortDesc: 'Build real-world applications and contribute to live projects.',
      fullDesc: 'Work on cutting-edge technology projects with our partner IT companies. Build full-stack applications, contribute to open-source projects, and gain experience in agile development environments.',
      duration: '2-6 months',
      level: 'Post-Training',
      modules: [
        'Real Project Development',
        'Version Control (Git)',
        'Agile/Scrum Methodology',
        'Code Reviews',
        'Testing & Debugging',
        'Deployment & DevOps',
        'Team Collaboration Tools',
        'Client Interactions'
      ],
      outcomes: [
        'Build professional portfolio',
        'Learn industry best practices',
        'Work in team environments',
        'Get job-ready skills'
      ],
      benefits: [
        'Work from home/office options',
        'Performance-based stipend',
        'Project completion certificate',
        'LinkedIn recommendations',
        'Pre-placement offers'
      ]
    },
    {
      id: 'pharmaceutical-internship',
      title: 'Pharmaceutical QA/QC Internship',
      icon: <FaPills size={40} />,
      shortDesc: 'Practical training in pharmaceutical quality operations.',
      fullDesc: 'Get hands-on experience in pharmaceutical manufacturing facilities, quality control laboratories, and regulatory affairs departments. Learn GMP practices and quality systems in real-world settings.',
      duration: '3-4 months',
      level: 'Post-Training',
      modules: [
        'GMP Operations',
        'Quality Control Testing',
        'Documentation Practices',
        'Stability Studies',
        'Method Validation',
        'Quality Audits',
        'Deviation Management',
        'CAPA Implementation'
      ],
      outcomes: [
        'Pharma industry exposure',
        'GMP/GLP certification',
        'Quality systems knowledge',
        'Manufacturing experience'
      ],
      benefits: [
        'Pharma facility access',
        'Stipend provided',
        'Industry mentorship',
        'Regulatory exposure',
        'Job placement support'
      ]
    }
  ]
};

// Helper function to get all services flattened
export const getAllServices = () => {
  return Object.values(servicesData).flat();
};

// Helper function to get service by ID
export const getServiceById = (id) => {
  return getAllServices().find(service => service.id === id);
};

// Helper function to get services by category
export const getServicesByCategory = (category) => {
  return servicesData[category] || [];
};