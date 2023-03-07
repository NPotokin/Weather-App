import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from './Store';
import { AreaChart, Area, Label, Text, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const MainTempForecastGraph = () => {
  const [dataTemp, setDataTemp] = useState([]);
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
      const dataTemp = response.data.list.map((item) => item.main.temp);
      const dataTime = response.data.list.map((item) => item.dt_txt);
      const graphData = dataTime.map((item, index) => {
        return { time: item, value: dataTemp[index] };
      });
      setDataTemp(dataTemp);
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
    <div className='m-3 p-3 mx-auto'>
        {graphData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={graphData}
            margin={{ top: 0, right: 30, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Label value='Temperature forecast' position='top' /> 
            <Area type="monotone"  dataKey="value" stroke="#581c87" fill="#f59e0b" />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
};

export default MainTempForecastGraph;
