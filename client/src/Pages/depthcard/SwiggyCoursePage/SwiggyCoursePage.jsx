// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import swiggyImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import SwiggyFAQ from './SwiggyFAQ';
// import SwiggyWhatYouGet from './SwiggyWhatYouGet';

// const SwiggyOnboardingCourse = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-orange-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-orange-600">Business & Marketing {'>'} Swiggy</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Swiggy Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-orange-100 text-orange-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm">
//                 Expert setup, full documentation support & fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-orange-600">See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Delivered by <span className="text-orange-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Features Section */}
//           <div className="mt-10">
//             <SwiggyWhatYouGet />
//             <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-orange-500" />,
//                 title: "Live Dashboard Access",
//                 desc: "Track orders, payments, and delivery status directly from your dashboard."
//               },
//               {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                 title: "Menu Download Setup",
//                 desc: "Enable downloadable menu for WhatsApp or printing."
//               },
//               {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                 title: "Nationwide Coverage",
//                 desc: "We assist across India — metros, tier 2 cities, and remote areas."
//               },
//               {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                 title: "Multi-Outlet Support",
//                 desc: "Easily onboard multiple branches or cloud kitchens."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <SwiggyFAQ />
//         </div>

//         {/* ✅ Right: Sticky Checkout Bar */}
//         <div className="w-full md:w-[34%]">
//           <div className="md:sticky md:top-20 mt-10 md:mt-0">
//             <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
//               <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover" />
//               <h2 className="text-3xl font-bold mb-1">₹1,999</h2>
//               <p className="text-sm text-gray-600 mb-3">Complete onboarding service</p>

//               <button
//                 onClick={() => navigate('/checkout/swiggy')}
//                 className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
//               >
//                 Go to Cart
//               </button>

//               <button
//                 onClick={() => navigate('/checkout/swiggy')}
//                 className="w-full border mt-2 border-orange-600 text-orange-700 py-2 rounded-lg hover:bg-orange-50"
//               >
//                 Buy Now
//               </button>

//               <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//               {/* ✅ Features List */}
//               <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                 <li>✔ Restaurant partner account setup</li>
//                 <li>✔ Logo, design, and branding materials</li>
//                 <li>✔ On-call and WhatsApp support</li>
//                 <li>✔ Fast-track listing service</li>
//               </ul>

//               {/* ✅ Coupon Section */}
//               <div className="mt-6">
//                 <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                 <input
//                   type="text"
//                   placeholder="Enter coupon code"
//                   className="w-full border px-3 py-2 rounded text-sm mb-2"
//                 />
//                 <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                   Apply Coupon
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SwiggyOnboardingCourse;














// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import swiggyImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import SwiggyFAQ from './SwiggyFAQ';
// import SwiggyWhatYouGet from './SwiggyWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';

// const SwiggyOnboardingCourse = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-orange-50 text-gray-900 min-h-screen pb-32 relative font-[Poppins]">
//       <div className="px-4 sm:px-6 md:px-16">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* ✅ Left Section */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <p className="text-sm text-orange-600">Business & Marketing {'>'} Swiggy</p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Swiggy Onboarding & Restaurant Launch A–Z
//             </h1>

//             <p className="text-base sm:text-lg text-gray-700">
//               This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
//             </p>

//             {/* ✅ Highlight Section */}
//             <div className="bg-orange-100 text-orange-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//               <div className="flex items-start gap-3">
//                 <div className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                   Premium
//                 </div>
//                 <p className="text-sm">
//                   Expert setup, full documentation support & fast-track approval.
//                   <span className="ml-2 underline cursor-pointer hover:text-orange-600">See Onboarding Plans</span>
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-2 text-sm">
//                 <div className="flex items-center gap-1">
//                   <span className="font-semibold text-yellow-500">4.8</span> ★
//                   <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
//                 </div>
//                 <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                   <span className="font-semibold">230+</span> onboarded
//                 </div>
//               </div>
//             </div>

//             <p className="text-sm text-gray-500">
//               Delivered by <span className="text-orange-600 font-semibold">MagicScale Team</span>
//             </p>
//             <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//             <div className="mt-10">
//             <DocumentsRequired/>
//               <SwiggyWhatYouGet />
//               <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[{
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-orange-500" />,
//                   title: "Live Dashboard Access",
//                   desc: "Track orders, payments, and delivery status directly from your dashboard."
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: "Menu Download Setup",
//                   desc: "Enable downloadable menu for WhatsApp or printing."
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: "Nationwide Coverage",
//                   desc: "We assist across India — metros, tier 2 cities, and remote areas."
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: "Multi-Outlet Support",
//                   desc: "Easily onboard multiple branches or cloud kitchens."
//                 }].map((item, idx) => (
//                   <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                     {item.icon}
//                     <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                     <p className="text-sm text-gray-600">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <SwiggyFAQ />
//           </div>

//           {/* ✅ Right Sticky Checkout (Desktop) */}
//           <div className="hidden md:block md:w-[34%]">
//             <div className="sticky top-20">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
//                 <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover h-40" />
//                 <h2 className="text-3xl font-bold mb-1">₹1,999</h2>
//                 <p className="text-sm text-gray-600 mb-3">Complete onboarding service</p>

//                 <button
//                   onClick={() => navigate('/checkout/swiggy')}
//                   className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={() => navigate('/checkout/swiggy')}
//                   className="w-full border mt-2 border-orange-600 text-orange-700 py-2 rounded-lg hover:bg-orange-50"
//                 >
//                   Buy Now
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   <li>✔ Restaurant partner account setup</li>
//                   <li>✔ Logo, design, and branding materials</li>
//                   <li>✔ On-call and WhatsApp support</li>
//                   <li>✔ Fast-track listing service</li>
//                 </ul>

//                 <div className="mt-6">
//                   <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     className="w-full border px-3 py-2 rounded text-sm mb-2"
//                   />
//                   <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                     Apply Coupon
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile Floating Summary Bar */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
//         <div>
//           <h4 className="text-lg font-semibold">₹1,999</h4>
//           <p className="text-xs text-gray-600 truncate max-w-[180px]">Complete onboarding service</p>
//         </div>
//         <button
//           onClick={() => navigate('/checkout/swiggy')}
//           className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwiggyOnboardingCourse;























// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import swiggyImg from '../../../assets/zomato3.png'; // Consider replacing with a more generic or Swiggy-specific image if available
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaCheckCircle, FaTag } from 'react-icons/fa'; // Added FaTag for coupon icon
// import SwiggyFAQ from './SwiggyFAQ';
// import SwiggyWhatYouGet from './SwiggyWhatYouGet';
// import DocumentsRequired from './DocumentsRequired';

// const SwiggyOnboardingCourse = () => {
//   const navigate = useNavigate();

//   // Define your two Swiggy plans with names and prices
//   const plans = {
//     basic: {
//       name: "Swiggy Basic Onboarding",
//       price: 1999,
//       slug: "swiggy-basic",
//       description: "Quick and essential setup to get your restaurant live on Swiggy.",
//       features: [
//         "Restaurant partner account setup",
//         "Basic menu creation & upload",
//         "Initial listing support",
//       ],
//       tagline: "Your fast track to Swiggy listing."
//     },
//     premium: {
//       name: "Swiggy Prime Onboarding",
//       price: 2999,
//       slug: "swiggy-prime",
//       description: "Comprehensive service including advanced menu management and priority support.",
//       features: [
//         "Restaurant partner account setup",
//         "Advanced menu design & optimization",
//         "On-call and WhatsApp priority support",
//         "Fast-track listing & approval",
//         "Restaurant profile branding assistance",
//         "Performance tips & basic insights"
//       ],
//       tagline: "Maximize your presence with a complete setup."
//     }
//   };

//   // Define available coupons
//   const availableCoupons = [
//     { code: 'MAGIC20', discount: 20, description: 'Get 20% off on your total purchase!' },
//     { code: 'SWIGGY100', discount: null, flatDiscount: 10, description: 'Get ₹10 off on any plan!' },
//     { code: 'NEWUSER50', discount: null, flatDiscount: 5, description: '₹5 off for new users!' },
//   ];

//   const [selectedPlan, setSelectedPlan] = useState('basic');
//   const [couponCode, setCouponCode] = useState('');
//   const [discountApplied, setDiscountApplied] = useState(false);
//   const [appliedCouponInfo, setAppliedCouponInfo] = useState(null); // Stores info about the applied coupon
//   const [finalPrice, setFinalPrice] = useState(0);

//   const currentPlan = plans[selectedPlan];

//   // Effect to recalculate price whenever selectedPlan or discountApplied changes
//   useEffect(() => {
//     let price = currentPlan.price;
//     if (discountApplied && appliedCouponInfo) {
//       if (appliedCouponInfo.discount) {
//         price = price * (1 - appliedCouponInfo.discount / 100);
//       } else if (appliedCouponInfo.flatDiscount) {
//         price = price - appliedCouponInfo.flatDiscount;
//       }
//     }
//     setFinalPrice(Math.max(0, Math.round(price))); // Ensure price doesn't go below zero
//   }, [selectedPlan, discountApplied, currentPlan.price, appliedCouponInfo]);

//   const handleCouponApply = () => {
//     const couponToApply = availableCoupons.find(coupon => coupon.code.toUpperCase() === couponCode.toUpperCase());

//     if (couponToApply) {
//       setDiscountApplied(true);
//       setAppliedCouponInfo(couponToApply);
//       alert(`Coupon "${couponToApply.code}" applied! ${couponToApply.description}`);
//     } else {
//       setDiscountApplied(false);
//       setAppliedCouponInfo(null);
//       alert('Invalid coupon code. Please try again.');
//     }
//   };

//   const handleCouponSelect = (coupon) => {
//     setCouponCode(coupon.code);
//     handleCouponApply(); // Automatically apply when selected
//   };

//   const handleRemoveCoupon = () => {
//     setCouponCode('');
//     setDiscountApplied(false);
//     setAppliedCouponInfo(null);
//   };

//   const handleCheckout = () => {
//     navigate(`/checkout/${currentPlan.slug}?finalPrice=${finalPrice}&discountApplied=${discountApplied}&couponCode=${appliedCouponInfo ? appliedCouponInfo.code : ''}`);
//   };

//   return (
//     <div className="bg-orange-50 text-gray-900 min-h-screen pb-32 md:pb-0 relative font-[Poppins]">
//       {/* Adjusted padding to control space from edges */}
//       <div className="px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* ✅ Left Section */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <p className="text-sm text-orange-600">Business & Marketing {'>'} Swiggy</p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Swiggy Onboarding & Restaurant Launch A–Z
//             </h1>

//             <p className="text-base sm:text-lg text-gray-700">
//               This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
//             </p>

//             {/* ✅ Highlight Section */}
//             <div className="bg-orange-100 text-orange-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//               <div className="flex items-start gap-3">
//                 <div className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                   Premium Service
//                 </div>
//                 <p className="text-sm">
//                   Expert setup, full documentation support & fast-track approval.
//                   <a href="#plans" className="ml-2 underline cursor-pointer hover:text-orange-600">See Onboarding Plans</a>
//                 </p>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-2 text-sm">
//                 <div className="flex items-center gap-1">
//                   <span className="font-semibold text-yellow-500">4.8</span> ★
//                   <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
//                 </div>
//                 <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                   <span className="font-semibold">230+</span> onboarded
//                 </div>
//               </div>
//             </div>

//             <p className="text-sm text-gray-500">
//               Delivered by <span className="text-orange-600 font-semibold">MagicScale Team</span>
//             </p>
//             <p className="text-sm text-gray-500">Last updated {new Date().toLocaleDateString('en-IN', { month: '2-digit', year: 'numeric' })} • Hindi & English</p>

//             {/* Mobile Checkout Bar (Appears after initial content on mobile) */}
//             <div className="md:hidden mt-8" id="plans-mobile">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full mx-auto">
//                 <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover h-40" />

//                 {/* Plan Selection */}
//                 <div className="mb-4">
//                   <h3 className="text-lg font-bold mb-2">Choose Your Plan</h3>
//                   <div className="flex space-x-2">
//                     {Object.keys(plans).map((key) => (
//                       <button
//                         key={key}
//                         onClick={() => {
//                           setSelectedPlan(key);
//                           setDiscountApplied(false);
//                           setCouponCode('');
//                           setAppliedCouponInfo(null);
//                         }}
//                         className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors
//                           ${selectedPlan === key
//                             ? 'bg-orange-600 text-white shadow-md'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                       >
//                         {plans[key].name.replace('Swiggy ', '').replace('Onboarding', '')}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Price Display */}
//                 <h2 className="text-3xl font-bold mb-1">
//                   ₹{finalPrice.toLocaleString()}
//                   {discountApplied && (
//                     <span className="ml-2 text-xl font-normal text-gray-500 line-through">
//                       ₹{currentPlan.price.toLocaleString()}
//                     </span>
//                   )}
//                 </h2>
//                 {discountApplied && appliedCouponInfo && (
//                   <p className="text-green-600 text-sm mb-3">
//                     {appliedCouponInfo.discount ? `You saved ${appliedCouponInfo.discount}%!` : `You saved ₹${appliedCouponInfo.flatDiscount}!`}
//                   </p>
//                 )}
//                 <p className="text-sm text-gray-600 mb-3">{currentPlan.tagline}</p>

//                 <button
//                   onClick={handleCheckout}
//                   className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   {currentPlan.features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Coupon Section */}
//                 <div className="mt-6">
//                   <label htmlFor="coupon-code-mobile" className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                   <div className="flex">
//                     <input
//                       id="coupon-code-mobile"
//                       type="text"
//                       placeholder="Enter coupon code"
//                       className="flex-grow border px-3 py-2 rounded-l text-sm focus:ring-orange-500 focus:border-orange-500"
//                       value={couponCode}
//                       onChange={(e) => setCouponCode(e.target.value)}
//                       disabled={discountApplied}
//                     />
//                     <button
//                       onClick={handleCouponApply}
//                       disabled={discountApplied || couponCode.trim() === ''}
//                       className={`px-4 py-2 rounded-r text-sm font-semibold transition-colors ${
//                         discountApplied || couponCode.trim() === ''
//                           ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
//                           : 'bg-green-600 hover:bg-green-700 text-white'
//                       }`}
//                     >
//                       {discountApplied ? 'Applied' : 'Apply'}
//                     </button>
//                   </div>
//                   {discountApplied && appliedCouponInfo ? (
//                     <div className="flex justify-between items-center text-green-600 text-xs mt-1">
//                       <span>Coupon "{appliedCouponInfo.code}" applied!</span>
//                       <button onClick={handleRemoveCoupon} className="text-red-500 hover:underline">Remove</button>
//                     </div>
//                   ) : (
//                     couponCode.trim() === '' && (
//                       <p className="text-gray-500 text-xs mt-1">
//                         Enter a coupon code or select from below.
//                       </p>
//                     )
//                   )}

//                   {/* Coupon Options */}
//                   {!discountApplied && (
//                     <div className="mt-4 border-t border-gray-200 pt-4">
//                       <h4 className="text-md font-semibold mb-2">Available Coupons:</h4>
//                       <div className="space-y-2">
//                         {availableCoupons.map((coupon, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
//                             onClick={() => handleCouponSelect(coupon)}
//                           >
//                             <div className="flex items-center">
//                               <FaTag className="text-orange-500 mr-2" />
//                               <div>
//                                 <p className="font-semibold text-sm">{coupon.code}</p>
//                                 <p className="text-xs text-gray-600">{coupon.description}</p>
//                               </div>
//                             </div>
//                             <button
//                               onClick={(e) => { e.stopPropagation(); handleCouponSelect(coupon); }} // Prevent click on parent div from triggering again
//                               className="text-orange-600 hover:text-orange-800 text-sm font-medium"
//                             >
//                               Apply
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10">
//               <DocumentsRequired />
//               <SwiggyWhatYouGet />
//               <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[{
//                   icon: <FaTv className="mx-auto text-3xl mb-3 text-orange-500" />,
//                   title: "Live Dashboard Access",
//                   desc: "Track orders, payments, and delivery status directly from your dashboard."
//                 },
//                 {
//                   icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                   title: "Menu Download Setup",
//                   desc: "Enable downloadable menu for WhatsApp or printing."
//                 },
//                 {
//                   icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                   title: "Nationwide Coverage",
//                   desc: "We assist across India — metros, tier 2 cities, and remote areas."
//                 },
//                 {
//                   icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                   title: "Multi-Outlet Support",
//                   desc: "Easily onboard multiple branches or cloud kitchens."
//                 }].map((item, idx) => (
//                   <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                     {item.icon}
//                     <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                     <p className="text-sm text-gray-600">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <SwiggyFAQ />
//           </div>

//           {/* ✅ Right Sticky Checkout (Desktop) */}
//           {/* Added max-h-[calc(100vh-theme(space.20))] and overflow-y-auto */}
//           <div className="hidden md:block md:w-[34%]">
//             <div className="sticky top-20 max-h-[calc(100vh-theme(space.20))] overflow-y-auto" id="plans-desktop">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
//                 <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover h-40" />

//                 {/* Plan Selection */}
//                 <div className="mb-4">
//                   <h3 className="text-lg font-bold mb-2">Choose Your Plan</h3>
//                   <div className="flex space-x-2">
//                     {Object.keys(plans).map((key) => (
//                       <button
//                         key={key}
//                         onClick={() => {
//                           setSelectedPlan(key);
//                           setDiscountApplied(false);
//                           setCouponCode('');
//                           setAppliedCouponInfo(null);
//                         }}
//                         className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors
//                           ${selectedPlan === key
//                             ? 'bg-orange-600 text-white shadow-md'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                       >
//                         {plans[key].name.replace('Swiggy ', '').replace('Onboarding', '')}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Price Display */}
//                 <h2 className="text-3xl font-bold mb-1">
//                   ₹{finalPrice.toLocaleString()}
//                   {discountApplied && (
//                     <span className="ml-2 text-xl font-normal text-gray-500 line-through">
//                       ₹{currentPlan.price.toLocaleString()}
//                     </span>
//                   )}
//                 </h2>
//                 {discountApplied && appliedCouponInfo && (
//                   <p className="text-green-600 text-sm mb-3">
//                     {appliedCouponInfo.discount ? `You saved ${appliedCouponInfo.discount}%!` : `You saved ₹${appliedCouponInfo.flatDiscount}!`}
//                   </p>
//                 )}
//                 <p className="text-sm text-gray-600 mb-3">{currentPlan.tagline}</p>

//                 <button
//                   onClick={handleCheckout}
//                   className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   {currentPlan.features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Coupon Section */}
//                 <div className="mt-6">
//                   <label htmlFor="coupon-code-desktop" className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                   <div className="flex">
//                     <input
//                       id="coupon-code-desktop"
//                       type="text"
//                       placeholder="Enter coupon code"
//                       className="flex-grow border px-3 py-2 rounded-l text-sm focus:ring-orange-500 focus:border-orange-500"
//                       value={couponCode}
//                       onChange={(e) => setCouponCode(e.target.value)}
//                       disabled={discountApplied}
//                     />
//                     <button
//                       onClick={handleCouponApply}
//                       disabled={discountApplied || couponCode.trim() === ''}
//                       className={`px-4 py-2 rounded-r text-sm font-semibold transition-colors ${
//                         discountApplied || couponCode.trim() === ''
//                           ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
//                           : 'bg-green-600 hover:bg-green-700 text-white'
//                       }`}
//                     >
//                       {discountApplied ? 'Applied' : 'Apply'}
//                     </button>
//                   </div>
//                   {discountApplied && appliedCouponInfo ? (
//                     <div className="flex justify-between items-center text-green-600 text-xs mt-1">
//                       <span>Coupon "{appliedCouponInfo.code}" applied!</span>
//                       <button onClick={handleRemoveCoupon} className="text-red-500 hover:underline">Remove</button>
//                     </div>
//                   ) : (
//                     couponCode.trim() === '' && (
//                       <p className="text-gray-500 text-xs mt-1">
//                         Enter a coupon code or select from below.
//                       </p>
//                     )
//                   )}

//                   {/* Coupon Options */}
//                   {!discountApplied && (
//                     <div className="mt-4 border-t border-gray-200 pt-4">
//                       <h4 className="text-md font-semibold mb-2">Available Coupons:</h4>
//                       <div className="space-y-2">
//                         {availableCoupons.map((coupon, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
//                             onClick={() => handleCouponSelect(coupon)}
//                           >
//                             <div className="flex items-center">
//                               <FaTag className="text-orange-500 mr-2" />
//                               <div>
//                                 <p className="font-semibold text-sm">{coupon.code}</p>
//                                 <p className="text-xs text-gray-600">{coupon.description}</p>
//                               </div>
//                             </div>
//                             <button
//                               onClick={(e) => { e.stopPropagation(); handleCouponSelect(coupon); }} // Prevent click on parent div from triggering again
//                               className="text-orange-600 hover:text-orange-800 text-sm font-medium"
//                             >
//                               Apply
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile Floating Summary Bar (Always at bottom on mobile) */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
//         <div>
//           <h4 className="text-lg font-semibold">
//             ₹{finalPrice.toLocaleString()}
//             {discountApplied && (
//               <span className="ml-2 text-sm font-normal text-gray-500 line-through">
//                 ₹{currentPlan.price.toLocaleString()}
//               </span>
//             )}
//           </h4>
//           <p className="text-xs text-gray-600 truncate max-w-[180px]">{currentPlan.name}</p>
//         </div>
//         <button
//           onClick={handleCheckout}
//           className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SwiggyOnboardingCourse;























import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swiggyImg from '../../../assets/zomato3.png'; // Consider replacing with a more generic or Swiggy-specific image if available
import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaCheckCircle, FaTag } from 'react-icons/fa';
import SwiggyFAQ from './SwiggyFAQ';
import SwiggyWhatYouGet from './SwiggyWhatYouGet';
import DocumentsRequired from './DocumentsRequired';

const GST_RATE = 0.18; // 18% GST

const SwiggyOnboardingCourse = () => {
  const navigate = useNavigate();

  // Define your two Swiggy plans with names and prices
  const plans = {
    basic: {
      name: "Swiggy Basic Onboarding",
      price: 1999,
      slug: "swiggy-basic",
      description: "Quick and essential setup to get your restaurant live on Swiggy.",
      features: [
        "Restaurant partner account setup",
        "Basic menu creation & upload",
        "Initial listing support",
      ],
      tagline: "Your fast track to Swiggy listing."
    },
    premium: {
      name: "Swiggy Prime Onboarding",
      price: 2999,
      slug: "swiggy-prime",
      description: "Comprehensive service including advanced menu management and priority support.",
      features: [
        "Restaurant partner account setup",
        "Advanced menu design & optimization",
        "On-call and WhatsApp priority support",
        "Fast-track listing & approval",
        "Restaurant profile branding assistance",
        "Performance tips & basic insights"
      ],
      tagline: "Maximize your presence with a complete setup."
    }
  };

  // Define available coupons
  const availableCoupons = [
    { code: 'MAGIC20', discount: 20, description: 'Get 20% off on your total purchase!' },
    { code: 'SWIGGY100', discount: null, flatDiscount: 100, description: 'Get ₹100 off on any plan!' }, // Changed 10 to 100 for a realistic example
    { code: 'NEWUSER50', discount: null, flatDiscount: 50, description: '₹50 off for new users!' }, // Changed 5 to 50 for a realistic example
  ];

  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [appliedCouponInfo, setAppliedCouponInfo] = useState(null); // Stores info about the applied coupon
  const [finalPrice, setFinalPrice] = useState(0);

  const currentPlan = plans[selectedPlan];

  // Effect to recalculate price whenever selectedPlan or discountApplied changes
  useEffect(() => {
    let price = currentPlan.price;
    if (discountApplied && appliedCouponInfo) {
      if (appliedCouponInfo.discount) {
        price = price * (1 - appliedCouponInfo.discount / 100);
      } else if (appliedCouponInfo.flatDiscount) {
        price = price - appliedCouponInfo.flatDiscount;
      }
    }
    setFinalPrice(Math.max(0, Math.round(price))); // Ensure price doesn't go below zero
  }, [selectedPlan, discountApplied, currentPlan.price, appliedCouponInfo]);

  const handleCouponApply = () => {
    const couponToApply = availableCoupons.find(coupon => coupon.code.toUpperCase() === couponCode.toUpperCase());

    if (couponToApply) {
      setDiscountApplied(true);
      setAppliedCouponInfo(couponToApply);
      alert(`Coupon "${couponToApply.code}" applied! ${couponToApply.description}`);
    } else {
      setDiscountApplied(false);
      setAppliedCouponInfo(null);
      alert('Invalid coupon code. Please try again.');
    }
  };

  const handleCouponSelect = (coupon) => {
    setCouponCode(coupon.code);
    // Use setTimeout to ensure state update before apply function runs, though not strictly necessary with the current setup
    handleCouponApply(); 
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setDiscountApplied(false);
    setAppliedCouponInfo(null);
  };

  const handleCheckout = () => {
    // Pass pre-tax price and GST rate to the checkout page
    navigate(`/checkout/${currentPlan.slug}?preTaxPrice=${finalPrice}&gstRate=${GST_RATE}&discountApplied=${discountApplied}&couponCode=${appliedCouponInfo ? appliedCouponInfo.code : ''}`);
  };

  return (
    <div className="bg-orange-50 text-gray-900 min-h-screen pb-32 md:pb-0 relative font-[Poppins]">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
          {/* ✅ Left Section */}
          <div className="w-full md:w-[66%] space-y-6 md:pr-8">
            <p className="text-sm text-orange-600">Business & Marketing {'>'} Swiggy</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Swiggy Onboarding & Restaurant Launch A–Z
            </h1>

            <p className="text-base sm:text-lg text-gray-700">
              This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
            </p>

            {/* ✅ Highlight Section */}
            <div className="bg-orange-100 text-orange-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Premium Service
                </div>
                <p className="text-sm">
                  Expert setup, full documentation support & fast-track approval.
                  <a href="#plans" className="ml-2 underline cursor-pointer hover:text-orange-600">See Onboarding Plans</a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-yellow-500">4.8</span> ★
                  <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
                </div>
                <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
                  <span className="font-semibold">230+</span> onboarded
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Delivered by <span className="text-orange-600 font-semibold">MagicScale Team</span>
            </p>
            <p className="text-sm text-gray-500">Last updated {new Date().toLocaleDateString('en-IN', { month: '2-digit', year: 'numeric' })} • Hindi & English</p>

            {/* Mobile Checkout Bar (Appears after initial content on mobile) */}
            <div className="md:hidden mt-8" id="plans-mobile">
              <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full mx-auto">
                <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover h-40" />

                {/* Plan Selection */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">Choose Your Plan</h3>
                  <div className="flex space-x-2">
                    {Object.keys(plans).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedPlan(key);
                          setDiscountApplied(false);
                          setCouponCode('');
                          setAppliedCouponInfo(null);
                        }}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors
                          ${selectedPlan === key
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        {plans[key].name.replace('Swiggy ', '').replace('Onboarding', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex justify-between items-end mb-1">
                  <h2 className="text-3xl font-bold">
                    ₹{finalPrice.toLocaleString()}
                    {discountApplied && (
                      <span className="ml-2 text-xl font-normal text-gray-500 line-through">
                        ₹{currentPlan.price.toLocaleString()}
                      </span>
                    )}
                  </h2>
                  {/* **Mobile GST Mention** */}
                  <span className="text-sm text-red-600 font-medium">+ 18% GST</span>
                </div>
                
                {discountApplied && appliedCouponInfo && (
                  <p className="text-green-600 text-sm mb-3">
                    {appliedCouponInfo.discount ? `You saved ${appliedCouponInfo.discount}%!` : `You saved ₹${appliedCouponInfo.flatDiscount}!`}-
                  </p>
                )}
                <p className="text-sm text-gray-600 mb-3">{currentPlan.tagline}</p>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Proceed to Checkout
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

                <ul className="text-sm mt-5 text-gray-700 space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>

                {/* Coupon Section */}
                <div className="mt-6">
                  <label htmlFor="coupon-code-mobile" className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
                  <div className="flex">
                    <input
                      id="coupon-code-mobile"
                      type="text"
                      placeholder="Enter coupon code"
                      className="flex-grow border px-3 py-2 rounded-l text-sm focus:ring-orange-500 focus:border-orange-500"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={discountApplied}
                    />
                    <button
                      onClick={handleCouponApply}
                      disabled={discountApplied || couponCode.trim() === ''}
                      className={`px-4 py-2 rounded-r text-sm font-semibold transition-colors ${
                        discountApplied || couponCode.trim() === ''
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      {discountApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {discountApplied && appliedCouponInfo ? (
                    <div className="flex justify-between items-center text-green-600 text-xs mt-1">
                      <span>Coupon "{appliedCouponInfo.code}" applied!</span>
                      <button onClick={handleRemoveCoupon} className="text-red-500 hover:underline">Remove</button>
                    </div>
                  ) : (
                    couponCode.trim() === '' && (
                      <p className="text-gray-500 text-xs mt-1">
                        Enter a coupon code or select from below.
                      </p>
                    )
                  )}

                  {/* Coupon Options */}
                  {!discountApplied && (
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <h4 className="text-md font-semibold mb-2">Available Coupons:</h4>
                      <div className="space-y-2">
                        {availableCoupons.map((coupon, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => handleCouponSelect(coupon)}
                          >
                            <div className="flex items-center">
                              <FaTag className="text-orange-500 mr-2" />
                              <div>
                                <p className="font-semibold text-sm">{coupon.code}</p>
                                <p className="text-xs text-gray-600">{coupon.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleCouponSelect(coupon); }} // Prevent click on parent div from triggering again
                              className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                            >
                              Apply
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <DocumentsRequired />
              <SwiggyWhatYouGet />
              <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                  icon: <FaTv className="mx-auto text-3xl mb-3 text-orange-500" />,
                  title: "Live Dashboard Access",
                  desc: "Track orders, payments, and delivery status directly from your dashboard."
                },
                {
                  icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
                  title: "Menu Download Setup",
                  desc: "Enable downloadable menu for WhatsApp or printing."
                },
                {
                  icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
                  title: "Nationwide Coverage",
                  desc: "We assist across India — metros, tier 2 cities, and remote areas."
                },
                {
                  icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
                  title: "Multi-Outlet Support",
                  desc: "Easily onboard multiple branches or cloud kitchens."
                }].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
                    {item.icon}
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <SwiggyFAQ />
          </div>

          {/* ✅ Right Sticky Checkout (Desktop) */}
          <div className="hidden md:block md:w-[34%]">
            <div className="sticky top-20 max-h-[calc(100vh-theme(space.20))] overflow-y-auto" id="plans-desktop">
              <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
                <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover h-40" />

                {/* Plan Selection */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">Choose Your Plan</h3>
                  <div className="flex space-x-2">
                    {Object.keys(plans).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedPlan(key);
                          setDiscountApplied(false);
                          setCouponCode('');
                          setAppliedCouponInfo(null);
                        }}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors
                          ${selectedPlan === key
                            ? 'bg-orange-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        {plans[key].name.replace('Swiggy ', '').replace('Onboarding', '')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex justify-between items-end mb-1">
                  <h2 className="text-3xl font-bold">
                    ₹{finalPrice.toLocaleString()}
                    {discountApplied && (
                      <span className="ml-2 text-xl font-normal text-gray-500 line-through">
                        ₹{currentPlan.price.toLocaleString()}
                      </span>
                    )}
                  </h2>
                  {/* **Desktop GST Mention** */}
                  <span className="text-sm text-red-600 font-medium">+ 18% GST</span>
                </div>

                {discountApplied && appliedCouponInfo && (
                  <p className="text-green-600 text-sm mb-3">
                    {appliedCouponInfo.discount ? `You saved ${appliedCouponInfo.discount}%!` : `You saved ₹${appliedCouponInfo.flatDiscount}!`}
                  </p>
                )}
                <p className="text-sm text-gray-600 mb-3">{currentPlan.tagline}</p>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Proceed to Checkout
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

                <ul className="text-sm mt-5 text-gray-700 space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>

                {/* Coupon Section */}
                <div className="mt-6">
                  <label htmlFor="coupon-code-desktop" className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
                  <div className="flex">
                    <input
                      id="coupon-code-desktop"
                      type="text"
                      placeholder="Enter coupon code"
                      className="flex-grow border px-3 py-2 rounded-l text-sm focus:ring-orange-500 focus:border-orange-500"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={discountApplied}
                    />
                    <button
                      onClick={handleCouponApply}
                      disabled={discountApplied || couponCode.trim() === ''}
                      className={`px-4 py-2 rounded-r text-sm font-semibold transition-colors ${
                        discountApplied || couponCode.trim() === ''
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      {discountApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {discountApplied && appliedCouponInfo ? (
                    <div className="flex justify-between items-center text-green-600 text-xs mt-1">
                      <span>Coupon "{appliedCouponInfo.code}" applied!</span>
                      <button onClick={handleRemoveCoupon} className="text-red-500 hover:underline">Remove</button>
                    </div>
                  ) : (
                    couponCode.trim() === '' && (
                      <p className="text-gray-500 text-xs mt-1">
                        Enter a coupon code or select from below.
                      </p>
                    )
                  )}

                  {/* Coupon Options */}
                  {!discountApplied && (
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <h4 className="text-md font-semibold mb-2">Available Coupons:</h4>
                      <div className="space-y-2">
                        {availableCoupons.map((coupon, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition"
                            onClick={() => handleCouponSelect(coupon)}
                          >
                            <div className="flex items-center">
                              <FaTag className="text-orange-500 mr-2" />
                              <div>
                                <p className="font-semibold text-sm">{coupon.code}</p>
                                <p className="text-xs text-gray-600">{coupon.description}</p>
                              </div>
                            </div>
                            <button
                              onClick={(e) => { e.stopPropagation(); handleCouponSelect(coupon); }} // Prevent click on parent div from triggering again
                              className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                            >
                              Apply
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Floating Summary Bar (Always at bottom on mobile) */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">
            ₹{finalPrice.toLocaleString()}
            {discountApplied && (
              <span className="ml-2 text-sm font-normal text-gray-500 line-through">
                ₹{currentPlan.price.toLocaleString()}
              </span>
            )}
          </h4>
          <p className="text-xs text-red-600 font-medium">+ 18% GST</p> {/* **Mobile Floating GST Mention** */}
        </div>
        <button
          onClick={handleCheckout}
          className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SwiggyOnboardingCourse;