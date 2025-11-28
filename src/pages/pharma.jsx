import React, { useState } from "react";

const Pharma = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: "Execution Platform (Elog)",
      desc: "Our Vision for Digital Manufacturing & Future Quality Control.",
      details:
        "Elog is a digital execution platform designed to automate and streamline quality control processes in pharmaceutical manufacturing. It ensures compliance, traceability, and efficient workflow orchestration."
    },
    {
      title: "Integrated Data Hub (IDH)",
      desc: "An innovative publish–subscribe data hub approach for seamless integrations.",
      details:
        "IDH enables secure, scalable, and real-time data exchange across multiple pharma systems. It supports data harmonization and acts as a centralized integration framework."
    },
    {
      title: "Intelligent CDS Hub",
      desc: "Our Vision for Digital Manufacturing & Future Quality Control.",
      details:
        "The Intelligent CDS Hub is an advanced content distribution and control system for managing regulated pharma documentation and quality assets."
    },
    {
      title: "Annual Procurement Quality Review",
      desc:
        "An evaluation conducted annually to assess the quality standard of each product.",
      details:
        "This service ensures that procurement operations comply with regulatory expectations, and materials meet required pharmaceutical-grade standards."
    },
    {
      title: "ProTrack™",
      desc: "Blockchain-enabled One Barcode Traceability Solution.",
      details:
        "ProTrack™ uses blockchain to provide tamper-proof serialization, ensuring product authenticity, secure supply chain monitoring, and easy audit trails."
    },
    {
      title: "ProScale™",
      desc: "Weighing Scale Integration Services.",
      details:
        "ProScale™ integrates weighing scale hardware directly with pharma software systems to eliminate manual entry errors and enhance accuracy in production workflows."
    }
  ];

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>

      {/* ===================== HERO SECTION ===================== */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(73,29,146,1) 50%, rgba(29,53,152,1) 100%)",
          padding: "120px 20px 140px",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "20px" }}>
            Pharma
          </h1>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "1.15rem",
              lineHeight: "1.8",
              opacity: "0.9",
            }}
          >
            The most recent technologies and scientific breakthroughs that will
            revolutionize. Our exceptional pharmaceutical IT solutions ensure management
            and protection of your applications, network, data, and more.
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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
            alt="Pharma"
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
          <p>
            It is time for pharmaceutical companies and their supply chain partners to
            establish clear expectations for projects. Regulations across the world now
            demand serialization, ensuring drug integrity and supply chain transparency.
          </p>

          <p>
            Serialization influences all aspects of pharma operations—from manufacturing
            to packaging. It enables unique identification of products, improves traceability,
            and ensures long-term accountability across the supply chain.
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
            <span style={{ color: "#ffcb05" }}>PHARMA RELATED PRODUCTS</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px",
            }}
          >
            {products.map((item, index) => (
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

export default Pharma;
