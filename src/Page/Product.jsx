import React, { useState } from "react";
import onionGraph from "../assets/onionGraph.png";
import onionImage from "../assets/onion.jpg"; // Importing the onion image
import axios from "axios";

export default function Product() {
  const [selectedValue, setSelectedValue] = useState("");
  const [price, setPrice] = useState(null);
  const [date, setDate] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [landSize, setLandSize] = useState("");
  const [district, setDistrict] = useState("");
  const [soilType, setSoilType] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const priceHandler = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        date ? { date } : {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setPrice(response.data.predicted_price);
    } catch (err) {
      console.error(err);
    }
  };

  const yieldHandler = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict-yield",
        {
          planting_date: plantingDate,
          land_size: landSize,
          district,
          soil_type: soilType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(`Predicted Yield: ${response.data.predicted_yield}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <h1 className="bg-green-600 py-4 text-white text-3xl font-bold text-center shadow-md">
        Onion Price Prediction
      </h1>

      {/* Crop Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mx-4 mt-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={onionImage}
          alt="Onion"
          className="w-full md:w-1/3 rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
            Crop Information
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Onions are one of the most widely cultivated crops in the world.
            They are a staple ingredient in many cuisines and are known for
            their pungent flavor and versatility. Onions are grown in various
            regions and are highly dependent on market demand and climatic
            conditions. This tool helps farmers predict the price and yield of
            onions in specific markets, enabling better decision-making and
            planning.
          </p>
        </div>
      </div>

      {/* Prediction Sections */}
      <div className="flex flex-col md:flex-row justify-around bg-gray-50 p-6 gap-6">
        {/* Price Prediction Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="font-semibold text-2xl text-gray-800 mb-4 text-center">
            Predict Price
          </h2>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="date">
              Enter Date
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              id="date"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="market">
              Choose a Market
            </label>
            <select
              className="border border-gray-300 rounded-lg p-2 w-full"
              id="market"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Market
              </option>
              <option value="pune">Pune</option>
            </select>
          </div>
          <button
            onClick={priceHandler}
            className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 transition-all"
          >
            Predict Price
          </button>
          {price && (
            <h1 className="mt-4 text-center text-xl font-semibold text-green-700">
              Predicted Price: ₹{price}
            </h1>
          )}
        </div>

        {/* Yield Prediction Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="font-semibold text-2xl text-gray-800 mb-4 text-center">
            Predict Yield
          </h2>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="planting-date">
              Date of Planting
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="date"
              onChange={(e) => setPlantingDate(e.target.value)}
              value={plantingDate}
              id="planting-date"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="land-size">
              Land Size (in acres)
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="number"
              onChange={(e) => setLandSize(e.target.value)}
              value={landSize}
              id="land-size"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="district">
              District
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text"
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
              id="district"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="soil-type">
              Soil Type
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="text"
              onChange={(e) => setSoilType(e.target.value)}
              value={soilType}
              id="soil-type"
            />
          </div>
          <button
            onClick={yieldHandler}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition-all"
          >
            Predict Yield
          </button>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-gray-800 p-6 mt-6">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Price Graph for Onion
        </h2>
        <img
          src={onionGraph}
          alt="Onion Price Graph"
          className="rounded-lg mx-auto shadow-lg"
        />
      </div>
    </div>
  );
}
