"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import leftImg from "./Images/Rectangle 11.png"; 
import rightImg from "./Images/Rectangle 12.png"; 
import handImg from "./Images/hand.jpg"

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            We&apos;ve been a trusted partner for companies and job seekers alike. Our mission is to match great companies with hardworking individuals, ensuring the right fit every time. Whether you&apos;re looking for temporary, temp-to-hire, or direct hire positions, we have the resources and expertise to help you succeed.
          </p>
          
          {/* Bottom Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <Image
              src={leftImg}
              alt="Team collaboration around table"
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Right Column with Image and Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:col-span-1 flex flex-col gap-4"
        >
          {/* Top Right Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src={rightImg}
              alt="Outdoor meeting with laptops"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          {/* View More Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer"
          >
            <Image
              src={handImg}
              alt="Hand gesture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-2 bg-blue-600 bg-opacity-40 flex items-center justify-center rounded-md">
              <div className="text-white flex items-center gap-2">
                <span className="text-lg font-semibold">View More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
