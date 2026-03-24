import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import swiggyImg from "../assets/swiggynew2.png";
import swiggyIcon from "../assets/swiggynew1.png";
import zomatoImg from "../assets/zomato4.png";
import zomatoIcon from "../assets/zomato.png";
import fssaiImg from "../assets/fssai.png";
import fssaiIcon from "../assets/fssai2.png";
import gstImg from "../assets/Emblem_of_India.svg";

// Service items for the Hero Slider
const heroSlides = [
  {
    id: 1,
    collection: "FOOD DELIVERY",
    title: "Swiggy Onboarding",
    author: "MagicScale Experts",
    desc: "Launch your restaurant on Swiggy and reach thousands of hungry customers. We manage your menu, photos, and fast-track approval.",
    bgColor: "bg-[#fc8019]", // Swiggy Orange
    patternColor: "fill-orange-900/20",
    logo: swiggyIcon,
    image: swiggyImg,
    path: "/course/swiggy-onboarding",
    buttonText: "Start on Swiggy",
  },
  {
    id: 2,
    collection: "FOOD DELIVERY",
    title: "Zomato Onboarding",
    author: "MagicScale Experts",
    desc: "Get listed on Zomato with a beautifully crafted menu and high-quality setup designed to maximize your daily orders.",
    bgColor: "bg-[#e23744]", // Zomato Red
    patternColor: "fill-red-900/20",
    logo: zomatoIcon,
    image: zomatoImg,
    path: "/course/zomato-onboarding",
    buttonText: "Start on Zomato",
  },
  {
    id: 3,
    collection: "COMPLIANCE",
    title: "FSSAI Food License",
    author: "Government Registration",
    desc: "Crucial food safety licenses obtained quickly so you can start cooking legally and safely without the headache.",
    bgColor: "bg-emerald-600", // Vibrant emerald for light mode, ternary will handle dark
    patternColor: "fill-emerald-900/40",
    logo: fssaiIcon,
    image: fssaiImg,
    path: "/course/fssai-onboarding",
    buttonText: "Get Licensed",
  },
  {
    id: 4,
    collection: "FINANCE",
    title: "GST Registration",
    author: "Tax & Compliance",
    desc: "End-to-end GST support for seamless compliance, instant filing, and business growth. 100% online process.",
    bgColor: "bg-indigo-600", // Vibrant indigo for light mode
    patternColor: "fill-indigo-900/40",
    logo: gstImg,
    image: gstImg,
    path: "#services",
    buttonText: "Register Now",
  },
];

// SVG Pattern for background mimicking the abstract shapes in the template
const AbstractPattern = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="abstract-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
        <path d="M50 100 C 150 150, 150 0, 200 50 C 250 100, 300 200, 200 250 C 100 300, -50 200, 50 100 Z" className={color} />
        <path d="M300 300 C 350 350, 380 250, 350 200 C 320 150, 250 180, 250 220 C 250 280, 250 350, 300 300 Z" className={color} />
        <path d="M50 350 C 80 380, 150 350, 120 300 C 90 250, 20 280, 10 320 C 0 350, 20 380, 50 350 Z" className={color} />
        <circle cx="200" cy="150" r="15" className={color} />
        <circle cx="350" cy="80" r="10" className={color} />
        <circle cx="80" cy="220" r="20" className={color} />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#abstract-pattern)" />
  </svg>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isDarkMode } = useTheme();

  // Auto-scroll logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="w-full relative bg-white dark:bg-slate-950 pt-24 pb-12 font-poppins transition-colors duration-500">
      <div 
        className="max-w-[1400px] mx-auto px-4 sm:px-8 relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slider Container */}
        <div className={`relative w-full h-[550px] md:h-[600px] rounded-2xl overflow-hidden transition-colors duration-700 ease-in-out ${slide.bgColor}`}>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
             <AbstractPattern color={slide.patternColor} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 z-10"
            >
              {/* Left Content (Text) */}
              <div className="flex-1 text-white max-w-xl flex flex-col justify-center h-full pt-10 md:pt-0">
                {slide.logo && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 bg-white/10 w-fit p-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl"
                  >
                     <img src={slide.logo} alt="Brand" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md" />
                  </motion.div>
                )}

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 text-xs md:text-sm font-bold tracking-[0.2em] mb-4 uppercase"
                >
                  {slide.collection}
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-2 text-white"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 text-lg md:text-xl font-light mb-8 font-serif italic"
                >
                  {slide.author}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    to={slide.path}
                    className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-white dark:hover:bg-slate-900 text-white dark:text-slate-900 hover:text-slate-900 dark:hover:text-white hover:border-white border border-transparent px-8 py-3.5 text-sm font-bold tracking-wider transition-all duration-300"
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </div>

              {/* Right Content (Image / Book Cover Style) */}
              <div className="flex-1 h-full flex items-center justify-end p-4 md:p-12 relative w-full md:w-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  className="w-[200px] sm:w-[260px] md:w-[340px] aspect-[3/4] bg-white p-3 md:p-4 shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-500 ease-out z-20 mx-auto md:mx-0 mt-8 md:mt-0"
                >
                    {/* Inner image container */}
                    <div className="w-full h-full relative overflow-hidden bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex flex-col">
                       <img 
                         src={slide.image} 
                         alt={slide.title} 
                         className="w-full h-full object-cover absolute inset-0 opacity-20 dark:opacity-10"
                       />
                       {/* Simulating a book cover text overlay since user asked for the book template look */}
                       <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-white/90 dark:bg-slate-900/90">
                          <h3 className="text-gray-400 dark:text-gray-500 text-xs font-bold tracking-[0.2em] mb-4 uppercase text-center w-full">MagicScale Editions</h3>
                          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">{slide.title}</h2>
                          <div className="w-12 h-px bg-gray-300 dark:bg-slate-700 my-4"></div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-serif italic">{slide.author}</p>
                       </div>
                    </div>
                   
                   {/* Book spine simulation effect on the left edge */}
                   <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-r from-gray-300 to-transparent mix-blend-multiply"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-30"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators (Dots) beneath the slider */}
        <div className="flex justify-center items-center space-x-3 mt-6">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-gray-600 dark:bg-gray-200 scale-125" : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
