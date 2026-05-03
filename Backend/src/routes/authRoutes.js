const express = require("express");
const router = express.Router();
const {
  sendOTP,
  verifyOTP,
  adminLogin,
  registerClinic,
} = require("../controllers/authController");

// ==================== Public Authentication Routes ====================

// 1. Send OTP to mobile number
router.post("/send-otp", sendOTP);

// 2. Verify OTP (Logs in or Registers the user automatically)
router.post("/verify-otp", verifyOTP);

// 3. Admin Login with ID/Email and Password
router.post("/admin/login", adminLogin);

// 4. Register Clinic/Van Owner
router.post("/register", registerClinic);

module.exports = router;
