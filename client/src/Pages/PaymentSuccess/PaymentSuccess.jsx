import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { clearCart } from "../../utils/cartUtils";
import Footer from "../../components/Footer";

const PaymentSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const order_id = query.get("order_id") || localStorage.getItem("orderId");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    // Clear the cart when payment is successful
    clearCart();

    // Fetch details from localStorage
    const plan = localStorage.getItem("plan");
    const duration = localStorage.getItem("duration");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const amount = localStorage.getItem("amount");

    // Fallback for userId if not present - use email as a unique identifier for now
    const userId = localStorage.getItem("userId") || email || "guest";

    if (!order_id) return;

    fetch("https://magicscale-resilient-blessing-production.up.railway.app/api/cashfree/confirm-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order_id,
        userId,
        plan,
        duration,
        amount,
        email,
        name
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Payment confirmed:", data);
        setConfirmed(true);
      })
      .catch((err) => console.error("❌ Confirm failed:", err));
  }, [location, order_id]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full border border-green-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We've sent the onboarding details to your email.
          </p>

          <div className="bg-gray-50 rounded-2xl p-4 mb-8 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500 text-sm">Order ID</span>
              <span className="text-gray-900 font-mono text-sm">{order_id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">Status</span>
              <span className="text-green-600 font-bold text-sm">Confirmed ✓</span>
            </div>
          </div>

          <Link
            to="/"
            className="block w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-200 active:scale-[0.98]"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
