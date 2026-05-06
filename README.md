# 🚑 Smart Rural Diagnostic Van System (DiagnoVan)

🚀 **[Live Deployed Project](https://diagno-van.vercel.app/)** | 🎨 **[Figma Design Link](https://www.figma.com/design/GqFTmj6H7xu6NuE6yG3rdb/Untitled?node-id=0-1&t=2wUdCGapQ9JoNpAU-1)** | ⚙️ **[Backend Deployed Link](https://diagnovan.onrender.com)** | 📖 **[Postman Documentation Link](https://documenter.getpostman.com/view/50840969/2sBXqKozwb)** | 🎥 **[YouTube Demo Video Link](https://youtu.be/6iEiHFm2S8s)**

[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Real--Time-Socket.IO-010101?style=for-the-badge&logo=socketdotio)](https://socket.io/)

## 📝 Project Overview
Patients in rural and small-town areas often lack access to basic diagnostic services such as blood tests, X-rays, and ultrasounds. Traveling long distances (30–50 km) leads to time wastage, increased costs, and delays in critical treatment.

The **Smart Rural Diagnostic System** bridges this gap by providing a digital platform where patients can book diagnostic services. A **mobile diagnostic van** is then dispatched directly to their location, ensuring accessibility, efficiency, and timely healthcare delivery.

---

## ✨ Key Features

### 🔐 1. User Authentication & Profile System
- **OTP-based Login:** Secure user verification via mobile OTP.
- **Detailed Profiles:** Manage primary/alternative contact numbers and village/address details.

### 📅 2. Smart Booking System
- **Service Types:** Book home sample collection or a mobile diagnostic van visit.
- **Time-Slot Selection:** Flexible scheduling for user convenience.

### 📞 3. Multi-Language IVR Confirmation
- **Automated Calls:** Support for **Gujarati** and **Hindi**.
- **Keypad Input (DTMF):** 
  - `Press 1` → Confirm Booking
  - `Press 2` → Reschedule

### 🛡️ 4. Verification & Anti-Misuse System
- **Advance Fee:** Small booking fee to prevent fake requests.
- **Multi-Step Confirmation:** App notifications, IVR calls, and manual driver coordination.
- **Trust Score:** Penalty system for repeated no-shows to maintain system efficiency.

### 📍 5. Real-Time Tracking & Dashboard
- **Live Updates:** Real-time booking status using Socket.IO.
- **Admin/Driver Panel:** Monitor assignments, user confirmations, and van status.

### ⚙️ 6. Seamless Backend Integration
- **Webhook APIs:** Automated capture of IVR responses.
- **Dynamic Updates:** Instant database updates and automated notifications.

---

## 🛠️ Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Real-time:** Socket.IO
- **IVR/Call Integration:** Twilio / Exotel (Conceptual)

---

## 🔄 System Workflow

1. **Registration:** User registers via OTP.
2. **Booking:** User selects service and pays a small advance fee.
3. **Trigger:** System initiates IVR + manual confirmation calls.
4. **Confirmation:** User confirms via keypad or call.
5. **Dispatch:** Backend updates status; driver receives instructions.
6. **Service:** Diagnostic van reaches location, conducts tests.
7. **Report:** Results are delivered digitally to the user.

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance running

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/diagno-van.git
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   # For Backend
   cd backend && npm install
   
   # For Frontend
   cd frontend && npm install
   ```
3. Set up environment variables (.env):
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   TWILIO_SID=your_twilio_sid
   ```
4. Run the application:
   ```bash
   # Backend
   npm run dev
   
   # Frontend
   npm start
   ```

---

## 📄 License
This project is licensed under the MIT License.