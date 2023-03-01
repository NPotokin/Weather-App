import React from "react"
import axios from "axios"
import { MdSearch} from "react-icons/md"
import useStore from "./Store";

function Info() {
      
  const [data, setData] = useStore(
    (state) => [state.data, state.setData]
  );

  const [location, setLocation] = useStore(
    (state) => [state.location, state.setLocation]
  )

  const unitsC = useStore(
    (state) => state.unitsC
  )
  
 const toggleUnits = useStore(
  (state) => state.toggleUnits)



  const urlC = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=metric`
  const urlF = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=imperial`

  const searchLocation = (event) => {
      axios.get(unitsC ? urlC : urlF).then((response) => {
      setData(response.data)
    })}

  function dtConverterDay(timestamp) {
    const a = new Date(timestamp * 1000);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const weekDays = ['Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Satursday', 'Sunday'];
    const year = a.getUTCFullYear();
    const month = months[a.getUTCMonth()];
    const weekDay = weekDays[a.getUTCDay()];
    const date = a.getUTCDate();
    const day = `${weekDay}, ${month} ${date} ${year}`
    return day;
  }

  function dtConverterTime(timestamp, offset) {
    const b = new Date(timestamp * 1000 + offset * 1000);
    const hour = b.getUTCHours();
    let min = b.getUTCMinutes() < 10 ? "0"+ b.getUTCMinutes() : b.getUTCMinutes();
    const time = `${hour} : ${min} `
    console.log(time)
    return time;
  }
  
  return (
    <div>
    <div>
      <div className="p-3 m-3  max-w-4xl flex flex-row justify-between">
      {unitsC
      ?  <button
      type="button"
      onClick={toggleUnits}
      className="mx-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-amber-500">°C</button>
      :  <button
      type="button"
      onClick={toggleUnits}
      className="mx-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-slate-100">°C</button>
      }
       
       {unitsC
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
      </div>
      
    {data.name !== undefined && 
    
    <div>
        <div className="p-3 m-3 max-w-4xl flex flex-col sm:flex-row justify-between">
          <div className="container flex flex-row justify-between">


            <div className="flex flex-row">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-amber-500">
              {data.name},
              </div>
              <div className=" mx-3 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100">
                {data.sys ?  data.sys.country :  null}
              </div>
            </div>

              
            <div className="flex flex-col">
              <div className="px-3 mx-3">
                <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {data.weather ? data.weather[0].main : null}
                </div>
                <div className="pb-3 text-amber-500 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {data.weather ? data.weather[0].description : null}</div>
                </div>
              </div>
            </div>
            

          
          
        </div>
        
        <div className="p-3 m-3 max-w-4xl flex flex-col sm:flex-row justify-between">
          <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {dtConverterDay(data.dt)}
          </div>
          <div className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <span className="text-amber-500">Local time: </span> 
              { dtConverterTime(data.dt, data.timezone)}
          </div>
        </div>
      </div>
      }

</div>)}
    
    
    

export default Info
