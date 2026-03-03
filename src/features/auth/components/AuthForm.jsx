import React, { useState } from "react";

const AuthForm = ({ isLogin, onSubmit, toggleForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-black w-80 sm:w-96 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Signup"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700
                focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-md bg-black text-white border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Toggle between login/signup */}
        <p className="text-white/80 text-center mt-4 text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={toggleForm}
            className="text-red-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;