import React from 'react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-md">
      <div className="container mx-auto py-6">
        <h1 className="text-white text-5xl font-bold text-center tracking-wide">
          Agri Stats
        </h1>
        <p className="text-gray-200 text-center mt-3 text-lg italic">
          Empowering Farmers with Data-Driven Insights
        </p>
      </div>
    </header>
  );
}
