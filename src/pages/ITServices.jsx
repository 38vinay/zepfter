import React from "react";
import ServiceCategoryTemplate from "../components/ServiceCategoryTemplate";
import { servicesData, serviceCategories } from "../data/servicesData";

const ITServices = () => {
  const whyChoose = [
    { icon: '💻', title: 'Latest Technologies', desc: 'Learn the most in-demand programming languages and frameworks' },
    { icon: '👨‍💻', title: 'Expert Instructors', desc: 'Industry professionals with 10+ years of real-world experience' },
    { icon: '🚀', title: 'Project-Based Learning', desc: 'Build real-world projects for your portfolio' },
    { icon: '📈', title: 'Career Growth', desc: 'Fast-track your career in the booming tech industry' }
  ];

  return (
    <ServiceCategoryTemplate 
      category={serviceCategories.it}
      services={servicesData.it}
      whyChoose={whyChoose}
    />
  );
};

export default ITServices;
