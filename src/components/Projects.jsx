import React from "react";

export default function Projects() {
  return (
    <div className="mx-30">
      <h2 className="text-white font-bold text-2xl my-5">02. My Works</h2>
      <div className="flex flex-wrap gap-3 mx-auto">
        <div className="w-[350px] bg-gray-500 p-3 rounded flex flex-col items-center space-y-3 hover:bg-gray-600">
          <img
            src="/Screenshot 2024-09-02 215514.png"
            alt=""
            className="w-full"
          />
          <h1 className="text-white font-bold text-xl">GrandCoast Hotels</h1>
          <p className="text-center">
            A landing page that showcases exciting information about an hotel
            and its environment using <span className="text-white">HTML</span>,
            <span className="text-white"> CSS</span>,
            <span className="text-white"> Javascript</span>
          </p>
          <a
            href="https://grandcoast.netlify.app/"
            className="bg-white rounded py-2 px-3 font-bold"
          >
            View site
          </a>
        </div>
        <div className="w-[350px] bg-gray-500 p-3 rounded flex flex-col items-center space-y-3 hover:bg-gray-600">
          <img
            src="Screenshot 2024-11-09 083007.png"
            alt=""
            className="w-full"
          />
          <h1 className="text-white font-bold text-xl">GrandCoast Hotels</h1>
          <p className="text-center">
            A landing page that showcases exciting information about an hotel
            and its environment using
            <span className="text-white">React js</span>,
            <span className="text-white"> TailwindCSS</span>,
            <span className="text-white"> Javascript</span>
          </p>
          <a
            href="https://energytalents.netlify.app/"
            className="bg-white rounded py-2 px-3 font-bold"
          >
            View site
          </a>
        </div>
        <div className="w-[350px] bg-gray-500 p-3 rounded flex flex-col items-center space-y-3 hover:bg-gray-600">
          <img
            src="/Screenshot 2025-03-29 155528.png"
            alt=""
            className="w-full"
          />
          <h1 className="text-white font-bold text-xl">Food web</h1>
          <p className="text-center">
            A platform that authenticate users, allows users to browse through
            various dishes, add favourites to cart and checkout respectively
            using
            <span className="text-white">React js</span>,
            <span className="text-white">TailwindCSS</span>,
            <span className="text-white"> Firebase</span>
          </p>
          <a
            href="https://foodweb00.netlify.app/"
            className="bg-white rounded py-2 px-3 font-bold"
          >
            View site
          </a>
        </div>
      </div>
    </div>
  );
}
