import React from 'react'
import {  FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me On
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href ='http://www.linkedin.com/in/linda-azuma'><FaLinkedinIn  />
            </a>
              
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL IN
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media