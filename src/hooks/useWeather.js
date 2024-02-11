import { useEffect, useState } from "react";

export default function useWeather() {
  const [data, setData] = useState({
    location: "",
    climate: "",
    tempreture: "",
    maxTempreture: "",
    minTempreture: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [errors, setErrors] = useState("");

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading((prev) => ({
        ...prev,
        status: true,
        message: "Fetching weather data...",
      }));
      setErrors("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API
        }`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updatedWeather = {
        ...data,
        location: data?.location,
        climate: data?.weather[0].main,
        tempreture: data?.main?.temp,
        maxTempreture: data?.main?.temp_max,
        minTempreture: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        latitude: latitude,
        longitude: longitude,
      };

      setData(updatedWeather);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading((prev) => ({
        ...prev,
        status: false,
        message: "",
      }));
    }
  };

  useEffect(() => {
    setLoading((prev) => ({
      ...prev,
      status: true,
      message: "Finding weather location...",
    }));
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
    return () => {};
  }, []);

  return { data, loading, errors };
}
