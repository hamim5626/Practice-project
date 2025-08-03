"use client";

import React, { useEffect } from "react";
import StaffingHero from "../components/StaffingHero";
import StaffingHeader from "../components/StaffingHeader";
import WhoWeAre from "../components/WhoWeAre";
import JobCategories from "../components/JobCategories";
import HowItWorks from "../components/HowItWorks";
import SuccessStories from "../components/SuccessStories";
import EmployerSection from "../components/EmployerSection";
import StaffingFooter from "../components/StaffingFooter";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const LoadLocomotiveScroll = async () => {
      const LocoMotiveScroll = (await import("locomotive-scroll")).default;
      new LocoMotiveScroll();
    };
    LoadLocomotiveScroll();
  }, []);
  
  return (
    <div>
      <StaffingHeader />
      <StaffingHero />
      <WhoWeAre />
      <JobCategories />
      <HowItWorks />
      <SuccessStories />
      <EmployerSection />
     
    </div>
  );
};

export default Home;
