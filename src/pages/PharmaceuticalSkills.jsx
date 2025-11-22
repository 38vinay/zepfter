import React from "react";
import ServiceCategoryTemplate from "../components/ServiceCategoryTemplate";
import { servicesData, serviceCategories } from "../data/servicesData";

const PharmaceuticalSkills = () => {
  const whyChoose = [
    { icon: '⚗️', title: 'GMP/GLP Training', desc: 'Comprehensive training in pharmaceutical quality standards' },
    { icon: '📋', title: 'Regulatory Expertise', desc: 'Learn FDA, EMA, and ICH regulatory requirements' },
    { icon: '🏭', title: 'Industry Exposure', desc: 'Site visits and real pharmaceutical environment experience' },
    { icon: '✅', title: 'Quality Focus', desc: 'Master quality assurance and control processes' }
  ];

  return (
    <ServiceCategoryTemplate 
      category={serviceCategories.pharmaceutical}
      services={servicesData.pharmaceutical}
      whyChoose={whyChoose}
    />
  );
};

export default PharmaceuticalSkills;