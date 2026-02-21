import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getCartCount, onCartUpdated } from "../utils/cartUtils";

const FloatingCartButton = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCartCount());
    const unsubscribe = onCartUpdated(() => {
      setCount(getCartCount());
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      onClick={() => navigate("/cart")}
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
    >
      <div className="relative bg-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition">
        <FaShoppingCart size={22} />

        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {count}
          </span>
        )}
      </div>
    </div>
  );
};

export default FloatingCartButton;