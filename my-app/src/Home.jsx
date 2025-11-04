import React from "react";
import { Link } from "react-router-dom";

import icedCoffee from "./images/iced-coffee.png";

export default function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${icedCoffee})` }}
        className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl text-white font-quattro font-ultra mb-3">
            Cafe
          </h1>
          <h2 className="text-2xl text-white font-ultra mb-3">in Perth</h2>
          <Link
            to="/menu"
            className="pt-3 pb-3 pr-10 pl-10 bg-white text-[#38220F] rounded-full mt-5 font-outfit text-2xl hover:opacity-80 ease-in-out"
          >
            Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
