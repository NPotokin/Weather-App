import React from "react"
import { useState } from "react"
import axios from "axios"
import { WiBarometer, WiHumidity, WiCloud, WiStrongWind, WiCloudyGusts } from "react-icons/wi"
import { MdOutlineVisibility} from "react-icons/md"
import { MdSearch} from "react-icons/md"
import {TiWeatherPartlySunny, TiWeatherSunny} from "react-icons/ti"
import {FaTemperatureLow, FaTemperatureHigh} from "react-icons/fa"
import {FiSunset, FiSunrise } from "react-icons/fi"



/* Main will hold all the items */
function Main() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('')

  const [munits, setMunits] = useState(false)
  const [urlM, setUrlM] = useState('metric')
  
  
  function toggleUnits(){
    setMunits(!munits);
    urlM === "imperial" ? setUrlM('metric') : setUrlM("imperial")
    searchLocation();
    
  } 

  

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=${urlM}`

  const searchLocation = (event) => {
      axios.get(url).then((response) => {
      setData(response.data)

    })}

  function dtConverterDay(timestamp) {
    const a = new Date(timestamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const weekDays = ['Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Satursday', 'Sunday'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const weekDay = weekDays[a.getDay()];
    const date = a.getDate();
    const day = `${weekDay}, ${month} ${date} ${year}`
    return day;
  }

  function dtConverterTime(timestamp) {
    const b = new Date(timestamp * 1000);
    const hour = b.getHours();
    let min = b.getMinutes() < 10 ? "0"+ b.getMinutes() : b.getMinutes();
    const time = `${hour} : ${min} `
    return time;
  }

  


  return (
    <div className="p-1 m-3 h-full max-w-4xl mx-auto bg-gradient-to-r
     from-purple-800 to-fuchsia-800 container flex flex-col rounded-3xl">
      <div className="p-3 m-3  max-w-4xl flex flex-row justify-between">
      {munits
      ?  <button
      type="button"
      onClick={toggleUnits}
      className="mx-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-amber-500">°C</button>
      :  <button
      type="button"
      onClick={toggleUnits}
      className="mx-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-100">°C</button>
      }
       
       {munits
      ?  <button
      type="button"
      onClick={toggleUnits}
      className="mx-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-100">°F</button>
      :  <button
      type="button"
      onClick={toggleUnits}
      className="mx-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-amber-500">°F</button>
      }  
             
            
        <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        type="text"
        className="bg-gradient-to-r
        from-purple-600 to-fuchsia-600 w-full mx-6 rounded-xl text-xl text-slate-100 pl-6 focus:outline-none" ></input>
        <MdSearch
        onClick={searchLocation} 
        size={50} className="text-slate-100 hover:text-amber-500" />
        
      </div>

      {data.name !== undefined && 
    
    
    <><div className="p-3 m-3 max-w-4xl flex flex-col sm:flex-row justify-between">
          <div className="flex flex-row">
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-amber-500">{data.name},  </div>
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100">
                {data.sys ?  data.sys.country :  null}
            </div>
          </div>
          
        </div><div className="p-3 m-3 max-w-4xl flex flex-col sm:flex-row justify-between">
            <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">{dtConverterDay(data.dt)}</div>
            <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <span className="text-amber-500">Local time:</span> {dtConverterTime(data.dt)}</div>
          </div>
          <div className="px-3 mx-3">
          <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          {data.weather ? data.weather[0].main : null}
          </div>
          <div className="pb-3 text-amber-500 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
         {data.weather ? data.weather[0].description : null}</div>
          </div>
          <div className="container w-full">
            <div className="p-3 m-3 grid grid-cols-3 lg:grid-cols-4 gap-2 mx-auto justify-around">

              <div className="flex flex-col border-2 rounded-2xl">
                <TiWeatherPartlySunny size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Temp.</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.main ? data.main.temp.toFixed() : null}</p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                    {munits ?  "°C" :  "°F" }</p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <TiWeatherSunny size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Feels</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.main ? data.main.feels_like.toFixed() : null} </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                    {munits ?  "°C" :  "°F" }</p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <FaTemperatureHigh size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">High</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.main ? data.main.temp_max.toFixed() : null}</p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                  {munits ?  "°C" :  "°F" }
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <FaTemperatureLow size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Low</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.main ? data.main.temp_min.toFixed() : null} </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                  {munits ?  "°C" :  "°F" }
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <FiSunrise size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Sunrise</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.sys ? dtConverterTime(data.sys.sunrise)  : null} </p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <FiSunset size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Sunset</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                  {data.sys ? dtConverterTime(data.sys.sunset)  : null}
                  </p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <WiBarometer size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Pressure</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.main ? data.main.pressure : null}
                  </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">hPa</p>
                </div>
              </div>
              <div className="flex flex-col border-2 rounded-2xl">
                <WiHumidity size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Humidity</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.main ? data.main.humidity : null}
                  </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> %</p>
                </div>
              </div>
              <div className="flex flex-col border-2 rounded-2xl">
                <MdOutlineVisibility size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Visibility</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.visibility}
                  </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> m</p>
                </div>
              </div>

              <div className="flex flex-col border-2 rounded-2xl">
                <WiCloud size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Clouds</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.clouds ? data.clouds.all : null}
                  </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100"> %</p>
                </div>
              </div>
              <div className="flex flex-col border-2 rounded-2xl">
                <WiStrongWind size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Wind</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.wind ? data.wind.speed.toFixed() : null}
                  </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                  {munits ?  "m/s" :  "ml/hr" }
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-2 rounded-2xl">
                <WiCloudyGusts size={75} className="text-amber-500 mx-auto mt-3" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 mx-auto">Gusts</p>
                <div className="flex flex-row my-3 justify-center">
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-amber-500">
                    {data.wind ? data.wind.gust.toFixed() : null}
                  </p>
                  <p className="mx-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100">
                  {munits ?  "m/s" :  "ml/hr" }
                  </p>
                </div>
              </div>
            </div>
          </div></>
    }

    </div>
    

  );
}

export default Main;