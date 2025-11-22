import React from "react";
import ServiceCategoryTemplate from "../components/ServiceCategoryTemplate";
import { servicesData, serviceCategories } from "../data/servicesData";

const InternshipPrograms = () => {
  const whyChoose = [
    { icon: '💡', title: 'Real-World Experience', desc: 'Work on live projects with industry professionals' },
    { icon: '💰', title: 'Stipend Provided', desc: 'Get paid while you learn and grow your skills' },
    { icon: '📜', title: 'Certificates', desc: 'Industry-recognized completion certificates' },
    { icon: '🚀', title: 'PPO Opportunities', desc: 'High chance of pre-placement offers from partner companies' }
  ];

  return (
    <ServiceCategoryTemplate 
      category={serviceCategories.internship}
      services={servicesData.internship}
      whyChoose={whyChoose}
    />
  );
};

export default InternshipPrograms;