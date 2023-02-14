import React from "react"
import { WiBarometer, WiHumidity, WiRain, WiCloud, WiStrongWind } from "react-icons/wi"
import { MdOutlineVisibility} from "react-icons/md"


function AdvancedData() {
  return (
    <div className="container w-full">
      <div className="p-3 m-3 grid grid-cols-2 lg:grid-cols-3 gap-2 mx-auto justify-around">
        <div className="flex flex-col border-2 rounded-2xl">
          <WiBarometer size={100} className="text-amber-500 mx-auto" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mx-auto">Pressure</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500" >798 </p>
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100"> bar</p>
          </div>
        </div>
        <div className="flex flex-col border-2 rounded-2xl">
          <WiHumidity size={100} className="text-amber-500 mx-auto" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mx-auto">Humidity</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500" >55 </p>
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100"> %</p>
          </div>
        </div>
        <div className="flex flex-col border-2 rounded-2xl">
          <MdOutlineVisibility size={100} className="text-amber-500 mx-auto" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mx-auto">Visibility</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500" >30000 </p>
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100"> m</p>
          </div>
        </div>
        <div className="flex flex-col border-2 rounded-2xl">
          <WiRain size={100} className="text-amber-500 mx-auto" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mx-auto">Rain</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500" >350 </p>
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100"> mm</p>
          </div>
        </div>
        <div className="flex flex-col border-2 rounded-2xl">
          <WiCloud size={100} className="text-amber-500 mx-auto" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mx-auto">Clouds</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500" >75 </p>
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100"> %</p>
          </div>
        </div>
        <div className="flex flex-col border-2 rounded-2xl">
          <WiStrongWind size={100} className="text-amber-500 mx-auto" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mx-auto">Wind</p>
          <div className="flex flex-row my-3 justify-center">
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-amber-500" >23 </p>
            <p className="mx-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100"> m/sec</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedData;
