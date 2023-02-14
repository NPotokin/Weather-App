import React from "react"
import {FiSunset, FiSunrise } from "react-icons/fi"
import { GiAtSea } from "react-icons/gi"


function AboutData() {
  return (
    <div className="p-3 m-3 w-full flex flex-col">
      <div className="my-6 flex flex-row justify-between">
        <FiSunrise size={75} className=" text-amber-500" />
        <p className="my-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 mx-3">
          Sunrise</p>
        <p className="my-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 mx-3">
          06:29 AM</p>
      </div>
      <div className="my-6 flex flex-row justify-between">
        <FiSunset size={75} className=" text-amber-500" />
        <p className="my-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 mx-3">
          Sunset</p>
        <p className="my-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 mx-3">
          10:09 PM</p>
      </div>
      <div className="my-6 flex flex-row justify-between">
        <GiAtSea size={75} className=" text-amber-500" />
        <p className="my-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 mx-3">
          Sea Level</p>
        <p className="my-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100 mx-3">
          234 m</p>
      </div>
    </div>
  );
}

export default AboutData;
