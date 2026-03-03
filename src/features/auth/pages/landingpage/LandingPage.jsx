// src/features/auth/pages/LandingPage.jsx
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">

      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #E50914, #B20710, #000000)",
          zIndex: 0,
        }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 1,
        }}
      />

      {/* Navbar */}
      <div className="relative z-30 flex justify-between items-center px-10 py-6">

        <h1 className="text-4xl font-extrabold text-[#ebebeb] tracking-wider">
          NETFLIX
        </h1>

        <button className="bg-[#0f0e14] px-5 py-2 rounded-md hover:bg-red-700 transition">
          Sign In
        </button>

      </div>

      {/* Glow Effect */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#E50914] opacity-30 blur-3xl -top-40 -left-40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[80%] text-center px-4">

        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Unlimited Movies, TV <br /> Shows, and More
        </h1>

        <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
          Watch anywhere. Cancel anytime.
        </p>

        <p className="text-lg md:text-xl mt-4 drop-shadow-md">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email CTA */}
        <div className="flex flex-col md:flex-row items-center gap-3 mt-6">

          <input
            type="email"
            placeholder="Email address"
            className="w-80 md:w-96 px-5 py-4 rounded-md text-black text-lg
            focus:outline-none focus:ring-2 focus:ring-[#E50914]"
          />

          <button
            className="px-8 py-4 rounded-md bg-[#E50914] text-white
            font-semibold text-xl hover:bg-red-700 transition duration-300"
          >
            Get Started →
          </button>

        </div>

      </div>
    </div>
  );
};

export default LandingPage;