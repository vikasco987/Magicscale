



// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const API_BASE = "https://magicscale-backend.onrender.com";

// const planData = {
//   basic: {
//     name: "Basic Growth Plan",
//     price: 7999,
//     features: [
//       "Menu Score Update",
//       "Customer Review Management",
//       "Weekly Consultant Calls",
//       "Menu Optimization",
//       "Basic Promotion Strategy",
//     ],
//     badge: "Recommended for Startups",
//   },
//   premium: {
//     name: "Premium Growth Plan",
//     price: 9999,
//     features: [
//       "All Basic Features",
//       "Dedicated Account Manager",
//       "Festival-Specific Promotions",
//       "Zomato & Swiggy Ad Campaigns",
//       "Advanced Analytics Dashboard",
//     ],
//     badge: "Best for Growing Brands",
//   },
//   zomato: {
//     name: "Zomato Onboarding Plan",
//     price: 1999,
//     features: [
//       "Zomato Listing & Verification",
//       "Menu Upload (with images)",
//       "FSSAI/GST Assistance",
//       "Restaurant Branding (Logo, Menu, QR)",
//       "Payment & Delivery Setup",
//       "WhatsApp Support",
//     ],
//     badge: "Perfect for Cloud Kitchens",
//   },
// };

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const planKey = id?.startsWith("plan-") ? id.replace("plan-", "") : null;
//   const plan = planData[planKey];

//   if (!plan) return <div className="text-center text-red-500 py-10">Invalid plan selected</div>;

//   const discount = discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//   const totalPrice = Math.round(discountedMonthlyPrice * duration);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, planId: planKey, amount: totalPrice, duration }),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.payment_session_id) throw new Error("Failed to initiate payment.");
//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `https://magicscale.in/payment-success?order_id=${data.order_id}`,
//       });
//     } catch (err) {
//       alert("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//             <div className="flex gap-3 flex-wrap">
//               {[1, 3, 6, 12].map((m) => (
//                 <motion.button
//                   key={m}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setDuration(m)}
//                   className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                     duration === m
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white text-indigo-600 border-indigo-300"
//                   }`}
//                 >
//                   {m} Month{m > 1 && "s"}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} / month</span>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <span>Duration</span>
//               <span>{duration} Months</span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Monthly Price</span>
//               <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           {loading ? (
//             <button
//               disabled
//               className="mt-6 w-full bg-indigo-400 text-white py-2 rounded-xl flex justify-center items-center gap-2"
//             >
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8z"
//                 />
//               </svg>
//               Processing...
//             </button>
//           ) : (
//             <button
//               onClick={handleCashfreePayment}
//               disabled={!isFormFilled}
//               className={`mt-6 w-full py-2 rounded-xl font-semibold transition-all duration-300 text-white ${
//                 isFormFilled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
//               }`}
//             >
//               Proceed to Payment
//             </button>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

















// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// // const API_BASE = "https://magicscale-backend.onrender.com";
// const API_BASE = "http://localhost:5000"; // or your actual backend port


// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         const planId = id;
//         if (!planId) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${planId}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data");
//       }
//     };

//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const discount = discountMap[duration] || 0;
//     const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//     const totalPrice = Math.round(discountedMonthlyPrice * duration);

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, planId: id.replace("plan-", ""), amount: totalPrice, duration }),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.payment_session_id) throw new Error("Failed to initiate payment.");
//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `https://magicscale.in/payment-success?order_id=${data.order_id}`,
//       });
//     } catch (err) {
//       alert("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

//   const discount = discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//   const totalPrice = Math.round(discountedMonthlyPrice * duration);
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//             <div className="flex gap-3 flex-wrap">
//               {[1, 3, 6, 12].map((m) => (
//                 <motion.button
//                   key={m}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setDuration(m)}
//                   className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                     duration === m
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white text-indigo-600 border-indigo-300"
//                   }`}
//                 >
//                   {m} Month{m > 1 && "s"}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} / month</span>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <span>Duration</span>
//               <span>{duration} Months</span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Monthly Price</span>
//               <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           {loading ? (
//             <button
//               disabled
//               className="mt-6 w-full bg-indigo-400 text-white py-2 rounded-xl flex justify-center items-center gap-2"
//             >
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8z"
//                 />
//               </svg>
//               Processing...
//             </button>
//           ) : (
//             <button
//               onClick={handleCashfreePayment}
//               disabled={!isFormFilled}
//               className={`mt-6 w-full py-2 rounded-xl font-semibold transition-all duration-300 text-white ${
//                 isFormFilled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
//               }`}
//             >
//               Proceed to Payment
//             </button>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


































// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// // const API_BASE = "https://magicscale.in";
// const API_BASE = "https://magicscale-backend.onrender.com";

// // const API_BASE = "http://localhost:5000";  // or your actual backend port

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         const planId = id;
//         if (!planId) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${planId}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data");
//       }
//     };

//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const discount = discountMap[duration] || 0;
//     const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//     const totalPrice = Math.round(discountedMonthlyPrice * duration);

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, planId: id.replace("plan-", ""), amount: totalPrice, duration })
//       });
//       const data = await res.json();
//       if (!res.ok || !data.payment_session_id) throw new Error("Failed to initiate payment.");

//       // ✅ Store details in localStorage for later confirmation
//       localStorage.setItem("userId", "guest-user"); // replace with actual user ID if available
//       localStorage.setItem("plan", plan.slug || id.replace("plan-", ""));
//       localStorage.setItem("duration", duration);
//       localStorage.setItem("amount", totalPrice);
//       localStorage.setItem("email", formData.email);
//       localStorage.setItem("name", formData.name);

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `https://magicscale.in/payment-success?order_id=${data.order_id}`
//       });
//     } catch (err) {
//       alert("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

//   const discount = discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//   const totalPrice = Math.round(discountedMonthlyPrice * duration);
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//             <div className="flex gap-3 flex-wrap">
//               {[1, 3, 6, 12].map((m) => (
//                 <motion.button
//                   key={m}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setDuration(m)}
//                   className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                     duration === m
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white text-indigo-600 border-indigo-300"
//                   }`}
//                 >
//                   {m} Month{m > 1 && "s"}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} / month</span>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <span>Duration</span>
//               <span>{duration} Months</span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Monthly Price</span>
//               <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           {loading ? (
//             <button
//               disabled
//               className="mt-6 w-full bg-indigo-400 text-white py-2 rounded-xl flex justify-center items-center gap-2"
//             >
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8z"
//                 />
//               </svg>
//               Processing...
//             </button>
//           ) : (
//             <button
//               onClick={handleCashfreePayment}
//               disabled={!isFormFilled}
//               className={`mt-6 w-full py-2 rounded-xl font-semibold transition-all duration-300 text-white ${
//                 isFormFilled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
//               }`}
//             >
//               Proceed to Payment
//             </button>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


















// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// // ✅ Safely load backend URL from .env, with fallback
// const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";

// // ✅ Discount map
// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         if (!id) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data: " + err.message);
//       }
//     };

//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const discount = discountMap[duration] || 0;
//     const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//     const totalPrice = Math.round(discountedMonthlyPrice * duration);

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, planId: id, amount: totalPrice, duration }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.payment_session_id) {
//         throw new Error(data.message || "Failed to initiate payment.");
//       }

//       localStorage.setItem("checkout_order", JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         planSlug: plan.slug || id,
//         total: totalPrice,
//         orderId: data.order_id,
//       }));

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`
//       });
//     } catch (err) {
//       alert(`Payment failed: ${err.message}`);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

//   const discount = discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//   const totalPrice = Math.round(discountedMonthlyPrice * duration);
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//             <div className="flex gap-3 flex-wrap">
//               {[1, 3, 6, 12].map((m) => (
//                 <motion.button
//                   key={m}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setDuration(m)}
//                   className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                     duration === m
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white text-indigo-600 border-indigo-300"
//                   }`}
//                 >
//                   {m} Month{m > 1 && "s"}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} / month</span>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <span>Duration</span>
//               <span>{duration} Month{duration > 1 ? "s" : ""}</span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Monthly Price</span>
//               <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading || !sdkLoaded}
//             className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
//               isFormFilled && !loading && sdkLoaded
//                 ? "bg-indigo-600 hover:bg-indigo-700"
//                 : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Processing Payment..." : `Proceed to Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;









// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         if (!id) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data: " + err.message);
//       }
//     };
//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;
//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

//   const isSwiggyPlan = plan?.slug?.startsWith("swiggy");
//   const discount = isSwiggyPlan ? 0 : discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//   const totalPrice = isSwiggyPlan ? plan.price : Math.round(discountedMonthlyPrice * duration);
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !isFormFilled) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           planId: id,
//           amount: totalPrice,
//           duration: isSwiggyPlan ? 1 : duration,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.payment_session_id) {
//         throw new Error(data.message || "Failed to initiate payment.");
//       }

//       localStorage.setItem("checkout_order", JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         planSlug: plan.slug || id,
//         total: totalPrice,
//         orderId: data.order_id,
//       }));

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`
//       });
//     } catch (err) {
//       alert(`Payment failed: ${err.message}`);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         {/* Left: Form & Features */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           {/* Duration (only if not Swiggy) */}
//           {!isSwiggyPlan && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {[1, 3, 6, 12].map((m) => (
//                   <motion.button
//                     key={m}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setDuration(m)}
//                     className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                       duration === m
//                         ? "bg-indigo-600 text-white"
//                         : "bg-white text-indigo-600 border-indigo-300"
//                     }`}
//                   >
//                     {m} Month{m > 1 && "s"}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* Right: Summary */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} {isSwiggyPlan ? "" : "/ month"}</span>
//             </div>
//             {!isSwiggyPlan && (
//               <div className="flex justify-between text-gray-600">
//                 <span>Duration</span>
//                 <span>{duration} Month{duration > 1 ? "s" : ""}</span>
//               </div>
//             )}
//             {!isSwiggyPlan && discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             {!isSwiggyPlan && (
//               <div className="flex justify-between font-semibold border-t pt-3">
//                 <span>Monthly Price</span>
//                 <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading || !sdkLoaded}
//             className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
//               isFormFilled && !loading && sdkLoaded
//                 ? "bg-indigo-600 hover:bg-indigo-700"
//                 : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Processing Payment..." : `Proceed to Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;










// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// // 🔽 Utility to check if duration/discount should be disabled
// const isOneTimePlan = (slug) =>
//   slug?.startsWith("swiggy") || slug?.startsWith("zomato");

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         if (!id) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data: " + err.message);
//       }
//     };
//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;
//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

//   const isOneTime = isOneTimePlan(plan.slug);
//   const discount = isOneTime ? 0 : discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan.price * (1 - discount / 100);
//   const totalPrice = isOneTime ? plan.price : Math.round(discountedMonthlyPrice * duration);
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !isFormFilled) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           planId: id,
//           amount: totalPrice,
//           duration: isOneTime ? 1 : duration,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.payment_session_id) {
//         throw new Error(data.message || "Failed to initiate payment.");
//       }

//       localStorage.setItem("checkout_order", JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         planSlug: plan.slug || id,
//         total: totalPrice,
//         orderId: data.order_id,
//       }));

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`
//       });
//     } catch (err) {
//       alert(`Payment failed: ${err.message}`);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         {/* Left: Form & Features */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           {/* Duration Selector (only for FSSAI and others) */}
//           {!isOneTime && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {[1, 3, 6, 12].map((m) => (
//                   <motion.button
//                     key={m}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setDuration(m)}
//                     className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                       duration === m
//                         ? "bg-indigo-600 text-white"
//                         : "bg-white text-indigo-600 border-indigo-300"
//                     }`}
//                   >
//                     {m} Month{m > 1 && "s"}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Plan Features */}
//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* Right: Summary */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} {isOneTime ? "" : "/ month"}</span>
//             </div>

//             {!isOneTime && (
//               <div className="flex justify-between text-gray-600">
//                 <span>Duration</span>
//                 <span>{duration} Month{duration > 1 ? "s" : ""}</span>
//               </div>
//             )}

//             {!isOneTime && discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}

//             {!isOneTime && (
//               <div className="flex justify-between font-semibold border-t pt-3">
//                 <span>Monthly Price</span>
//                 <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
//               </div>
//             )}

//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading || !sdkLoaded}
//             className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
//               isFormFilled && !loading && sdkLoaded
//                 ? "bg-indigo-600 hover:bg-indigo-700"
//                 : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Processing Payment..." : `Proceed to Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




// // ✅ Updated: Checkout.jsx (with Swiggy/Zomato coupon logic)
// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);
//   const finalPriceFromCoupon = parseInt(queryParams.get("finalPrice"), 10);
//   const couponApplied = queryParams.get("discountApplied") === "true";
//   const couponCode = queryParams.get("couponCode") || null;

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         if (!id) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data: " + err.message);
//       }
//     };
//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const isOneTime =
//     id.startsWith("swiggy") || id.startsWith("zomato");

//   const discount = isOneTime ? 0 : discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan ? plan.price * (1 - discount / 100) : 0;

//   const totalPrice = isOneTime
//     ? (couponApplied && finalPriceFromCoupon ? finalPriceFromCoupon : plan?.price)
//     : Math.round(discountedMonthlyPrice * duration);

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           planId: id,
//           amount: totalPrice,
//           duration
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.payment_session_id) {
//         throw new Error(data.message || "Failed to initiate payment.");
//       }

//       localStorage.setItem("checkout_order", JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         planSlug: plan.slug || id,
//         total: totalPrice,
//         orderId: data.order_id,
//       }));

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`
//       });
//     } catch (err) {
//       alert(`Payment failed: ${err.message}`);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8">
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           {!isOneTime && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {[1, 3, 6, 12].map((m) => (
//                   <motion.button
//                     key={m}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setDuration(m)}
//                     className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                       duration === m ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border-indigo-300"
//                     }`}
//                   >
//                     {m} Month{m > 1 && "s"}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="sticky top-20 bg-white rounded-3xl shadow-xl p-6">
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} {isOneTime ? "" : "/ month"}</span>
//             </div>
//             {!isOneTime && (
//               <div className="flex justify-between text-gray-600">
//                 <span>Duration</span>
//                 <span>{duration} Month{duration > 1 ? "s" : ""}</span>
//               </div>
//             )}
//             {!isOneTime && discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>{isOneTime ? "Plan Price" : "Monthly Price"}</span>
//               <span>₹{Math.round(isOneTime ? totalPrice : discountedMonthlyPrice).toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>

//             {isOneTime && couponApplied && (
//               <div className="text-sm text-green-600 pt-2">
//                 Coupon <strong>{couponCode}</strong> applied successfully!
//               </div>
//             )}
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading || !sdkLoaded}
//             className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
//               isFormFilled && !loading && sdkLoaded ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Processing Payment..." : `Proceed to Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
























// // ✅ Fully Updated Checkout.jsx — FSSAI Plans + Onboarding Plans (no months)
// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

// const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);
//   const finalPriceFromCoupon = parseInt(queryParams.get("finalPrice"), 10);
//   const couponApplied = queryParams.get("discountApplied") === "true";
//   const couponCode = queryParams.get("couponCode") || null;

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         if (!id) {
//           setError("Invalid plan ID");
//           return;
//         }
//         const res = await fetch(`${API_BASE}/api/plan/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data: " + err.message);
//       }
//     };
//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const isOneTime =
//     id.startsWith("swiggy") ||
//     id.startsWith("zomato") ||
//     id.startsWith("fssai");

//   const discount = isOneTime ? 0 : discountMap[duration] || 0;
//   const discountedMonthlyPrice = plan ? plan.price * (1 - discount / 100) : 0;

//   const totalPrice = isOneTime
//     ? (couponApplied && finalPriceFromCoupon ? finalPriceFromCoupon : plan?.price)
//     : Math.round(discountedMonthlyPrice * duration);

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           planId: id,
//           amount: totalPrice,
//           duration
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.payment_session_id) {
//         throw new Error(data.message || "Failed to initiate payment.");
//       }

//       localStorage.setItem("checkout_order", JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         planSlug: plan.slug || id,
//         total: totalPrice,
//         orderId: data.order_id,
//       }));

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`
//       });
//     } catch (err) {
//       alert(`Payment failed: ${err.message}`);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8">
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           {!isOneTime && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {[1, 3, 6, 12].map((m) => (
//                   <motion.button
//                     key={m}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setDuration(m)}
//                     className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                       duration === m ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border-indigo-300"
//                     }`}
//                   >
//                     {m} Month{m > 1 && "s"}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center text-gray-700">
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="sticky top-20 bg-white rounded-3xl shadow-xl p-6">
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} {isOneTime ? "" : "/ month"}</span>
//             </div>
//             {!isOneTime && (
//               <div className="flex justify-between text-gray-600">
//                 <span>Duration</span>
//                 <span>{duration} Month{duration > 1 ? "s" : ""}</span>
//               </div>
//             )}
//             {!isOneTime && discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>{isOneTime ? "Plan Price" : "Monthly Price"}</span>
//               <span>₹{Math.round(isOneTime ? totalPrice : discountedMonthlyPrice).toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//             {isOneTime && couponApplied && (
//               <div className="text-sm text-green-600 pt-2">
//                 Coupon <strong>{couponCode}</strong> applied successfully!
//               </div>
//             )}
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading || !sdkLoaded}
//             className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
//               isFormFilled && !loading && sdkLoaded ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Processing Payment..." : `Proceed to Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;















// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
// import { motion } from "framer-motion";

// // ✅ Load backend from .env or fallback
// const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";

// // ✅ Discount map
// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [couponCode, setCouponCode] = useState("");
//   const [couponApplied, setCouponApplied] = useState(false);

//   const swiggyOrZomato = id?.includes("swiggy") || id?.includes("zomato");
//   const isOneTime = swiggyOrZomato || id?.includes("fssai");

//   useEffect(() => {
//     const fetchPlan = async () => {
//       try {
//         if (!id) return setError("Invalid plan ID");
//         const res = await fetch(`${API_BASE}/api/plan/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch plan");
//         const data = await res.json();
//         setPlan(data);
//       } catch (err) {
//         setError("Could not load plan data: " + err.message);
//       }
//     };

//     fetchPlan();
//   }, [id]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.body.contains(script)) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     let totalPrice = plan.price;

//     if (!isOneTime) {
//       const discount = discountMap[duration] || 0;
//       const discountedPrice = plan.price * (1 - discount / 100);
//       totalPrice = Math.round(discountedPrice * duration);
//     }

//     if (couponApplied) {
//       totalPrice = totalPrice - 500; // Flat ₹500 discount
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, planId: id, amount: totalPrice, duration }),
//       });

//       const data = await res.json();
//       if (!res.ok || !data.payment_session_id) throw new Error(data.message || "Payment failed.");

//       localStorage.setItem("checkout_order", JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         planSlug: plan.slug || id,
//         total: totalPrice,
//         orderId: data.order_id,
//       }));

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`,
//       });
//     } catch (err) {
//       alert("Payment failed: " + err.message);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

//   const discount = discountMap[duration] || 0;
//   const discountedMonthly = plan.price * (1 - discount / 100);
//   const totalPrice = isOneTime
//     ? plan.price - (couponApplied ? 500 : 0)
//     : Math.round(discountedMonthly * duration) - (couponApplied ? 500 : 0);
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
//         {/* Main Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h1 className="text-3xl font-extrabold text-indigo-700 mb-4 flex items-center gap-2">
//             <FaShoppingCart /> 🛍️ 1 Plan Selected
//           </h1>

//           <h2 className="text-2xl text-gray-800 font-semibold mb-2">{plan.name}</h2>
//           <p className="text-green-700 font-medium mb-6">✅ Join 50+ others who enrolled in last 24 hours!</p>

//           {/* User Inputs */}
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           {/* Duration */}
//           {!isOneTime && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold text-gray-800 mb-2">Select Duration</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {[1, 3, 6, 12].map((m) => (
//                   <motion.button
//                     key={m}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setDuration(m)}
//                     className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                       duration === m
//                         ? "bg-indigo-600 text-white"
//                         : "bg-white text-indigo-600 border-indigo-300"
//                     }`}
//                   >
//                     {m} Month{m > 1 && "s"}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Coupon */}
//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Apply Coupon</h3>
//             <div className="flex gap-3 flex-wrap items-center">
//               <input
//                 type="text"
//                 value={couponCode}
//                 onChange={(e) => setCouponCode(e.target.value)}
//                 placeholder="Enter coupon code"
//                 className="border p-2 rounded-xl"
//               />
//               <button
//                 onClick={() => setCouponApplied(true)}
//                 className="bg-green-600 text-white px-4 py-2 rounded-xl"
//               >
//                 Apply
//               </button>
//               {isOneTime && couponApplied && (
//                 <div className="text-sm text-green-600 pt-2">
//                   Coupon <strong>{couponCode}</strong> applied successfully!
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Features */}
//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* Order Summary */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()}</span>
//             </div>
//             {!isOneTime && (
//               <>
//                 <div className="flex justify-between text-gray-600">
//                   <span>Duration</span>
//                   <span>{duration} Month{duration > 1 ? "s" : ""}</span>
//                 </div>
//                 {discount > 0 && (
//                   <div className="flex justify-between text-green-600">
//                     <span>Discount ({discount}%)</span>
//                     <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
//                   </div>
//                 )}
//               </>
//             )}
//             {couponApplied && (
//               <div className="flex justify-between text-green-600">
//                 <span>Coupon Discount</span>
//                 <span>- ₹500</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Total Payable</span>
//               <span className="text-indigo-700 text-lg font-bold">₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading || !sdkLoaded}
//             className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
//               isFormFilled && !loading && sdkLoaded
//                 ? "bg-indigo-600 hover:bg-indigo-700"
//                 : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             {loading ? "Processing Payment..." : `Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;





























import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

//https://magicscale-production.up.railway.app/   //https://magicscale-production-42d7.up.railway.app/    //https://magicscale-production.up.railway.app
//const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://magicscale-backend.onrender.com";
// const API_BASE = import.meta.env.VITE_BACKEND_URL || "resilient-blessing-production.up.railway.app";
const API_BASE = import.meta.env.VITE_BACKEND_URL || "https://resilient-blessing-production.up.railway.app";


const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };
const validCoupons = {
  SAVE10: 10,
  SAVE15: 15,
  SAVE20: 20,
};

// Only disable for basic-growth and premium-growth plans
const disabledCouponPlans = [
  "basic-growth",
  "premium-growth",
];

const Checkout = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryMonths = parseInt(queryParams.get("months"), 10);

  const [plan, setPlan] = useState(null);
  const [error, setError] = useState(null);
  const [duration, setDuration] = useState(queryMonths || 12);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [cashfree, setCashfree] = useState(null);
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const swiggyOrZomato = id?.includes("swiggy") || id?.includes("zomato");
  const isOneTime = swiggyOrZomato || id?.includes("fssai");

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        if (!id) return setError("Invalid plan ID");
        const res = await fetch(`${API_BASE}/api/plan/${id}`);
        if (!res.ok) throw new Error("Failed to fetch plan");
        const data = await res.json();
        setPlan(data);
      } catch (err) {
        setError("Could not load plan data: " + err.message);
      }
    };

    fetchPlan();
  }, [id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => {
      if (window.Cashfree) {
        const cf = window.Cashfree({ mode: "production" });
        setCashfree(cf);
        setSdkLoaded(true);
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = () => {
    if (disabledCouponPlans.includes(id)) {
      setCouponDiscount(0);
      setCouponApplied(false);
      setCouponError("❌ Coupon not applicable for this plan.");
      return;
    }

    const code = couponCode.trim().toUpperCase();
    if (validCoupons[code]) {
      setCouponDiscount(validCoupons[code]);
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponDiscount(0);
      setCouponApplied(false);
      setCouponError("❌ Invalid coupon. Use SAVE10, SAVE15, or SAVE20");
    }
  };

  const handleCashfreePayment = async () => {
    if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    let totalPrice = isOneTime
      ? plan.price
      : Math.round((plan.price * (1 - (discountMap[duration] || 0) / 100)) * duration);

    if (couponApplied && couponDiscount > 0) {
      totalPrice = Math.round(totalPrice * (1 - couponDiscount / 100));
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, planId: id, amount: totalPrice, duration }),
      });

      const data = await res.json();
      if (!res.ok || !data.payment_session_id) throw new Error(data.message || "Payment failed.");

      localStorage.setItem("checkout_order", JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planSlug: plan.slug || id,
        total: totalPrice,
        orderId: data.order_id,
      }));

      await cashfree.checkout({
        paymentSessionId: data.payment_session_id,
        returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`,
      });
    } catch (err) {
      alert("Payment failed: " + err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!plan) return <div className="text-center py-10 text-gray-500">Loading plan...</div>;

  const discount = discountMap[duration] || 0;
  const discountedMonthly = plan.price * (1 - discount / 100);
  let totalPrice = isOneTime ? plan.price : Math.round(discountedMonthly * duration);
  if (couponApplied && couponDiscount > 0) {
    totalPrice = Math.round(totalPrice * (1 - couponDiscount / 100));
  }

  const isFormFilled = formData.name && formData.email && formData.phone;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-4 flex items-center gap-2">
            <FaShoppingCart /> 🛍️ 1 Plan Selected
          </h1>

          <h2 className="text-2xl text-gray-800 font-semibold mb-2">{plan.name}</h2>
          <p className="text-green-700 font-medium mb-6">✅ Join 50+ others who enrolled in last 24 hours!</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {["name", "email", "phone", "address"].map((field) => (
              <input
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
                required={field !== "address"}
              />
            ))}
          </div>

          {!isOneTime && (
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Select Duration</h3>
              <div className="flex gap-3 flex-wrap">
                {[1, 3, 6, 12].map((m) => (
                  <motion.button
                    key={m}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDuration(m)}
                    className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
                      duration === m ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border-indigo-300"
                    }`}
                  >
                    {m} Month{m > 1 && "s"}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Apply Coupon</h3>
            <div className="flex gap-3 flex-wrap items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="border p-2 rounded-xl"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Apply
              </button>
            </div>
            {couponError && <p className="text-sm text-red-600 mt-1">{couponError}</p>}
            {couponApplied && couponDiscount > 0 && (
              <p className="text-sm text-green-600 mt-1">✅ Coupon applied: {couponDiscount}% off</p>
            )}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" /> {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="sticky top-20 bg-white rounded-3xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>{plan.name}</span>
              <span>₹{plan.price.toLocaleString()}</span>
            </div>
            {!isOneTime && (
              <>
                <div className="flex justify-between text-gray-600">
                  <span>Duration</span>
                  <span>{duration} Month{duration > 1 ? "s" : ""}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span>- ₹{((plan.price * duration * discount) / 100).toLocaleString()}</span>
                  </div>
                )}
              </>
            )}
            {couponApplied && couponDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Coupon ({couponDiscount}%)</span>
                <span>- ₹{Math.round(totalPrice * (couponDiscount / (100 - couponDiscount))).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold border-t pt-3">
              <span>Total Payable</span>
              <span className="text-indigo-700 text-lg font-bold">₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handleCashfreePayment}
            disabled={!isFormFilled || loading || !sdkLoaded}
            className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${
              isFormFilled && !loading && sdkLoaded
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {loading ? "Processing Payment..." : `Pay ₹${totalPrice.toLocaleString()}`}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;



