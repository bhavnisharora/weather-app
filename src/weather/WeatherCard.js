import React, { useEffect, useState } from "react";

const WeatherCard = ({ tempData }) => {
  const [weatherState, setWeatherState] = useState("wi-day-cloudy");
  let sec = tempData.sunset;
  let date = new Date(sec * 1000);
  let getTime = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (tempData.main === "Clouds") {
      setWeatherState("wi-day-cloudy");
    }
    if (tempData.main === "Haze") {
      setWeatherState("wi-fog");
    }
    if (tempData.main === "Clear") {
      setWeatherState("wi-day-sunny");
    }
    if (tempData.main === "Rain") {
      setWeatherState("wi-rain");
    }
    if (tempData.main === "Mist") {
      setWeatherState("wi-dust");
    }
  });

  return (
    <>
      <div className="box">
        <div className="icon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weather-container">
          <div className="weather-info">
            <div className="temperature">
              <span> {tempData.temp} &deg;</span>
            </div>
            <div className="description">
              <div className="weather-condition">{tempData.main}</div>
              <div className="place">
                {tempData.name}, {tempData.country}
              </div>
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="extra-temp">
          <div className="temp-info">
            <div className="two-sections">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {getTime} <br />
                Sunset
              </p>
            </div>
            <div className="two-sections">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {tempData.pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sections">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {tempData.humidity}
                <br />
                Humidity
              </p>
            </div>

            <div className="two-sections">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {tempData.speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
