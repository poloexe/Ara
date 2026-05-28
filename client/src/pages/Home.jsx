import React from "react";
import HeroSection from "../components/HeroSection";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <div className="flex-grow">
        <HeroSection />
        <NewArrivals />
      </div>
    </>
  );
};

export default Home;
