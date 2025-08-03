"use client";
import { motion } from "framer-motion";
import { Search, Briefcase, MapPin, Filter, Star, ChevronDown, Phone, Mail } from "lucide-react";
import HowItWorks from "../../components/HowItWorks";
import HeroBgPhoto from "../../components/Images/employees.png";
import Image from "next/image";

const JobSeekersPage = () => {
  const recommendedJobs = [
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
    {
      title: "Graphics Designer",
      company: "PRAN-RFL Group",
      location: "Natore, Rajshahi",
      type: "Full Time",
      deadline: "25 Sep 2024",
      experience: "At least 6 year(s)",
    },
  ];

  const howItWorksSteps = [
    {
      icon: "📄",
      title: "Register Online",
      description: "Create an account and fill out your profile to get started."
    },
    {
      icon: "🔍",
      title: "Search and Apply",
      description: "Browse our extensive job listings and apply for positions that match your qualifications."
    },
    {
      icon: "🤝",
      title: "Get Matched",
      description: "Our team reviews your application and connects you with potential employers."
    },
    {
      icon: "💼",
      title: "Start Working",
      description: "Begin your new job with confidence, knowing you've found the right fit."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">HYStaffing</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Job Seekers</a>
              <a href="#" className="hover:text-gray-300">Employer Services</a>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>English</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
                Client Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-20" style={{ backgroundImage: `url(${HeroBgPhoto.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Next <span className="text-yellow-400">Job</span> <span className="text-red-500">Opportunity</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Browse our extensive listings to find the perfect match for your skills and experience. Whether you&apos;re looking for temporary, temp-to-hire, or permanent positions, we&apos;ve got you covered.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Jobs"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1 relative text-gray-400">
                  <select className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option className="">Categories</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <div className="flex-1 relative text-gray-400">
                  <select className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Type</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                  Search Job
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Recommended Jobs</h2>
            <div className="flex items-center space-x-2">
              <select className="bg-red-600 text-white px-4 py-2 rounded-md appearance-none">
                <option>All</option>
              </select>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendedJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type: {job.type}</p>
                      <p className="text-sm text-gray-500">Deadline: {job.deadline}</p>
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-3">{job.company}</p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {job.experience}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Employer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Are You an Employer Looking for Talent?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Partner with us to find the right candidates for your business. Whether you need temporary staff or long-term employees, our extensive network of job seekers is ready to meet your needs.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Reach Out
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JobSeekersPage; 