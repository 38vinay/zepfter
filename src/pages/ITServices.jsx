import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaLaptopCode, 
  FaDatabase, 
  FaShieldAlt, 
  FaCloud,
  FaNetworkWired,
  FaProjectDiagram,
  FaCode,
  FaBrain,
  FaCheckCircle,
  FaAward,
  FaClock,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

const ITServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   IT SERVICES CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'programming-development',
      title: 'Programming and Development',
      icon: <FaLaptopCode size={30} />,
      duration: '4-12 months',
      level: 'Beginner to Advanced',
      salary: '₹3.5 - ₹15 LPA',
      description:
        'Master programming fundamentals and advanced development skills across multiple languages and frameworks. From Python basics to full-stack development, mobile apps to enterprise applications - build a solid foundation in software development with hands-on projects and real-world applications.',
      image1: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      details: [
        'Python for Beginners',
        'Java Programming',
        'Web Development (HTML, CSS, JavaScript)',
        'Full Stack Development (MERN/MEAN)',
        'Mobile App Development (iOS/Android)',
        'React Native Development',
        'Node.js Backend Development',
        'RESTful API Development',
        'Version Control (Git/GitHub)',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Deployment & Production'
      ],
      certifications: ['Oracle Certified Java Programmer', 'Microsoft Certified Developer', 'AWS Developer Associate', 'Google Mobile Web Specialist'],
      careerPaths: ['Software Developer', 'Full Stack Developer', 'Mobile App Developer', 'Frontend Developer', 'Backend Developer', 'Web Developer']
    },

    {
      id: 'data-science-analytics',
      title: 'Data Science and Analytics',
      icon: <FaChartLine size={30} />,
      duration: '6-10 months',
      level: 'Intermediate to Advanced',
      salary: '₹6 - ₹20 LPA',
      description:
        'Become a data science expert with comprehensive training in Python, machine learning, big data technologies, and data visualization. Learn to extract insights from complex datasets, build predictive models, and create compelling visualizations using industry-standard tools like Tableau, Power BI, and advanced analytics frameworks.',
      image1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      details: [
        'Data Science with Python',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'Data Analysis with R',
        'Statistics & Probability',
        'Big Data Technologies (Hadoop, Spark)',
        'Data Visualization (Tableau, Power BI)',
        'Natural Language Processing',
        'Time Series Analysis',
        'Feature Engineering',
        'Model Deployment',
        'A/B Testing & Experimentation'
      ],
      certifications: ['Google Data Analytics Professional', 'IBM Data Science Professional', 'Microsoft Certified Data Analyst', 'Tableau Desktop Specialist'],
      careerPaths: ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst', 'Business Intelligence Analyst', 'Analytics Consultant', 'AI Research Scientist']
    },

    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: <FaShieldAlt size={30} />,
      duration: '6-8 months',
      level: 'Intermediate to Advanced',
      salary: '₹5 - ₹18 LPA',
      description:
        'Master cybersecurity with hands-on training in ethical hacking, network security, penetration testing, and security compliance. Learn to identify vulnerabilities, secure networks, conduct security audits, and protect organizations from cyber threats. Prepare for industry certifications like CEH and CompTIA Security+.',
      image1: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
      details: [
        'Introduction to Cybersecurity',
        'Ethical Hacking Fundamentals',
        'Network Security Architecture',
        'Penetration Testing Methodologies',
        'Web Application Security',
        'Security Compliance (ISO 27001)',
        'Risk Management & Assessment',
        'Incident Response & Forensics',
        'Vulnerability Assessment',
        'Security Tools (Metasploit, Nmap)',
        'SIEM & Log Analysis',
        'Cloud Security Best Practices'
      ],
      certifications: ['CEH (Certified Ethical Hacker)', 'CompTIA Security+', 'CISSP', 'CISM', 'CEH Practical'],
      careerPaths: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Consultant', 'Penetration Tester', 'Security Architect', 'SOC Analyst']
    },

    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      icon: <FaCloud size={30} />,
      duration: '4-8 months',
      level: 'Intermediate to Advanced',
      salary: '₹6 - ₹22 LPA',
      description:
        'Become a cloud expert with comprehensive training in AWS, Azure, and Google Cloud Platform. Master cloud architecture, deployment, security, and DevOps practices. Learn to design scalable cloud solutions, manage cloud infrastructure, and achieve industry-recognized cloud certifications.',
      image1: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
      details: [
        'AWS Certified Solutions Architect',
        'Azure Fundamentals & Administration',
        'Google Cloud Platform Essentials',
        'Cloud Security & Compliance',
        'DevOps on the Cloud (CI/CD)',
        'Containerization (Docker, Kubernetes)',
        'Infrastructure as Code (Terraform)',
        'Cloud Migration Strategies',
        'Serverless Computing',
        'Cloud Monitoring & Optimization',
        'Multi-Cloud Management',
        'Cloud Cost Optimization'
      ],
      certifications: ['AWS Solutions Architect', 'Azure Administrator', 'Google Cloud Associate', 'Kubernetes Administrator (CKA)'],
      careerPaths: ['Cloud Architect', 'Cloud Engineer', 'DevOps Engineer', 'Cloud Security Specialist', 'Site Reliability Engineer', 'Cloud Consultant']
    },

    {
      id: 'networking',
      title: 'Networking',
      icon: <FaNetworkWired size={30} />,
      duration: '5-9 months',
      level: 'Beginner to Advanced',
      salary: '₹4 - ₹16 LPA',
      description:
        'Master network fundamentals and advanced networking concepts with industry-leading certifications like CCNA and CompTIA Network+. Learn network design, administration, wireless networking, virtualization, and cloud networking. Build expertise in configuring, managing, and troubleshooting enterprise networks.',
      image1: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80',
      details: [
        'Cisco CCNA Certification',
        'CompTIA Network+ Certification',
        'Network Administration & Management',
        'TCP/IP Protocol Suite',
        'Routing & Switching',
        'Wireless Networking (WLAN)',
        'Network Security Fundamentals',
        'Virtualization Technologies',
        'Cloud Networking',
        'Software-Defined Networking (SDN)',
        'Network Troubleshooting',
        'VPN & Remote Access'
      ],
      certifications: ['CCNA', 'CompTIA Network+', 'CCNP', 'Juniper JNCIA'],
      careerPaths: ['Network Administrator', 'Network Engineer', 'Network Architect', 'Systems Administrator', 'IT Infrastructure Manager', 'NOC Engineer']
    },

    {
      id: 'database-management',
      title: 'Database Management',
      icon: <FaDatabase size={30} />,
      duration: '4-7 months',
      level: 'Beginner to Advanced',
      salary: '₹4.5 - ₹17 LPA',
      description:
        'Master database design, management, and administration with training in SQL, NoSQL, data warehousing, and ETL processes. Learn Oracle, MongoDB, MySQL, and modern database technologies. Understand data modeling, optimization, backup strategies, and database security.',
      image1: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      details: [
        'SQL for Data Science',
        'Database Design & Normalization',
        'NoSQL Databases (MongoDB, Cassandra)',
        'Data Warehousing Concepts',
        'ETL Processes & Tools',
        'Oracle Database Administration',
        'MySQL/PostgreSQL Administration',
        'Database Performance Tuning',
        'Backup & Recovery Strategies',
        'Database Security',
        'Cloud Databases (RDS, CosmosDB)',
        'Big Data Databases'
      ],
      certifications: ['Oracle Certified Associate', 'Microsoft SQL Server Certification', 'MongoDB Developer', 'AWS Database Specialty'],
      careerPaths: ['Database Administrator', 'Database Developer', 'Data Engineer', 'ETL Developer', 'Data Warehouse Architect', 'Database Consultant']
    },

    {
      id: 'artificial-intelligence',
      title: 'Artificial Intelligence',
      icon: <FaBrain size={30} />,
      duration: '6-10 months',
      level: 'Advanced',
      salary: '₹7 - ₹25 LPA',
      description:
        'Dive into the world of AI with comprehensive training in machine learning, deep learning, natural language processing, and computer vision. Learn to build intelligent systems using TensorFlow, PyTorch, and other cutting-edge AI frameworks. Understand AI ethics, business applications, and deploy AI solutions.',
      image1: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
      details: [
        'Introduction to Artificial Intelligence',
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Deep Learning with TensorFlow',
        'Deep Learning with PyTorch',
        'Reinforcement Learning',
        'AI for Business Applications',
        'Generative AI & LLMs',
        'AI Model Deployment',
        'AI Ethics & Responsible AI',
        'Neural Network Architectures',
        'Transfer Learning & Fine-tuning'
      ],
      certifications: ['Google AI Professional', 'IBM AI Engineering', 'AWS Machine Learning Specialty', 'TensorFlow Developer'],
      careerPaths: ['AI Engineer', 'Machine Learning Scientist', 'NLP Engineer', 'Computer Vision Engineer', 'AI Research Scientist', 'AI Consultant']
    },

    {
      id: 'specialized-courses',
      title: 'Specialized IT Courses',
      icon: <FaProjectDiagram size={30} />,
      duration: '3-8 months',
      level: 'Intermediate',
      salary: '₹4 - ₹18 LPA',
      description:
        'Explore cutting-edge technologies including IoT, Blockchain, DevOps, UX/UI Design, and Software Testing. These specialized courses prepare you for emerging tech roles with hands-on projects, industry tools, and expert mentorship in high-demand specialized fields.',
      image1: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80',
      details: [
        'Internet of Things (IoT)',
        'Blockchain Technology & Smart Contracts',
        'DevOps Essentials & Automation',
        'UX/UI Design Principles',
        'Software Testing & QA',
        'IT Project Management (Agile/Scrum)',
        'PMP Certification Preparation',
        'ITIL Foundation',
        'Web Technologies (React, Angular, Vue)',
        'API Development & Integration',
        'E-commerce Development',
        'CMS (WordPress, Drupal)'
      ],
      certifications: ['Certified Scrum Master', 'PMP', 'ITIL Foundation', 'Adobe UX Designer', 'ISTQB Tester'],
      careerPaths: ['DevOps Engineer', 'QA Engineer', 'UX/UI Designer', 'Project Manager', 'Blockchain Developer', 'IoT Specialist']
    }
  ];

  const stats = [
    { number: '2000+', label: 'Students Trained', icon: <FaUsers size={30} /> },
    { number: '96%', label: 'Placement Rate', icon: <FaChartLine size={30} /> },
    { number: '500+', label: 'Tech Companies', icon: <FaBriefcase size={30} /> },
    { number: '25 LPA', label: 'Highest Package', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Industry Expert Trainers',
      description:
        'Learn from senior software engineers, architects, and tech leads with 10-15 years of experience at leading tech giants like Google, Microsoft, Amazon, and top Indian IT companies.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80'
    },
    {
      icon: <FaAward size={50} />,
      title: 'Industry Certifications',
      description:
        'Prepare for top certifications including AWS, Azure, Google Cloud, CCNA, CEH, PMP, Scrum Master, and more with dedicated certification training and practice exams.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
    },
    {
      icon: <FaCode size={50} />,
      title: 'Hands-on Projects',
      description:
        'Build real-world applications, deploy to cloud, work with live APIs, contribute to open-source, and create a professional portfolio with 10+ industry-standard projects.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
    },
    {
      icon: <FaBriefcase size={50} />,
      title: 'Tech Company Placements',
      description:
        'Direct placement opportunities with 500+ partner companies including TCS, Infosys, Wipro, Cognizant, Tech Mahindra, startups, and MNCs with 96% placement success.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    }
  ];

  /** ------------------------
   *        IT FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What are the eligibility criteria for IT courses?',
      answer:
        'Most IT courses are open to anyone with basic computer knowledge. For advanced courses like Data Science, AI, and Cloud Computing, graduation in any stream is preferred. Programming courses start from absolute beginner level.'
    },
    {
      id: 2,
      question: 'Do I need prior programming experience?',
      answer:
        'No prior experience needed for beginner courses. We offer Python for Beginners, Java Programming basics, and Web Development fundamentals. Advanced courses require basic programming knowledge which we can help you build through our foundation programs.'
    },
    {
      id: 3,
      question: 'Which programming language should I learn first?',
      answer:
        'We recommend Python for beginners due to its simplicity and versatility. Python is used in web development, data science, AI, automation, and more. Java is excellent for enterprise applications and Android development. JavaScript is essential for web development.'
    },
    {
      id: 4,
      question: 'What are the job opportunities after completing IT courses?',
      answer:
        'IT offers diverse opportunities including Software Developer (₹3.5-15 LPA), Data Scientist (₹6-20 LPA), Cloud Engineer (₹6-22 LPA), Cybersecurity Analyst (₹5-18 LPA), Full Stack Developer (₹4-16 LPA), and many more specialized roles.'
    },
    {
      id: 5,
      question: 'Do you provide certification preparation?',
      answer:
        'Yes! We prepare students for AWS, Azure, Google Cloud, CCNA, CompTIA, CEH, PMP, Scrum Master, Oracle, Microsoft, and many other industry certifications with dedicated training, mock exams, and study materials.'
    },
    {
      id: 6,
      question: 'Will I work on real projects?',
      answer:
        'Absolutely! Every course includes 5-10 hands-on projects. You\'ll build web applications, deploy to cloud, create mobile apps, work with APIs, contribute to GitHub, and create a professional portfolio showcasing your work.'
    },
    {
      id: 7,
      question: 'What is the duration and fee structure?',
      answer:
        'Course duration ranges from 3-12 months depending on the program. We offer flexible payment options, EMI facilities, and scholarship programs. Contact our admissions team for detailed fee structure and current offers.'
    },
    {
      id: 8,
      question: 'Is online training available?',
      answer:
        'Yes! We offer both online and offline training with live classes, recorded sessions, 24/7 lab access, doubt clearing sessions, and complete learning management system. Online students get the same quality training as classroom students.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          padding: '100px 20px 80px',
          position: 'relative',
        }}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '20px' }}>
              <FaLaptopCode size={60} style={{ color: '#1E3679' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              IT SERVICES
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER's IT Services offer comprehensive technology training across 30+ courses in Programming, Data Science, Cloud Computing, Cybersecurity, AI, and emerging technologies. Our expert-led programs combine hands-on projects with industry certifications, preparing you for high-paying tech careers. With 96% placement success and partnerships with 500+ tech companies, we transform beginners into job-ready IT professionals.
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
                    background: 'rgba(30,54,121,0.2)',
                    border: '2px solid rgba(0,170,138,0.3)',
                    borderRadius: '20px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{  color: '#00AA8A', marginBottom: '20px' }}>
                    {stat.icon}
                  </div>
                  <div className="display-4 fw-bold" style={{ color: '#FBD21A' }}>{stat.number}</div>
                  <div style={{ opacity: 0.9 }}>{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE ACCORDION */}
      <section style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our IT Course Offerings</h2>
            <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Choose from our comprehensive IT training programs across multiple technology domains</p>
          </motion.div>

          {services.map((service, idx) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-4">

              <div style={{background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>

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
                    <div style={{ marginBottom: '10px', color: '#00AA8A' }}>{service.icon}</div>

                    <h2 className="fw-bold mb-3">{service.title}</h2>

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                     
                      <span style={{ padding: '8px 16px', background: 'rgba(251,210,26,0.2)', borderRadius: '20px', border: '1px solid rgba(251,210,26,0.3)' }}>
                        <FaAward size={14} /> {service.level}
                      </span>
                     
                    </div>

                    <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{service.description}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00AA8A', fontWeight: 600 }}>
                      View Curriculum {expandedService === service.id ? <FaChevronUp /> : <FaChevronDown />}
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

                        <h3 className="fw-bold mb-4" style={{ color: '#00AA8A' }}>What You Will Learn</h3>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '15px', marginBottom: '30px' }}>
                          {service.details.map((detail, idx) => (
                            <motion.div 
                              key={idx}
                              whileHover={{ x: 5 }}
                              style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                              <FaCheckCircle size={16} style={{color: '#00AA8A', marginRight: '8px' }} />
                              {detail}
                            </motion.div>
                          ))}
                        </div>

                        {/* Certifications */}
                        <h4 className="fw-bold mb-3" style={{  color: '#FBD21A' }}>Certifications Prepared</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.certifications.map((cert, idx) => (
                            <span key={idx} style={{ padding: '10px 20px',  background: 'rgba(251,210,26,0.2)', borderRadius: '25px', border: '1px solid rgba(251,210,26,0.5)' }}>
                              <FaAward style={{ marginRight: '8px' }} /> {cert}
                            </span>
                          ))}
                        </div>

                        {/* Career Paths */}
                        <h4 className="fw-bold mb-3" style={{color: '#00AA8A' }}>Career Opportunities</h4>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                          {service.careerPaths.map((career, idx) => (
                            <span key={idx} style={{ padding: '10px 20px',  background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
                              {career}
                            </span>
                          ))}
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
      <section style={{ padding: '80px 20px', background: 'rgba(30,54,121,0.1)' }}>
        <div className="container">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
            <h2 className="fw-bold text-white">Why Choose ZEPFTER IT Services?</h2>
            <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
              Transform your tech career with cutting-edge training and industry placements.
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
                        <div style={{ color: '#00AA8A' }}>{item.icon}</div>
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
              Everything you need to know before starting your IT career journey.
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

export default ITServicesPage;