// src/utils/cartUtils.js

// Get Cart Items
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// Save Cart
export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Add To Cart
export const addToCart = (product) => {
  const cart = getCart();

  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity += 1; // increase quantity
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

// Remove From Cart
export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
};

// Update Quantity
export const updateQuantity = (id, quantity) => {
  const cart = getCart();

  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = quantity;
  }

  saveCart(cart);
};

// Clear Cart
export const clearCart = () => {
  localStorage.removeItem("cart");
};