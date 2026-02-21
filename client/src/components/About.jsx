import { motion } from "framer-motion";
import { restaurantLogo } from "../assets";
import Title from "./Title";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative pt-16 pb-28 px-4 sm:px-8 lg:px-20 bg-gradient-to-b from-[#EEF3FF] to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-indigo-300 opacity-20 blur-[140px] rounded-full z-0" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-indigo-300 opacity-20 blur-[140px] rounded-full z-0" />
      <div className="absolute top-10 right-10 opacity-10 z-0">
        <img
          src="/assets/bg-pattern.svg"
          alt="decorative"
          className="w-32 md:w-48"
        />
      </div>
      <div className="absolute bottom-0 left-5 opacity-10 z-0">
        <img
          src="/assets/bg-spoon.svg"
          alt="decorative spoon"
          className="w-20 md:w-32"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title preTitle="About" title="Us" />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Empowering India’s Foodpreneurs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              At MagicScale, we simplify everything from cloud kitchen
              onboarding to legal registrations — so you can focus on cooking
              while we handle the chaos.
            </p>
            <a
              href="https://wa.me/919311330885"
              target="_blank"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-medium transition duration-300 shadow-lg hover:shadow-xl"
            >
              Let’s Get You Started
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={restaurantLogo}
              alt="MagicScale illustration"
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </motion.div>
        </div>

        {/* Mission & Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 border border-indigo-100 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We’re on a mission to help every foodpreneur in India launch
              faster, smarter, and more profitably. No jargon. No middlemen.
              Just real support from a team that understands your journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/70 border border-indigo-100 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Why Choose MagicScale
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Instant Swiggy/Zomato onboarding</li>
              <li>Expert help with FSSAI, GST, trademark</li>
              <li>Personalised account managers</li>
              <li>Real-time dashboard & updates</li>
            </ul>
          </motion.div>
        </div>

        {/* Impact / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-tr from-[#f3f6fd] to-white border border-indigo-100 rounded-2xl py-10 px-6 shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 900+ Kitchens, 28 States, 1 Magic Team
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            We’ve helped brands across India start from zero and scale to lakhs
            in revenue — with a strong backend to support every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
