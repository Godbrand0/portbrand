import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ml-32 text-left w-2/3">
      <div className="mt-32">
        <h3 className="text-2xl text-gray-400">Hey, I am</h3>
        <h1 className="text-6xl/19  font-bold my-1.5 flex flex-col">
          <span className="text-white">Thompson Eregha.</span>{" "}
          <span className="text-gray-300">a Software Engineer.</span>
        </h1>

        <p className="text-2xl text-gray-400">
          I use React js, Tailwind CSS and node js to transform <br /> product
          ideas into interactive, user friendly web experiences.
        </p>
      </div>
      <a href="mailto:thompsoneregha00@gmail.com">
        <div className="text-white border-2 rounded w-44 text-2xl my-9 py-3  text-center cursor-pointer hover:bg-blue-900">
          Contact me
        </div>
      </a>
    </div>
  );
}
