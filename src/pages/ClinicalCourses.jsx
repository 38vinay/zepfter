import React from "react";
import ServiceCategoryTemplate from "../components/ServiceCategoryTemplate";
import { servicesData, serviceCategories } from "../data/servicesData";

const ClinicalCourses = () => {
  const whyChoose = [
    { icon: '🔬', title: 'GCP Certified Training', desc: 'Learn from trainers certified in Good Clinical Practice standards' },
    { icon: '📊', title: 'Industry Tools', desc: 'Hands-on experience with Oracle Clinical, Medidata Rave, and more' },
    { icon: '🏥', title: 'Real Trial Experience', desc: 'Work on actual clinical trial documentation and processes' },
    { icon: '🎯', title: 'High Demand Skills', desc: 'Clinical research professionals are in high demand globally' }
  ];

  return (
    <ServiceCategoryTemplate 
      category={serviceCategories.clinical}
      services={servicesData.clinical}
      whyChoose={whyChoose}
    />
  );
};

export default ClinicalCourses;