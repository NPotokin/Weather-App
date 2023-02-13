import React from "react"
import { Link, Route, Routes, Router } from "react-router-dom"
import AboutData from "./AboutData"
import MainData from "./MainData"
import AdvancedData from "./AdvancedData"


function NavBar() {
  return (
    <div className="p-3 m-3 max-w-4xl flex flex-col mx-auto">
      <nav className="w-full flex flex-row mx-auto justify-between">
        <Link to="/MainData" className="border-2 border-slate-100 hover:border-amber-500  p-3 m-1
        text-center text-slate-100 hover:text-amber-500 font-semibold text-lg md:text-1xl
         lg:text-2xl xl:text-3xl pt-6  rounded-xl h-24 w-36 md:w-56 lg:w-64 xl:w-72">Main</Link>
        <Link to="/AboutData" className="border-2 border-slate-100 hover:border-amber-500  p-3 m-1
        text-center text-slate-100 hover:text-amber-500 font-semibold text-lg md:text-1xl
         lg:text-2xl xl:text-3xl pt-6  rounded-xl h-24 w-36 md:w-56 lg:w-64 xl:w-72">About</Link>
        <Link to="/AdvancedData" className="border-2 border-slate-100 hover:border-amber-500  p-3 m-1
        text-center text-slate-100 hover:text-amber-500 font-semibold text-lg md:text-1xl
         lg:text-2xl xl:text-3xl pt-6  rounded-xl h-24 w-36 md:w-56 lg:w-64 xl:w-72">Advanced</Link>
      </nav>
      <Routes>
        <Route path="/MainData" element={<MainData />} />
        <Route path="/AboutData" element={<AboutData />} />
        <Route path="/AdvancedData" element={<AdvancedData />} />
      </Routes>
    </div>

  );
}

export default NavBar;

      
      
