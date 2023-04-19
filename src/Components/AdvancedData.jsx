import React from "react"
import useStore from "./Store"
import { WiCloud, WiStrongWind, WiCloudyGusts } from "react-icons/wi"
import { MdOutlineVisibility} from "react-icons/md"
import { Link, Routes, Route } from "react-router-dom";
import AdvancedVisibilityForecast from "./AdvancedVisibilityForecast"
import AdvancedCloudsForecast from "./AdvancedCloudsForecast"
import AdvancedWindForecast from "./AdvancedWindForecast"
import AdvancedGustsForecast from "./AdvancedGustsForecast"
import {TbArrowBigRightLines} from 'react-icons/tb'


function AdvancedData() {

  const [data] = useStore(
    (state) => [state.data]
  );

  const unitsC = useStore(
    (state) => state.unitsC
  )

  return (
    <>
      <div className="container w-full">
        <div className="p-2 m-2 grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto justify-around">

        <div className="flex flex-col border-2 rounded-2xl">
        <div className="relative">
          <Link to='/AdvancedData/AdvancedVisibilityForecast' aria-label="Go to visibility forecast">
          <TbArrowBigRightLines size={50} className="absolute top-1 right-1 text-amber-500 hover:scale-125 " />
          </Link>
        </div>

          <MdOutlineVisibility size={75} className=" text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Visibility</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.visibility}
            </p>
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> m</p>
          </div>
        </div>

        <div className="flex flex-col border-2 rounded-2xl">
        <div className="relative">
          <Link to='/AdvancedData/AdvancedCloudsForecast' aria-label="Go to clouds forecast">
          <TbArrowBigRightLines size={50} className="absolute top-1 right-1 text-amber-500 hover:scale-125 " />
          </Link>
        </div>
          
          <WiCloud size={75} className=" text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Clouds</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.clouds ? data.clouds.all : null}
            </p>
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> %</p>
          </div>
        </div>

        <div className="flex flex-col border-2 rounded-2xl">
        <div className="relative">
          <Link to='/AdvancedData/AdvancedWindForecast' aria-label="Go to wind forecast">
          <TbArrowBigRightLines size={50} className="absolute top-1 right-1 text-amber-500 hover:scale-125 " />
          </Link>
        </div>
          <WiStrongWind size={75} className=" text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Wind</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.wind ? data.wind.speed.toFixed() : null}
            </p>
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
            {unitsC ?  "m/s" :  "ml/hr" }
            </p>
          </div>
        </div>

        <div className="flex flex-col border-2 rounded-2xl">
       <div className="relative">
         <Link to='/AdvancedData/AdvancedGustsForecast' aria-label="Go to wind gusts forecast">
         <TbArrowBigRightLines size={50} className="absolute top-1 right-1 text-amber-500 hover:scale-125 " />
         </Link>
       </div>
          <WiCloudyGusts size={75} className=" text-amber-500 mx-auto mt-3" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Gusts</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
              {data.wind ? data.wind.gust : null}
            </p>
            <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
            {unitsC ?  "m/s" :  "ml/hr" }
            </p>
          </div>
        </div>

        </div>
      </div>

      <Routes>
              <Route path="/AdvancedVisibilityForecast" element={ <AdvancedVisibilityForecast /> } /> 
              <Route path="/AdvancedCloudsForecast" element={ <AdvancedCloudsForecast /> } /> 
              <Route path="/AdvancedWindForecast" element={ <AdvancedWindForecast /> } /> 
              <Route path="/AdvancedGustsForecast" element={ <AdvancedGustsForecast /> } /> 
              

      </Routes>

    </>
  );
}

export default AdvancedData;