import React, { useEffect, useState } from "react";
import "./style.css";
import "./weather-icons.min.css";
import WeatherCard from "./WeatherCard";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("jalandhar");
  const [tempData, setTempData] = useState({});
  const getWeatherInfo = async () => {
    const url = `
  https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=33cd9f145f18aac35f54a56b50942c7e`;
    try {
      const res = await fetch(url);
      const data = await res.json(res);
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main } = data.weather[0];
      const { name } = data;
      const { country, sunset } = data.sys;
      const { speed } = data.wind;

      const getNewData = {
        temp,
        humidity,
        pressure,
        main,
        name,
        country,
        sunset,
        speed,
      };
      setTempData(getNewData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="container">
        <h1>"Your Weather Companion"</h1>
        <div className="weather-header">
          <input
            type="text"
            placeholder="enter a city"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={getWeatherInfo}>search</button>
        </div>

        <WeatherCard tempData={tempData} />
      </div>
    </>
  );
};

export default Temp;
