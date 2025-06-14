import React from "react";

export default function Navbar() {
  return (
    <nav className="shadow-md fixed top-0 w-full z-50 h-20 items-center flex  bg-transparent backdrop-blur-sm px-4  text-white  py-3">
      <div className="fixed right-8 flex items-center md:space-x-9 space-x-3">
        <ul className="flex md:space-x-9 space-x-4 font-medium">
          <li>
            <span>01.</span>
            <a href="">About</a>
          </li>
          <li>
            <span>02.</span>
            <a href="">Work</a>
          </li>
          <li>
            <span>03.</span>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="py-1 px-5 cursor-pointer border-2 hover:bg-blue-900">
          <a href="Thompson's Resume.pdf" download="Thompson's Resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
