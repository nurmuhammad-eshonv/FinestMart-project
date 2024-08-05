import React from "react";
import "./Main.css";
function Main() {
  return (
    <div className="containerr">
      <div className="main">
        <div className="main_card1 m-10 ">
          <h1 className="title">
            Let your <span className="text-red-500">groceries</span> <br /> come
            to you
          </h1>
          <p className="desc text-gray-400">
            Get fresh groceries online without stepping out to <br /> make
            delicious food with the freshest ingredients
          </p>
          <div className=" mt-4 flex items-center border border-gray-300 rounded-lg w overflow-hidden w-1/3">
            <input
              type="text"
              placeholder="Search here"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.34-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="main_card2"></div>
      </div>
    </div>
  );
}

export default Main;
