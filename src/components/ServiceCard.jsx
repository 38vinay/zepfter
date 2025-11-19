import React from "react";

const ServiceCard = ({ icon, title, desc, onClick }) => {
  return (
    <div className="col-md-4" data-aos="fade-up">
      <div 
        className="glass-card p-4 text-center shadow-sm h-100 service-card"
        onClick={onClick}
        role="button"
      >
        <div className="mb-3">{icon}</div>
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
