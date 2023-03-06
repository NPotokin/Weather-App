import React from 'react'
import axios from 'axios';
import useStore from './Store';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function MainTempForecast() {

  const {dataForecast, setDataForecast} = useStore();
  
  const [location, setLocation] = useStore(
    (state) => [state.location, state.setLocation]
  )

  const unitsC = useStore(
    (state) => state.unitsC
  )
  
  const toggleUnits = useStore(
  (state) => state.toggleUnits)

  
  const searchForecast = (event) => {
    axios.get(unitsC ? urlCForecast : urlFForecast).then((response) => {
    setDataForecast(response.data.list)
    console.log(response.data.list)
  })}

  const graphData = () => {
    for (let i = 0; i < 40; i++) {
      return console.log(dataForecast.list[i].map(item => item.dt))

    }
  }
 
const urlCForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=metric`
const urlFForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=imperial`



  return (
    <div className="container p-3 m-3 mx-auto">
        
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={dataForecast}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="list.dt_txt" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="list.main.temp" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        
        <p className='text-7xl font-extrabold'>This is temp forecast</p>
        <button
        onClick={graphData}
        >Click me</button>
        <p className='text-7xl font-extrabold'>{dataForecast.list !== undefined ? dataForecast.list : null}</p>
        

    </div>
  )
}

export default MainTempForecast