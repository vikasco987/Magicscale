import mongoose from "mongoose";
import dotenv from "dotenv";
import Plan from "./models/Plan.js"; // ✅ Adjust this path if your model is elsewhere

dotenv.config();.

const plansToSeed = [
  // 🌱 General Growth Plans
  {
    slug: "basic-growth",
    name: "Basic Growth Plan",
    price: 7999,
    features: [
      "Menu Score Update",
      "Customer Review Management",
      "Weekly Consultant Calls",
      "Menu Optimization",
      "Basic Promotion Strategy",
    ],
  },
  {
    slug: "premium-growth",
    name: "Premium Growth Plan",
    price: 9999,
    features: [
      "All Basic Features",
      "Dedicated Account Manager",
      "Festival-Specific Promotions",
      "Ad Campaign Management (platform-specific)", // Changed for generality
      "Advanced Analytics Dashboard",
    ],
  },

  // 🍽️ Zomato Onboarding Plans
  {
    slug: "zomato-starter",
    name: "Zomato Onboarding - Starter Onboarding",
    price: 1999,
    features: [
      "Zomato Restaurant Account Setup",
      "Professional Menu Setup & Optimization",
      "Initial Menu Item Upload (up to 25 items)",
      "Basic Branding & Profile Configuration",
    ],
  },
  {
    slug: "zomato-pro",
    name: "Zomato Onboarding - Pro Launch Package",
    price: 2999,
    features: [
      "Zomato Restaurant Account Setup",
      "Professional Menu Setup & Optimization",
      "Extensive Photo Upload (up to 50 items)",
      "Detailed Branding & Profile Configuration",
      "Priority Listing Support",
    ],
  },

  // 🚀 Swiggy Onboarding Plans (NEW)
  {
    slug: "swiggy-basic",
    name: "Swiggy Onboarding - Basic Onboarding",
    price: 1999,
    features: [
      "Swiggy Restaurant Account Setup",
      "Basic Menu Creation & Upload",
      "Initial Listing Support",
      "Payment Gateway Integration",
    ],
  },
  {
    slug: "swiggy-prime",
    name: "Swiggy Onboarding - Prime Launch Package",
    price: 2999,
    features: [
      "Swiggy Restaurant Account Setup",
      "Advanced Menu Design & Optimization",
      "Professional Photo Upload (up to 50 items)",
      "Restaurant Profile Branding Assistance",
      "Priority Listing & Approval",
      "Performance Tips & Basic Insights",
      "Dedicated Onboarding Support",
    ],
  },

  // 🧾 FSSAI Registration Plans
  {
    slug: "fssai-registration-1yr",
    name: "FSSAI Registration - 1 Year",
    price: 1500,
    features: ["Basic Application", "Filing Support", "1 Year License"],
  },
  {
    slug: "fssai-registration-3yrs",
    name: "FSSAI Registration - 3 Years",
    price: 2000,
    features: ["Basic Application", "Filing Support", "3 Year License"],
  },
  {
    slug: "fssai-registration-5yrs",
    name: "FSSAI Registration - 5 Years",
    price: 2500,
    features: ["Basic Application", "Filing Support", "5 Year License"],
  },
  {
    slug: "fssai-state-license",
    name: "FSSAI State License - 1–5 Year",
    price: 4999, // 3999 + 1000 govt fee
    features: ["Application Prep", "State License - 1–5 Year"],
  },
  {
    slug: "fssai-tatkal-license",
    name: "FSSAI Tatkal License - 1 Year",
    price: 999,
    features: ["Basic Application", "Filing Support", "1 Year License"],
  },
  {
    slug: "fssai-central-license",
    name: "FSSAI Central License - 1 Year",
    price: 1999,
    features: ["Central Filing", "1 Year License"],
  },
];

// 🛠️ Run Seeder
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("🔗 Connected to MongoDB");

    for (const plan of plansToSeed) {
      await Plan.findOneAndUpdate(
        { slug: plan.slug },
        plan,
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
      console.log(`✅ Upserted: ${plan.name}`);
    }

    console.log("🎉 All plans seeded successfully");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB seed error:", err.message);
    process.exit(1);
  });