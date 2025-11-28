import React, { useState } from "react";

const IT = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const itProducts = [
    {
      title: "Cloud Infrastructure Services",
      desc: "Secure, scalable cloud solutions for modern enterprises.",
      details:
        "We provide comprehensive cloud infrastructure deployment, optimization, and management. Our experts work with AWS, Azure, and GCP to deliver high-performance, cost-efficient, and secure cloud ecosystems for your business."
    },
    {
      title: "Custom Software Development",
      desc: "Tailored applications designed for your business workflow.",
      details:
        "From web apps to enterprise-level systems, our custom software solutions are developed with modern frameworks, optimized architecture, and scalable APIs to support digital transformation."
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Protect your applications, data, and networks from threats.",
      details:
        "We implement advanced threat detection, penetration testing, firewall setups, identity access management, and end-to-end cyber defense systems to safeguard your IT infrastructure."
    },
    {
      title: "IT Consulting & Digital Strategy",
      desc: "Expert guidance to modernize your technology stack.",
      details:
        "Our IT consulting service helps companies plan, implement, and scale their digital infrastructure with future-ready strategies and industry best practices."
    },
    {
      title: "Automation & API Integration",
      desc: "Improve efficiency by connecting your systems seamlessly.",
      details:
        "We build secure API integrations and automation workflows for data exchange, CRM/ERP connections, and third-party tools to boost operational efficiency."
    },
    {
      title: "Network & Server Management",
      desc: "Reliable network architecture and server administration.",
      details:
        "We offer end-to-end network configuration, monitoring, and server management to ensure maximum uptime and smooth operations across your organization."
    }
  ];

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>

      {/* ===================== HERO SECTION ===================== */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
          padding: "120px 20px 140px",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "20px" }}>
            IT Solutions
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              opacity: "0.9",
            }}
          >
            Empowering businesses with modern digital solutions, enterprise-grade
            technology, and secure IT infrastructure tailored to your growth.
          </p>
        </div>
      </div>

      {/* ===================== IMAGE + DESCRIPTION ===================== */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            border: "10px solid transparent",
            borderImage:
              "linear-gradient(90deg, #0b5a8c, #ffcb05) 1 round",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            alt="IT"
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
          <p>
            Our IT solutions are crafted to help businesses adopt the latest digital
            tools, strengthen their infrastructure, and achieve operational excellence.
            We empower teams through automation, robust networks, and modern software.
          </p>

          <p>
            By combining cloud computing, cybersecurity, automation, and IT consulting,
            we enable enterprises to remain competitive in today’s evolving technological
            landscape.
          </p>
        </div>
      </div>

      {/* ===================== PRODUCTS GRID ===================== */}
      <div
        style={{
          background: "#1f1f1f",
          color: "white",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "40px",
              textTransform: "uppercase",
            }}
          >
            SOME OF OUR <br />
            <span style={{ color: "#ffcb05" }}>IT RELATED SERVICES</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {itProducts.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(item)}
                style={{
                  background: "#2b2b2b",
                  padding: "30px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "10px",
                    color: "#ffcb05",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ opacity: 0.85 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== MODAL POPUP ===================== */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
                color: "#1f1f1f",
                fontWeight: "700",
              }}
            >
              {selectedProduct.title}
            </h2>

            <p style={{ color: "#555", lineHeight: "1.7" }}>
              {selectedProduct.details}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#ffcb05",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default IT;
