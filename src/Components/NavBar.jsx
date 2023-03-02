import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import AboutData from "./AboutData"
import MainData from "./MainData"
import AdvancedData from "./AdvancedData"
import useStore from "./Store"




function NavBar() {

  const [data, setData] = useStore(
    (state) => [state.data, state.setData]
  );  
  return (


    <div>

    {data.name !== undefined && 

    <div className="container p-3 m-3 flex flex-col mx-auto">
      <nav className="w-full flex flex-row mx-auto">
        <Link to="/MainData" className="border-2 border-slate-100 hover:border-amber-500  p-3 m-1
        text-center text-slate-100 hover:text-amber-500 font-semibold text-lg md:text-1xl
         lg:text-2xl xl:text-3xl pt-8  rounded-xl h-24 w-1/3">Main</Link>
        <Link to="/AboutData" className="border-2 border-slate-100 hover:border-amber-500  p-3 m-1
        text-center text-slate-100 hover:text-amber-500 font-semibold text-lg md:text-1xl
         lg:text-2xl xl:text-3xl pt-8  rounded-xl h-24 w-1/3">About</Link>
        <Link to="/AdvancedData" className="border-2 border-slate-100 hover:border-amber-500  p-3 m-1
        text-center text-slate-100 hover:text-amber-500 font-semibold text-lg md:text-1xl
         lg:text-2xl xl:text-3xl pt-8  rounded-xl h-24 w-1/3">Advanced</Link>
      </nav>
      
      <Routes>
        <Route path="/MainData" element={<MainData />} />
        <Route path="/AboutData" element={<AboutData />} />
        <Route path="/AdvancedData" element={<AdvancedData />} />
      </Routes>
      
    </div>
    }
  </div>
    
    

  );
}

export default NavBar;

      
      
