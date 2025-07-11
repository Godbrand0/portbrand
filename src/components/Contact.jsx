import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Contact() {
  return (
    <div className="container md:w-24 h-full md:fixed md:top-40 top-[300px]  md:space-y-20 items-center  flex  justify-between md:justify-center px-6 md:flex-col">
      <a href="https://www.linkedin.com/in/thompson-eregha-7457332a6/">
        <SiLinkedin size={30} className="cursor-pointer fill-white" />
      </a>

      <a href="https://github.com/Godbrand0">
        <SiGithub size={30} className="cursor-pointer fill-white" />
      </a>

      <a href="https://twitter.com/godbrand0">
        <SiX size={30} className="cursor-pointer fill-white" />
      </a>
    </div>
  );
}
