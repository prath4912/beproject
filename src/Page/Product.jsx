import React, { useEffect, useState } from "react";
import onionGraph from "../assets/onionGraph.png";
import axios from "axios";

export default function Product() {
  const [selectedValue, setSelectedValue] = useState("");
  const [price, setPrice] = useState(null);
  const [date, setDate] = useState("");

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

  return (
    <div>
      <h1 className="bg-stone-600 py-2 ps-5 text-white text-2xl font-bold">
        Onion
      </h1>

      <div className="flex   justify-around bg-amber-100 p-3 items-center">
        <div className="  text-black  bg-amber-200 p-4 h-full rounded-lg border border-black">
          <h2 className=" font-semibold text-xl">
            Predict the price for a particular date or by default 15 days after
          </h2>
          <div className="mt-3 ms-1">
            <label className=" font-semibold " htmlFor="">
              Enter Date
            </label>
            <br />
            <input
              className="  border-black border rounded-2xl p-2 m-2"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              name=""
              id=""
            />
          </div>
          <div>
            <label className=" font-semibold " htmlFor="dropdown">
              Choose an option:
            </label>
            <br />
            <select
              className=" border m-2 p-1 px-3 border-black rounded-lg"
              id="dropdown"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="apple">Pune</option>
            </select>
          </div>
          <div className="m-2">
            <button
              onClick={priceHandler}
              className=" rounded-lg bg-blue-200 border border-black p-2 font-bold"
            >
              Predict Price
            </button>
          </div>
          {price && <h1> Price of Onion - {price} </h1>}
        </div>
        <div className="  text-black  bg-amber-200 p-4 h-full rounded-lg border border-black">
          <h2 className=" font-semibold text-xl">
            Predict the Arrivals for a particular date or by default 15 days after
          </h2>
          <div className="mt-3 ms-1">
            <label className=" font-semibold " htmlFor="">
              Enter Date
            </label>
            <br />
            <input
              className="  border-black border rounded-2xl p-2 m-2"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              name=""
              id=""
            />
          </div>
          <div>
            <label className=" font-semibold " htmlFor="dropdown">
              Choose an option:
            </label>
            <br />
            <select
              className=" border m-2 p-1 px-3 border-black rounded-lg"
              id="dropdown"
              value={selectedValue}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="apple">Pune</option>
            </select>
          </div>
          <div className="m-2">
            <button
              onClick={priceHandler}
              className=" rounded-lg bg-blue-200 border border-black p-2 font-bold"
            >
              Predict Price
            </button>
          </div>
          {price && <h1> Price of Onion - {price} </h1>}
        </div>
        {/* <div className="w-1/2 bg-blue-300 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio accusamus error maiores, dolore eos rem porro facere eaque
          consequatur nostrum praesentium velit, dolor sed esse excepturi
          dolores quam nam provident magnam earum mollitia itaque. Magnam
          corporis officiis fugit accusantium reiciendis, totam tempore saepe
          laboriosam excepturi reprehenderit facilis ex dolorum, dolor amet qui
          repellat perspiciatis minima placeat necessitatibus aperiam error eius
          voluptatum minus sunt! Alias inventore voluptate eos sed facere
          veritatis hic animi quas? Eaque, facere placeat nam laborum
          consequatur distinctio laboriosam libero iusto necessitatibus ipsa
          nesciunt quidem, vero maiores aspernatur blanditiis omnis! Facilis
          perferendis voluptas officiis optio labore dolor.
        </div> */}
      </div>
      {/* <div>
        <button className=" rounded border border-black  m-2 ">
          View Detailed Data Set
        </button>
      </div> */}

      <div className="w-full bg-stone-900 p-2">
        <h2 className="text-white font-bold p-3">Price Graph for Onion</h2>
        <img src={onionGraph} alt="" />
      </div>
    </div>
  );
}
