import React from "react"


function LocationDegrees() {
  return (
    <div className="p-3 m-3 max-w-4xl flex flex-row justify-between">
    <div className="flex flex-row">
      <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-amber-500">Berlin,  </div>
      <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100"> Germany </div>
    </div>
    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-100" > 
    <span className="text-amber-500">°C</span>  | °F </div>
    </div>
  );
}

export default LocationDegrees;
