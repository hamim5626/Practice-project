"use client";
import { motion } from "framer-motion";

const EmployerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 bg-slate-200 p-10 rounded-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Are You an Employer Looking for Talent?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Partner with us to find the perfect candidates for your organization. Our extensive network of qualified professionals and proven recruitment process ensures you get the right talent for your business needs. Whether you need temporary staff, contract workers, or permanent employees, we have the expertise to deliver results.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmployerSection; 