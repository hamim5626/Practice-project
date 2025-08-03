"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Leslie Alexander",
      position: "Logistics Coordinator",
      text: "With Allegiance Staffing, I found a temp-to-hire position that turned into a full-time career.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Leslie Alexander",
      position: "Logistics Coordinator",
      text: "ProLogistix helped me find a job in logistics that I love. The process was quick and easy!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Leslie Alexander",
      position: "Logistics Coordinator",
      text: "With Allegiance Staffing, I found a temp-to-hire position that turned into a full-time career.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Success Stories from Our Candidates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real People, Real Results: How Our Services Have Transformed Careers.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-lg shadow-md transition-all duration-300 ${
                index === activeIndex
                  ? "bg-red-600 text-white transform scale-105"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {/* Quote Icon */}
              <div className={`text-8xl absolute top-2 right-4 font-serif ${
                index === activeIndex ? "text-white" : "text-gray-300"
              }`}>
                "
              </div>

              {/* Testimonial Text */}
              <p className="text-lg mb-6 leading-relaxed mt-12">{testimonial.text}</p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className={`text-sm ${index === activeIndex ? "text-red-100" : "text-gray-600"}`}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveIndex(dot)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                dot === activeIndex
                  ? "bg-red-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories; 