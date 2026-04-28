import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpVerification from "./pages/OtpVerification";
import AdminLogin from "./pages/AdminLogin";
import UserDashboard from "./pages/UserDashboard";
import BookService from "./pages/BookService";
import UserProfile from "./pages/UserProfile";
import BookingConfirmation from "./pages/BookingConfirmation";
import ForgotPassword from "./pages/ForgotPassword";
import TrackingInfo from "./pages/TrackingInfo";
import AdminDashboard from "./pages/AdminDashboard";
import OnboardingPage from "./pages/OnboardingPage";
import VanSpecsPage from "./pages/VanSpecsPage";
import DocumentUploadPage from "./pages/DocumentUploadPage";
import TeamAccessPage from "./pages/TeamAccessPage";
import ReviewPage from "./pages/ReviewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tracking" element={<TrackingInfo />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/van-specs" element={<VanSpecsPage />} />
        <Route path="/document-upload" element={<DocumentUploadPage />} />
        <Route path="/team-access" element={<TeamAccessPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
