import React from "react";
import Onion from "../assets/onion.jpg";
import APMC from "../assets/APMC.avif";

import { useNavigate } from "react-router-dom";
import App from "../App";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className=" bg-amber-200 p-4  font-bold text-lg">Commondities</h1>
        <div
          className=" rounded-lg bg-black w-72 m-3 active:scale-95 transition-all cursor-pointer "
          onClick={() => navigate("/onion")}
        >
          <img className=" rounded-t-lg" src={Onion} alt="" />
          <h1 className="text-white text-center py-2 ">Onion</h1>
        </div>
      </div>
      <div>
        <h1 className=" bg-amber-200 p-4  font-bold text-lg">Markets</h1>
        <div
          className=" rounded-lg bg-black w-72 m-3 active:scale-95 transition-all cursor-pointer "
          onClick={() => navigate("/onion")}
        >
          <img className=" rounded-t-lg" src={APMC} alt="" />
          <h1 className="text-white text-center py-2 ">Pune</h1>
        </div>
      </div>
    </div>
  );
}
