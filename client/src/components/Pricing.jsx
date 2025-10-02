






// //corect code

// import React, { useState } from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const planFeatures = [
//   "Menu Score Update",
//   "Dedicated Account Manager",
//   "Customer Review Management",
//   "Priority Support",
//   "Detail Weekly Report",
//   "Details Monthly Report",
//   "Discount Strategy",
//   "Competitor Analysis",
//   "SEO Friendly Content",
//   "Response To Review",
//   "Menu Optimization",
//   "Profile Enhancement",
//   "Weekly Consultant Calls",
//   "Marketing insights",
//   "Boosted Promotions",
//   "Zomato Ad Campaign Management",
//   "Festival Specific Promotions",
//   "Custom Campaign Ideas",
//   "Weekly Menu Insights",
//   "Target Audience Analysis",
//   "Analytics and Insights Dashboards",
//   "Personalized Growth Strategies",
//   "Daily Monitoring of Progress",
// ];

// const basicPlanFeatures = [
//   true, true, true, "Standard", true, true, true, true, true, false, true, false,
//   true, false, false, false, false, false, true, true, false, true
// ];

// const premiumPlanFeatures = [
//   true, true, true, "Fast", true, true, true, true, true, true, true, true,
//   true, true, true, true, true, true, true, true, true, true
// ];

// const Pricing = () => {
//   const navigate = useNavigate();
//   const [durations, setDurations] = useState({ basic: 1, premium: 1 });

//   // const prices = {
//   //   basic: 7999,
//   //   premium: 9999,
//   // };
//   const prices = {
//   basic: 7999,     // changed from 7999
//   premium: 9999,   // changed from 9999
// };

//   const renderIcon = (value) => {
//     if (typeof value === "string") return <span className="text-sm font-medium text-purple-600">{value}</span>;
//     return value ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />;
//   };

//   const handleStart = (plan, months) => {
//     navigate(`/checkout/${plan}?months=${months}`);
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-purple-100 via-white to-purple-200 py-20 px-4 overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/batthern.png')] opacity-10"></div>

//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-purple-800 mb-3">
//           Choose Your Growth Plan for <span className="text-red-500">Zomato</span> & <span className="text-yellow-500">Swiggy</span>
//         </h2>
//         <p className="text-lg text-gray-600">
//           Supercharge your restaurant's online visibility and performance.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {["Basic", "Premium"].map((planType, i) => {
//           const planKey = planType.toLowerCase();
//           const duration = durations[planKey];

//           return (
//             <div
//               key={planType}
//               className="relative bg-white shadow-xl rounded-2xl p-8 border border-purple-200 hover:shadow-2xl transition duration-300 backdrop-blur-md"
//             >
//               <div className="absolute -top-4 -right-4 bg-yellow-300 text-xs text-purple-900 font-bold px-3 py-1 rounded-full shadow">
//                 {planType === "Premium" ? "Best Value" : "Starter"}
//               </div>
//               <h3 className="text-2xl font-bold text-purple-700 mb-1">
//                 {planType} Plan
//               </h3>
//               <p className="text-3xl font-extrabold text-purple-900 mb-4">
//                 ₹{prices[planKey].toLocaleString()} <span className="text-sm text-gray-500 font-medium"> /month</span>
//               </p>

//               <div className="mb-4">
//                 <label className="block font-medium text-sm text-gray-700 mb-2">
//                   Subscription Duration
//                 </label>
//                 <div className="flex gap-2">
//                   {[1, 3, 6, 12].map((m) => (
//                     <button
//                       key={m}
//                       onClick={() => setDurations({ ...durations, [planKey]: m })}
//                       className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
//                         durations[planKey] === m
//                           ? "bg-purple-600 text-white border-purple-700"
//                           : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
//                       }`}
//                     >
//                       {m} mo
//                     </button>
//                   ))}
//                 </div>
//                 <p className="mt-3 text-lg text-purple-700 font-semibold">
//                   Total: ₹{(prices[planKey] * duration).toLocaleString("en-IN")}
//                 </p>
//               </div>

//               <div className="space-y-3 text-left mt-6">
//                 {planFeatures.map((feature, idx) => (
//                   <div key={idx} className="flex items-center space-x-3">
//                     {renderIcon(i === 0 ? basicPlanFeatures[idx] : premiumPlanFeatures[idx])}
//                     <span className="text-gray-700 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => handleStart(`plan-${planKey}`, duration)}
//                 className={`mt-8 w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
//                   planType === "Basic"
//                     ? "bg-indigo-500 hover:bg-indigo-600"
//                     : "bg-purple-600 hover:bg-purple-700"
//                 }`}
//               >
//                 Get Started
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-20 text-center text-sm text-gray-600 relative z-10">
//         Need a custom plan?{' '}
//         <a
//           href="https://wa.me/919311330885"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-purple-600 font-medium hover:underline"
//         >
//           Contact us
//         </a>
//         .
//       </div>
//     </div>
//   );
// };

// export default Pricing;





// import React, { useState } from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const planFeatures = [
//   "Menu Score Update",
//   "Dedicated Account Manager",
//   "Customer Review Management",
//   "Priority Support",
//   "Detail Weekly Report",
//   "Details Monthly Report",
//   "Discount Strategy",
//   "Competitor Analysis",
//   "SEO Friendly Content",
//   "Response To Review",
//   "Menu Optimization",
//   "Profile Enhancement",
//   "Weekly Consultant Calls",
//   "Marketing insights",
//   "Boosted Promotions",
//   "Zomato Ad Campaign Management",
//   "Festival Specific Promotions",
//   "Custom Campaign Ideas",
//   "Weekly Menu Insights",
//   "Target Audience Analysis",
//   "Analytics and Insights Dashboards",
//   "Personalized Growth Strategies",
//   "Daily Monitoring of Progress",
// ];

// const basicPlanFeatures = [
//   true, true, true, "Standard", true, true, true, true, true, false, true, false,
//   true, false, false, false, false, false, true, true, false, true
// ];

// const premiumPlanFeatures = [
//   true, true, true, "Fast", true, true, true, true, true, true, true, true,
//   true, true, true, true, true, true, true, true, true, true
// ];

// const getDiscountPercentage = (months) => {
//   if (months >= 12) return 25;
//   if (months >= 6) return 15;
//   if (months >= 3) return 10;
//   return 0;
// };

// const Pricing = () => {
//   const navigate = useNavigate();
//   const [durations, setDurations] = useState({ basic: 1, premium: 1 });

//   const prices = {
//     basic: 7999,
//     premium: 9999,
//   };

//   const renderIcon = (value) => {
//     if (typeof value === "string") return <span className="text-sm font-medium text-purple-600">{value}</span>;
//     return value ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />;
//   };

//   const handleStart = (plan, months) => {
//     navigate(`/checkout/${plan}?months=${months}`);
//   };

//   return (
//     <div className="relative bg-gradient-to-br from-purple-100 via-white to-purple-200 py-20 px-4 overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/batthern.png')] opacity-10"></div>

//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-purple-800 mb-3">
//           Choose Your Growth Plan for <span className="text-red-500">Zomato</span> & <span className="text-yellow-500">Swiggy</span>
//         </h2>
//         <p className="text-lg text-gray-600">
//           Supercharge your restaurant's online visibility and performance.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {["Basic", "Premium"].map((planType, i) => {
//           const planKey = planType.toLowerCase();
//           const duration = durations[planKey];
//           const basePrice = prices[planKey] * duration;
//           const discount = getDiscountPercentage(duration);
//           const discountAmount = Math.round((basePrice * discount) / 100);
//           const totalPrice = basePrice - discountAmount;

//           return (
//             <div
//               key={planType}
//               className="relative bg-white shadow-xl rounded-2xl p-8 border border-purple-200 hover:shadow-2xl transition duration-300 backdrop-blur-md"
//             >
//               <div className="absolute -top-4 -right-4 bg-yellow-300 text-xs text-purple-900 font-bold px-3 py-1 rounded-full shadow">
//                 {planType === "Premium" ? "Best Value" : "Starter"}
//               </div>
//               <h3 className="text-2xl font-bold text-purple-700 mb-1">
//                 {planType} Plan
//               </h3>
//               <p className="text-3xl font-extrabold text-purple-900 mb-4">
//                 ₹{prices[planKey].toLocaleString()} <span className="text-sm text-gray-500 font-medium"> /month</span>
//               </p>

//               <div className="mb-4">
//                 <label className="block font-medium text-sm text-gray-700 mb-2">
//                   Subscription Duration
//                 </label>
//                 <div className="flex gap-2">
//                   {[1, 3, 6, 12].map((m) => (
//                     <button
//                       key={m}
//                       onClick={() => setDurations({ ...durations, [planKey]: m })}
//                       className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
//                         durations[planKey] === m
//                           ? "bg-purple-600 text-white border-purple-700"
//                           : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
//                       }`}
//                     >
//                       {m} mo
//                     </button>
//                   ))}
//                 </div>
//                 <p className="mt-3 text-lg text-purple-700 font-semibold">
//                   Total: ₹{totalPrice.toLocaleString("en-IN")} {discount > 0 && <span className="text-sm text-green-600">({discount}% off)</span>}
//                 </p>
//               </div>

//               <div className="space-y-3 text-left mt-6">
//                 {planFeatures.map((feature, idx) => (
//                   <div key={idx} className="flex items-center space-x-3">
//                     {renderIcon(i === 0 ? basicPlanFeatures[idx] : premiumPlanFeatures[idx])}
//                     <span className="text-gray-700 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => handleStart(planKey, duration)}
//                 className={`mt-8 w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
//                   planType === "Basic"
//                     ? "bg-indigo-500 hover:bg-indigo-600"
//                     : "bg-purple-600 hover:bg-purple-700"
//                 }`}
//               >
//                 Get Started
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-20 text-center text-sm text-gray-600 relative z-10">
//         Need a custom plan?{' '}
//         <a
//           href="https://wa.me/919311330885"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-purple-600 font-medium hover:underline"
//         >
//           Contact us
//         </a>
//         .
//       </div>
//     </div>
//   );
// };

// export default Pricing;






import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const planFeatures = [
  "Menu Score Update",
  "Dedicated Account Manager",
  "Customer Review Management",
  "Priority Support",
  "Detail Weekly Report",
  "Details Monthly Report",
  "Discount Strategy",
  "Competitor Analysis",
  "SEO Friendly Content",
  "Response To Review",
  "Menu Optimization",
  "Profile Enhancement",
  "Weekly Consultant Calls",
  "Marketing insights",
  "Boosted Promotions",
  "Zomato Ad Campaign Management",
  "Festival Specific Promotions",
  "Custom Campaign Ideas",
  "Weekly Menu Insights",
  "Target Audience Analysis",
  "Analytics and Insights Dashboards",
  "Personalized Growth Strategies",
  "Daily Monitoring of Progress",
];

const basicPlanFeatures = [
  true, true, true, "Standard", true, true, true, true, true, false, true, false,
  true, false, false, false, false, false, true, true, false, true
];

const premiumPlanFeatures = [
  true, true, true, "Fast", true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true, true, true
];

const Pricing = () => {
  const navigate = useNavigate();
  const [durations, setDurations] = useState({ basic: 1, premium: 1 });

  const prices = {
    basic: 7999,
    premium: 9999,
  };

  const renderIcon = (value) => {
    if (typeof value === "string") return <span className="text-sm font-medium text-purple-600">{value}</span>;
    return value ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />;
  };

  const handleStart = (planSlug, months) => {
    navigate(`/checkout/${planSlug}?months=${months}`);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-white to-purple-200 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/batthern.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-3">
          Choose Your Growth Plan for <span className="text-red-500">Zomato</span> & <span className="text-yellow-500">Swiggy</span>
        </h2>
        <p className="text-lg text-gray-600">
          Supercharge your restaurant's online visibility and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {["Basic", "Premium"].map((planType, i) => {
          const planKey = planType.toLowerCase();
          const duration = durations[planKey];

          return (
            <div
              key={planType}
              className="relative bg-white shadow-xl rounded-2xl p-8 border border-purple-200 hover:shadow-2xl transition duration-300 backdrop-blur-md"
            >
              <div className="absolute -top-4 -right-4 bg-yellow-300 text-xs text-purple-900 font-bold px-3 py-1 rounded-full shadow">
                {planType === "Premium" ? "Best Value" : "Starter"}
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-1">
                {planType} Plan
              </h3>
              <p className="text-3xl font-extrabold text-purple-900 mb-1">
                ₹{prices[planKey].toLocaleString()} <span className="text-sm text-gray-500 font-medium"> /month</span>
              </p>
              {/* UPDATED: 18% GST Mention */}
              <p className="text-xs text-red-500 font-semibold mb-4">
                + 18% GST
              </p>
              {/* END UPDATED */}

              <div className="mb-4">
                <label className="block font-medium text-sm text-gray-700 mb-2">
                  Subscription Duration
                </label>
                <div className="flex gap-2">
                  {[1, 3, 6, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setDurations({ ...durations, [planKey]: m })}
                      className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
                        durations[planKey] === m
                          ? "bg-purple-600 text-white border-purple-700"
                          : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
                      }`}
                    >
                      {m} mo
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-lg text-purple-700 font-semibold flex justify-between items-center">
                  <span>Total: ₹{(prices[planKey] * duration).toLocaleString("en-IN")}</span>
                  {/* UPDATED: 18% GST Mention next to total */}
                  <span className="text-xs text-red-500 font-medium"> + 18% GST</span>
                  {/* END UPDATED */}
                </p>
              </div>

              <div className="space-y-3 text-left mt-6">
                {planFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    {renderIcon(i === 0 ? basicPlanFeatures[idx] : premiumPlanFeatures[idx])}
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleStart(planKey, duration)}
                className={`mt-8 w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
                  planType === "Basic"
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-20 text-center text-sm text-gray-600 relative z-10">
        Need a custom plan?{" "}
        <a
          href="https://wa.me/919311330885"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 font-medium hover:underline"
        >
          Contact us
        </a>
        .
      </div>
    </div>
  );
};

export default Pricing;