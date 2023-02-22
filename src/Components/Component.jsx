import React from "react"


function Component() {
  return (
    <>
    Component
    </>
  );
}

export default Component;



  

// <div className="container w-full">
// <div className="p-3 m-3 grid grid-cols-3 lg:grid-cols-4 gap-2 mx-auto justify-around">

//   <div className="flex flex-col border-2 rounded-2xl">
//     <TiWeatherPartlySunny size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Temp.</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.main ? data.main.temp.toFixed() : null}</p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
//         {munits ?  "°C" :  "°F" }</p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <TiWeatherSunny size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Feels</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.main ? data.main.feels_like.toFixed() : null} </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
//         {munits ?  "°C" :  "°F" }</p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <FaTemperatureHigh size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">High</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.main ? data.main.temp_max.toFixed() : null}</p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
//       {munits ?  "°C" :  "°F" }
//       </p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <FaTemperatureLow size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Low</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.main ? data.main.temp_min.toFixed() : null} </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
//       {munits ?  "°C" :  "°F" }
//       </p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <FiSunrise size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Sunrise</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.sys ? dtConverterTime(data.sys.sunrise, data.timezone)  : null} </p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <FiSunset size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Sunset</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//       {data.sys ? dtConverterTime(data.sys.sunset, data.timezone)  : null}
//       </p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <WiBarometer size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Pressure</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.main ? data.main.pressure : null}
//       </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">hPa</p>
//     </div>
//   </div>
//   <div className="flex flex-col border-2 rounded-2xl">
//     <WiHumidity size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Humidity</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.main ? data.main.humidity : null}
//       </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> %</p>
//     </div>
//   </div>
//   <div className="flex flex-col border-2 rounded-2xl">
//     <MdOutlineVisibility size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Visibility</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.visibility}
//       </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> m</p>
//     </div>
//   </div>

//   <div className="flex flex-col border-2 rounded-2xl">
//     <WiCloud size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Clouds</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.clouds ? data.clouds.all : null}
//       </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> %</p>
//     </div>
//   </div>
//   <div className="flex flex-col border-2 rounded-2xl">
//     <WiStrongWind size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Wind</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.wind ? data.wind.speed.toFixed() : null}
//       </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
//       {munits ?  "m/s" :  "ml/hr" }
//       </p>
//     </div>
//   </div>
//   <div className="flex flex-col border-2 rounded-2xl">
//     <WiCloudyGusts size={75} className="text-amber-500 mx-auto mt-3" />
//     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Gusts</p>
//     <div className="flex flex-row my-3 justify-center">
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
//         {data.wind ? data.wind.gust : null}
//       </p>
//       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
//       {munits ?  "m/s" :  "ml/hr" }
//       </p>
//     </div>
//   </div>
// </div>
// </div>





// import { useState } from "react"

// import { WiBarometer, WiHumidity, WiCloud, WiStrongWind, WiCloudyGusts } from "react-icons/wi"
// import { MdOutlineVisibility} from "react-icons/md"
// import { MdSearch} from "react-icons/md"
// import {TiWeatherPartlySunny, TiWeatherSunny} from "react-icons/ti"
// import {FaTemperatureLow, FaTemperatureHigh} from "react-icons/fa"
// import {FiSunset, FiSunrise } from "react-icons/fi"