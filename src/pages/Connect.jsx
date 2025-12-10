import React from "react";
import { Globe, Users, ArrowRight } from "lucide-react";

const Connect = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center animate-fadeIn">
        <h1 className="text-3xl font-bold mb-2">Welcome 👋</h1>
        <p className="text-gray-600 mb-6">Choose an option to continue</p>

        {/* Website button */}
        <a
          href="https://www.head2heart.co.nz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full bg-blue-600 text-white px-5 py-3 rounded-xl mb-4 text-lg font-medium hover:bg-blue-700 transition"
        >
          <div className="flex items-center gap-2">
            <Globe size={22} />
            Visit Our Website
          </div>
          <ArrowRight size={20} />
        </a>

        {/* Team button */}
        <a
          href="/team-new"
          className="flex items-center justify-between w-full bg-pink-600 text-white px-5 py-3 rounded-xl text-lg font-medium hover:bg-pink-700 transition"
        >
          <div className="flex items-center gap-2">
            <Users size={22} />
            Meet Our Team
          </div>
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default Connect;
