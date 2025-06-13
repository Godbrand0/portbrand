import React from "react";
import { SiLibretube } from "react-icons/si";

export default function About() {
  return (
    <div className="md:mx-32 mx-6 my-36 h-screen">
      <div>
        <h2 className="text-white text-3xl my-6 font-medium">01. About Me</h2>
        <p className="md:text-2xl text-xl text-gray-400">
          I am <span className="text-white">thompson</span>, a
          <span className="text-white"> Software Engineer</span>. I have always
          been in awe of web pages that pay attention to aesthetics and also
          creativity. I have then derived pleasure in creating web products that
          are responsive and user-friendly.
          <p>
            Some of the
            <span className="text-white"> Technologies</span> I have used to
            build stuff lately:
          </p>
        </p>
        <ul className="text-2xl text-gray-400 flex flex-col space-y-4 md:h-[120px] mt-7 flex-wrap">
          <li className="flex gap-1.5 items-center">
            <SiLibretube />
            Javascript
          </li>
          <li className="flex gap-1.5 items-center">
            <SiLibretube />
            React.js
          </li>
          <li className="flex gap-1.5 items-center">
            <SiLibretube />
            CSS,SASS & Tailwind CSS
          </li>
          <li className="flex gap-1.5 items-center">
            <SiLibretube />
            Firebase
          </li>
          <li className="flex gap-1.5 items-center">
            <SiLibretube />
            Express.js
          </li>
          <li className="flex gap-1.5 items-center">
            <SiLibretube />
            Mongodb
          </li>
        </ul>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
