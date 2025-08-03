"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Building, Phone, Upload } from "lucide-react";
import HeroBgPhoto from "../../components/Images/contact-hero.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaChecked) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Section 1 */}
        <section className="relative text-white py-20 overflow-hidden h-[500px]">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${HeroBgPhoto.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold mb-4"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl max-w-2xl mx-auto leading-relaxed"
              >
                Whether you have questions, need assistance, or just want to learn more about what we do, don't hesitate to reach out.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Section 2 (50% Overlap) */}
        <section className="relative z-30 -translate-y-1/2">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Registered Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Registered Office</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">64/3 Lake Circus, Kalabagan, Dhaka - 1205</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">contact@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Bangladesh Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <Building className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Bangladesh Office</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">64/3 Lake Circus, Kalabagan, Dhaka - 1205</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">contact@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>


      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600">
                Please fill in the form below so we can respond to your inquiry.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Write here.."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Write here.."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex">
                    <select className="px-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50">
                      <option>+351</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+880</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Write here.."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Write here.."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Document
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Click to select document, or drag and drop here
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Write here.."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              {/* reCAPTCHA */}
              <div className="w-full max-w-md p-4 mb-3 border rounded-md shadow-sm flex items-center justify-between bg-white">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="robot-check" className="w-5 h-5" />
                  <label htmlFor="robot-check" className="text-sm font-medium">
                    I'm not a robot
                  </label>
                </div>
                <div className="flex flex-col items-center ml-4 text-xs text-gray-500">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA logo"
                    className="w-8 h-8"
                  />
                  <div className="text-[10px] leading-none">
                    <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noreferrer">Privacy</a> •{" "}
                    <a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noreferrer">Terms</a>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 text-white py-4 px-8 rounded-md font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
              >
                SUBMIT
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 