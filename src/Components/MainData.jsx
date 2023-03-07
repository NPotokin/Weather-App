import React from "react"
import useStore from "./Store";
import {TiWeatherPartlySunny, TiWeatherSunny } from "react-icons/ti"
import { FaTemperatureHigh, FaTemperatureLow} from "react-icons/fa"
import { Link, Routes, Route } from "react-router-dom";
import MainTempForecast from "./MainTempForecastGraph";
import MainFeelsForecast from "./MainFeelsForecastGraph";
import MainHighForecast from "./MainHighForecastGraph";
import MainLowForecast from "./MainLowForecastGraph";



function MainData() {

  const [data] = useStore(
    (state) => [state.data]
  );

  const unitsC = useStore(
    (state) => state.unitsC
  )

  return (
    <>
      <div className="container w-full">
        <div className="p-2 m-2 grid grid-cols-1 sm:grid-cols-2 gap-2 mx-auto justify-around">

          <div className="flex flex-col border-2 rounded-2xl">
            <Link to = "/MainData/MainTempForecast">
            <TiWeatherPartlySunny size={75} className="animate-pulse  text-amber-500 mx-auto mt-3" />
            </Link>
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Temp.</p>
            <div className="flex flex-row my-3 justify-center">
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                {data.main ? data.main.temp.toFixed() : null}
              </p>
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                {unitsC ?  "°C" :  "°F" }
              </p>
             </div>
           </div>

           <div className="flex flex-col border-2 rounded-2xl">
           <Link to = "/MainData/MainFeelsForecast">
           <TiWeatherSunny size={75} className="animate-pulse text-amber-500 mx-auto mt-3" />
            </Link>

            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Feels</p>
            <div className="flex flex-row my-3 justify-center">
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                {data.main ? data.main.feels_like.toFixed() : null} 
              </p>
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                {unitsC ?  "°C" :  "°F" }
              </p>
            </div>
           </div> 

           <div className="flex flex-col border-2 rounded-2xl">
           <Link to = "/MainData/MainHighForecast">
           <FaTemperatureHigh size={75} className="animate-pulse text-amber-500 mx-auto mt-3" />
          </Link>

            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">High</p>
            <div className="flex flex-row my-3 justify-center">
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.main ? data.main.temp_max.toFixed() : null}</p>
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
              {unitsC ?  "°C" :  "°F" }
              </p>
            </div>
          </div>

          <div className="flex flex-col border-2 rounded-2xl">
          <Link to = "/MainData/MainLowForecast">
          <FaTemperatureLow size={75} className="animate-pulse text-amber-500 mx-auto mt-3" />
          </Link>
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Low</p>
            <div className="flex flex-row my-3 justify-center">
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                {data.main ? data.main.temp_min.toFixed() : null} </p>
              <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
              {unitsC ?  "°C" :  "°F" }
              </p>
            </div>
          </div>

        </div>

        <Routes>
              <Route path="/MainTempForecast" element={ <MainTempForecast /> } /> 
              <Route path="/MainFeelsForecast" element={ <MainFeelsForecast /> } /> 
              <Route path="/MainHighForecast" element={ <MainHighForecast /> } /> 
              <Route path="/MainLowForecast" element={ <MainLowForecast /> } /> 

        </Routes>

      </div>



   

    </>
  
  );
}

export default MainData;