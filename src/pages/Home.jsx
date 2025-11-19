import React from "react";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCards />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
