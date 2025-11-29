import { useState } from "react";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    weather: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudePercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [Loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const getWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_APP_WeatherApiKey
        }`
      );

      setLoading(...Loading, {
        status: true,
        message: "Fetching weather data...",
      });
      if (!response.ok) {
        const errorMessage = `Failed to fetch weather data: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
      const data = response.json();

      const weatherData = {
        location: data?.name,
        weather: data?.weather[0].main,
        climate: data?.weather[0].description,
        temperature: data?.main.temp,
        maxTemperature: data?.main.temp_max,
        minTemperature: data?.main.temp_min,
        humidity: data?.main.humidity,
        cloudePercentage: data?.clouds.all,
        wind: data?.wind.speed,
        time: data?.dt,
        longitude: data?.coord.lon,
        latitude: data?.coord.lat,
      };

      console.log(weatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...Loading,
        status: false,
        message: "",
      });
    }
  };

  return <div>useWeather</div>;
};
