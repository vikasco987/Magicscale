import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const API_BASE =
    import.meta.env.VITE_BACKEND_URL ||
    "https://cashfree-backend-kappa.vercel.app";

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

const GST_RATE = 0.18; // Updated to 18% GST

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
    const isOneTime = swiggyOrZomato || id?.includes("fssai") || id === "cart";

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                if (!id) return setError("Invalid plan ID");

                if (id === "cart") {
                    const cart = JSON.parse(localStorage.getItem("cart")) || [];
                    if (cart.length === 0) {
                        setError("Your cart is empty");
                        return;
                    }

                    const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
                    const cartItemNames = cart.map(item => item.name).join(", ");

                    setPlan({
                        id: "cart",
                        name: "Shopping Cart Bundle",
                        price: totalCartPrice,
                        description: `Order includes: ${cartItemNames}`,
                        features: cart.map(item => `${item.name} (x${item.quantity})`),
                        slug: "cart"
                    });
                    return;
                }

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
            setCouponError("❌ Invalid coupon");
        }
    };

    const handleCashfreePayment = async () => {
        if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
            alert("Please fill all required fields.");
            return;
        }

        // Calculate Subtotal (price after all discounts)
        let subTotal = isOneTime
            ? plan.price
            : Math.round((plan.price * (1 - (discountMap[duration] || 0) / 100)) * duration);

        if (couponApplied && couponDiscount > 0) {
            subTotal = Math.round(subTotal * (1 - couponDiscount / 100));
        }

        // **GST CALCULATION (18%)**
        const gstAmount = Math.round(subTotal * GST_RATE);
        const totalWithGst = subTotal + gstAmount;
        // **END GST CALCULATION**
        setLoading(true);
        try {
            const payload = {
                ...formData,
                planId: id,
                amount: totalWithGst,
                duration,
            };

            // Include cart items if it's a cart checkout
            if (id === "cart") {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                payload.cartItems = cart;
            }

            const res = await fetch(`${API_BASE}/api/cashfree`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok || !data.payment_session_id) throw new Error(data.message || "Payment failed.");

            // Save data for PaymentSuccess.jsx
            localStorage.setItem("name", formData.name);
            localStorage.setItem("email", formData.email);
            localStorage.setItem("plan", plan.name);
            localStorage.setItem("duration", duration.toString());
            localStorage.setItem("amount", totalWithGst.toString());
            localStorage.setItem("orderId", data.order_id);

            localStorage.setItem("checkout_order", JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                planSlug: plan.slug || id,
                total: totalWithGst,
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

    // 1. Calculate the subtotal after all discounts
    let subTotal = isOneTime ? plan.price : Math.round(discountedMonthly * duration);
    if (couponApplied && couponDiscount > 0) {
        subTotal = Math.round(subTotal * (1 - couponDiscount / 100));
    }

    // 2. Calculate 18% GST and the final total price
    const gstAmount = Math.round(subTotal * GST_RATE);
    const totalPrice = subTotal + gstAmount;

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
                                        className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${duration === m ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border-indigo-300"
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
                                {/* Calculate the coupon discount amount using the subTotal before tax */}
                                <span>- ₹{Math.round(subTotal * (couponDiscount / (100 - couponDiscount))).toLocaleString()}</span>
                            </div>
                        )}

                        {/* Subtotal (Pre-Tax) */}
                        <div className="flex justify-between font-semibold border-t pt-3">
                            <span>Subtotal</span>
                            <span>₹{subTotal.toLocaleString()}</span>
                        </div>

                        {/* 18% GST Line Item */}
                        <div className="flex justify-between text-red-600">
                            <span>GST Tax (18%)</span>
                            <span>+ ₹{gstAmount.toLocaleString()}</span>
                        </div>

                        {/* Total Payable (includes GST) */}
                        <div className="flex justify-between font-semibold border-t pt-3">
                            <span>Total Payable (incl. GST)</span>
                            <span className="text-indigo-700 text-lg font-bold">₹{totalPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleCashfreePayment}
                        disabled={!isFormFilled || loading || !sdkLoaded}
                        className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 text-white text-lg ${isFormFilled && !loading && sdkLoaded
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


























// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
// import { motion } from "framer-motion";

// const API_BASE =
//   import.meta.env.VITE_BACKEND_URL ||
//   "https://cashfree-backend-kappa.vercel.app";

// const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

// // Disable coupon for these plans
// const disabledCouponPlans = ["basic-growth", "premium-growth"];

// const GST_RATE = 0.18;

// const Checkout = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const queryMonths = parseInt(queryParams.get("months"), 10);

//   const [plan, setPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [duration, setDuration] = useState(queryMonths || 12);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [couponCode, setCouponCode] = useState("");
//   const [couponApplied, setCouponApplied] = useState(false);
//   const [couponDiscount, setCouponDiscount] = useState(0);
//   const [couponError, setCouponError] = useState("");

//   const swiggyOrZomato =
//     id?.includes("swiggy") || id?.includes("zomato");
//   const isOneTime = swiggyOrZomato || id?.includes("fssai");

//   /* ================= FETCH PLAN ================= */
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

//   /* ================= LOAD CASHFREE SDK ================= */
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

//   /* ================= DYNAMIC COUPON LOGIC ================= */
//   const handleApplyCoupon = () => {
//     if (disabledCouponPlans.includes(id)) {
//       setCouponDiscount(0);
//       setCouponApplied(false);
//       setCouponError("❌ Coupon not allowed for this plan.");
//       return;
//     }

//     const code = couponCode.trim().toUpperCase();
//     const match = code.match(/\d+/);

//     if (!match) {
//       setCouponDiscount(0);
//       setCouponApplied(false);
//       setCouponError("❌ Invalid format. Example: SAVE20");
//       return;
//     }

//     const percent = parseInt(match[0], 10);

//     if (percent <= 0 || percent > 80) {
//       setCouponDiscount(0);
//       setCouponApplied(false);
//       setCouponError("❌ Discount must be between 1% and 80%");
//       return;
//     }

//     setCouponDiscount(percent);
//     setCouponApplied(true);
//     setCouponError("");
//   };

//   /* ================= PRICE CALCULATION ================= */
//   if (error)
//     return <div className="text-center text-red-500 py-10">{error}</div>;
//   if (!plan)
//     return (
//       <div className="text-center py-10 text-gray-500">
//         Loading plan...
//       </div>
//     );

//   const basePrice = isOneTime
//     ? plan.price
//     : Math.round(
//         plan.price *
//           duration *
//           (1 - (discountMap[duration] || 0) / 100)
//       );

//   const couponAmount = couponApplied
//     ? Math.round(basePrice * (couponDiscount / 100))
//     : 0;

//   const subTotal = basePrice - couponAmount;
//   const gstAmount = Math.round(subTotal * GST_RATE);
//   const totalPrice = subTotal + gstAmount;

//   /* ================= PAYMENT ================= */
//   const handleCashfreePayment = async () => {
//     if (
//       !sdkLoaded ||
//       !cashfree ||
//       !formData.name ||
//       !formData.email ||
//       !formData.phone
//     ) {
//       alert("Please fill required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           planId: id,
//           amount: totalPrice,
//           duration,
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok || !data.payment_session_id)
//         throw new Error(data.message || "Payment failed");

//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `${window.location.origin}/payment-success?order_id=${data.order_id}`,
//       });
//     } catch (err) {
//       alert("Payment failed: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormFilled =
//     formData.name && formData.email && formData.phone;

//   /* ================= UI ================= */
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

//         {/* LEFT SECTION */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
//             <FaShoppingCart /> Checkout
//           </h1>

//           <h2 className="text-xl font-semibold mb-4">
//             {plan.name}
//           </h2>

//           <div className="grid sm:grid-cols-2 gap-4">
//             {["name", "email", "phone", "address"].map(
//               (field) => (
//                 <input
//                   key={field}
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleInputChange}
//                   placeholder={field}
//                   className="border p-3 rounded-xl"
//                   required={field !== "address"}
//                 />
//               )
//             )}
//           </div>

//           {!isOneTime && (
//             <div className="mt-6">
//               <h3 className="font-semibold mb-2">
//                 Select Duration
//               </h3>
//               <div className="flex gap-3">
//                 {[1, 3, 6, 12].map((m) => (
//                   <button
//                     key={m}
//                     onClick={() => setDuration(m)}
//                     className={`px-4 py-2 rounded-full ${
//                       duration === m
//                         ? "bg-indigo-600 text-white"
//                         : "border"
//                     }`}
//                   >
//                     {m} Month{m > 1 && "s"}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* COUPON */}
//           <div className="mt-6">
//             <h3 className="font-semibold mb-2">
//               Apply Coupon
//             </h3>
//             <div className="flex gap-3">
//               <input
//                 value={couponCode}
//                 onChange={(e) =>
//                   setCouponCode(e.target.value)
//                 }
//                 placeholder="SAVE20"
//                 className="border p-2 rounded-xl"
//               />
//               <button
//                 onClick={handleApplyCoupon}
//                 className="bg-green-600 text-white px-4 rounded-xl"
//               >
//                 Apply
//               </button>
//             </div>
//             {couponError && (
//               <p className="text-red-500 text-sm mt-2">
//                 {couponError}
//               </p>
//             )}
//             {couponApplied && (
//               <p className="text-green-600 text-sm mt-2">
//                 ✅ {couponDiscount}% discount applied
//               </p>
//             )}
//           </div>
//         </motion.div>

//         {/* RIGHT SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-3xl shadow-xl p-6 sticky top-20"
//         >
//           <h3 className="text-xl font-bold mb-4">
//             Order Summary
//           </h3>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span>Base Price</span>
//               <span>₹{basePrice.toLocaleString()}</span>
//             </div>

//             {couponApplied && (
//               <div className="flex justify-between text-green-600">
//                 <span>Coupon ({couponDiscount}%)</span>
//                 <span>- ₹{couponAmount.toLocaleString()}</span>
//               </div>
//             )}

//             <div className="flex justify-between border-t pt-3">
//               <span>Subtotal</span>
//               <span>₹{subTotal.toLocaleString()}</span>
//             </div>

//             <div className="flex justify-between text-red-600">
//               <span>GST (18%)</span>
//               <span>+ ₹{gstAmount.toLocaleString()}</span>
//             </div>

//             <div className="flex justify-between border-t pt-3 font-bold text-lg text-indigo-700">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!isFormFilled || loading}
//             className={`mt-6 w-full py-3 rounded-xl text-white ${
//               isFormFilled
//                 ? "bg-indigo-600 hover:bg-indigo-700"
//                 : "bg-gray-400"
//             }`}
//           >
//             {loading
//               ? "Processing..."
//               : `Pay ₹${totalPrice.toLocaleString()}`}
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
