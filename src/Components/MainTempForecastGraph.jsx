import React from 'react'
import axios from 'axios';
import useStore from './Store';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




  const {dataForecast, setDataForecast} = useStore();
  
  const [location, setLocation] = useStore(
    (state) => [state.location, state.setLocation]
  )

  const unitsC = useStore(
    (state) => state.unitsC
  )
  
  const toggleUnits = useStore(
  (state) => state.toggleUnits)

  const dataTemp = [];
  const dataTime = [];

  const graphData = dataTime.map((item, index) => {
    return{time:item, value: dataTemp[index]}
  })
  
  const searchForecast = (event) => {
    axios.get(unitsC ? urlCForecast : urlFForecast).then((response) => {
    setDataForecast(
      response.data.list.map(item => dataTemp.push(item.main.temp)),
     response.data.list.map(item => dataTime.push(item.dt_txt)))
    console.log(dataTemp, dataTime)

  })}

  const urlCForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=metric`
  const urlFForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=imperial`



const MainTempForecastGraph = () => {
return (

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
  )}




   
  



export default MainTempForecastGraph