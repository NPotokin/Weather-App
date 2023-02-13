import React from "react"
import {MdOutlineDarkMode, MdLocationOn, MdSearch} from "react-icons/md"


function SearchBar() {
  return (
    <div className="p-3 m-3 mt-6 max-w-4xl flex flex-row justify-between">
    <MdOutlineDarkMode  size={50} className="text-slate-100 hover:text-amber-500" />
    <input
    type="text"
    className="bg-gradient-to-r
    from-purple-600 to-fuchsia-600 w-full mx-6 rounded-xl text-xl text-slate-100 pl-6 focus:outline-none" ></input>
    <MdSearch size={50} className="text-slate-100 hover:text-amber-500" />
    <MdLocationOn size={50} className="text-slate-100 hover:text-amber-500" />
    </div>
  );
}

export default SearchBar;
