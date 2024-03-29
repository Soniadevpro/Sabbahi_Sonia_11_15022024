import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Features from "../../components/Features/features";
import Hero from "../../components/Hero/hero";
const home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default home;
