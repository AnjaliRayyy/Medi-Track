import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeartPulse, FileText, MapPin, Shield } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      title: "Smart Health Records",
      desc: "Store and manage your medical reports in one secure place."
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-blue-600" />,
      title: "AI Report Analysis",
      desc: "Get instant, easy-to-understand summaries powered by AI."
    },
    {
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      title: "Hospital Locator",
      desc: "Find the nearest hospitals and healthcare providers quickly."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Secure Profile",
      desc: "Your data is safe with encrypted access and privacy first."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 text-center">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-blue-900 mb-4"
        >
          Welcome to <span className="text-blue-600">MediTrack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-700 max-w-2xl mb-8"
        >
          Your personal healthcare companion – manage records, get AI-powered
          insights, and find trusted hospitals near you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-blue-600 rounded-2xl shadow-lg border border-blue-600 hover:bg-blue-50 transition"
          >
            Register
          </Link>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Why MediTrack?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl border"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          About MediTrack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed"
        >
          MediTrack is designed to make healthcare simple, smart, and secure.
          From storing and accessing your medical records to analyzing reports
          with AI, we empower patients with technology that truly cares.
          Whether you’re looking for nearby hospitals or managing your
          long-term health history, MediTrack is your trusted digital
          companion.
        </motion.p>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to take control of your health?
          </h3>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-blue-600 rounded-2xl shadow-lg border border-blue-600 hover:bg-blue-50 transition"
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
