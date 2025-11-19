import React from "react";
import { FaHeartbeat, FaFlask, FaLaptopCode } from "react-icons/fa";

const CategoryCards = () => {
  const categories = [
    { icon: <FaHeartbeat size={40} />, title: "Medical Courses", desc: "Professional medical training programs." },
    { icon: <FaFlask size={40} />, title: "Clinical Courses", desc: "Advanced clinical research and trials." },
    { icon: <FaLaptopCode size={40} />, title: "IT & Technology", desc: "Modern IT and software courses." }
  ];

  return (
    <section className="section container">
      <div className="row g-4">

        {categories.map((cat, i) => (
          <div className="col-md-4" key={i} data-aos="fade-up">
            <div className="glass-card text-center p-4 shadow-sm h-100">
              {cat.icon}
              <h4 className="mt-3 fw-bold">{cat.title}</h4>
              <p className="text-muted">{cat.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CategoryCards;
