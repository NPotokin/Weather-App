import React from "react"
import SearchBar from "./SearchBar"
import LocationDegrees from "./LocationDegrees"
import DateBar from "./DateBar"
import NavBar from "./NavBar"


/* Main will hold all the items */
function Main() {
  return (
    <div className="p-1 m-3 h-screen max-w-4xl mx-auto bg-gradient-to-r
     from-purple-800 to-fuchsia-800 container flex flex-col rounded-3xl">
    <SearchBar />
    <LocationDegrees />
    <DateBar />
    <NavBar />

    </div>
  );
}

export default Main;