"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import HeroPhoto from "./Images/Rectangle 9.png";

const StaffingHero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { number: "300+", label: "Job recently added" },
    { number: "500+", label: "Participate" },
    { number: "89%", label: "Satisfaction rate" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-white via-[#f7f9ff] to-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#F0F1FF] rounded-xl mt-12">
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              HY STAFFING <br />
              <span className="text-blue-600">Establishing</span>{" "}
              <span className="text-blue-600">Productive</span>{" "}
              <span className="text-blue-600">Relationships</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg">
              Hy Staffing precisely matches your skills with the best position that brings you success in the job you love.
            </p>

            {/* Search & Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Search Jobs"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm sm:text-base font-medium">
                Apply Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 flex justify-center items-center order-1 lg:order-2">
            {/* Gradient background rectangle - only visible on larger screens */}
            <div className="hidden lg:block absolute -right-1 sm:-right-2 h-[300px] sm:h-[300px] md:h-[420px] w-[250px] sm:w-[300px] md:w-[350px] bg-gradient-to-b from-blue-500 to-purple-600 rounded-xl opacity-70"></div>

            {/* Photo container - adjusted positioning for responsive design */}
            <div className="relative z-20 transform lg:-translate-x-4 lg:-translate-y-1">
              <Image
                src={HeroPhoto}
                alt="Team meeting"
                width={500}
                height={350}
                priority
                className="rounded-xl shadow-lg w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 sm:mt-8 md:mt-10 bg-blue-600 text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">300+</h2>
          <p className="mt-1 text-xs sm:text-sm md:text-base">Job recently added</p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">500+</h2>
          <p className="mt-1 text-xs sm:text-sm md:text-base">Participate</p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">89%</h2>
          <p className="mt-1 text-xs sm:text-sm md:text-base">Satisfaction rate</p>
        </div>
      </div>
    </section>
  );
};

export default StaffingHero; 