import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoginPageImg from "../assets/LoginPageImg.jpg"

export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:8000/api/auth/login",{
        method : "POST",
        headers:{
          "Content-Type": "application/json",
        },
        credentials: "include",
        body:  JSON.stringify({
          email,
          password,
        })
      })

      const data=await response.json();
       if(response.ok)
      {
        toast.success(data.message);
        setEmail("");
        setPassword("");
        navigate("/dashboard")
      }
      else
      {
        toast.error(data.message);
      }
    }
    catch(error){
      toast.error(error.message);
    }
  }
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex-col justify-center items-center p-10 relative"
      >
        <h1 className="text-4xl font-extrabold mb-6">MediTrack</h1>
        <p className="text-lg text-blue-100 max-w-md text-center">
          Your health, simplified. Track medical records, get AI-powered insights, 
          and stay connected with trusted healthcare providers.
        </p>
        <motion.img
          src={LoginPageImg}
          alt="health illustration"
          className="mt-2 w-[60vh] h-[70vh]"
          // initial={{ scale: 0.9 }}
          // animate={{ scale: 1 }}
          // transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
        />
      </motion.div>

      {/* Right Section (Form) */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Welcome Back 👋
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
          </form>
          <p className="text-gray-600 text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
