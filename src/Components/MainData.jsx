import React from "react"
import {TiWeatherPartlySunny, TiWeatherSunny} from "react-icons/ti"
import {FaTemperatureLow, FaTemperatureHigh} from "react-icons/fa"


function MainData() {
  return (
    <div className="p-3 m-3 w-full flex flex-col justify-around">
      <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      Rain</div>
      <div className="pb-3 text-amber-500 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
      Heavy rain with a chance of hail and frost</div>
      <div className="grid grid-cols-2 gap-3">
        <div className="border-2 rounded-2xl">
          <TiWeatherPartlySunny size={75} className="text-amber-500 mx-auto mt-3"/>
          <p className="mt-2 ml-2 text-center text-slate-100 font-bold text-lg md:text-xl
         lg:text-2xl xl:text-3xl">Weather now</p>
          <p className="my-6 text-center  text-amber-500 font-extrabold text-4xl md:text-5xl
         lg:text-6xl xl:text-7xl">29 °C</p>
        </div>
        <div className="border-2 rounded-2xl">
          <TiWeatherSunny size={75} className="text-amber-500 mx-auto mt-3"/>
          <p className="mt-2 ml-2 text-center text-slate-100 font-bold text-lg md:text-xl
         lg:text-2xl xl:text-3xl">Feels like</p>
          <p className="my-6 text-center  text-amber-500 font-extrabold text-4xl md:text-5xl
         lg:text-6xl xl:text-7xl">23 °C</p>
        </div>
        <div className="border-2 rounded-2xl">
          <FaTemperatureHigh size={75} className="text-amber-500 mx-auto mt-3"/>
          <p className="mt-2 ml-2 text-center text-slate-100 font-bold text-lg md:text-xl
         lg:text-2xl xl:text-3xl">Daily high</p>
          <p className="my-6 text-center  text-amber-500 font-extrabold text-4xl md:text-5xl
         lg:text-6xl xl:text-7xl">32 °C</p>
        </div>
        <div className="border-2 rounded-2xl">
          <FaTemperatureLow size={75} className="text-amber-500 mx-auto mt-3"/>
          <p className="mt-2 ml-2 text-center text-slate-100 font-bold text-lg md:text-xl
         lg:text-2xl xl:text-3xl">Daily low</p>
          <p className="my-6 text-center  text-amber-500 font-extrabold text-4xl md:text-5xl
         lg:text-6xl xl:text-7xl">16 °C</p>
        </div>
        
       
       
        
      </div>
    </div>
  );
}

export default MainData;
