










import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ReturnPolicy from "./components/ReturnPolicy";
import "./App.css";
import ShippingPolicy from "./components/ShippingPolicy";
import PrivacyPolicies from "./components/PrivacyPolicies";
import HomeWork from "./components/HomeWork";
import Work from "./components/Work";
import Terms from "./components/Terms";
import Checkout from "./Pages/Checkout";
import ZomatoDetails from "./Pages/depthcard/ZomatoDetails";
import SwiggyDetails from "./Pages/depthcard/SwiggyDetails";
import FssaiDetails from "./Pages/depthcard/FssaiDetails";
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Login/ResetPassword/ResetPassword';
import Signup from './components/Signup/Signup';
import VerifyOtp from "./components/Signup/VerifyOTP";
import ProtectedRoute from './components/ProtectedRoute';
import FloatingCartButton from "./components/FloatingCartButton";
import PhoneOTPLogin from './components/PhoneOTPLogin';
import ZomatoCoursePage from './Pages/depthcard/CoursePage/ZomatoCoursePage';
import ComboCoursePage from './Pages/depthcard/ComboPage/ComboCoursePage';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import SellerDashboard from './Pages/SellerDashboard/SellerDashboard';
import Profile from './Pages/UserDashboard/Profile';
import SwiggyOnboardingCourse from "./Pages/depthcard/SwiggyCoursePage/SwiggyCoursePage";
import FssaiLicenseCourse from "./Pages/depthcard/FssaiCoursePage/FssaiCoursePage";
import Logout from "./Pages/Logout";
import Subscriptions from './Pages/UserDashboard/Subscriptions';
import CartPage from "./Pages/CartPage";

// ✅ Import TaskBoard component
import TaskBoard from './components/SellerDashboard/Board';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-work" element={<HomeWork />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/course/zomato-onboarding" element={<ZomatoCoursePage />} />
        <Route path="/course/combo-onboarding" element={<ComboCoursePage />} />
        <Route path="/course/swiggy-onboarding" element={<SwiggyOnboardingCourse />} />
        <Route path="/course/fssai-onboarding" element={<FssaiLicenseCourse />} />
        <Route path="/services/zomato" element={<ZomatoDetails />} />
        <Route path="/services/swiggy" element={<SwiggyDetails />} />
        <Route path="/services/fssai" element={<FssaiDetails />} />
        <Route path="/services" element={<Work />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicies />} />
        <Route path="/terms-and-condition" element={<Terms />} />
        <Route path="/login-phone" element={<PhoneOTPLogin />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/checkout/:id" element={<Checkout />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/SellerDashboard"
          element={
            <ProtectedRoute allowedRoles={['seller', 'admin']}>
              <SellerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Subscriptions"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <Subscriptions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* ✅ NEW: Task Board Route */}
        <Route
          path="/task-board"
          element={
            <ProtectedRoute allowedRoles={['seller', 'admin']}>
              <TaskBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <FloatingCartButton />
    </div>
  );
}

export default App;
