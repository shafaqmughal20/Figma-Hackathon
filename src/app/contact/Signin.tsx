import React from 'react'
import { FaEnvelope, FaLock } from "react-icons/fa"; 
import { FcGoogle } from "react-icons/fc";


export default function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h2>
        <form>
          {/* Email Input */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-500" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-yellow-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Or sign up with :</p>
          <div className="flex justify-center gap-4 mt-4">

          <div className="relative">
              <FcGoogle className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="Sign in with google"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            
             </div>
        </div>
      </div>
    </div>
  );
}