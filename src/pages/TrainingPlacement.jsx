import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp,
  FaUserTie, 
  FaBriefcase, 
  FaClipboardList, 
  FaHandshake,
  FaComments,
  FaFileAlt,
  FaCheckCircle,
  FaAward,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaLightbulb
} from "react-icons/fa";

const TrainingPlacementPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  /** ------------------------
   *   TRAINING & PLACEMENT CONTENT
   * ------------------------ */
  const services = [
    {
      id: 'placement-assistance',
      title: '100% Placement Assistance Program',
      icon: <FaBriefcase size={30} />,
      duration: 'Continuous Support',
      level: 'All Students',
      salary: 'â‚¹3.5 - â‚¹25 LPA',
      description:
        'Comprehensive placement support from resume building to job offers. Our dedicated placement team connects you with 500+ hiring partners across Medical, Clinical, IT, and Pharmaceutical industries. Get personalized career guidance, company referrals, and direct placement opportunities.',
      image1: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
      details: [
        'Resume Building & Optimization',
        'LinkedIn Profile Enhancement',
        'Job Search Strategy & Planning',
        'Company Research & Analysis',
        'Application Tracking Support',
        'Direct Company Referrals',
        'Placement Drives & Job Fairs',
        'Salary Negotiation Guidance',
        'Offer Letter Review Support',
        'Background Verification Assistance',
        'Onboarding Support',
        'Career Path Planning'
      ],
      benefits: [
        '500+ Partner Companies (TCS, Infosys, Max Healthcare, Quintiles)',
        '95% Placement Success Rate',
        'Average Package: â‚¹4.5 - â‚¹8 LPA',
        'Highest Package: â‚¹25 LPA (Data Science)',
        'Dedicated Placement Coordinator',
        'Lifetime Career Support',
        'Job Alerts & Notifications',
        'Alumni Network Access'
      ],
      outcomes: [
        'Professional resume that stands out',
        'Strong LinkedIn presence',
        'Interview-ready confidence',
        'Multiple job offers',
        'Competitive salary packages',
        'Career growth opportunities',
        'Industry network connections'
      ],
      partners: ['TCS', 'Infosys', 'Wipro', 'Max Healthcare', 'Apollo Hospitals', 'Quintiles IMS', 'Covance', 'Dr. Reddy\'s', 'Sun Pharma'],
      careerPaths: ['Medical Coder', 'Clinical Research Associate', 'Software Developer', 'Data Scientist', 'QA Manager', 'Regulatory Affairs Specialist']
    },

    {
      id: 'interview-preparation',
      title: 'Interview Preparation & Training',
      icon: <FaUserTie size={30} />,
      duration: '4-6 weeks',
      level: 'All Levels',
      salary: 'Skill Enhancement',
      description:
        'Master the art of interviewing with comprehensive training in technical skills, HR rounds, group discussions, and behavioral interviews. Practice with mock interviews, video feedback, and real-time coaching from industry experts who know exactly what companies are looking for.',
      image1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
      details: [
        'Technical Interview Preparation',
        'HR Round Best Practices',
        'Group Discussion Training',
        'Case Study Analysis',
        'Aptitude Test Preparation',
        'Behavioral Interview Techniques',
        'Mock Interview Sessions (5-10 rounds)',
        'Video Recorded Practice',
        'Performance Feedback & Analysis',
        'Body Language & Communication',
        'Confidence Building Exercises',
        'Stress Management Techniques'
      ],
      benefits: [
        'Expert Interview Coaches',
        '10+ Mock Interview Sessions',
        'Video Recording & Analysis',
        'Personalized Feedback Reports',
        'Domain-Specific Interview Prep',
        'Real Company Interview Questions',
        'Aptitude Test Practice (500+ questions)',
        'Interview Tips & Tricks Library'
      ],
      outcomes: [
        'Confident interview performance',
        'Handle technical questions expertly',
        'Ace HR and behavioral rounds',
        'Master group discussions',
        'Professional communication skills',
        'Overcome interview anxiety',
        'Create lasting impressions'
      ],
      partners: ['Industry Hiring Managers', 'HR Professionals', 'Technical Leads', 'Career Counselors'],
      careerPaths: ['All Job Roles - Interview Skills are Universal']
    },

    {
      id: 'soft-skills',
      title: 'Professional Soft Skills Development',
      icon: <FaComments size={30} />,
      duration: '3-4 weeks',
      level: 'All Students',
      salary: 'Career Enhancement',
      description:
        'Develop essential workplace skills including communication, teamwork, leadership, time management, and professional etiquette. Learn email writing, presentation skills, conflict resolution, and workplace professionalism that employers value as much as technical skills.',
      image1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
      details: [
        'Professional Communication Skills',
        'Business Email Writing',
        'Presentation Skills & Public Speaking',
        'Team Collaboration & Teamwork',
        'Leadership & Management Basics',
        'Time Management & Productivity',
        'Problem-Solving Techniques',
        'Critical Thinking Development',
        'Conflict Resolution Skills',
        'Professional Etiquette & Grooming',
        'Workplace Ethics & Values',
        'Emotional Intelligence Training'
      ],
      benefits: [
        'Interactive Workshops & Activities',
        'Real-world Scenario Practice',
        'Group Projects & Teamwork',
        'Personal Development Plan',
        'Communication Skill Assessment',
        'Professional Certification',
        'Ongoing Mentorship',
        'Peer Learning Community'
      ],
      outcomes: [
        'Confident communication',
        'Professional email etiquette',
        'Impressive presentations',
        'Strong teamwork abilities',
        'Effective time management',
        'Leadership qualities',
        'Workplace readiness'
      ],
      partners: ['Corporate Trainers', 'Leadership Coaches', 'Communication Experts'],
      careerPaths: ['Essential for All Careers - Professional Development']
    },

    {
      id: 'resume-portfolio',
      title: 'Resume & Portfolio Building',
      icon: <FaFileAlt size={30} />,
      duration: '1-2 weeks',
      level: 'All Students',
      salary: 'Professional Branding',
      description:
        'Create a powerful professional brand with an ATS-optimized resume, compelling cover letter, professional portfolio, and strong LinkedIn profile. Learn to showcase your skills, projects, and achievements in ways that attract recruiters and hiring managers.',
      image1: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
      details: [
        'ATS-Optimized Resume Writing',
        'Cover Letter Creation',
        'LinkedIn Profile Optimization',
        'Professional Portfolio Development',
        'GitHub Profile Setup (IT Students)',
        'Achievement Highlighting Techniques',
        'Keywords & Action Verbs',
        'Formatting & Design Best Practices',
        'Multiple Resume Versions (Job-specific)',
        'Personal Branding Strategy',
        'Online Presence Management',
        'Professional Email Signature'
      ],
      benefits: [
        'Professional Resume Template Library',
        'ATS Compatibility Check',
        'Unlimited Resume Reviews',
        'LinkedIn Headline Optimization',
        'Portfolio Website Guidance',
        'Personal Brand Consultation',
        'Cover Letter Templates',
        'Job-Specific Resume Customization'
      ],
      outcomes: [
        'ATS-friendly resume',
        'Compelling cover letters',
        'Optimized LinkedIn profile',
        'Professional portfolio',
        'Strong personal brand',
        'Increased recruiter visibility',
        'Higher interview calls'
      ],
      partners: ['Resume Writers', 'Career Advisors', 'LinkedIn Experts', 'Portfolio Designers'],
      careerPaths: ['All Job Seekers - Professional Branding']
    },

    {
      id: 'aptitude-training',
      title: 'Aptitude & Reasoning Training',
      icon: <FaLightbulb size={30} />,
      duration: '4 weeks',
      level: 'All Students',
      salary: 'Competitive Exam Prep',
      description:
        'Master quantitative aptitude, logical reasoning, verbal ability, and analytical skills required for company placement tests. Practice with 1000+ questions, timed mock tests, and adaptive learning techniques to score high in competitive assessments.',
      image1: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      details: [
        'Quantitative Aptitude (Numbers, Percentages, Profit/Loss)',
        'Logical Reasoning (Patterns, Sequences, Puzzles)',
        'Verbal Ability (Grammar, Comprehension, Vocabulary)',
        'Data Interpretation (Graphs, Tables, Charts)',
        'Analytical Reasoning',
        'Problem-Solving Techniques',
        'Speed & Accuracy Training',
        'Shortcut Methods & Tricks',
        'Time Management Strategies',
        'Mock Tests (50+ Full-length)',
        'Company-Specific Test Prep',
        'Performance Analysis & Improvement'
      ],
      benefits: [
        '1000+ Practice Questions',
        '50+ Full-length Mock Tests',
        'Company-wise Previous Papers',
        'Video Solution Explanations',
        'Personalized Learning Path',
        'Doubt Clearing Sessions',
        'Performance Analytics Dashboard',
        'Mobile App Access'
      ],
      outcomes: [
        'High aptitude test scores',
        'Quick problem-solving',
        'Improved accuracy',
        'Time management mastery',
        'Competitive exam readiness',
        'Confidence in assessments',
        'Better job opportunities'
      ],
      partners: ['Aptitude Trainers', 'Test Prep Experts', 'Assessment Specialists'],
      careerPaths: ['All Technical & Non-Technical Roles - Placement Test Prep']
    },

    {
      id: 'career-counseling',
      title: 'Career Counseling & Guidance',
      icon: <FaHandshake size={30} />,
      duration: 'Ongoing Support',
      level: 'All Students',
      salary: 'Career Planning',
      description:
        'Receive personalized career guidance from experienced counselors who understand industry trends, job market demands, and career paths. Get help choosing the right career direction, skill development planning, and making informed career decisions at every stage.',
      image1: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
      image2: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=80',
      details: [
        'One-on-One Counseling Sessions',
        'Career Assessment & Analysis',
        'Skills Gap Identification',
        'Career Path Planning',
        'Industry Trend Insights',
        'Job Market Research',
        'Salary Expectations & Negotiation',
        'Career Transition Guidance',
        'Higher Education Advice',
        'Specialization Recommendations',
        'Long-term Career Strategy',
        'Work-Life Balance Guidance'
      ],
      benefits: [
        'Expert Career Counselors',
        'Personalized Career Roadmap',
        'Industry Insights & Trends',
        'Skill Development Planning',
        'Regular Follow-up Sessions',
        'Career Change Support',
        'Mentorship Program',
        'Alumni Network Connect'
      ],
      outcomes: [
        'Clear career direction',
        'Informed career decisions',
        'Realistic career goals',
        'Strategic skill development',
        'Industry understanding',
        'Confidence in career path',
        'Long-term success planning'
      ],
      partners: ['Career Counselors', 'Industry Mentors', 'HR Professionals', 'Senior Alumni'],
      careerPaths: ['Personalized for Individual Career Goals']
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Placed', icon: <FaUsers size={30} /> },
    { number: '95%', label: 'Placement Success', icon: <FaChartLine size={30} /> },
    { number: '500+', label: 'Partner Companies', icon: <FaBriefcase size={30} /> },
    { number: '25 LPA', label: 'Highest Package', icon: <FaAward size={30} /> }
  ];

  const whyChoose = [
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Industry-Connected Placement Team',
      description:
        'Our placement team has direct connections with HR managers, recruiters, and hiring decision-makers at 500+ companies across Medical, Clinical, IT, and Pharmaceutical industries.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80'
    },
    {
      icon: <FaRocket size={50} />,
      title: 'Proven Placement Track Record',
      description:
        '95% placement success rate with students placed in top companies like TCS, Infosys, Max Healthcare, Apollo Hospitals, Quintiles IMS, Dr. Reddy\'s, Sun Pharma, and more.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
    },
    {
      icon: <FaHandshake size={50} />,
      title: 'Personalized Career Support',
      description:
        'Every student gets a dedicated placement coordinator who provides one-on-one guidance, monitors progress, and ensures you receive the best job opportunities matching your skills.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
      icon: <FaAward size={50} />,
      title: 'Competitive Salary Packages',
      description:
        'Our students receive competitive packages ranging from â‚¹3.5 LPA to â‚¹25 LPA based on domain and experience. We prepare you to negotiate better offers and showcase your true value.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80'
    }
  ];

  /** ------------------------
   *   TRAINING & PLACEMENT FAQ
   * ------------------------ */
  const faqs = [
    {
      id: 1,
      question: 'What is included in your placement assistance program?',
      answer:
        'Our 100% placement assistance includes resume building, LinkedIn optimization, mock interviews, aptitude training, soft skills development, direct company referrals, placement drives, salary negotiation support, and lifetime career guidance.'
    },
    {
      id: 2,
      question: 'How many companies does ZEPFTER partner with for placements?',
      answer:
        'We have partnerships with 500+ companies including TCS, Infosys, Wipro, Tech Mahindra, Max Healthcare, Apollo Hospitals, Fortis, Quintiles IMS, Covance, Parexel, Dr. Reddy\'s, Sun Pharma, Cipla, and many more across IT, Healthcare, Clinical Research, and Pharmaceutical sectors.'
    },
    {
      id: 3,
      question: 'What is your placement success rate?',
      answer:
        'ZEPFTER maintains a 95% placement success rate. Our dedicated placement team works continuously to ensure every student gets job opportunities. We track placements for up to 1 year after course completion.'
    },
    {
      id: 4,
      question: 'What salary packages can I expect?',
      answer:
        'Salary packages vary by domain and experience: Medical Coding (â‚¹3.5-8 LPA), Clinical Research (â‚¹4-12 LPA), IT & Software (â‚¹4-20 LPA), Data Science (â‚¹6-25 LPA), Pharmaceutical QA/QC (â‚¹4-15 LPA). Our highest package is â‚¹25 LPA.'
    },
    {
      id: 5,
      question: 'How many mock interviews do you provide?',
      answer:
        'Each student receives 5-10 comprehensive mock interview sessions covering technical rounds, HR rounds, group discussions, and panel interviews. All sessions are video recorded with detailed feedback and improvement plans.'
    },
    {
      id: 6,
      question: 'Do you provide placement support after course completion?',
      answer:
        'Yes! We provide lifetime placement support. Even after securing your first job, you can return to us for career guidance, job changes, or upskilling recommendations. Our alumni network and placement team are always available.'
    },
    {
      id: 7,
      question: 'How long does it take to get placed after completing the course?',
      answer:
        'Most students get placed within 2-4 months after course completion. Timing depends on job availability, interview performance, and market conditions. We actively work to reduce this timeline through dedicated placement drives.'
    },
    {
      id: 8,
      question: 'Do you charge any placement fees?',
      answer:
        'No! All placement services are 100% FREE for ZEPFTER students. There are no hidden charges for resume building, mock interviews, company referrals, or placement assistance. It\'s included in your course fee.'
    },
    {
      id: 9,
      question: 'Can I get placement support if I\'m looking for a job change?',
      answer:
        'Absolutely! Our placement support is available to all ZEPFTER alumni, whether you\'re a fresher or looking for better opportunities. We help with career transitions, upskilling recommendations, and connecting you with better roles.'
    },
    {
      id: 10,
      question: 'What if I don\'t get placed within the expected timeline?',
      answer:
        'We continue providing placement support until you secure a job. Our team will analyze your interview performance, identify areas of improvement, provide additional training if needed, and connect you with more opportunities continuously.'
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
          background: 'linear-gradient(135deg, rgba(10,10,31,0.4) 0%, rgba(30,54,121,0.5) 50%, rgba(10,10,31,0.4) 100%), url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80")',
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
              <FaUserTie size={60} style={{ color: '#FBD21A' }} />
            </div>
            <h1 className="fw-bold text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              TRAINING & PLACEMENT
            </h1>
            <p className="text-white mx-auto" style={{ maxWidth: '800px', opacity: 0.9, lineHeight: '1.8', marginTop: '10px'}}>
              ZEPFTER's Training & Placement program offers comprehensive career support with 95% placement success. From resume building and interview preparation to soft skills development and career counseling, our dedicated placement team connects you with 500+ hiring partners. With personalized guidance, mock interviews, and direct company referrals, we transform students into industry-ready professionals ready to excel in Medical, Clinical, IT, and Pharmaceutical careers.
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
                        <div style={{ color: '#00AA8A', marginBottom: '20px' }}>
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
                  <h2 className="fw-bold text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Our Course Offerings</h2>
                  <p className="text-white mx-auto" style={{ maxWidth: '700px', opacity: 0.8 }}>Choose from our advanced healthcare programs</p>
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
                                    <FaCheckCircle size={16} style={{ color: '#00AA8A', marginRight: '8px' }} />
                                    {detail}
                                  </motion.div>
                                ))}
                              </div>
      
                              {/* Certifications */}
                              <h4 className="fw-bold mb-3" style={{ color: '#FBD21A' }}>Certifications Prepared</h4>
                              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                {service.certifications.map((cert, idx) => (
                                  <span key={idx} style={{ padding: '10px 20px', background: 'rgba(251,210,26,0.2)', borderRadius: '25px', border: '1px solid rgba(251,210,26,0.5)' }}>
                                    <FaAward style={{ marginRight: '8px' }} /> {cert}
                                  </span>
                                ))}
                              </div>
      
                              {/* Career Paths */}
                              <h4 className="fw-bold mb-3" style={{ color: '#00AA8A' }}>Career Opportunities</h4>
                              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                {service.careerPaths.map((career, idx) => (
                                  <span key={idx} style={{ padding: '10px 20px', background: 'rgba(0,170,138,0.2)', borderRadius: '20px', border: '1px solid rgba(0,170,138,0.3)' }}>
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
                  <h2 className="fw-bold text-white">Why Choose ZEPFTER Medical Courses?</h2>
                  <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
                    Transform your healthcare career with industry-leading training and global opportunities.
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
      
      
            {/* --------------------------
                   FAQ SECTION
             --------------------------- */}
            <section style={{ padding: '80px 20px', background: 'rgba(255,255,255,0.03)' }}>
              <div className="container">
      
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-5">
                  <h2 className="fw-bold text-white">Frequently Asked Questions</h2>
                  <p className="text-white" style={{ maxWidth: '700px', margin: 'auto', opacity: 0.8 }}>
                    Everything you need to know before starting your journey.
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

export default TrainingPlacementPage;