import React from "react"
import Info  from "../Components/Info"
import Navbar from "../Components/NavBar"

/* Main will hold all the items */
function Main() {
  return (

  <div className="p-1 m-3 h-full max-w-4xl mx-auto bg-gradient-to-r
  from-purple-800 to-fuchsia-800 container flex flex-col rounded-3xl">
    <Info data-testid='info-component'  />
    <Navbar data-testid='navbar-component' /> 
  </div>
  )
}

export default Main;