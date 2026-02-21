import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getCart } from "../utils/cartUtils";

const FloatingCartButton = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCount(totalItems);
    };

    updateCartCount();

    // Listen when localStorage changes
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
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