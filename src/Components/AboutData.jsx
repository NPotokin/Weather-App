import React from "react"
import useStore from "./Store";
import {FiSunset, FiSunrise } from "react-icons/fi"
import { WiBarometer, WiHumidity } from "react-icons/wi"
import { Link, Routes, Route } from "react-router-dom";
import AboutPressureForecast from "./AboutPressureForecast";
import AboutHumidityForecast from "./AboutHumidityForecast";
import {TbArrowBigRightLines} from 'react-icons/tb'

function AboutData() {


  const [data] = useStore(
    (state) => [state.data]
  );

  function dtConverterTime(timestamp, offset) {
    const b = new Date(timestamp * 1000 + offset * 1000);
    const hour = b.getUTCHours();
    let min = b.getUTCMinutes() < 10 ? "0"+ b.getUTCMinutes() : b.getUTCMinutes();
    const time = `${hour} : ${min} `
    console.log(time)
    return time;
  }


  return (
    <>
      <div className="container w-full">
        <div className="p-2 m-2 grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto justify-around">

        <div className="flex flex-col border-2 rounded-2xl">
         <FiSunrise size={75} className="text-amber-500 mx-auto mt-3" />
         <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Sunrise</p>
         <div className="flex flex-row my-3 justify-center">
           <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
             {data.sys ? dtConverterTime(data.sys.sunrise, data.timezone)  : null} 
           </p>
         </div>
        </div>

        <div className="flex flex-col border-2 rounded-2xl">
          <FiSunset size={75} className="text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Sunset</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
            {data.sys ? dtConverterTime(data.sys.sunset, data.timezone)  : null}
            </p>
          </div>
        </div>

        <div className="flex flex-col border-2 rounded-2xl">
          <div className="relative">
            <Link to="/AboutData/AboutPressureForecast">
            <TbArrowBigRightLines size={50} className="absolute top-1 right-1 text-amber-500 hover:scale-125 " />
            </Link>
          </div>
          
          <WiBarometer size={75} className=" text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Pressure</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.main ? data.main.pressure : null}
            </p>
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">hPa</p>
          </div>
        </div>

        <div className="flex flex-col border-2 rounded-2xl">
        <div className="relative">

        <Link to="/AboutData/AboutHumidityForecast">
        <TbArrowBigRightLines size={50} className="absolute top-1 right-1 text-amber-500 hover:scale-125 " />
          </Link>
        </div>
          
          <WiHumidity size={75} className=" text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Humidity</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.main ? data.main.humidity : null}
            </p>
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> %</p>
          </div>
        </div>



        </div>
      </div>

      <Routes>
              <Route path="/AboutPressureForecast" element={ <AboutPressureForecast /> } /> 
              <Route path="/AboutHumidityForecast" element={ <AboutHumidityForecast /> } /> 
              

      </Routes>
    </>
  );
}

export default AboutData;