import React from "react";

export default function ContactMe() {
  return (
    <div className="w-[700px] my-8 text-center mx-auto flex flex-col items-center space-y-3">
      <div className="text-white font-bold">
        <h3 className="text-3xl">03. One Step Closer to Me</h3>
        <h2 className="text-6xl">Contact Me</h2>
      </div>

      <p className="text-gray-400 text-2xl">
        I am currently in search for new opportunities, you can contact me on
        any of the platforms here, I'll try my best to get back to you as soon
        as possible. <br /> Access my resume at the top-right-corner of your
        screen. While you're here,you can still take a preview at my profile on
        <a href="https://github.com/Godbrand0" className="text-gray-200">
          Github
        </a>
      </p>
      <a href="mailto:thompsoneregha00@gmail.com">
        <div className="text-white border-2 rounded w-44 text-2xl my-6 py-3  text-center cursor-pointer hover:bg-blue-900">
          Say Hello
        </div>
      </a>
    </div>
  );
}
