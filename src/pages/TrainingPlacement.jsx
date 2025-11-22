import React from "react";
import ServiceCategoryTemplate from "../components/ServiceCategoryTemplate";
import { servicesData, serviceCategories } from "../data/servicesData";

const TrainingPlacement = () => {
  const whyChoose = [
    { icon: '🎯', title: '95% Placement Rate', desc: 'Industry-leading placement success with top companies' },
    { icon: '🤝', title: '500+ Hiring Partners', desc: 'Tie-ups with leading healthcare, pharma, and IT companies' },
    { icon: '💼', title: 'Mock Interviews', desc: 'Extensive interview preparation with real scenarios' },
    { icon: '📈', title: 'Career Growth', desc: 'Long-term career guidance and mentorship' }
  ];

  return (
    <ServiceCategoryTemplate 
      category={serviceCategories.training}
      services={servicesData.training}
      whyChoose={whyChoose}
    />
  );
};

export default TrainingPlacement;
