# 🏥 SwasthyaVault

*A secure and smart medical history tracker for patients*

## 📌 Overview

In today's fragmented healthcare landscape, managing personal medical records is a challenge. Patients' histories are often scattered across various hospitals and clinics, making it difficult to access a complete health overview.

**MediTrack** is a modern web application designed to solve this problem. It provides a centralized and secure platform for patients to store, manage, and analyze all their medical documents. By integrating with health services like **ABDM (Ayushman Bharat Digital Mission)** and allowing seamless personal uploads, MediTrack empowers users to take control of their health data. Its built-in AI assistant further demystifies complex medical reports, offering easy-to-understand insights.

-----

## 📖 Table of Contents

  - [📌 Overview](https://www.google.com/search?q=%23-overview)
  - [🚀 Live Demo](https://www.google.com/search?q=%23-live-demo)
  - [✨ Key Features](https://www.google.com/search?q=%23-key-features)
  - [📸 Screenshots](https://www.google.com/search?q=%23-screenshots)
  - [🛠️ Tech Stack](https://www.google.com/search?q=%23%EF%B8%8F-tech-stack)
  - [📂 Project Structure](https://www.google.com/search?q=%23-project-structure)
  - [🚀 Getting Started](https://www.google.com/search?q=%23-getting-started)
  - [✅ Future Enhancements](https://www.google.com/search?q=%23-future-enhancements)
  - [🤝 How to Contribute](https://www.google.com/search?q=%23-how-to-contribute)
  - [📜 License](https://www.google.com/search?q=%23-license)
  - [👤 Contact](https://www.google.com/search?q=%23-contact)

-----



## 🚀 Live Demo

Check out the live version of the application here:

**[MediTrack Live App](https://www.google.com/search?q=https://your-live-demo-url.com)**

-----

## ✨ Key Features

  * 📂 **Unified Reports Management**

      * **ABDM Integration:** Fetch and consolidate all your government-linked health records in one place (currently using a mock API).
      * **Easy Uploads:** Upload personal prescriptions, lab results, and other medical documents with a simple drag-and-drop interface.
      * **Secure Cloud Storage:** All documents are securely stored and managed using **Cloudinary**, ensuring privacy and accessibility.

  * 🤖 **AI-Powered Health Assistant**

      * **Report Analysis:** Upload a medical report and receive an AI-driven summary of key findings, explained in simple terms.
      * **Interactive Health Chat:** Ask health-related questions and get instant, context-aware answers based on your medical documents.

  * 🏥 **Nearby Hospital Locator**

      * **Geolocation Service:** Quickly find and navigate to hospitals and clinics near your current location.

  * 👤 **Comprehensive Patient Profile**

      * **Personal Details:** Securely manage your personal and health-related information.
      * **Dashboard Overview:** Get a quick glance at your recent activities and health data.

  * 🔐 **Secure Authentication**

      * **JWT & Cookies:** Robust and secure login/registration system using JSON Web Tokens and HTTP-Only cookies to protect user sessions.

-----
## 🛠️  Tech Stack

| Layer                      | Technologies Used                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------- |
| **Frontend**               | React (Vite), Tailwind CSS, Framer Motion (animations), Lucide React (icons)          |
| **Backend**                | Node.js, Express.js                                                                   |
| **Database**               | MongoDB (with Mongoose ORM)                                                           |
| **Authentication**         | JWT (JSON Web Tokens), Cookies (for session management)                               |
| **AI Integration**         | Google Gemini API (for AI-powered features)                                           |
| **APIs / Communication**   | REST APIs (Express)                                                                   |
| **Dev Tools**              | Git & GitHub, Postman/Insomnia (API testing), dotenv (env variables)                  |
| **Build & Deployment**     | Vite (bundler), Docker (optional), Vercel/Netlify (frontend), Render/Heroku (backend) |
                                                                                                                               |

-----

## 📂 Project Structure

The project follows a standard client-server monorepo structure.

```
MediTrack/
├── client/              # React Frontend Application
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Application pages
│       ├── utils/       # Utility functions
│       ├── App.jsx
│       └── main.jsx
│
├── server/              # Node.js Backend Server
│   ├── config/          # Database & Cloudinary setup
│   ├── controllers/     # Logic for handling requests
│   ├── middlewares/     # Custom middleware (e.g., auth)
│   ├── models/          # MongoDB data schemas
│   ├── routes/          # API endpoint definitions
│   └── index.js         # Server entry point
│
├── .gitignore
├── README.md
└── package.json         # Root package file
```

-----

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

  - [Node.js](https://nodejs.org/) (v18.x or later)
  - [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
  - [Git](https://git-scm.com/)

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/MediTrack.git
cd MediTrack
```

### 2\. Configure Environment Variables

Create a `.env` file in the `server/` directory and add the following environment variables.

```env
# server/.env

# MongoDB Connection String
MONGO_URI=your_mongodb_connection_string

# JSON Web Token
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# AI Service (e.g., OpenAI, Gemini) - Optional
AI_API_KEY=your_ai_service_api_key
```

### 3\. Install Dependencies & Run

It's recommended to use two separate terminals to run the backend and frontend servers.

**Terminal 1: Start the Backend**

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the server (in development mode)
npm run dev
```

The backend will be running on `http://localhost:8000` (or your configured port).

**Terminal 2: Start the Frontend**

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Start the React development server
npm run dev
```

The frontend will open and run on `http://localhost:5173`.

-----

## ✅ Future Enhancements

We have an exciting roadmap for MediTrack\! Here are some features we plan to implement:

  - 🔗 **Full ABDM API Integration:** Transition from the mock API to a live, production-ready ABDM integration.
  - 📊 **Health Analytics Dashboard:** Create a visual dashboard for users to track health metrics, view trends, and set goals.
  - 🛡️ **Role-Based Access Control:** Introduce roles for doctors and caregivers to view patient data with their consent.
  - 🔔 **Appointment & Medication Reminders:** Implement a notification system for upcoming appointments and medication schedules.
  - 🔒 **Enhanced Security Compliance:** Ensure the platform is ready for standards like **HIPAA/GDPR** by implementing end-to-end encryption for all user data.
  - 📱 **Mobile Application:** Develop a cross-platform mobile app using React Native for on-the-go access.

-----

## 🤝 How to Contribute

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

Please make sure your code adheres to the project's coding standards.

-----

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more information.
