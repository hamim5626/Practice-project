"use client";
import { motion } from "framer-motion";
import {
    Users,
    Search,
    Clock,
    Shield,
    TrendingUp,
    CheckCircle,
    Building,
    Briefcase,
    Target,
    Award,
    Phone,
    Mail
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBgPhoto from "../../components/Images/em-2.jpg";
import photo1 from "../../components/Images/image1.png";
import photo2 from "../../components/Images/image2.png";

const EmployerServices = () => {
    return (
        <div className="pt-20 bg-white">
            {/* Hero Section */}
            <section className="relative text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div 
                    className="absolute inset-0 z-0" 
                    style={{ 
                        backgroundImage: `url(${HeroBgPhoto.src})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                    }}
                ></div>
                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Employer Staffing Solutions Tailored for Success
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                We help businesses like yours connect with the right talent. Let&apos;s find the ideal workforce for your success.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
                            >
                                Get Started Today
                            </motion.button>
                        </motion.div>


                    </div>
                </div>
            </section>


            {/* Customized Staffing Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <Image
                                src={photo1}
                                alt="Team meeting"
                                width={500}
                                height={350}
                                priority
                                className="rounded-xl shadow-lg w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]"
                            />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Customized Staffing for Every Business Need
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We understand that every business has unique workforce requirements. Our flexible and scalable staffing solutions are designed to adapt to your specific needs, whether you need temporary support during peak seasons or permanent team members for long-term growth.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Temporary Staffing</h3>
                                        <p className="text-gray-600 text-sm">Flexible workforce solutions for seasonal peaks and project-based needs</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Permanent Staffing</h3>
                                        <p className="text-gray-600 text-sm">Long-term placement services with thorough screening and cultural fit assessment</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Project-Based Staffing</h3>
                                        <p className="text-gray-600 text-sm">Specialized professionals for specific project requirements and timelines</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Workforce Management Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Streamlined Workforce Management for Maximum Efficiency
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Our comprehensive managed services handle all aspects of workforce management, from recruitment and onboarding to HR management and compliance. We take the burden off your shoulders so you can focus on your core business operations.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Recruitment And Onboarding</h3>
                                        <p className="text-gray-600 text-sm">Comprehensive screening, interviewing, and seamless onboarding processes</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">HR Management</h3>
                                        <p className="text-gray-600 text-sm">Complete HR services including payroll, benefits, and employee relations</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Image
                                src={photo2}
                                alt="Team meeting"
                                width={500}
                                height={350}
                                priority
                                className="rounded-xl shadow-lg w-full h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Tell Us About Your Staffing Needs
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Ready to find the perfect staffing solution for your business? Fill out our form and let&apos;s discuss how we can tailor our services to meet your specific requirements.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300"
                        >
                            Fill Out Our Form
                        </motion.button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default EmployerServices; 