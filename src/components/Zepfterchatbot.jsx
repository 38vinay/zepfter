import React, { useState, useEffect } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

/* ======================================================
     HYBRID KNOWLEDGE SYSTEM
   ====================================================== */

const DATA = {
  short: {
    medical:
      "ZEPFTER offers Medical Coding, Billing, Medical Writing & Medical Affairs with 100% placement assistance.",
    clinical:
      "Clinical Programs include Clinical Research, CDM, Clinical Trials & BA/BE Studies with CRO-level training.",
    it: "IT Courses include Full Stack Development, Python, Java, Data Science, AI/ML, Cybersecurity & Cloud.",
    pharma:
      "Pharma Programs include QA, QC, Regulatory Affairs, Manufacturing, Documentation & R&D.",
    placement:
      "We provide 100% placement assistance with resumes, mock interviews, aptitude, HR training & hiring partners.",
    internships:
      "Internships available in Medical Coding, Clinical Research, IT, Pharma QA/QC, Data Science & Medical Writing.",
  },

  full: {
    medical: {
      modules: [
        "ICD-10 & CPT Coding",
        "HCPCS & Procedure Coding",
        "Revenue Cycle Management",
        "Denial Management",
        "EHR Software Training",
      ],
      duration: "2–4 Months",
      eligibility: "Life Science graduates preferred",
      careers: [
        "Medical Coder",
        "Coding Quality Analyst",
        "Billing Specialist",
        "Denial Analyst",
      ],
      salary: "₹3.5 – ₹8 LPA for freshers",
    },

    clinical: {
      modules: [
        "GCP, ICH, Ethics",
        "Clinical Trial Phases",
        "Drug Development Lifecycle",
        "Protocol Creation",
        "CDM: CRF, EDC, Query Management",
      ],
      duration: "3–6 Months",
      eligibility: "Life Sciences / Pharma graduates",
      careers: [
        "Clinical Research Coordinator",
        "CRA",
        "CDM Specialist",
        "PV Associate",
      ],
      salary: "₹4 – ₹12 LPA for freshers",
    },

    it: {
      modules: [
        "Python, Java",
        "Frontend: HTML/CSS/JS/React",
        "Backend: Node.js",
        "Databases: SQL, MongoDB",
        "Cloud Basics: AWS/Azure",
      ],
      duration: "4–8 Months",
      eligibility: "Any graduate",
      careers: [
        "Full Stack Developer",
        "Software Developer",
        "Data Analyst",
        "AI Engineer",
      ],
      salary: "₹4 – ₹20 LPA",
    },

    pharma: {
      modules: [
        "GMP/GLP",
        "QA & QC Systems",
        "Regulatory Affairs (FDA/ICH/EMA)",
        "Stability Studies",
        "SOP Documentation",
      ],
      duration: "4–7 Months",
      eligibility: "B.Pharm / M.Pharm / B.Sc / M.Sc",
      careers: [
        "QA Executive",
        "QC Analyst",
        "Regulatory Associate",
        "Documentation Specialist",
      ],
      salary: "₹3.5 – ₹15 LPA",
    },
  },
};

/* ======================================================
     CHATBOT COMPONENT
   ====================================================== */

export default function ZepfterChatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("zepfter_chat_session");
    return saved
      ? JSON.parse(saved)
      : [
          {
            sender: "bot",
            text: "Hello! 🤖 I'm your ZEPFTER Assistant. How can I help you today?",
          },
        ];
  });

  // Save only for current session
  useEffect(() => {
    sessionStorage.setItem("zepfter_chat_session", JSON.stringify(messages));
  }, [messages]);

  /* ======================================================
     SMART RESPONSE ENGINE
   ====================================================== */

  const generateResponse = (text) => {
    const t = text.toLowerCase();

    // Small Talk
    const smallTalk = {
      hi: "Hello! 👋 How can I assist you today?",
      hello: "Hi there! 😊 Ask me anything about ZEPFTER.",
      thanks: "You're welcome! 😊",
      bye: "Goodbye! 👋 Have a great day!",
      "how are you": "I'm doing great! 🤖 Ready to assist!",
    };
    for (let key in smallTalk) if (t.includes(key)) return smallTalk[key];

    // Identify category
    if (t.includes("medical")) return DATA.short.medical;
    if (t.includes("clinical")) return DATA.short.clinical;
    if (t.includes("pharma")) return DATA.short.pharma;
    if (t.includes("it") || t.includes("software")) return DATA.short.it;
    if (t.includes("intern")) return DATA.short.internships;
    if (t.includes("placement")) return DATA.short.placement;

    // Expand keywords
    const expandFor = (section) => {
      const d = DATA.full[section];
      if (!d) return "Please specify a topic (Medical / IT / Clinical / Pharma).";

      return (
        `📘 **Full Details for ${section.toUpperCase()} Courses**\n\n` +
        `📚 **Modules:**\n- ${d.modules.join("\n- ")}\n\n` +
        `⏳ **Duration:** ${d.duration}\n\n` +
        `🎓 **Eligibility:** ${d.eligibility}\n\n` +
        `💼 **Career Options:**\n- ${d.careers.join("\n- ")}\n\n` +
        `💰 **Salary:** ${d.salary}`
      );
    };

    if (t.includes("more") || t.includes("full") || t.includes("details"))
      return expandFor(findCategory(text));

    if (t.includes("modules")) return expandFor(findCategory(text));
    if (t.includes("duration")) return expandFor(findCategory(text));
    if (t.includes("salary")) return expandFor(findCategory(text));
    if (t.includes("career")) return expandFor(findCategory(text));

    return "I'm not sure about that 😅 — but I can help with ZEPFTER courses, internships, placements, or services!";
  };

  const findCategory = (text) => {
    const t = text.toLowerCase();
    if (t.includes("medical")) return "medical";
    if (t.includes("clinical")) return "clinical";
    if (t.includes("pharma")) return "pharma";
    if (t.includes("it")) return "it";
    return null;
  };

  /* ======================================================
     SEND HANDLER
   ====================================================== */

  const handleSend = (forced = null) => {
    const text = forced || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = generateResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setTyping(false);
    }, 600);
  };

  /* ======================================================
     UI WITH SUGGESTIONS
   ====================================================== */

  const suggestions = [
    "What services do you offer?",
    "Tell me about Medical Courses",
    "Clinical Courses",
    "IT Courses",
    "Pharma Skills",
    "Internship Details",
    "Placement Assistance",
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
            <h4>ZEPFTER Assistant 🤖</h4>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="cb-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{m.text}</pre>
              </div>
            ))}

            {typing && (
              <div className="msg bot typing">
                <span></span><span></span><span></span>
              </div>
            )}

            {/* SUGGESTIONS */}
            <div className="suggestion-container">
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => handleSend(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="cb-footer">
            <input
              type="text"
              placeholder="Ask about ZEPFTER..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
            />
            <button onClick={handleSend}>
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
          width: 350px;
          height: 500px;
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
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cb-header {
          padding: 15px;
          background: linear-gradient(135deg,#1E3679,#00AA8A);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cb-body {
          flex-grow: 1;
          padding: 12px;
          overflow-y: auto;
          background: #f4f5f7;
        }

        .msg {
          padding: 10px 14px;
          margin: 8px 0;
          border-radius: 12px;
          max-width: 80%;
        }
        .msg.bot {
          background: #1E3679;
          color: white;
        }
        .msg.user {
          background: #00AA8A;
          color: white;
          margin-left: auto;
        }

        /* SUGGESTION BUTTONS */
        .suggestion-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .suggestion-container button {
          background: #E3E7F1;
          border: none;
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 13px;
          cursor: pointer;
          transition: 0.3s;
          color: #1E3679;
        }
        .suggestion-container button:hover {
          background: #1E3679;
          color: white;
        }

        /* Typing Animation */
        .typing span {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          display: inline-block;
          margin-right: 4px;
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          50% { transform: scale(1.3); opacity: 1; }
        }

        /* Footer */
        .cb-footer {
          padding: 10px;
          background: white;
          border-top: 1px solid #ddd;
          display: flex;
          gap: 8px;
        }

        .cb-footer input {
          flex-grow: 1;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
      `}</style>
    </>
  );
}
