import React, { useState } from "react";
import axios from "axios";

export default function CheckPrice() {
  const [price, setPrice] = useState(null);
  const [data, setData] = useState({
    crop: "",
    market: "",
    date: "",
  }); 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const priceHandler = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        { date: data.date, market: data.market, crop: data.crop },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const array = response.data.predictions ;

      setPrice(array[array.length -1].predicted_price );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-green-100 to-green-300">
      <h1 className="bg-green-600 py-4 text-white text-3xl font-bold text-center shadow-md">
        Know the Price of Your Crop
      </h1>

      <div className="flex flex-col md:flex-row justify-around p-6 items-center gap-6">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="font-semibold text-2xl text-gray-800 mb-4 text-center">
            Predict the Price of Your Crops
          </h2>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="date">
              Enter Date
            </label>
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="date"
              onChange={handleChange}
              value={data.date}
              name="date"
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
              value={data.market}
              onChange={handleChange}
              name="market"
            >
              <option value="" disabled>
                Select a Market
              </option>
              <option value="pune">Pune</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="font-semibold block mb-2" htmlFor="crop">
              Choose a Crop
            </label>
            <select
              className="border border-gray-300 rounded-lg p-2 w-full"
              id="crop"
              value={data.crop}
              onChange={handleChange}
              name="crop"
            >
              <option value="" disabled>
                Select a Crop
              </option>
              <option value="onion">Onion</option>
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
              Price of {data.crop}: ₹{price}
            </h1>
          )}
        </div>

        {/* Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="font-semibold text-2xl text-gray-800 mb-4 text-center">
            Get the Price of Your Crop
          </h2>
          <p className="text-gray-600 text-center">
            Use this tool to predict the price of your crop based on the market
            and date. Enter the required details and click "Predict Price" to
            get the estimated price.
          </p>
        </div>
      </div>
    </div>
  );
}
