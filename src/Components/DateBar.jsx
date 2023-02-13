import React from "react"


function DateBar() {
  return (
    <div className="p-3 m-3 max-w-4xl flex flex-row justify-between">
      <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">Monday, January 1 2023</div>
      <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <span className="text-amber-500">Local time:</span> 06:53 AM</div>
    </div>
  );
}

export default DateBar;
