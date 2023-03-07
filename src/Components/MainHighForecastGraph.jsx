import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './Store';
import { AreaChart, Area, Label, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const MainHighForecastGraph = () => {
  const [dataHigh, setDataHigh] = useState([]);
  const [dataTime, setDataTime] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const { dataForecast, setDataForecast } = useStore();

  const [location, setLocation] = useStore((state) => [
    state.location,
    state.setLocation,
  ]);

  const unitsC = useStore((state) => state.unitsC);

  const toggleUnits = useStore((state) => state.toggleUnits);

  const searchForecast = (event) => {
    axios.get(unitsC ? urlCForecast : urlFForecast).then((response) => {
      setDataForecast(response.data.list);
      const dataHigh = response.data.list.map((item) => item.main.temp_max);
      const dataTime = response.data.list.map((item) => item.dt_txt);
      const graphData = dataTime.map((item, index) => {
        return { time: item, value: dataHigh[index] };
      });
      setDataHigh(dataHigh);
      setDataTime(dataTime);
      setGraphData(graphData);
    });
  };

  useEffect(() => {
    searchForecast();
  }, []);

  const urlCForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=metric`;
  const urlFForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7661508e301be410c0c9f630604f8b6a&units=imperial`;

  return (
    <div className='m-1 p-1 mx-auto'>
        <div className="container flex justify-center mx-auto mb-5 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-100">
              High Temperature forecast for 5 days
        </div>

        {graphData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={graphData}
            margin={{ top: 0, right: 30, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="2" stroke="#f59e0b"  />
            <XAxis dataKey="time" stroke="#f97316" />
            <YAxis stroke="#f97316" />
            <Tooltip />
            <Area type="natural" dot={true} dataKey="value" stroke="#581c87" fill="#f59e0b" />
             
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
};

export default MainHighForecastGraph;
