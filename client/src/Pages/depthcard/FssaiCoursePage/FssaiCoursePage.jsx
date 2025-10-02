// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import fssaiImg from '../../../assets/zomato3.png';
// import fssaiImg from "../../../assets/fssai.png";
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Get Your FSSAI License with Expert Guidance
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Expert Service
//               </div>
//               <p className="text-sm">
//                 Fast processing, consultation, and 100% document support.
//                 <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.9</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">500+</span> licenses issued
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Features Section */}
//           <div className="mt-10">
//             <FssaiWhatYouGet />

//             <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />,
//                 title: "Online Filing & Tracking",
//                 desc: "Get real-time updates and license status from our dashboard."
//               },
//               {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                 title: "All Docs Managed",
//                 desc: "We handle your forms, photos, ID proofs, and declarations."
//               },
//               {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                 title: "PAN India Service",
//                 desc: "Apply from anywhere — all states & cities covered."
//               },
//               {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                 title: "Quick & Hassle-Free",
//                 desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <FssaiFAQ />
//         </div>

//         {/* ✅ Right: Sticky Checkout Bar */}
//         <div className="w-full md:w-[34%]">
//           <div className="md:sticky md:top-20 mt-10 md:mt-0">
//             <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
//               <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover" />
//               <h2 className="text-3xl font-bold mb-1">₹999</h2>
//               <p className="text-sm text-gray-600 mb-3">Complete FSSAI License Assistance</p>

//               <button
//                 onClick={() => navigate('/checkout/fssai')}
//                 className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Go to Cart
//               </button>

//               <button
//                 onClick={() => navigate('/checkout/fssai')}
//                 className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//               >
//                 Buy Now
//               </button>

//               <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//               <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                 <li>✔ Basic, State, or Central license</li>
//                 <li>✔ All form submissions handled</li>
//                 <li>✔ Phone and WhatsApp support</li>
//                 <li>✔ Fastest approval process</li>
//               </ul>

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

// export default FssaiLicenseCourse;










// // ✅ Fully updated FSSAI License page with dropdown, dynamic price, floating checkout
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const plans = [
//   { label: 'FSSAI Registration - 1 Year', price: 999 },
//   { label: 'FSSAI Registration - 3 Years', price: 1499 },
//   { label: 'FSSAI Registration - 5 Years', price: 1999 },
//   { label: 'FSSAI State License - 1 Year', price: 1299 },
//   { label: 'FSSAI Central License - 1 Year', price: 1999 },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);

//   const totalPrice = selectedPlan.price * quantity;

//   return (

//     <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Get Your FSSAI License with Expert Guidance
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Expert Service
//               </div>
//               <p className="text-sm">
//                 Fast processing, consultation, and 100% document support.
//                 <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.9</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">500+</span> licenses issued
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Plan Selector */}
//           <div className="bg-white border rounded-lg shadow p-4 space-y-3">
//             <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//             <select
//               value={selectedPlan.label}
//               onChange={(e) => {
//                 const selected = plans.find((p) => p.label === e.target.value);
//                 setSelectedPlan(selected);
//               }}
//               className="w-full border rounded px-3 py-2 text-sm"
//             >
//               {plans.map((plan) => (
//                 <option key={plan.label} value={plan.label}>{plan.label}</option>
//               ))}
//             </select>

//             <div className="flex items-center gap-2">
//               <label className="text-sm font-medium">Quantity:</label>
//               <input
//                 type="number"
//                 value={quantity}
//                 min={1}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="w-20 px-2 py-1 border rounded"
//               />
//             </div>
//           </div>

//           <FssaiWhatYouGet />

//           <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[{
//               icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />,
//               title: "Online Filing & Tracking",
//               desc: "Get real-time updates and license status from our dashboard."
//             }, {
//               icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//               title: "All Docs Managed",
//               desc: "We handle your forms, photos, ID proofs, and declarations."
//             }, {
//               icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//               title: "PAN India Service",
//               desc: "Apply from anywhere — all states & cities covered."
//             }, {
//               icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//               title: "Quick & Hassle-Free",
//               desc: "End-to-end support for new, renew, and modification cases."
//             }].map((item, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                 {item.icon}
//                 <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <FssaiFAQ />
//         </div>

//         {/* ✅ Right Floating Checkout */}
//         <div className="w-full md:w-[34%] md:sticky md:top-20 z-40">
//           <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0 fixed bottom-0 left-0 right-0 md:static z-50 border-t md:border-none">
//             <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover hidden md:block" />
//             <h2 className="text-2xl font-bold mb-1 md:text-3xl">₹{totalPrice}</h2>
//             <p className="text-sm text-gray-600 mb-3 truncate">{selectedPlan.label}</p>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Go to Cart
//             </button>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//             >
//               Buy Now
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-2 hidden md:block">30-Day Money-Back Guarantee</p>

//             <ul className="text-sm mt-5 text-gray-700 space-y-2 hidden md:block">
//               <li>✔ Basic, State, or Central license</li>
//               <li>✔ All form submissions handled</li>
//               <li>✔ Phone and WhatsApp support</li>
//               <li>✔ Fastest approval process</li>
//             </ul>

//             <div className="mt-6 hidden md:block">
//               <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//               <input
//                 type="text"
//                 placeholder="Enter coupon code"
//                 className="w-full border px-3 py-2 rounded text-sm mb-2"
//               />
//               <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                 Apply Coupon
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;















// // ✅ Fully updated FSSAI License page with dropdown, dynamic price, floating checkout
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;

//   return (
     
//     <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Get Your FSSAI License with Expert Guidance
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Expert Service
//               </div>
//               <p className="text-sm">
//                 Fast processing, consultation, and 100% document support.
//                 <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.9</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">500+</span> licenses issued
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Plan Selector */}
//           <div className="bg-white border rounded-lg shadow p-4 space-y-3 sticky top-16 z-30">
//             <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//             <select
//               value={selectedPlan.label}
//               onChange={(e) => {
//                 const selected = plans.find((p) => p.label === e.target.value);
//                 setSelectedPlan(selected);
//               }}
//               className="w-full border rounded px-3 py-2 text-sm"
//             >
//               {plans.map((plan) => (
//                 <option key={plan.label} value={plan.label}>{plan.label}</option>
//               ))}
//             </select>

//             <div className="flex items-center gap-2">
//               <label className="text-sm font-medium">Quantity:</label>
//               <input
//                 type="number"
//                 value={quantity}
//                 min={1}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="w-20 px-2 py-1 border rounded"
//               />
//             </div>

//             {/* Exclusive Offer Summary */}
//             <div className="bg-green-100 rounded p-4 mt-4">
//               <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
//               <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
//                 {selectedPlan.features.map((feat, idx) => (
//                   <li key={idx}>{feat}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <FssaiWhatYouGet />

//           <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[{
//               icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//             }, {
//               icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//             }, {
//               icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//             }, {
//               icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//             }].map((item, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                 {item.icon}
//                 <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <FssaiFAQ />
//         </div>

//         {/* ✅ Right Floating Checkout */}
//         <div className="w-full md:w-[34%] sticky bottom-0 md:top-20 z-40">
//           <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
//             <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover" />
//             <h2 className="text-3xl font-bold mb-1">₹{totalPrice}</h2>
//             <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Go to Cart
//             </button>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//             >
//               Buy Now
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//             <ul className="text-sm mt-5 text-gray-700 space-y-2">
//               {selectedPlan.features.map((feat, idx) => (
//                 <li key={idx}>✔ {feat}</li>
//               ))}
//             </ul>

//             <div className="mt-6">
//               <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//               <input
//                 type="text"
//                 placeholder="Enter coupon code"
//                 className="w-full border px-3 py-2 rounded text-sm mb-2"
//               />
//               <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                 Apply Coupon
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;





// // ✅ Fully updated FSSAI License page with dynamic price, floating and responsive checkout bar
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import bannerImg from '../../../assets/Bannerfssai.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;
//   const originalPos = useRef(null);

//   // Floating behavior on scroll (desktop)
//   useEffect(() => {
//     const checkout = document.getElementById('floating-checkout');
//     if (!checkout) return;
//     originalPos.current = checkout.offsetTop;

//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       if (scrollY + 100 >= originalPos.current) {
//         checkout.classList.add('md:fixed', 'md:top-6');
//       } else {
//         checkout.classList.remove('md:fixed', 'md:top-6');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-green-50 text-gray-900 min-h-screen pb-40 relative font-[Poppins]">
//       {/* ✅ Top Banner - Enlarged */}
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
//         <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
//       </div>

//       <div className="px-4 sm:px-6 md:px-16">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* ✅ Left Section */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Get Your FSSAI License with Expert Guidance
//             </h1>

//             <p className="text-base sm:text-lg text-gray-700">
//               Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//             </p>

//             {/* ✅ Plan Selector */}
//             <div className="bg-white border rounded-lg shadow p-4 space-y-3">
//               <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//               <select
//                 value={selectedPlan.label}
//                 onChange={(e) => {
//                   const selected = plans.find((p) => p.label === e.target.value);
//                   setSelectedPlan(selected);
//                 }}
//                 className="w-full border rounded px-3 py-2 text-sm"
//               >
//                 {plans.map((plan) => (
//                   <option key={plan.label} value={plan.label}>{plan.label}</option>
//                 ))}
//               </select>

//               <div className="flex items-center gap-2">
//                 <label className="text-sm font-medium">Quantity:</label>
//                 <input
//                   type="number"
//                   value={quantity}
//                   min={1}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="w-20 px-2 py-1 border rounded"
//                 />
//               </div>

//               {/* Exclusive Offer Summary */}
//               <div className="bg-green-100 rounded p-4 mt-4">
//                 <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
//                 <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
//                   {selectedPlan.features.map((feat, idx) => (
//                     <li key={idx}>{feat}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <FssaiWhatYouGet />

//             <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//               }, {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//               }, {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//               }, {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <FssaiFAQ />
//           </div>

//           {/* ✅ Right Floating Checkout Bar */}
//           <div className="hidden md:block md:w-[34%]">
//             <div id="floating-checkout" className="transition-all duration-300">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
//                 <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
//                 <h2 className="text-2xl font-bold mb-1">₹{totalPrice}</h2>
//                 <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//                 >
//                   Buy Now
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   {selectedPlan.features.map((feat, idx) => (
//                     <li key={idx}>✔ {feat}</li>
//                   ))}
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

//       {/* ✅ Mobile Bottom Floating Summary */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
//         <div>
//           <h4 className="text-lg font-semibold">₹{totalPrice}</h4>
//           <p className="text-xs text-gray-600 truncate max-w-[180px]">{selectedPlan.label}</p>
//         </div>
//         <button
//           onClick={() => navigate('/checkout/fssai')}
//           className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;














// // ✅ Fully updated FSSAI License page with dynamic price, floating and responsive checkout bar
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import bannerImg from '../../../assets/Bannerfssai.png';
// import categoryIcon from '../../../assets/fssai2.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';
// import FssaiEligibility from "./FssaiEligibility";

// import SiteFooter from './SiteFooter';

// const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;
//   const originalPos = useRef(null);

//   // Floating behavior on scroll (desktop)
//   useEffect(() => {
//     const checkout = document.getElementById('floating-checkout');
//     if (!checkout) return;
//     originalPos.current = checkout.offsetTop;

//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       if (scrollY + 100 >= originalPos.current) {
//         checkout.classList.add('md:fixed', 'md:top-6');
//       } else {
//         checkout.classList.remove('md:fixed', 'md:top-6');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-green-50 text-gray-900 min-h-screen pb-40 relative font-[Poppins]">
//       {/* ✅ Top Banner - Enlarged */}
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
//         <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
//       </div>

//       <div className="px-4 sm:px-6 md:px-16">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* ✅ Left Section */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <div className="flex items-center gap-3 mb-2">
//               <img src={categoryIcon} alt="Category Icon" className="w-10 h-10 object-contain" />
//               <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Get Your FSSAI License with Expert Guidance
//             </h1>

//             <p className="text-base sm:text-lg text-gray-700">
//               Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//             </p>

//             {/* ✅ Plan Selector and Image side-by-side */}
//             <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow p-4 gap-6">
//               <div className="md:w-1/2 space-y-3">
//                 <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//                 <select
//                   value={selectedPlan.label}
//                   onChange={(e) => {
//                     const selected = plans.find((p) => p.label === e.target.value);
//                     setSelectedPlan(selected);
//                   }}
//                   className="w-full border rounded px-3 py-2 text-sm"
//                 >
//                   {plans.map((plan) => (
//                     <option key={plan.label} value={plan.label}>{plan.label}</option>
//                   ))}
//                 </select>

//                 <div className="flex items-center gap-2">
//                   <label className="text-sm font-medium">Quantity:</label>
//                   <input
//                     type="number"
//                     value={quantity}
//                     min={1}
//                     onChange={(e) => setQuantity(Number(e.target.value))}
//                     className="w-20 px-2 py-1 border rounded"
//                   />
//                 </div>

//                 <div className="bg-green-100 rounded p-4 mt-4">
//                   <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
//                   <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
//                     {selectedPlan.features.map((feat, idx) => (
//                       <li key={idx}>{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <img src={categoryIcon} alt="FSSAI Visual" className="w-full h-auto rounded-md" />
//               </div>
//             </div>
          
//             <FssaiWhatYouGet />
//             <FssaiEligibility/>

//             <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//               }, {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//               }, {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//               }, {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <FssaiFAQ />
//             <SiteFooter />
//           </div>

//           {/* ✅ Right Floating Checkout Bar */}
//           <div className="hidden md:block md:w-[34%]">
//             <div id="floating-checkout" className="transition-all duration-300">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
//                 <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
//                 <h2 className="text-2xl font-bold mb-1">₹{totalPrice}</h2>
//                 <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//                 >
//                   Buy Now
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   {selectedPlan.features.map((feat, idx) => (
//                     <li key={idx}>✔ {feat}</li>
//                   ))}
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

//       {/* ✅ Mobile Bottom Floating Summary */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
//         <div>
//           <h4 className="text-lg font-semibold">₹{totalPrice}</h4>
//           <p className="text-xs text-gray-600 truncate max-w-[180px]">{selectedPlan.label}</p>
//         </div>
//         <button
//           onClick={() => navigate('/checkout/fssai')}
//           className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;

















// import React, { useState, useEffect, useRef } from 'react';
//  import { useNavigate } from 'react-router-dom';
//  import fssaiImg from '../../../assets/fssai.png';
//  import bannerImg from '../../../assets/Bannerfssai.png';
//  import categoryIcon from '../../../assets/fssai2.png';
//  import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
//  import FssaiFAQ from './FssaiFAQ';
//  import FssaiWhatYouGet from './FssaiWhatYouGet';
//  import FssaiEligibility from "./FssaiEligibility";
//  import SiteFooter from './SiteFooter';

//  const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
//  ];

//  const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;
//   const originalPos = useRef(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Dark Mode Effect
//   useEffect(() => {
//    if (isDarkMode) {
//     document.documentElement.classList.add('dark');
//     document.body.classList.add('dark');
//    } else {
//     document.documentElement.classList.remove('dark');
//     document.body.classList.remove('dark');
//    }
//    localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   // Load dark mode preference from localStorage on initial render
//   useEffect(() => {
//    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//    setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//    setIsDarkMode(!isDarkMode);
//   };

//   // Floating behavior on scroll (desktop) - Corrected trigger
//   useEffect(() => {
//    const checkout = document.getElementById('floating-checkout');
//    if (!checkout) return;
//    originalPos.current = checkout.offsetTop; // Capture initial top position

//    const handleScroll = () => {
//     const scrollY = window.scrollY || window.pageYOffset;
//     // Make it fixed only when the scroll position is at or past its original starting point
//     if (scrollY >= originalPos.current) {
//      checkout.classList.add('md:fixed', 'md:top-6');
//     } else {
//      checkout.classList.remove('md:fixed', 'md:top-6');
//     }
//    };

//    window.addEventListener('scroll', handleScroll);
//    return () => window.removeEventListener('scroll', handleScroll);
//   }, [isDarkMode]);

//   const renderCheckoutCard = (isMobile = false) => (
//    <div className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : 'ml-auto'} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//     <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
//     <h2 className="text-2xl font-bold mb-1">Rs.{totalPrice}</h2>
//     <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedPlan.label}</p>

//     <button
//      onClick={() => navigate('/checkout/fssai')}
//      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//     >
//      Go to Cart
//     </button>

//     <button
//      onClick={() => navigate('/checkout/fssai')}
//      className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-green-500 text-green-400 hover:bg-green-900' : 'border-green-600 text-green-700 hover:bg-green-50'}`}
//     >
//      Buy Now
//     </button>

//     <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>30-Day Money-Back Guarantee</p>

//     <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//      {selectedPlan.features.map((feat, idx) => (
//       <li key={idx}>* {feat}</li>
//      ))}
//     </ul>

//     <div className="mt-6">
//      <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Apply Coupon</label>
//      <input
//       type="text"
//       placeholder="Enter coupon code"
//       className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`}
//      />
//      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//       Apply Coupon
//      </button>
//     </div>
//    </div>
//   );

//   return (
//    <div className={`min-h-screen pb-40 relative font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-900'}`}>
//     {/* Dark Mode Toggle */}
//     <div className="fixed top-4 right-4 z-50">
//      <button
//       onClick={toggleDarkMode}
//       className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
//       aria-label="Toggle dark mode"
//      >
//       {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
//      </button>
//     </div>

//     {/* Top Banner - Enlarged */}
//     <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
//      <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
//     </div>

//     <div className="px-4 sm:px-6 md:px-16">
//      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//       {/* Left Section - Main Content */}
//       <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//        <div className="flex items-center gap-3 mb-2">
//         <img src={categoryIcon} alt="Category Icon" className="w-10 h-10 object-contain" />
//         <p className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Legal Services {'>'} FSSAI License</p>
//        </div>
//        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//         Get Your FSSAI License with Expert Guidance
//        </h1>

//        <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//         Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//        </p>

//        {/* Plan Selector and Image side-by-side */}
//        <div className={`flex flex-col md:flex-row border rounded-lg shadow p-4 gap-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
//         <div className="md:w-1/2 space-y-3">
//          <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Select License Plan</label>
//          <select
//           value={selectedPlan.label}
//           onChange={(e) => {
//            const selected = plans.find((p) => p.label === e.target.value);
//            setSelectedPlan(selected);
//           }}
//           className={`w-full border rounded px-3 py-2 text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
//          >
//           {plans.map((plan) => (
//            <option key={plan.label} value={plan.label}>{plan.label}</option>
//           ))}
//          </select>

//          <div className="flex items-center gap-2">
//           <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Quantity:</label>
//           <input
//            type="number"
//            value={quantity}
//            min={1}
//            onChange={(e) => setQuantity(Number(e.target.value))}
//            className={`w-20 px-2 py-1 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'}`}
//           />
//          </div>

//          <div className={`rounded p-4 mt-4 ${isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100'}`}>
//           <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-green-100' : 'text-green-800'}`}>2 Exclusive Offers</h3>
//           <ul className={`list-disc pl-4 text-sm ${isDarkMode ? 'text-green-300' : 'text-green-700'} space-y-1`}>
//            {selectedPlan.features.map((feat, idx) => (
//             <li key={idx}>* {feat}</li>
//            ))}
//           </ul>
//          </div>
//         </div>
//         <div className="md:w-1/2">
//          <img src={categoryIcon} alt="FSSAI Visual" className="w-full h-auto rounded-md" />
//         </div>
//        </div>

//        {/* Mobile Checkout Bar (Visible only on mobile) */}
//        <div className="mt-8 md:hidden">
//         {renderCheckoutCard(true)}
//        </div>

//        <FssaiWhatYouGet isDarkMode={isDarkMode} />
//        <FssaiEligibility isDarkMode={isDarkMode}/>

//        <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {[{
//          icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//         }, {
//          icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//         }, {
//          icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//         }, {
//          icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//         }].map((item, idx) => (
//          <div key={idx} className={`rounded-xl p-5 text-center shadow ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//           {item.icon}
//           <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//           <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//          </div>
//         ))}
//        </div>

//        <FssaiFAQ isDarkMode={isDarkMode} />
//        <SiteFooter isDarkMode={isDarkMode}/>
//       </div>

//       {/* Right Floating Checkout Bar (Hidden on Mobile, visible on MD and up) */}
//       <div className="hidden md:block md:w-[34%]">
//        <div id="floating-checkout" className="transition-all duration-300">
//         {renderCheckoutCard()}
//        </div>
//       </div>
//      </div>
//     </div>

//     {/* Mobile Bottom Floating Summary */}
//     <div className={`fixed md:hidden bottom-0 left-0 right-0 shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white'}`}>
//      <div>
//       <h4 className="text-lg font-semibold">Rs.{totalPrice}</h4>
//       <p className={`text-xs truncate max-w-[180px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedPlan.label}</p>
//      </div>
//      <button
//       onClick={() => navigate('/checkout/fssai')}
//       className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
//      >
//       Continue
//      </button>
//     </div>
//    </div>
//   );
//  };

//  export default FssaiLicenseCourse;
















// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import bannerImg from '../../../assets/Bannerfssai.png';
// import categoryIcon from '../../../assets/fssai2.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';
// import FssaiEligibility from "./FssaiEligibility";
// import SiteFooter from './SiteFooter';

// const Govt = 1000; // Assuming 'Govt' is a variable for a government fee, you can adjust its value.

// const plans = [


//   // Updated FSSAI Registration plans
//   { label: 'FSSAI Registration - 1 Year', price: 1500, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 2000, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 2500, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   // Updated FSSAI State License
//   { label: 'FSSAI State License - 1-5 Year', price: (3999 + Govt), features: ['Application Prep', 'State License - 1-5 Year'] },
//   // New FSSAI Tatkal License
//   { label: 'FSSAI Tatkal License - 1 Years', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },

// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Ref for the main content area that the sticky element will be constrained by
//   const mainContentRef = useRef(null);
//   // Ref for the sticky checkout bar itself
//   const checkoutRef = useRef(null);

//   // Dark Mode Effect
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

//   // Load dark mode preference from localStorage on initial render
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedDarkMode);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const renderCheckoutCard = (isMobile = false) => (
//     <div
//       ref={isMobile ? null : checkoutRef}
//       id={isMobile ? null : 'sticky-checkout'}
//       className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
//     >
//       <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
//       <h2 className="text-2xl font-bold mb-1">Rs.{totalPrice}</h2>
//       <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedPlan.label}</p>

//       <button
//         onClick={() => navigate('/checkout/fssai')}
//         className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//       >
//         Go to Cart
//       </button>

//       <button
//         onClick={() => navigate('/checkout/fssai')}
//         className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-green-500 text-green-400 hover:bg-green-900' : 'border-green-600 text-green-700 hover:bg-green-50'}`}
//       >
//         Buy Now
//       </button>

//       <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>30-Day Money-Back Guarantee</p>

//       <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//         {selectedPlan.features.map((feat, idx) => (
//           <li key={idx}>* {feat}</li>
//         ))}
//       </ul>

//       <div className="mt-6">
//         <label className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Apply Coupon</label>
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
//     <div className={`min-h-screen pb-40 relative font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-900'}`}>
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

//       {/* Top Banner - Enlarged */}
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
//         <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
//       </div>

//       {/* Main Content Area - Constrained Width */}
//       <div ref={mainContentRef} className="px-4 sm:px-6 md:px-16">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* Left Section - Main Content */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <div className="flex items-center gap-3 mb-2">
//               <img src={categoryIcon} alt="Category Icon" className="w-10 h-10 object-contain" />
//               <p className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Legal Services {'>'} FSSAI License</p>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Get Your FSSAI License with Expert Guidance
//             </h1>

//             <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//             </p>

//             {/* Plan Selector and Image side-by-side */}
//             <div className={`flex flex-col md:flex-row border rounded-lg shadow p-4 gap-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
//               <div className="md:w-1/2 space-y-3">
//                 <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Select License Plan</label>
//                 <select
//                   value={selectedPlan.label}
//                   onChange={(e) => {
//                     const selected = plans.find((p) => p.label === e.target.value);
//                     setSelectedPlan(selected);
//                   }}
//                   className={`w-full border rounded px-3 py-2 text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
//                 >
//                   {plans.map((plan) => (
//                     <option key={plan.label} value={plan.label}>{plan.label}</option>
//                   ))}
//                 </select>

//                 <div className="flex items-center gap-2">
//                   <label className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Quantity:</label>
//                   <input
//                     type="number"
//                     value={quantity}
//                     min={1}
//                     onChange={(e) => setQuantity(Number(e.target.value))}
//                     className={`w-20 px-2 py-1 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'}`}
//                   />
//                 </div>

//                 <div className={`rounded p-4 mt-4 ${isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100'}`}>
//                   <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-green-100' : 'text-green-800'}`}>2 Exclusive Offers</h3>
//                   <ul className={`list-disc pl-4 text-sm ${isDarkMode ? 'text-green-300' : 'text-green-700'} space-y-1`}>
//                     {selectedPlan.features.map((feat, idx) => (
//                       <li key={idx}>* {feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <img src={categoryIcon} alt="FSSAI Visual" className="w-full h-auto rounded-md" />
//               </div>
//             </div>

//             {/* Mobile Checkout Bar (Visible only on mobile) */}
//             <div className="mt-8 md:hidden">
//               {renderCheckoutCard(true)}
//             </div>

//             <FssaiWhatYouGet isDarkMode={isDarkMode} />
//             <FssaiEligibility isDarkMode={isDarkMode}/>

//             <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//               }, {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//               }, {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//               }, {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className={`rounded-xl p-5 text-center shadow ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <FssaiFAQ isDarkMode={isDarkMode} />
//           </div>

//           {/* Right Sticky Checkout Bar (Hidden on Mobile, visible on MD and up) */}
//           {/* This is the container that makes the child sticky */}
//           <div className="hidden md:block md:w-[34%] relative">
//             <div className="md:sticky md:top-6">
//               {renderCheckoutCard()}
//             </div>
//           </div>
//         </div>
//       </div> {/* End of the constrained main content div */}

//       {/* Render SiteFooter outside the constrained main content div */}
//       <SiteFooter isDarkMode={isDarkMode}/>

//       {/* Mobile Bottom Floating Summary */}
//       <div className={`fixed md:hidden bottom-0 left-0 right-0 shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white'}`}>
//         <div>
//           <h4 className="text-lg font-semibold">Rs.{totalPrice}</h4>
//           <p className={`text-xs truncate max-w-[180px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedPlan.label}</p>
//         </div>
//         <button
//           onClick={() => navigate('/checkout/fssai')}
//           className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;



import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import fssaiImg from '../../../assets/fssai.png';
import bannerImg from '../../../assets/Bannerfssai.png';
import categoryIcon from '../../../assets/fssai2.png';
import { FaTv, FaDownload, FaSatelliteDish, FaSmile, FaSun, FaMoon } from 'react-icons/fa';
import FssaiFAQ from './FssaiFAQ';
import FssaiWhatYouGet from './FssaiWhatYouGet';
import FssaiEligibility from "./FssaiEligibility";
import SiteFooter from './SiteFooter';

const Govt = 1000;

const plans = [
  { slug: 'fssai-registration-1yr', label: 'FSSAI Registration - 1 Year', price: 1500, features: ['Basic Application', 'Filing Support', '1 Year License'] },
  { slug: 'fssai-registration-3yrs', label: 'FSSAI Registration - 3 Years', price: 2000, features: ['Basic Application', 'Filing Support', '3 Year License'] },
  { slug: 'fssai-registration-5yrs', label: 'FSSAI Registration - 5 Years', price: 2500, features: ['Basic Application', 'Filing Support', '5 Year License'] },
  { slug: 'fssai-state-license', label: 'FSSAI State License - 1-5 Year', price: (3999 + Govt), features: ['Application Prep', 'State License - 1-5 Year'] },
  { slug: 'fssai-tatkal-license', label: 'FSSAI Tatkal License - 1 Years', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
  { slug: 'fssai-central-license', label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
];

const FssaiLicenseCourse = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = selectedPlan.price * quantity;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mainContentRef = useRef(null);
  const checkoutRef = useRef(null);

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

  const goToCheckout = () => {
    // Navigate to checkout, potentially passing the selected plan slug and quantity
    navigate(`/checkout/${selectedPlan.slug}?qty=${quantity}`);
  };

  const renderCheckoutCard = (isMobile = false) => (
    <div
      ref={isMobile ? null : checkoutRef}
      className={`rounded-xl shadow-lg p-5 w-full max-w-sm ${isMobile ? 'mx-auto' : ''} ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
    >
      <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
      
      {/* Price Display with GST Mention (Checkout Card) */}
      <div className="flex justify-between items-end mb-1">
        <h2 className="text-2xl font-bold">Rs.{totalPrice.toLocaleString()}</h2>
        <span className="text-sm text-red-600 font-semibold">+ 18% GST</span>
      </div>

      <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedPlan.label}</p>

      <div className="mb-4">
        <select
          value={selectedPlan.label}
          onChange={(e) => {
            const selected = plans.find((p) => p.label === e.target.value);
            setSelectedPlan(selected);
          }}
          className={`w-full border rounded-md px-3 py-2 text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          {plans.map((plan) => (
            <option key={plan.label} value={plan.label}>{plan.label}</option>
          ))}
        </select>
      </div>

      <button onClick={goToCheckout} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Go to Cart</button>
      <button onClick={goToCheckout} className={`w-full border mt-2 py-2 rounded-lg ${isDarkMode ? 'border-green-500 text-green-400 hover:bg-green-900' : 'border-green-600 text-green-700 hover:bg-green-50'}`}>Buy Now</button>

      <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>30-Day Money-Back Guarantee</p>

      <ul className={`text-sm mt-5 space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {selectedPlan.features.map((feat, idx) => (<li key={idx}>* {feat}</li>))}
      </ul>

      <div className="mt-6">
        <label htmlFor="coupon-code" className={`text-sm font-medium block mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Apply Coupon</label>
        <input id="coupon-code" type="text" placeholder="Enter coupon code" className={`w-full border px-3 py-2 rounded text-sm mb-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900'}`} />
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">Apply Coupon</button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen pb-40 relative font-[Poppins] ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-green-50 text-gray-900'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleDarkMode} className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`} aria-label="Toggle dark mode">
          {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
      </div>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
        <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
      </div>

      <div ref={mainContentRef} className="px-4 sm:px-6 md:px-16">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
          <div className="w-full md:w-[66%] space-y-6 md:pr-8">
            <div className="flex items-center gap-3 mb-2">
              <img src={categoryIcon} alt="Category Icon" className="w-10 h-10 object-contain" />
              <p className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Legal Services {'>'} FSSAI License</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Get Your FSSAI License with Expert Guidance</h1>
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.</p>

            <div className={`flex flex-col md:flex-row border rounded-lg shadow p-4 gap-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <div className="md:w-1/2 space-y-3">
                <label htmlFor="main-plan-select" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Select License Plan</label>
                <select
                  id="main-plan-select"
                  value={selectedPlan.label}
                  onChange={(e) => {
                    const selected = plans.find((p) => p.label === e.target.value);
                    setSelectedPlan(selected);
                  }}
                  className={`w-full border rounded px-3 py-2 text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
                >
                  {plans.map((plan) => (
                    <option key={plan.label} value={plan.label}>{plan.label}</option>
                  ))}
                </select>
                <div className="flex items-center gap-2">
                  <label htmlFor="quantity-input" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Quantity:</label>
                  <input id="quantity-input" type="number" value={quantity} min={1} onChange={(e) => setQuantity(Number(e.target.value))} className={`w-20 px-2 py-1 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'}`} />
                </div>

                {/* Main Price Display with GST Mention */}
                <div className={`rounded p-4 mt-4 ${isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-green-100' : 'text-green-800'}`}>Total Price: Rs.{totalPrice.toLocaleString()}</h3>
                    <span className="text-sm text-red-600 font-semibold">+ 18% GST</span>
                  </div>
                  
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-green-100' : 'text-green-800'}`}>What's Included?</h3>
                  <ul className={`list-disc pl-4 text-sm ${isDarkMode ? 'text-green-300' : 'text-green-700'} space-y-1`}>
                    {selectedPlan.features.map((feat, idx) => (<li key={idx}>{feat}</li>))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src={categoryIcon} alt="FSSAI Visual" className="w-full h-auto rounded-md" />
              </div>
            </div>

            <div className="mt-8 md:hidden">{renderCheckoutCard(true)}</div>
            <FssaiWhatYouGet isDarkMode={isDarkMode} />
            <FssaiEligibility isDarkMode={isDarkMode} />
            <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
              }, {
                icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
              }, {
                icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
              }, {
                icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
              }].map((item, idx) => (
                <div key={idx} className={`rounded-xl p-5 text-center shadow ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}>
                  {item.icon}
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            <FssaiFAQ isDarkMode={isDarkMode} />
          </div>
          <div className="hidden md:block md:w-[34%] relative">
            <div className="md:sticky md:top-6">{renderCheckoutCard()}</div>
          </div>
        </div>
      </div>

      <SiteFooter isDarkMode={isDarkMode} />

      {/* Floating Bottom Bar CTA for Mobile */}
      <div className={`fixed md:hidden bottom-0 left-0 right-0 shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white'}`}>
        <div className='flex flex-col'>
          <h4 className="text-lg font-semibold">Rs.{totalPrice.toLocaleString()}</h4>
          {/* **GST Mention added to Mobile Floating Bar** */}
          <p className="text-xs text-red-600 font-semibold">
            + 18% GST
          </p>
        </div>
        <button onClick={goToCheckout} className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">Continue</button>
      </div>
    </div>
  );
};

export default FssaiLicenseCourse;