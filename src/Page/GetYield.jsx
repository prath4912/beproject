import React, { useState } from "react";
import axios from "axios";

export default function GetYield() {
  const [yieldData, setYieldData] = useState({
    plantingDate: "",
    landSize: "",
    district: "",
    soilType: "",
  });
  const [predictedYield, setPredictedYield] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setYieldData({ ...yieldData, [name]: value });
  };

  const yieldHandler = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict-yield",
        {
          planting_date: yieldData.plantingDate,
          land_size: yieldData.landSize,
          district: yieldData.district,
          soil_type: yieldData.soilType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setPredictedYield(response.data.predicted_yield);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <h1 className="bg-blue-600 py-4 text-white text-3xl font-bold text-center shadow-md">
        Predict Crop Yield
      </h1>

      {/* Form Section */}
      <div className="flex justify-center mt-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="font-semibold text-2xl text-gray-800 mb-6 text-center">
            Enter Crop Details
          </h2>

          {/* Planting Date */}
          <div className="mb-6">
            <label className="font-semibold block mb-2" htmlFor="plantingDate">
              Date of Planting
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="plantingDate"
              id="plantingDate"
              value={yieldData.plantingDate}
              onChange={handleChange}
            />
          </div>

          {/* Land Size */}
          <div className="mb-6">
            <label className="font-semibold block mb-2" htmlFor="landSize">
              Land Size (in acres)
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              name="landSize"
              id="landSize"
              value={yieldData.landSize}
              onChange={handleChange}
            />
          </div>

          {/* District */}
          <div className="mb-6">
            <label className="font-semibold block mb-2" htmlFor="district">
              District
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="district"
              id="district"
              value={yieldData.district}
              onChange={handleChange}
            />
          </div>

          {/* Soil Type */}
          <div className="mb-6">
            <label className="font-semibold block mb-2" htmlFor="soilType">
              Soil Type
            </label>
            <input
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="soilType"
              id="soilType"
              value={yieldData.soilType}
              onChange={handleChange}
            />
          </div>

          {/* Predict Button */}
          <button
            onClick={yieldHandler}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-all active:scale-95"
          >
            Predict Yield
          </button>

          {/* Predicted Yield */}
          {predictedYield && (
            <h1 className="mt-6 text-center text-xl font-semibold text-green-700">
              Predicted Yield: {predictedYield} tons
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
