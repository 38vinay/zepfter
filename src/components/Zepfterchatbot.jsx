import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

/* ======================================================
     COMPREHENSIVE ZEPFTER KNOWLEDGE BASE
   ====================================================== */

const KNOWLEDGE_BASE = {
  company: {
    name: "ZEPFTER",
    description: "ZEPFTER is a multi-service company combining deep IT knowledge, pharmaceutical domain skills, and career placement support. We deliver world-class pharmaceutical and IT solutions that drive innovation, ensure compliance, and accelerate digital transformation for businesses globally.",
    vision: "To be the global leader in pharmaceutical and IT services, recognized for innovation, quality excellence, and transformative solutions that shape the future of healthcare and technology.",
    mission: "To deliver exceptional pharmaceutical and IT solutions that ensure regulatory compliance, drive operational efficiency, and enable digital transformation for our clients worldwide.",
    established: "Professional services company with 200+ industry experts",
    stats: {
      projects: "1500+ Projects Delivered",
      clients: "450+ Global Clients",
      experts: "200+ Industry Experts",
      satisfaction: "99% Client Satisfaction"
    }
  },

  services: {
    "Medical Affairs": {
      description: "Comprehensive medical affairs services including medical writing, pharmacovigilance, regulatory strategy, and medical information management.",
      offerings: ["Medical Writing", "Pharmacovigilance", "Regulatory Strategy", "Medical Information"],
      stats: "150+ Projects | 40+ Clients"
    },
    "Clinical Research": {
      description: "End-to-end clinical research services covering data management, biostatistics, clinical trial management, and safety monitoring.",
      offerings: ["Clinical Data Management", "Biostatistics", "Clinical Trial Management", "Safety Monitoring"],
      stats: "200+ Projects | 50+ Clients"
    },
    "Digital Transformation": {
      description: "Cutting-edge IT services including cloud computing, AI/ML solutions, cybersecurity, and enterprise software development.",
      offerings: ["Cloud Computing", "AI/ML Solutions", "Cybersecurity", "Enterprise Software Development"],
      stats: "500+ Projects | 100+ Clients"
    },
    "Pharma Consulting": {
      description: "Expert pharmaceutical consulting services focusing on quality assurance, regulatory compliance, GMP standards, and process optimization.",
      offerings: ["Quality Assurance", "Regulatory Compliance", "GMP Standards", "Process Optimization"]
    },
    "Talent Solutions": {
      description: "Strategic recruitment and workforce planning services to help organizations build high-performing teams.",
      offerings: ["Strategic Recruitment", "Workforce Planning", "Career Development", "Talent Acquisition"]
    },
    "Corporate Training": {
      description: "Professional development programs including skills enhancement, industry certifications, and custom training solutions.",
      offerings: ["Professional Development", "Skills Enhancement", "Industry Certifications", "Custom Training Programs"]
    }
  },

  courses: {
    medical: {
      name: "Medical Courses",
      programs: ["Medical Coding (ICD-10, CPT, HCPCS)", "Medical Billing", "Medical Writing", "Medical Affairs"],
      modules: ["ICD-10 & CPT Coding", "HCPCS & Procedure Coding", "Revenue Cycle Management", "Denial Management", "EHR Software Training"],
      duration: "2–4 Months",
      eligibility: "Life Science graduates preferred",
      careers: ["Medical Coder", "Coding Quality Analyst", "Billing Specialist", "Denial Analyst", "Medical Writer"],
      salary: "₹3.5 – ₹8 LPA for freshers",
      placement: "100% placement assistance"
    },
    clinical: {
      name: "Clinical Courses",
      programs: ["Clinical Research", "Clinical Data Management", "Clinical Trials", "BA/BE Studies"],
      modules: ["GCP, ICH, Ethics", "Clinical Trial Phases", "Drug Development Lifecycle", "Protocol Creation", "CDM: CRF, EDC, Query Management"],
      duration: "3–6 Months",
      eligibility: "Life Sciences / Pharma graduates",
      careers: ["Clinical Research Coordinator", "CRA", "CDM Specialist", "PV Associate", "Clinical Trial Manager"],
      salary: "₹4 – ₹12 LPA for freshers",
      placement: "100% placement assistance"
    },
    it: {
      name: "IT & Technology Courses",
      programs: ["Full Stack Development", "Python", "Java", "Data Science", "AI/ML", "Cybersecurity", "Cloud Computing"],
      modules: ["Python, Java", "Frontend: HTML/CSS/JS/React", "Backend: Node.js", "Databases: SQL, MongoDB", "Cloud Basics: AWS/Azure"],
      duration: "4–8 Months",
      eligibility: "Any graduate",
      careers: ["Full Stack Developer", "Software Developer", "Data Analyst", "AI Engineer", "Cloud Architect"],
      salary: "₹4 – ₹20 LPA",
      placement: "100% placement assistance"
    },
    pharma: {
      name: "Pharmaceutical Skills",
      programs: ["Quality Assurance", "Quality Control", "Regulatory Affairs", "Manufacturing", "Documentation"],
      modules: ["GMP/GLP", "QA & QC Systems", "Regulatory Affairs (FDA/ICH/EMA)", "Stability Studies", "SOP Documentation"],
      duration: "4–7 Months",
      eligibility: "B.Pharm / M.Pharm / B.Sc / M.Sc",
      careers: ["QA Executive", "QC Analyst", "Regulatory Associate", "Documentation Specialist"],
      salary: "₹3.5 – ₹15 LPA",
      placement: "100% placement assistance"
    }
  },

  placement: {
    assistance: "100% placement assistance with comprehensive support",
    services: ["Resume Building", "Mock Interviews", "Aptitude Training", "HR Training", "Soft Skills Development"],
    partners: "Tie-ups with leading pharmaceutical, biotech, and IT companies",
    support: "Dedicated placement team with industry connections"
  },

  internships: {
    available: true,
    domains: ["Medical Coding", "Clinical Research", "IT & Software Development", "Pharma QA/QC", "Data Science", "Medical Writing"],
    duration: "2-6 months",
    benefits: "Real-world experience, industry exposure, certificate of completion"
  },

  contact: {
    email: "info@zepfter.com",
    phone: "+91-XXXXXXXXXX",
    address: "Corporate Office Location",
    website: "www.zepfter.com",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM"
  },

  values: [
    "Quality with Excellence",
    "Client Centricity",
    "Innovation and Execution",
    "Regulatory Compliance"
  ],

  workApproach: [
    "Client Centricity - Tailored solutions for unique business challenges",
    "Innovation and Execution - Cutting-edge solutions with agile methodology",
    "Collaboration - Highly capable teams with ethical partnerships",
    "Proven Methodology - Comprehensive analysis to ongoing support"
  ]
};

/* ======================================================
     INTELLIGENT RESPONSE ENGINE
   ====================================================== */

const generateIntelligentResponse = (userInput) => {
  const input = userInput.toLowerCase().trim();

  // Greeting responses
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(input)) {
    return "Hello! 👋 Welcome to ZEPFTER! I'm your virtual assistant. I can help you with information about our services, courses, placements, internships, and more. How can I assist you today?";
  }

  if (/^(thanks|thank you|thx)/.test(input)) {
    return "You're very welcome! 😊 Feel free to ask if you have any more questions about ZEPFTER!";
  }

  if (/^(bye|goodbye|see you)/.test(input)) {
    return "Goodbye! 👋 Thank you for connecting with ZEPFTER. Have a great day! Feel free to return anytime you need assistance.";
  }

  // Company Information
  if (/(what is|tell me about|about) zepfter|company (info|information|details)|who are you/.test(input)) {
    return `🏢 **About ZEPFTER**\n\n${KNOWLEDGE_BASE.company.description}\n\n📊 **Our Impact:**\n• ${KNOWLEDGE_BASE.company.stats.projects}\n• ${KNOWLEDGE_BASE.company.stats.clients}\n• ${KNOWLEDGE_BASE.company.stats.experts}\n• ${KNOWLEDGE_BASE.company.stats.satisfaction}\n\nWould you like to know about our services, courses, or anything specific?`;
  }

  if (/vision|future|goal/.test(input)) {
    return `🎯 **Our Vision:**\n${KNOWLEDGE_BASE.company.vision}\n\n💼 **Our Mission:**\n${KNOWLEDGE_BASE.company.mission}`;
  }

  if (/values|principles|culture/.test(input)) {
    return `💎 **Our Core Values:**\n\n${KNOWLEDGE_BASE.values.map((v, i) => `${i + 1}. ${v}`).join('\n')}\n\nThese values guide everything we do at ZEPFTER!`;
  }

  if (/how (do you|does zepfter) work|approach|methodology/.test(input)) {
    return `🔧 **How We Work:**\n\n${KNOWLEDGE_BASE.workApproach.map((a, i) => `${i + 1}. ${a}`).join('\n\n')}\n\nOur structured approach ensures successful project delivery and sustained value for our clients.`;
  }

  // Services
  if (/services|what (do you|does zepfter) (offer|provide)|solutions/.test(input)) {
    const servicesList = Object.keys(KNOWLEDGE_BASE.services).map((service, i) =>
      `${i + 1}. **${service}** - ${KNOWLEDGE_BASE.services[service].description}`
    ).join('\n\n');
    return `🚀 **ZEPFTER Services:**\n\n${servicesList}\n\nWould you like detailed information about any specific service?`;
  }

  // Individual Service Details
  for (const [serviceName, serviceData] of Object.entries(KNOWLEDGE_BASE.services)) {
    if (input.includes(serviceName.toLowerCase()) ||
      serviceData.offerings.some(o => input.includes(o.toLowerCase()))) {
      return `📘 **${serviceName}**\n\n${serviceData.description}\n\n**Key Offerings:**\n${serviceData.offerings.map(o => `• ${o}`).join('\n')}${serviceData.stats ? `\n\n**Track Record:** ${serviceData.stats}` : ''}\n\nInterested in learning more? Feel free to ask!`;
    }
  }

  // Courses
  if (/(courses|training|programs|learn|study)|what can i (learn|study)/.test(input)) {
    return `📚 **ZEPFTER Courses:**\n\n1. **Medical Courses** - Medical Coding, Billing, Writing & Affairs\n2. **Clinical Courses** - Clinical Research, Data Management, Trials\n3. **IT & Technology** - Full Stack, Data Science, AI/ML, Cloud\n4. **Pharmaceutical Skills** - QA, QC, Regulatory Affairs\n\nAll courses include 100% placement assistance! 🎯\n\nWhich course would you like to know more about?`;
  }

  // Individual Course Details
  for (const [courseKey, courseData] of Object.entries(KNOWLEDGE_BASE.courses)) {
    if (input.includes(courseKey) ||
      input.includes(courseData.name.toLowerCase()) ||
      courseData.programs.some(p => input.includes(p.toLowerCase()))) {

      return `📘 **${courseData.name}**\n\n**Programs:**\n${courseData.programs.map(p => `• ${p}`).join('\n')}\n\n**Duration:** ${courseData.duration}\n**Eligibility:** ${courseData.eligibility}\n\n**Career Opportunities:**\n${courseData.careers.map(c => `• ${c}`).join('\n')}\n\n**Expected Salary:** ${courseData.salary}\n\n✅ ${courseData.placement}\n\nWant to know about modules or have other questions?`;
    }
  }

  // Course Modules
  if (/modules|syllabus|curriculum|what will i learn/.test(input)) {
    for (const [courseKey, courseData] of Object.entries(KNOWLEDGE_BASE.courses)) {
      if (input.includes(courseKey) || input.includes(courseData.name.toLowerCase())) {
        return `📖 **${courseData.name} - Course Modules:**\n\n${courseData.modules.map((m, i) => `${i + 1}. ${m}`).join('\n')}\n\n**Duration:** ${courseData.duration}\n\nThese modules are designed to provide comprehensive, industry-relevant training!`;
      }
    }
    return "Please specify which course modules you'd like to know about: Medical, Clinical, IT, or Pharma courses?";
  }

  // Salary Information
  if (/salary|pay|compensation|earning|package/.test(input)) {
    const salaryInfo = Object.entries(KNOWLEDGE_BASE.courses).map(([key, data]) =>
      `• **${data.name}:** ${data.salary}`
    ).join('\n');
    return `💰 **Expected Salary Ranges:**\n\n${salaryInfo}\n\nNote: Actual salaries may vary based on skills, experience, and company. Our placement team helps you negotiate the best offers!`;
  }

  // Duration
  if (/duration|how long|time|period/.test(input)) {
    const durationInfo = Object.entries(KNOWLEDGE_BASE.courses).map(([key, data]) =>
      `• **${data.name}:** ${data.duration}`
    ).join('\n');
    return `⏱️ **Course Durations:**\n\n${durationInfo}\n\nDurations are flexible based on your learning pace and prior knowledge!`;
  }

  // Eligibility
  if (/eligibility|qualification|who can (join|enroll)|requirements/.test(input)) {
    const eligibilityInfo = Object.entries(KNOWLEDGE_BASE.courses).map(([key, data]) =>
      `• **${data.name}:** ${data.eligibility}`
    ).join('\n');
    return `🎓 **Eligibility Criteria:**\n\n${eligibilityInfo}\n\nDon't worry if you're from a different background - we assess each candidate individually!`;
  }

  // Placement
  if (/placement|job|career|hiring|recruit/.test(input)) {
    return `💼 **Placement Assistance:**\n\n✅ ${KNOWLEDGE_BASE.placement.assistance}\n\n**Our Services Include:**\n${KNOWLEDGE_BASE.placement.services.map(s => `• ${s}`).join('\n')}\n\n**Industry Connections:**\n${KNOWLEDGE_BASE.placement.partners}\n\n**Support:**\n${KNOWLEDGE_BASE.placement.support}\n\nWe're committed to your career success!`;
  }

  // Internships
  if (/internship|intern|practical|hands.?on|experience/.test(input)) {
    return `🎯 **Internship Programs:**\n\n**Available Domains:**\n${KNOWLEDGE_BASE.internships.domains.map(d => `• ${d}`).join('\n')}\n\n**Duration:** ${KNOWLEDGE_BASE.internships.duration}\n\n**Benefits:**\n${KNOWLEDGE_BASE.internships.benefits}\n\nInternships provide valuable real-world experience and enhance your employability!`;
  }

  // Contact Information
  if (/contact|reach|call|email|phone|address|location|office/.test(input)) {
    return `📞 **Contact ZEPFTER:**\n\n**Email:** ${KNOWLEDGE_BASE.contact.email}\n**Phone:** ${KNOWLEDGE_BASE.contact.phone}\n**Website:** ${KNOWLEDGE_BASE.contact.website}\n\n**Office Hours:**\n${KNOWLEDGE_BASE.contact.hours}\n\nFeel free to reach out to us anytime!`;
  }

  // Fees/Cost
  if (/fee|cost|price|charge|afford|expensive/.test(input)) {
    return `💵 **Course Fees:**\n\nOur course fees are competitive and vary by program. We offer:\n\n• Flexible payment options\n• Installment plans\n• Scholarship opportunities for deserving candidates\n\nPlease contact us at ${KNOWLEDGE_BASE.contact.email} or ${KNOWLEDGE_BASE.contact.phone} for detailed fee structure and current offers!`;
  }

  // Batch/Schedule
  if (/batch|schedule|timing|when (does|do)|start|begin/.test(input)) {
    return `📅 **Batch Information:**\n\nWe offer flexible batch timings:\n\n• **Weekday Batches** - Morning & Evening\n• **Weekend Batches** - Saturday & Sunday\n• **Fast-Track Batches** - Intensive training\n\nNew batches start every month! Contact us for the next available batch in your preferred course.`;
  }

  // Online/Offline
  if (/online|offline|classroom|virtual|remote|mode/.test(input)) {
    return `💻 **Training Modes:**\n\nWe offer flexible learning options:\n\n• **Classroom Training** - Face-to-face interactive sessions\n• **Online Training** - Live virtual classes\n• **Hybrid Mode** - Combination of both\n\nAll modes include the same quality content, placement support, and certification!`;
  }

  // Certification
  if (/certificate|certification|credential/.test(input)) {
    return `🏆 **Certification:**\n\nUpon successful completion, you'll receive:\n\n• Industry-recognized ZEPFTER certificate\n• Course completion credentials\n• Project completion certificates\n• Internship certificates (if applicable)\n\nOur certifications are valued by employers across pharmaceutical, biotech, and IT industries!`;
  }

  // Default response for unmatched queries
  return `I'd be happy to help you! I can provide information about:\n\n• 🏢 Company Information & Values\n• 🚀 Our Services (Medical Affairs, Clinical Research, IT, Pharma Consulting, etc.)\n• 📚 Courses (Medical, Clinical, IT, Pharmaceutical)\n• 💼 Placement Assistance\n• 🎯 Internship Programs\n• 📞 Contact Information\n• 💰 Fees & Payment Options\n• 📅 Batch Schedules\n\nWhat would you like to know more about?`;
};

/* ======================================================
     CHATBOT COMPONENT
   ====================================================== */

export default function ZepfterChatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! 👋 Welcome to ZEPFTER! I'm your virtual assistant.\n\nI can help you with:\n• Company Information\n• Services & Solutions\n• Courses & Training Programs\n• Placement Assistance\n• Internships\n• Contact Details\n\nHow can I assist you today?",
    },
  ]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);



  /* ======================================================
     SEND HANDLER
   ====================================================== */

  const handleSend = (forced = null) => {
    const text = forced || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const reply = generateIntelligentResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setTyping(false);

      setTimeout(() => {
        setShowSuggestions(true);
      }, 1000);
    }, 800);
  };

  /* ======================================================
     QUICK SUGGESTIONS
   ====================================================== */

  const suggestions = [
    "About ZEPFTER",
    "What services do you offer?",
    "Tell me about courses",
    "Medical Courses",
    "Clinical Research",
    "IT Training",
    "Placement Assistance",
    "Internship Programs",
    "Contact Information",
  ];

  return (
    <>
      {/* Floating Avatar */}
      {!open && (
        <div className="chat-avatar" onClick={() => setOpen(true)}>
          <div className="robot-head">
            <div className="eyes">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      {/* Chatbox */}
      {open && (
        <div className="cb-box fade-slide">
          <div className="cb-header">
            <div>
              <h4>ZEPFTER Assistant 🤖</h4>
              <small style={{ fontSize: '0.75rem', opacity: 0.9 }}>Always here to help!</small>
            </div>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="cb-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                <pre style={{ whiteSpace: "pre-wrap", margin: 0, fontFamily: 'inherit' }}>{m.text}</pre>
              </div>
            ))}

            {typing && (
              <div className="msg bot typing">
                <span></span><span></span><span></span>
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* SUGGESTIONS */}
            {/* SUGGESTIONS */}
            {showSuggestions && (
              <div className="suggestion-container fade-in">
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>Quick questions:</p>
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => handleSend(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="cb-footer">
            <input
              type="text"
              placeholder="Ask me anything about ZEPFTER..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={() => handleSend()} disabled={!input.trim()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* =================== CSS =================== */}
      <style>{`

        /* Floating Robot Avatar */
        .chat-avatar {
          position: fixed;
          bottom: 25px;
          right: 25px;
          cursor: pointer;
          z-index: 9999;
          animation: floatUpDown 3s infinite;
        }
        .robot-head {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg,#1E3679,#00AA8A);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }
        .robot-head:hover {
          transform: scale(1.1);
        }
        .eyes { display: flex; gap: 12px; }
        .eyes span {
          width: 12px; height: 12px;
          background: #FBD21A; border-radius: 50%;
          animation: blink 2s infinite;
        }
        @keyframes blink { 50% { opacity: 0.4; } }

        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        /* CHATBOX */
        .cb-box {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 380px;
          max-width: 90vw;
          height: 550px;
          max-height: 80vh;
          background: white;
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          z-index: 9999;
          overflow: hidden;
        }

        .fade-slide {
          animation: fadeSlide 0.35s ease forwards;
        }
        .fade-in {
          animation: fadeIn 0.5s ease forwards;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cb-header {
          padding: 15px 18px;
          background: linear-gradient(135deg,#1E3679,#00AA8A);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cb-header h4 {
          margin: 0;
          font-size: 1.1rem;
        }

        .cb-header button {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .cb-header button:hover {
          background: rgba(255,255,255,0.3);
        }

        .cb-body {
          flex-grow: 1;
          padding: 15px;
          overflow-y: auto;
          background: #f8f9fa;
        }

        .cb-body::-webkit-scrollbar {
          width: 6px;
        }

        .cb-body::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 3px;
        }

        .msg {
          padding: 12px 16px;
          margin: 10px 0;
          border-radius: 12px;
          max-width: 85%;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        .msg.bot {
          background: #1E3679;
          color: white;
          border-bottom-left-radius: 4px;
        }
        .msg.user {
          background: #00AA8A;
          color: white;
          margin-left: auto;
          border-bottom-right-radius: 4px;
        }

        /* SUGGESTION BUTTONS */
        .suggestion-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 15px;
          padding: 10px;
          background: white;
          border-radius: 12px;
        }

        .suggestion-container button {
          background: #E8EAF6;
          border: 1px solid #C5CAE9;
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
          color: #1E3679;
          font-weight: 500;
        }
        .suggestion-container button:hover {
          background: #1E3679;
          color: white;
          border-color: #1E3679;
          transform: translateY(-2px);
        }

        /* Typing Animation */
        .typing {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .typing span {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.2s infinite;
        }
        .typing span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .typing span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes pulse {
          0%, 60%, 100% { transform: scale(1); opacity: 0.7; }
          30% { transform: scale(1.3); opacity: 1; }
        }

        /* Footer */
        .cb-footer {
          padding: 12px;
          background: white;
          border-top: 1px solid #e0e0e0;
          display: flex;
          gap: 10px;
        }

        .cb-footer input {
          flex-grow: 1;
          padding: 12px 16px;
          border-radius: 24px;
          border: 1px solid #ddd;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .cb-footer input:focus {
          border-color: #1E3679;
        }

        .cb-footer button {
          background: linear-gradient(135deg, #1E3679, #00AA8A);
          border: none;
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cb-footer button:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(30, 54, 121, 0.4);
        }

        .cb-footer button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .cb-box {
            width: 100vw;
            height: 100vh;
            max-height: 100vh;
            bottom: 0;
            right: 0;
            border-radius: 0;
          }

          .chat-avatar {
            bottom: 20px;
            right: 20px;
          }

          .robot-head {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
}
