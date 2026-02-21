// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import zomatoImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
// import ZomatoFAQ from './ZomatoFAQ';
// import ZomatoWhatYouGet from './ZomatoWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';

// const ZomatoOnboardingCourse = () => {
//   const navigate = useNavigate();
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   // State to manage the selected plan
//   const [selectedPlan, setSelectedPlan] = useState('standard'); // Default to 'standard'

//   // Define your plans with their details
//   const plans = {
//     standard: {
//       name: 'Standard Onboarding',
//       price: 1999,
//       description: 'Complete onboarding service for a single outlet.',
//       features: [
//         '✔ Restaurant partner account setup',
//         '✔ Logo, design, and branding materials',
//         '✔ On-call and WhatsApp support',
//         '✔ Fast-track listing service',
//       ],
//     },
//     premium: {
//       name: 'Premium Onboarding',
//       price: 3499,
//       description: 'Enhanced service for multiple outlets or complex setups.',
//       features: [
//         '✔ All Standard features',
//         '✔ Multi-outlet setup (up to 3)',
//         '✔ Dedicated account manager',
//         '✔ Priority support',
//         '✔ Basic menu optimization consultation',
//       ],
//     },
//     enterprise: {
//       name: 'Enterprise Solution',
//       price: 7999,
//       description: 'Tailored solutions for large chains or custom requirements.',
//       features: [
//         '✔ All Premium features',
//         '✔ Unlimited outlet setup',
//         '✔ Advanced menu engineering',
//         '✔ Marketing strategy session',
//         '✔ On-site assistance (if required)',
//       ],
//     },
//   };

//   // Get current plan details based on selectedPlan state
//   const currentPlan = plans[selectedPlan];

//   // Dark Mode Effects
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       document.body.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.body.classList.remove('dark');
//     }
//     // Save user preference to localStorage
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Handle navigation with selected plan
//   const handleProceedToCart = () => {
//     navigate(`/checkout/zomato?plan=${selectedPlan}`);
//   };

//   const handleBuyNow = () => {
//     navigate(`/checkout/zomato/buy?plan=${selectedPlan}`);
//   };

//   return (
//     <div className={`min-h-screen py-10 px-4 sm:px-6 md:px-10 font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
//       {/* Dark Mode Toggle */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={toggleDarkMode}
//           className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* Left Section - Main Content */}
//         <div className="w-full md:w-[66%] md:pr-8 space-y-6">
//           <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
//           <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
//             Zomato Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base text-gray-700 mt-2">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
//           </p>

//           {/* Highlight Bar */}
//           <div className={`rounded-lg p-4 mt-4 flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-900'}`}>
//             <div className="flex items-start gap-3">
//               <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm sm:text-base">
//                 Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-purple-600" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-wrap text-sm sm:text-base gap-4">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span>★
//                 <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(152 reviews)</span>
//               </div>
//               <div className={`border-l pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last updated 06/2025 • Hindi & English</p>

//           {/* Right: Checkout Bar (Mobile Specific Placement - Appears after main info) */}
//           <div className="w-full md:hidden">
//             <div className={`rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto mt-6 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//                 <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//                 <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price}</h2>
//                 <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//                 {/* Plan Selector Bar for Mobile */}
//                 <div className={`grid grid-cols-3 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                     {Object.keys(plans).map((key) => (
//                         <button
//                             key={key}
//                             onClick={() => setSelectedPlan(key)}
//                             className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//                             ${selectedPlan === key
//                                 ? 'bg-purple-600 text-white shadow-sm'
//                                 : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//                             }`}
//                         >
//                             {plans[key].name.replace(' Onboarding', '')}
//                         </button>
//                     ))}
//                 </div>

//                 <button
//                   onClick={handleProceedToCart}
//                   className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={handleBuyNow}
//                   className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//                 >
//                   Buy Now
//                 </button>

//                 <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                   30-Day Money-Back Guarantee
//                 </p>

//                 <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   {currentPlan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center">
//                         <span className="mr-2 text-green-500">✓</span> {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Coupon */}
//                 <div className="mt-6">
//                   <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                     Apply Coupon
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//                   />
//                   <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                     Apply Coupon
//                   </button>
//                 </div>
//             </div>
//           </div>


//           {/* Content Sections (These will appear after the mobile checkout bar) */}
//           <div className="mt-10">
//             {/* ✅ Pass isDarkMode prop to child components */}
//             <DocumentsRequired isDarkMode={isDarkMode} />
//             <ZomatoWhatYouGet isDarkMode={isDarkMode} />

//             <h3 className="text-2xl font-semibold mt-12 mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />,
//                   title: 'Live Dashboard Access',
//                   desc: 'Track orders, payments, and delivery status from your restaurant dashboard.',
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: 'Menu Download Setup',
//                   desc: 'Enable downloadable menus for WhatsApp sharing or printing.',
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: 'Nationwide Coverage',
//                   desc: 'We assist across metros, tier 2 cities, and remote areas.',
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: 'Multi-Outlet Support',
//                   desc: 'Onboard multiple branches or kitchens with ease.',
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   // Apply dark mode classes to this div and its children
//                   className={`rounded-xl p-5 text-center shadow hover:shadow-md transition ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//                 >
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ✅ Pass isDarkMode prop to child component */}
//           <ZomatoFAQ isDarkMode={isDarkMode} />
//         </div>

//         {/* Right: Sticky Checkout Bar (Desktop Only) */}
//         <div className="hidden md:block w-full md:w-[34%] md:pl-4">
//           <div className="md:sticky md:top-20">
//             <div className={`rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//               <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//               <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price}</h2>
//               <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//               {/* Plan Selector Bar for Desktop */}
//               <div className={`grid grid-cols-3 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                 {Object.keys(plans).map((key) => (
//                   <button
//                     key={key}
//                     onClick={() => setSelectedPlan(key)}
//                     className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//                     ${selectedPlan === key
//                         ? 'bg-purple-600 text-white shadow-sm'
//                         : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//                     }`}
//                   >
//                     {plans[key].name.replace(' Onboarding', '')}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={handleProceedToCart}
//                 className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//               >
//                 Go to Cart
//               </button>

//               <button
//                 onClick={handleBuyNow}
//                 className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//               >
//                 Buy Now
//               </button>

//               <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                 30-Day Money-Back Guarantee
//               </p>

//               <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 {currentPlan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center">
//                       <span className="mr-2 text-green-500">✓</span> {feature}
//                   </li>
//                 ))}
//               </ul>

//               {/* Coupon */}
//               <div className="mt-6">
//                 <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Apply Coupon
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter coupon code"
//                   className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//                 />
//                 <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                   Apply Coupon
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Bottom Bar CTA for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
//         <button
//           onClick={handleProceedToCart}
//           className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
//         >
//           Get Started Now for ₹{currentPlan.price}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZomatoOnboardingCourse;









// import SiteFooter from '../FssaiCoursePage/SiteFooter';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import zomatoImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
// import ZomatoFAQ from './ZomatoFAQ';
// import ZomatoWhatYouGet from './ZomatoWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';

// const ZomatoOnboardingCourse = () => {
//   const navigate = useNavigate();
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Define your plans with their details - NOW ONLY TWO CATEGORIES
//   const plans = {
//     planA: {
//       name: 'Plan A',
//       price: 1999,
//       description: 'Essential onboarding for your Zomato presence.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Initial Menu Item Upload (up to 25 items)',
//         '✔ Basic Branding & Profile Configuration',
//       ],
//     },
//     planB: {
//       name: 'Plan B',
//       price: 2999,
//       description: 'Enhanced onboarding with extensive menu and photo management.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Extensive Photo Upload (up to 50 items)', // This is the key differentiator
//         '✔ Detailed Branding & Profile Configuration',
//         '✔ Priority Listing Support',
//       ],
//     },
//   };

//   // State to manage the selected plan - Default to planA
//   const [selectedPlan, setSelectedPlan] = useState('planA'); 

//   // Get current plan details based on selectedPlan state
//   const currentPlan = plans[selectedPlan];

//   // Dark Mode Effects
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       document.body.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.body.classList.remove('dark');
//     }
//     // Save user preference to localStorage
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Handle navigation with selected plan
//   const handleProceedToCart = () => {
//     navigate(`/checkout/zomato?plan=${selectedPlan}`);
//   };

//   const handleBuyNow = () => {
//     navigate(`/checkout/zomato/buy?plan=${selectedPlan}`);
//   };

//   return (
//     <div className={`min-h-screen py-10 px-4 sm:px-6 md:px-10 font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
//       {/* Dark Mode Toggle */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={toggleDarkMode}
//           className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* Left Section - Main Content */}
//         <div className="w-full md:w-[66%] md:pr-8 space-y-6">
//           <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
//           <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
//             Zomato Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base text-gray-700 mt-2">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
//           </p>

//           {/* Highlight Bar */}
//           <div className={`rounded-lg p-4 mt-4 flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-900'}`}>
//             <div className="flex items-start gap-3">
//               <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm sm:text-base">
//                 Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-purple-600" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-wrap text-sm sm:text-base gap-4">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span>★
//                 <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(152 reviews)</span>
//               </div>
//               <div className={`border-l pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last updated 06/2025 • Hindi & English</p>

//           {/* Right: Checkout Bar (Mobile Specific Placement - Appears after main info) */}
//           <div className="w-full md:hidden">
//             <div className={`rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto mt-6 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//                 <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//                 <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price}</h2>
//                 <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//                 {/* Plan Selector Bar for Mobile */}
//                 <div className={`grid grid-cols-2 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                     {Object.keys(plans).map((key) => (
//                         <button
//                             key={key}
//                             onClick={() => setSelectedPlan(key)}
//                             className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//                             ${selectedPlan === key
//                                 ? 'bg-purple-600 text-white shadow-sm'
//                                 : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//                             }`}
//                         >
//                             {plans[key].name} {/* Changed to use direct plan name */}
//                         </button>
//                     ))}
//                 </div>

//                 <button
//                   onClick={handleProceedToCart}
//                   className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={handleBuyNow}
//                   className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//                 >
//                   Buy Now
//                 </button>

//                 <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                   30-Day Money-Back Guarantee
//                 </p>

//                 <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   {currentPlan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center">
//                         <span className="mr-2 text-green-500">✓</span> {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Coupon */}
//                 <div className="mt-6">
//                   <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                     Apply Coupon
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//                   />
//                   <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                     Apply Coupon
//                   </button>
//                 </div>
//             </div>
//           </div>


//           {/* Content Sections (These will appear after the mobile checkout bar) */}
//           <div className="mt-10">
//             {/* ✅ Pass isDarkMode prop to child components */}
//             <DocumentsRequired isDarkMode={isDarkMode} />
//             <ZomatoWhatYouGet isDarkMode={isDarkMode} />

//             <h3 className="text-2xl font-semibold mt-12 mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />,
//                   title: 'Live Dashboard Access',
//                   desc: 'Track orders, payments, and delivery status from your restaurant dashboard.',
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: 'Menu Download Setup',
//                   desc: 'Enable downloadable menus for WhatsApp sharing or printing.',
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: 'Nationwide Coverage',
//                   desc: 'We assist across metros, tier 2 cities, and remote areas.',
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: 'Multi-Outlet Support',
//                   desc: 'Onboard multiple branches or kitchens with ease.',
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   // Apply dark mode classes to this div and its children
//                   className={`rounded-xl p-5 text-center shadow hover:shadow-md transition ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//                 >
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ✅ Pass isDarkMode prop to child component */}
//           <ZomatoFAQ isDarkMode={isDarkMode} />
//           <SiteFooter />
//         </div>

//         {/* Right: Sticky Checkout Bar (Desktop Only) */}
//         <div className="hidden md:block w-full md:w-[34%] md:pl-4">
//           <div className="md:sticky md:top-20">
//             <div className={`rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//               <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//               <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price}</h2>
//               <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//               {/* Plan Selector Bar for Desktop */}
//               <div className={`grid grid-cols-2 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                 {Object.keys(plans).map((key) => (
//                   <button
//                     key={key}
//                     onClick={() => setSelectedPlan(key)}
//                     className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//                     ${selectedPlan === key
//                         ? 'bg-purple-600 text-white shadow-sm'
//                         : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//                     }`}
//                   >
//                     {plans[key].name} {/* Changed to use direct plan name */}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 onClick={handleProceedToCart}
//                 className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//               >
//                 Go to Cart
//               </button>

//               <button
//                 onClick={handleBuyNow}
//                 className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//               >
//                 Buy Now
//               </button>

//               <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                 30-Day Money-Back Guarantee
//               </p>

//               <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                 {currentPlan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center">
//                       <span className="mr-2 text-green-500">✓</span> {feature}
//                   </li>
//                 ))}
//               </ul>

//               {/* Coupon */}
//               <div className="mt-6">
//                 <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                   Apply Coupon
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter coupon code"
//                   className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//                 />
//                 <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                   Apply Coupon
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Bottom Bar CTA for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
//         <button
//           onClick={handleProceedToCart}
//           className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
//         >
//           Get Started Now for ₹{currentPlan.price}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZomatoOnboardingCourse;










// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import zomatoImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
// import ZomatoFAQ from './ZomatoFAQ';
// import ZomatoWhatYouGet from './ZomatoWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';
// import SiteFooter from '../FssaiCoursePage/SiteFooter'; // Ensure this path is correct for your project

// const ZomatoOnboardingCourse = () => {
//   const navigate = useNavigate();
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Define your plans with their details
//   const plans = {
//     planA: {
//       name: 'Starter Onboarding', // Attractive name for Plan A
//       price: 1999,
//       description: 'Essential onboarding for your Zomato presence.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Initial Menu Item Upload (up to 25 items)',
//         '✔ Basic Branding & Profile Configuration',
//       ],
//     },
//     planB: {
//       name: 'Pro Launch Package', // Attractive name for Plan B
//       price: 2999,
//       description: 'Enhanced onboarding with extensive menu and photo management.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Extensive Photo Upload (up to 50 items)', // This is the key differentiator
//         '✔ Detailed Branding & Profile Configuration',
//         '✔ Priority Listing Support',
//       ],
//     },
//   };

//   // State to manage the selected plan - Default to planA
//   const [selectedPlan, setSelectedPlan] = useState('planA');

//   // Get current plan details based on selectedPlan state
//   const currentPlan = plans[selectedPlan];

//   // Ref for the main content area that the sticky element will be constrained by
//   const mainContentRef = useRef(null);
//   // Ref for the sticky checkout bar itself (optional, mainly for debugging or specific JS interactions)
//   const checkoutRef = useRef(null);

//   // Dark Mode Effects
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       document.body.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.body.classList.remove('dark');
//     }
//     // Save user preference to localStorage
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Handle navigation with selected plan
//   const handleProceedToCart = () => {
//     navigate(`/checkout/zomato?plan=${selectedPlan}`);
//   };

//   const handleBuyNow = () => {
//     navigate(`/checkout/zomato/buy?plan=${selectedPlan}`);
//   };

//   // Helper function to render the checkout card for reusability
//   const renderCheckoutCard = (isMobile = false) => (
//     <div
//       ref={isMobile ? null : checkoutRef} // Use ref only for desktop version if needed
//       className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//     >
//       <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//       <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price}</h2>
//       <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//       {/* Plan Selector Bar */}
//       <div className={`grid grid-cols-2 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//         {Object.keys(plans).map((key) => (
//           <button
//             key={key}
//             onClick={() => setSelectedPlan(key)}
//             className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//             ${selectedPlan === key
//                 ? 'bg-purple-600 text-white shadow-sm'
//                 : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//             }`}
//           >
//             {plans[key].name}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={handleProceedToCart}
//         className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//       >
//         Go to Cart
//       </button>

//       <button
//         onClick={handleBuyNow}
//         className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//       >
//         Buy Now
//       </button>

//       <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//         30-Day Money-Back Guarantee
//       </p>

//       <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//         {currentPlan.features.map((feature, idx) => (
//           <li key={idx} className="flex items-center">
//             <span className="mr-2 text-green-500">✓</span> {feature}
//           </li>
//         ))}
//       </ul>

//       {/* Coupon */}
//       <div className="mt-6">
//         <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//           Apply Coupon
//         </label>
//         <input
//           type="text"
//           placeholder="Enter coupon code"
//           className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//         />
//         <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//           Apply Coupon
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen py-10 px-4 sm:px-6 md:px-10 font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
//       {/* Dark Mode Toggle */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={toggleDarkMode}
//           className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
//         </button>
//       </div>

//       {/* Changed gap-10 to gap-6 and removed internal padding from children */}
//       <div ref={mainContentRef} className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6">
//         {/* Left Section - Main Content */}
//         {/* Removed md:pr-8 */}
//         <div className="w-full md:w-[66%] space-y-6">
//           <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
//           <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
//             Zomato Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base text-gray-700 mt-2">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, menu setup (professional), photo uploading (pre-shoot), add-ons, and description—all in one place.
//           </p>

//           {/* Highlight Bar */}
//           <div className={`rounded-lg p-4 mt-4 flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-900'}`}>
//             <div className="flex items-start gap-3">
//               <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm sm:text-base">
//                 Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-purple-600" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-wrap text-sm sm:text-base gap-4">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span>★
//                 <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(152 reviews)</span>
//               </div>
//               <div className={`border-l pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last updated 06/2025 • Hindi & English</p>

//           {/* Right: Checkout Bar (Mobile Specific Placement - Appears after main info) */}
//           <div className="w-full md:hidden mt-6">
//             {renderCheckoutCard(true)}
//           </div>

//           {/* Content Sections (These will appear after the mobile checkout bar) */}
//           <div className="mt-10">
//             <DocumentsRequired isDarkMode={isDarkMode} />
//             <ZomatoWhatYouGet isDarkMode={isDarkMode} />

//             <h3 className="text-2xl font-semibold mt-12 mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />,
//                   title: 'Live Dashboard Access',
//                   desc: 'Track orders, payments, and delivery status from your restaurant dashboard.',
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: 'Menu Download Setup',
//                   desc: 'Enable downloadable menus for WhatsApp sharing or printing.',
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: 'Nationwide Coverage',
//                   desc: 'We assist across metros, tier 2 cities, and remote areas.',
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: 'Multi-Outlet Support',
//                   desc: 'Onboard multiple branches or kitchens with ease.',
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className={`rounded-xl p-5 text-center shadow hover:shadow-md transition ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//                 >
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <ZomatoFAQ isDarkMode={isDarkMode} />
//         </div>

//         {/* Right: Sticky Checkout Bar (Desktop Only) */}
//         {/* Removed md:pl-4 */}
//         <div className="hidden md:block w-full md:w-[34%] relative">
//           <div className="md:sticky md:top-20">
//             {renderCheckoutCard()}
//           </div>
//         </div>
//       </div>

//       {/* SiteFooter - positioned outside the max-w-7xl mx-auto to span full width */}
//       {/* The styling for full width and internal content centering should be handled within SiteFooter.jsx */}
//       <SiteFooter isDarkMode={isDarkMode} />

//       {/* Floating Bottom Bar CTA for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
//         <button
//           onClick={handleProceedToCart}
//           className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
//         >
//           Get Started Now for ₹{currentPlan.price}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZomatoOnboardingCourse;















// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import zomatoImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
// import ZomatoFAQ from './ZomatoFAQ';
// import ZomatoWhatYouGet from './ZomatoWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';
// import SiteFooter from '../FssaiCoursePage/SiteFooter'; // Ensure this path is correct for your project

// const ZomatoOnboardingCourse = () => {
//   const navigate = useNavigate();
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Define your plans with their details
//   const plans = {
//     planA: {
//       name: 'Starter Onboarding', // Attractive name for Plan A
//       price: 1999,
//       description: 'Essential onboarding for your Zomato presence.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Initial Menu Item Upload (up to 25 items)',
//         '✔ Basic Branding & Profile Configuration',
//       ],
//     },
//     planB: {
//       name: 'Pro Launch Package', // Attractive name for Plan B
//       price: 2999,
//       description: 'Enhanced onboarding with extensive menu and photo management.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Extensive Photo Upload (up to 50 items)', // This is the key differentiator
//         '✔ Detailed Branding & Profile Configuration',
//         '✔ Priority Listing Support',
//       ],
//     },
//   };

//   // State to manage the selected plan - Default to planA
//   const [selectedPlan, setSelectedPlan] = useState('planA');

//   // Get current plan details based on selectedPlan state
//   const currentPlan = plans[selectedPlan];

//   // Ref for the main content area that the sticky element will be constrained by
//   const mainContentRef = useRef(null);
//   // Ref for the sticky checkout bar itself (optional, mainly for debugging or specific JS interactions)
//   const checkoutRef = useRef(null);

//   // Dark Mode Effects
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       document.body.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.body.classList.remove('dark');
//     }
//     // Save user preference to localStorage
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Handle navigation with selected plan
//  const handleProceedToCart = () => {
//   const planSlug = selectedPlan === "planA" ? "zomato-starter" : "zomato-pro";
//   navigate(`/checkout/${planSlug}`);
// };
//  const handleBuyNow = () => {
//   const planSlug = selectedPlan === "planA" ? "zomato-starter" : "zomato-pro";
//   navigate(`/checkout/${planSlug}`);
// };


//   // Helper function to render the checkout card for reusability
//   const renderCheckoutCard = (isMobile = false) => (
//     <div
//       ref={isMobile ? null : checkoutRef} // Use ref only for desktop version if needed
//       className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//     >
//       <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//       <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price}</h2>
//       <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//       {/* Plan Selector Bar - This acts as your category bar */}
//       <div className={`grid grid-cols-2 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//         {Object.keys(plans).map((key) => (
//           <button
//             key={key}
//             onClick={() => setSelectedPlan(key)}
//             className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//             ${selectedPlan === key
//                 ? 'bg-purple-600 text-white shadow-sm'
//                 : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//             }`}
//           >
//             {plans[key].name}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={handleProceedToCart}
//         className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//       >
//         Go to Cart
//       </button>

//       <button
//         onClick={handleBuyNow}
//         className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//       >
//         Buy Now
//       </button>

//       <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//         30-Day Money-Back Guarantee
//       </p>

//       <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//         {currentPlan.features.map((feature, idx) => (
//           <li key={idx} className="flex items-center">
//             <span className="mr-2 text-green-500">✓</span> {feature}
//           </li>
//         ))}
//       </ul>

//       {/* Coupon */}
//       <div className="mt-6">
//         <label htmlFor="coupon-input" className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//           Apply Coupon
//         </label>
//         <input
//           id="coupon-input" // Added id for accessibility
//           type="text"
//           placeholder="Enter coupon code"
//           className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//         />
//         <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//           Apply Coupon
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen py-10 px-4 sm:px-6 md:px-10 font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
//       {/* Dark Mode Toggle */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={toggleDarkMode}
//           className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
//         </button>
//       </div>

//       {/* Changed gap-10 to gap-6 and removed internal padding from children */}
//       <div ref={mainContentRef} className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6">
//         {/* Left Section - Main Content */}
//         {/* Removed md:pr-8 */}
//         <div className="w-full md:w-[66%] space-y-6">
//           <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
//           <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
//             Zomato Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base text-gray-700 mt-2">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, menu setup (professional), photo uploading (pre-shoot), add-ons, and description—all in one place.
//           </p>

//           {/* Highlight Bar */}
//           <div className={`rounded-lg p-4 mt-4 flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-900'}`}>
//             <div className="flex items-start gap-3">
//               <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm sm:text-base">
//                 Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-purple-600" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-wrap text-sm sm:text-base gap-4">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span>★
//                 <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(152 reviews)</span>
//               </div>
//               <div className={`border-l pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last updated 06/2025 • Hindi & English</p>

//           {/* Right: Checkout Bar (Mobile Specific Placement - Appears after main info) */}
//           <div className="w-full md:hidden mt-6">
//             {renderCheckoutCard(true)}
//           </div>

//           {/* Content Sections (These will appear after the mobile checkout bar) */}
//           <div className="mt-10">
//             <DocumentsRequired isDarkMode={isDarkMode} />
//             <ZomatoWhatYouGet isDarkMode={isDarkMode} />

//             <h3 className="text-2xl font-semibold mt-12 mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />,
//                   title: 'Live Dashboard Access',
//                   desc: 'Track orders, payments, and delivery status from your restaurant dashboard.',
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: 'Menu Download Setup',
//                   desc: 'Enable downloadable menus for WhatsApp sharing or printing.',
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: 'Nationwide Coverage',
//                   desc: 'We assist across metros, tier 2 cities, and remote areas.',
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: 'Multi-Outlet Support',
//                   desc: 'Onboard multiple branches or kitchens with ease.',
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className={`rounded-xl p-5 text-center shadow hover:shadow-md transition ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//                 >
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <ZomatoFAQ isDarkMode={isDarkMode} />
//         </div>

//         {/* Right: Sticky Checkout Bar (Desktop Only) */}
//         {/* Removed md:pl-4 */}
//         <div className="hidden md:block w-full md:w-[34%] relative">
//           <div className="md:sticky md:top-20">
//             {renderCheckoutCard()}
//           </div>
//         </div>
//       </div>

//       {/* SiteFooter - positioned outside the max-w-7xl mx-auto to span full width */}
//       {/* The styling for full width and internal content centering should be handled within SiteFooter.jsx */}
//       <SiteFooter isDarkMode={isDarkMode} />

//       {/* Floating Bottom Bar CTA for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
//         <button
//           onClick={handleProceedToCart}
//           className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
//         >
//           Get Started Now for ₹{currentPlan.price}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZomatoOnboardingCourse;












// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import zomatoImg from '../../../assets/zomato3.png'; // Correctly used for the banner
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
// import ZomatoFAQ from './ZomatoFAQ';
// import ZomatoWhatYouGet from './ZomatoWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';
// import SiteFooter from '../FssaiCoursePage/SiteFooter'; // Ensure this path is correct for your project

// const ZomatoOnboardingCourse = () => {
//   const navigate = useNavigate();
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Define your plans with their details
//   const plans = {
//     planA: {
//       name: 'Starter Onboarding',
//       price: 1999,
//       slug: 'zomato-starter', // Added slug for direct navigation
//       description: 'Essential onboarding for your Zomato presence.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Initial Menu Item Upload (up to 25 items)',
//         '✔ Basic Branding & Profile Configuration',
//       ],
//     },
//     planB: {
//       name: 'Pro Launch Package',
//       price: 2999,
//       slug: 'zomato-pro', // Added slug for direct navigation
//       description: 'Enhanced onboarding with extensive menu and photo management.',
//       features: [
//         '✔ Zomato Restaurant Account Setup',
//         '✔ Professional Menu Setup & Optimization',
//         '✔ Extensive Photo Upload (up to 50 items)',
//         '✔ Detailed Branding & Profile Configuration',
//         '✔ Priority Listing Support',
//       ],
//     },
//   };

//   const [selectedPlan, setSelectedPlan] = useState('planA');
//   const currentPlan = plans[selectedPlan];

//   const mainContentRef = useRef(null);
//   const checkoutRef = useRef(null);

//   // Dark Mode Effects
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       document.body.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.body.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Simplified navigation: directly use the slug from the selected plan
//   const handleCheckout = () => {
//     navigate(`/checkout/${currentPlan.slug}`);
//   };

//   // Helper function to render the checkout card for reusability
//   const renderCheckoutCard = (isMobile = false) => (
//     <div
//       ref={isMobile ? null : checkoutRef}
//       className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//     >
//       <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />
//       <h2 className="text-3xl font-bold mb-1" id="plans">₹{currentPlan.price.toLocaleString()}</h2>
//       <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

//       {/* Plan Selector Bar - This acts as your category bar */}
//       <div className={`grid grid-cols-2 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//         {Object.keys(plans).map((key) => (
//           <button
//             key={key}
//             onClick={() => setSelectedPlan(key)}
//             className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
//             ${selectedPlan === key
//                 ? 'bg-purple-600 text-white shadow-sm'
//                 : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
//             }`}
//           >
//             {plans[key].name}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={handleCheckout}
//         className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//       >
//         Go to Cart
//       </button>

//       <button
//         onClick={handleCheckout}
//         className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
//       >
//         Buy Now
//       </button>

//       <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//         30-Day Money-Back Guarantee
//       </p>

//       <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//         {currentPlan.features.map((feature, idx) => (
//           <li key={idx} className="flex items-center">
//             <span className="mr-2 text-green-500">✓</span> {feature}
//           </li>
//         ))}
//       </ul>

//       {/* Coupon */}
//       <div className="mt-6">
//         <label htmlFor="coupon-input" className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//           Apply Coupon
//         </label>
//         <input
//           id="coupon-input"
//           type="text"
//           placeholder="Enter coupon code"
//           className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//         />
//         <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//           Apply Coupon
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen py-10 px-4 sm:px-6 md:px-10 font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
//       {/* Dark Mode Toggle */}
//       <div className="fixed top-4 right-4 z-50">
//         <button
//           onClick={toggleDarkMode}
//           className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
//           aria-label="Toggle dark mode"
//         >
//           {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
//         </button>
//       </div>

//       <div ref={mainContentRef} className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6">
//         {/* Left Section - Main Content */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
//           <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
//             Zomato Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base text-gray-700 mt-2">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, menu setup (professional), photo uploading (pre-shoot), add-ons, and description—all in one place.
//           </p>

//           {/* Highlight Bar */}
//           <div className={`rounded-lg p-4 mt-4 flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-900'}`}>
//             <div className="flex items-start gap-3">
//               <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm sm:text-base">
//                 Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-purple-600" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-wrap text-sm sm:text-base gap-4">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span>★
//                 <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(152 reviews)</span>
//               </div>
//               <div className={`border-l pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//             Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last updated 06/2025 • Hindi & English</p>

//           {/* Right: Checkout Bar (Mobile Specific Placement - Appears after main info) */}
//           <div className="w-full md:hidden mt-6">
//             {renderCheckoutCard(true)}
//           </div>

//           {/* Content Sections (These will appear after the mobile checkout bar) */}
//           <div className="mt-10">
//             <DocumentsRequired isDarkMode={isDarkMode} />
//             <ZomatoWhatYouGet isDarkMode={isDarkMode} />

//             <h3 className="text-2xl font-semibold mt-12 mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />,
//                   title: 'Live Dashboard Access',
//                   desc: 'Track orders, payments, and delivery status from your restaurant dashboard.',
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: 'Menu Download Setup',
//                   desc: 'Enable downloadable menus for WhatsApp sharing or printing.',
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: 'Nationwide Coverage',
//                   desc: 'We assist across metros, tier 2 cities, and remote areas.',
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: 'Multi-Outlet Support',
//                   desc: 'Onboard multiple branches or kitchens with ease.',
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className={`rounded-xl p-5 text-center shadow hover:shadow-md transition ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//                 >
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <ZomatoFAQ isDarkMode={isDarkMode} />
//         </div>

//         {/* Right: Sticky Checkout Bar (Desktop Only) */}
//         <div className="hidden md:block w-full md:w-[34%] relative">
//           <div className="md:sticky md:top-20">
//             {renderCheckoutCard()}
//           </div>
//         </div>
//       </div>

//       {/* SiteFooter - positioned outside the max-w-7xl mx-auto to span full width */}
//       {/* The styling for full width and internal content centering should be handled within SiteFooter.jsx */}
//       <SiteFooter isDarkMode={isDarkMode} />

//       {/* Floating Bottom Bar CTA for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40">
//         <button
//           onClick={handleCheckout}
//           className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
//         >
//           Get Started Now for ₹{currentPlan.price.toLocaleString()}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZomatoOnboardingCourse;









import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from "../../../utils/cartUtils";   // ✅ USING CENTRAL CART
import zomatoImg from '../../../assets/zomato3.png'; // Correctly used for the banner
import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
import ZomatoFAQ from './ZomatoFAQ';
import ZomatoWhatYouGet from './ZomatoWhatYouGet';
import DocumentsRequired from './DocumentsRequired';
import SiteFooter from '../FssaiCoursePage/SiteFooter'; // Ensure this path is correct for your project

const ZomatoOnboardingCourse = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Define your plans with their details
    const plans = {
        planA: {
            id: "zomato-starter",
            name: 'Starter Onboarding',
            price: 1999,
            slug: 'zomato-starter', // Added slug for direct navigation
            description: 'Essential onboarding for your Zomato presence.',
            features: [
                '✔ Zomato Restaurant Account Setup',
                '✔ Professional Menu Setup & Optimization',
                '✔ Initial Menu Item Upload (up to 25 items)',
                '✔ Basic Branding & Profile Configuration',
            ],
        },
        planB: {
            id: "zomato-pro",
            name: 'Pro Launch Package',
            price: 2999,
            slug: 'zomato-pro', // Added slug for direct navigation
            description: 'Enhanced onboarding with extensive menu and photo management.',
            features: [
                '✔ Zomato Restaurant Account Setup',
                '✔ Professional Menu Setup & Optimization',
                '✔ Extensive Photo Upload (up to 50 items)',
                '✔ Detailed Branding & Profile Configuration',
                '✔ Priority Listing Support',
            ],
        },
    };

    const [selectedPlan, setSelectedPlan] = useState('planA');
    const [isAdded, setIsAdded] = useState(false);
    const currentPlan = plans[selectedPlan];

    const mainContentRef = useRef(null);
    const checkoutRef = useRef(null);

    // Dark Mode Effects
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // 🛒 ADD TO CART FUNCTION
    const handleAddToCart = () => {
        addToCart({
            id: currentPlan.id,
            name: currentPlan.name,
            price: currentPlan.price,
            slug: currentPlan.slug,
            quantity: 1,
        });

        setIsAdded(true);

        // Redirect to cart after 800ms
        // setTimeout(() => {
        //     navigate("/cart");
        // }, 800);
    };

    // Simplified navigation: directly use the slug from the selected plan
    const handleCheckout = () => {
        // Passing GST information to the checkout page, assuming 18% is a fixed constant
        navigate(`/checkout/${currentPlan.slug}?gst=18`);
    };

    // Helper function to render the checkout card for reusability
    const renderCheckoutCard = (isMobile = false) => (
        <div
            ref={isMobile ? null : checkoutRef}
            className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
        >
            <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4 w-full" />

            {/* Price Display with GST Mention */}
            <div className="flex justify-between items-end mb-1" id="plans">
                <h2 className="text-3xl font-bold">₹{currentPlan.price.toLocaleString()}</h2>
                {/* **GST Mention added here** */}
                <span className="text-sm text-red-600 font-semibold">+ 18% GST</span>
            </div>

            <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentPlan.description}</p>

            {/* Plan Selector Bar - This acts as your category bar */}
            <div className={`grid grid-cols-2 gap-2 p-1 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                {Object.keys(plans).map((key) => (
                    <button
                        key={key}
                        onClick={() => {
                            setSelectedPlan(key);
                            setIsAdded(false);
                        }}
                        className={`py-2 px-1 text-center text-xs sm:text-sm font-medium rounded-md transition-colors duration-200
            ${selectedPlan === key
                                ? 'bg-purple-600 text-white shadow-sm'
                                : `${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`
                            }`}
                    >
                        {plans[key].name}
                    </button>
                ))}
            </div>

            <button
                onClick={handleAddToCart}
                className={`w-full py-2 rounded-lg transition ${isAdded
                    ? 'bg-green-600 text-white'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
            >
                {isAdded ? "Added to Cart ✓" : "Go to Cart"}
            </button>

            <button
                onClick={handleCheckout}
                className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-600 text-purple-700 hover:bg-purple-50'}`}
            >
                Buy Now
            </button>

            <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                30-Day Money-Back Guarantee
            </p>

            <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span> {feature}
                    </li>
                ))}
            </ul>

            {/* Coupon */}
            <div className="mt-6">
                <label htmlFor="coupon-input" className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Apply Coupon
                </label>
                <input
                    id="coupon-input"
                    type="text"
                    placeholder="Enter coupon code"
                    className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
                />
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
                    Apply Coupon
                </button>
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen py-10 px-4 sm:px-6 md:px-10 font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'}`}>
            {/* Dark Mode Toggle */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleDarkMode}
                    className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
                </button>
            </div>

            <div ref={mainContentRef} className="flex flex-col md:flex-row max-w-6xl mx-auto gap-6">
                {/* Left Section - Main Content */}
                <div className="w-full md:w-[66%] space-y-6 md:pr-8">
                    <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                        Zomato Onboarding & Restaurant Launch A–Z
                    </h1>

                    <p className="text-base text-gray-700 mt-2">
                        This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, menu setup (professional), photo uploading (pre-shoot), add-ons, and description—all in one place.
                    </p>

                    {/* Highlight Bar */}
                    <div className={`rounded-lg p-4 mt-4 flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-900'}`}>
                        <div className="flex items-start gap-3">
                            <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                Premium
                            </div>
                            <p className="text-sm sm:text-base">
                                Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
                                <span className="ml-2 underline cursor-pointer hover:text-purple-600" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>See Onboarding Plans</span>
                            </p>
                        </div>
                        <div className="flex flex-wrap text-sm sm:text-base gap-4">
                            <div className="flex items-center gap-1">
                                <span className="font-semibold text-yellow-500">4.8</span>★
                                <span className={`hidden sm:inline ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>(152 reviews)</span>
                            </div>
                            <div className={`border-l pl-4 ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-400 text-gray-600'}`}>
                                <span className="font-semibold">230+</span> onboarded
                            </div>
                        </div>
                    </div>

                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Last updated 06/2025 • Hindi & English</p>

                    {/* Right: Checkout Bar (Mobile Specific Placement - Appears after main info) */}
                    <div className="w-full md:hidden mt-6">
                        {renderCheckoutCard(true)}
                    </div>

                    {/* Content Sections (These will appear after the mobile checkout bar) */}
                    <div className="mt-10">
                        <DocumentsRequired isDarkMode={isDarkMode} />
                        <ZomatoWhatYouGet isDarkMode={isDarkMode} />

                        <h3 className="text-2xl font-semibold mt-12 mb-6">More reasons to onboard</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />,
                                    title: 'Live Dashboard Access',
                                    desc: 'Track orders, payments, and delivery status from your restaurant dashboard.',
                                },
                                {
                                    icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
                                    title: 'Menu Download Setup',
                                    desc: 'Enable downloadable menus for WhatsApp sharing or printing.',
                                },
                                {
                                    icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
                                    title: 'Nationwide Coverage',
                                    desc: 'We assist across metros, tier 2 cities, and remote areas.',
                                },
                                {
                                    icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
                                    title: 'Multi-Outlet Support',
                                    desc: 'Onboard multiple branches or kitchens with ease.',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`rounded-xl p-5 text-center shadow hover:shadow-md transition ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
                                >
                                    {item.icon}
                                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ZomatoFAQ isDarkMode={isDarkMode} />
                </div>

                {/* Right: Sticky Checkout Bar (Desktop Only) */}
                <div className="hidden md:block w-full md:w-[34%] relative">
                    <div className="md:sticky md:top-20">
                        {renderCheckoutCard()}
                    </div>
                </div>
            </div>

            {/* SiteFooter - positioned outside the max-w-7xl mx-auto to span full width */}
            {/* The styling for full width and internal content centering should be handled within SiteFooter.jsx */}
            <SiteFooter isDarkMode={isDarkMode} />

            {/* Floating Bottom Bar CTA for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:hidden z-40 flex justify-between items-center">
                <div className='flex flex-col'>
                    <span className="text-xl font-bold">
                        ₹{currentPlan.price.toLocaleString()}
                    </span>
                    {/* **Mobile Floating GST Mention added here** */}
                    <span className="text-xs text-red-600 font-semibold">
                        + 18% GST
                    </span>
                </div>
                <button
                    onClick={handleAddToCart}
                    className={`py-3 px-6 rounded-lg text-lg font-semibold transition ${isAdded
                        ? 'bg-green-600 text-white'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}
                >
                    {isAdded ? "Added to Cart ✓" : "Go to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ZomatoOnboardingCourse;