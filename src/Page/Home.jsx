import React from "react";
import Onion from "../assets/onion.jpg";
import APMC from "../assets/APMC.avif";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const commodities = [
    { name: "Onion", image: Onion, route: "/onion" },
    { name: "Onion", image: Onion, route: "/onion" },

    { name: "Potato", image: Onion, route: "/potato" }, // Example for variety
    { name: "Tomato", image: Onion, route: "/tomato" },
  ];

  const markets = [
    { name: "Pune", image: APMC, route: "/pune" },
    { name: "Mumbai", image: APMC, route: "/mumbai" },
    { name: "Nagpur", image: APMC, route: "/nagpur" },
  ];

  const Card = ({ name, image, route }) => (
    <div
      className="rounded-lg bg-white shadow-lg hover:scale-105 transition-all cursor-pointer overflow-hidden"
      onClick={() => navigate(route)}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <h1 className="text-gray-800 text-center py-4 font-semibold">{name}</h1>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Buttons Section */}
      <div className="bg-white shadow-md rounded-lg mx-4 mt-8 p-6 flex justify-around items-center">
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all active:scale-95"
          onClick={() => navigate("/checkprice")}
        >
          Check Price of your Crop
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all active:scale-95"
          onClick={() => navigate("/getyield")}
        >
          Get Yield of your Crop
        </button>
      </div>

      {/* Commodities Section */}
      <div className="mt-10 mx-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Commodities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commodities.map((commodity, index) => (
            <Card key={index} {...commodity} />
          ))}
        </div>
      </div>

      {/* Markets Section */}
      <div className="mt-10 mx-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Markets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <Card key={index} {...market} />
          ))}
        </div>
      </div>
    </div>
  );
}
