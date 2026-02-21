// import React, { useState, useEffect } from "react";
// import {
//   getCart,
//   removeFromCart,
//   updateQuantity,
//   clearCart,
// } from "../utils/cartUtils";

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     setCart(getCart());
//   }, []);

//   const handleRemove = (id) => {
//     removeFromCart(id);
//     setCart(getCart());
//   };

//   const handleQuantityChange = (id, qty) => {
//     updateQuantity(id, Number(qty));
//     setCart(getCart());
//   };

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="min-h-screen p-10">
//       <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="border p-4 mb-4 rounded-lg flex justify-between items-center"
//             >
//               <div>
//                 <h2 className="font-semibold">{item.name}</h2>
//                 <p>₹{item.price}</p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity}
//                   onChange={(e) =>
//                     handleQuantityChange(item.id, e.target.value)
//                   }
//                   className="border w-16 text-center"
//                 />

//                 <button
//                   onClick={() => handleRemove(item.id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <h2 className="text-xl font-bold mt-6">
//             Total: ₹{totalPrice.toLocaleString()}
//           </h2>

//           <button
//             onClick={clearCart}
//             className="mt-4 bg-gray-700 text-white px-5 py-2 rounded"
//           >
//             Clear Cart
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;




















import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"; // Optional: npm i lucide-react
import {
  getCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../utils/cartUtils";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleQuantityChange = (id, currentQty, delta) => {
    const newQty = currentQty + delta;
    if (newQty >= 1) {
      updateQuantity(id, newQty);
      setCart(getCart());
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 flex items-center gap-3">
          <ShoppingBag className="w-10 h-10 text-indigo-600" />
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
            <div className="text-center bg-white p-16 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-500 mb-6">Your cart feels a bit light...</p>
            <button onClick={() => navigate('/#services')} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition">
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between transition-hover hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                      📦 {/* Replace with item.image if available */}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                      <p className="text-indigo-600 font-semibold">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Modern Quantity Selector */}
                    <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 bg-gray-50">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                        className="p-1 hover:text-indigo-600 transition"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-10 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                        className="p-1 hover:text-indigo-600 transition"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => { clearCart(); setCart([]); }}
                className="text-sm text-gray-500 hover:text-red-600 font-medium transition"
              >
                Clear entire cart
              </button>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-8">
                <h2 className="text-xl font-bold mb-6 border-b pb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-2xl font-black text-gray-900">
                    <span>Total</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/checkout/cart")}
                  className="w-full mt-8 bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;