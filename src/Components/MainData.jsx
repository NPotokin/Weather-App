import React from "react"
import useStore from "./Store";
import {TiWeatherPartlySunny } from "react-icons/ti"
import axios from "axios";


function MainData() {

  const [data, setData] = useStore(
    (state) => [state.data, state.setData]
  );

  const [location, setLocation] = useStore(
    (state) => [state.location, state.setLocation]
  )

  const unitsC = useStore(
    (state) => state.unitsC
  )

  const urlC = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=metric`
  const urlF = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=imperial`

  const searchMainData = (event) => {
      axios.get(unitsC ? urlC : urlF).then((response) => {
      setData(response.data)
      
    })}


  return (
    <>
      <div className="container w-full">
        <div className="p-3 m-3 grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto justify-around">

          <div className="flex flex-col border-2 rounded-2xl">
            <TiWeatherPartlySunny size={75} className="text-amber-500 mx-auto mt-3" />
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
        </div>
      </div>
    </>
   /* <div className="flex flex-col border-2 rounded-2xl">
     <TiWeatherSunny size={75} className="text-amber-500 mx-auto mt-3" />
     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Feels</p>
     <div className="flex flex-row my-3 justify-center">
       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
         {data.main ? data.main.feels_like.toFixed() : null} </p>
       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
         {munits ?  "°C" :  "°F" }</p>
     </div>
   </div>

   <div className="flex flex-col border-2 rounded-2xl">
     <FaTemperatureHigh size={75} className="text-amber-500 mx-auto mt-3" />
     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">High</p>
     <div className="flex flex-row my-3 justify-center">
       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
         {data.main ? data.main.temp_max.toFixed() : null}</p>
       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
       {munits ?  "°C" :  "°F" }
       </p>
     </div>
   </div>

   <div className="flex flex-col border-2 rounded-2xl">
     <FaTemperatureLow size={75} className="text-amber-500 mx-auto mt-3" />
     <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Low</p>
     <div className="flex flex-row my-3 justify-center">
       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
         {data.main ? data.main.temp_min.toFixed() : null} </p>
       <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
       {munits ?  "°C" :  "°F" }
       </p>
     </div>
   </div>
      </div>
  
  

  </div> */

  );
}

export default MainData;