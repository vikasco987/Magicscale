// import React from "react";
// import { useSearchParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const orderId = searchParams.get("order_id");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
//       <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
//         <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
//         <p className="text-gray-600 mb-4">
//           Thank you for your purchase. Your payment was completed successfully.
//         </p>
//         {orderId && (
//           <p className="text-gray-500 text-sm">
//             Order ID: <span className="font-mono">{orderId}</span>
//           </p>
//         )}
//         <a
//           href="/"
//           className="mt-6 inline-block px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//         >
//           Go to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;


// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../../components/Footer";
//  // Update the path if needed

// const PaymentSuccess = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
//       <div className="flex-grow flex items-center justify-center p-6">
//         <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
//           <h1 className="text-3xl font-bold text-green-600 mb-4">Return to Home!</h1>
//           <p className="text-gray-700 mb-6">
//             {/* Thank you for your purchase. Your transaction has been completed successfully. */}
//             click below to return home page
//           </p>
//           <Link
//             to="/"
//             className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition"
//           >
//             Go to Home
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default PaymentSuccess;





import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const order_id = query.get("order_id");

  useEffect(() => {
    // Fetch user details from localStorage or state
    const userId = localStorage.getItem("userId"); // You should store this earlier
    const plan = localStorage.getItem("plan");
    const duration = localStorage.getItem("duration");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const amount = localStorage.getItem("amount");

    if (!order_id || !userId) return;

    // fetch("https://magicscale-backend.onrender.com/api/cashfree/confirm-payment", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ order_id, userId, plan, duration, amount, email, name }),
    // })

        fetch("https://magicscale-resilient-blessing-production.up.railway.app/api/cashfree/confirm-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order_id, userId, plan, duration, amount, email, name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Payment confirmed:", data);
      })
      .catch((err) => console.error("❌ Confirm failed:", err));
  }, [location]);

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold text-green-600">🎉 Payment Successful!</h1>
      <p className="text-gray-600 mt-4">We'll email you the onboarding details shortly.</p>
    </div>
  );
};

export default PaymentSuccess;
