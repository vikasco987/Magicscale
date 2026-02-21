import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LeadPopup = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // show popup only once per session
    const shown = sessionStorage.getItem("leadPopupShown");
    if (!shown) {
      setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("leadPopupShown", "true");
      }, 1000); // show after 1s
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can send this data to your API or CRM here
    console.log("lead submitted", { name, phone });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
        <h2 className="text-2xl font-extrabold mb-2 text-indigo-800">Hey there! 👋</h2>
        <p className="text-base text-gray-700 mb-6">
          Just a quick intro — drop your name and phone and we'll reach out shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Send it
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LeadPopup;
