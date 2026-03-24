import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Import routes
import PlanRoutes from "./routes/plan.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminAuthConfig from "./routes/adminAuthConfig.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import cashfreeRoutes from "./routes/cashfreeRoutes.js";
import paymentRoutes from "./routes/payment.js";
import downloadRoutes from "./routes/downloadRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Optional: trust proxy if deployed behind one (e.g. Vercel, NGINX)
app.set("trust proxy", 1);

// Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "https://magicscale.in",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use("/api/plan", PlanRoutes);
app.use("/api/admin", adminAuthConfig);
app.use("/api", adminRoutes);
app.use("/api", downloadRoutes);
app.use("/api/user", userRoutes);
app.use("/api", subscriptionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cashfree", cashfreeRoutes);
app.use("/api/success", paymentRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/blogs", blogRoutes);

// MongoDB connection and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected successfully");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
