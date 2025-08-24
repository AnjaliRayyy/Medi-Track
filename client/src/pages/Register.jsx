import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoginPageImg from "../assets/LoginPageImg.jpg"

export default function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [abhaId,setabhaId]=useState("")

  const handleSubmit=async (e)=>{
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return;
    }
    try{
      const response=await fetch("http://localhost:8000/api/auth/signup",{
        method : "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:  JSON.stringify({
          name,
          email,
          abhaId,
          password
        })
      })
      const data=await response.json();
       if(response.ok)
      {
        toast.success(data.message);
        setName("");
        setEmail("");
        setabhaId("");
        setPassword("");
      }
      else
      {
        toast.error(data.message);
      }
    }
    catch(error){
      toast.error(error)
    }
  }
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex-col justify-center items-center p-10"
      >
        <h1 className="text-4xl font-extrabold mb-6">Join MediTrack</h1>
        <p className="text-lg text-blue-100 max-w-md text-center">
          Create your account and experience personalized health tracking with AI analysis,
          secure report storage, and nearby hospital suggestions.
        </p>
        <motion.img
          src={LoginPageImg}
          alt="healthcare illustration"
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
            Create Your Account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
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
                ABHA ID
              </label>
              <input
                type="text"
                placeholder="Enter your ABHA ID"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e)=>setabhaId(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </div>
            <motion.button
            type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Register
            </motion.button>
          </form>
          <p className="text-gray-600 text-sm text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
          <p className="text-gray-500 text-xs text-center mt-4">
            Your data is safe and secure with us
          </p>
        </motion.div>
      </div>
    </div>
  );
}
