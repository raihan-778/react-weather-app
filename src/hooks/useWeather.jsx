import { useEffect, useEffectEvent, useState } from "react";

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
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const getWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API
        }&units=metric`
      );

      setLoading({
        ...loading,
        status: true,
        message: "Fetching weather data...",
      });
      if (!response.ok) {
        const errorMessage = `Failed to fetch weather data: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      const updatedWeatherData = {
        ...weatherData,

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

      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };

  const onNavigate = useEffectEvent((latitude, longitude) => {
    getWeatherData(latitude, longitude);
  });

  useEffect(() => {
    setLoading({
      Loading: true,
      message: "Waiting for location permition...",
    });

    navigator.geolocation.getCurrentPosition((position) => {
      onNavigate(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return { weatherData, loading, error };
};
