import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col md:ml-32 text-left px-4  md:w-2/3">
      <div className="mt-56 md:mt-36">
        <h3 className="text-2xl text-gray-400">Hey, I am</h3>
        <h1 className="md:text-6xl text-[40px]  font-bold my-1.5 flex flex-col">
          <span className="text-white">Thompson Eregha.</span>
          <span className="text-gray-300">a Software Engineer.</span>
        </h1>

        <p className="text-2xl text-gray-400 md:w-[600px]">
          I use React js, Tailwind CSS and node js to transform product ideas
          into interactive, user friendly web experiences.
        </p>
      </div>
      <a href="mailto:thompsoneregha00@gmail.com">
        <div className="text-white border-2 rounded w-44 text-2xl mt-11 py-3  text-center cursor-pointer hover:bg-blue-900">
          Contact me
        </div>
      </a>
    </div>
  );
}
