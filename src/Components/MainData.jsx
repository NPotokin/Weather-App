import React from "react"


function MainData() {
  return (
    <div className="p-3 m-3 max-w-4xl flex flex-col justify-between">
      <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      Rain</div>
      <div className="text-amber-500 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
      Heavy rain with a chance of hail and frost</div>
      <div className="flex flex-row mx-auto justify-center">
        <div className="flex flex-col border-2 rounded-2xl m-6 p-6 w-2/3">
          <p className="">weather now...</p>
          <p>29°C</p>
        </div>
        <div className="flex flex-col border-2 rounded-2xl m-6 p-6 w-2/3">
          <p>feels like</p>
          <p>22°C</p>
        </div>
      </div>
    </div>
  );
}

export default MainData;
