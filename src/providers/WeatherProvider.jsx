/* eslint-disable react/prop-types */
import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks";

export default function WeatherProvider({ children }) {
  const { data, loading, errors } = useWeather();
  return (
    <WeatherContext.Provider value={{ data, loading, errors }}>
      {children}
    </WeatherContext.Provider>
  );
}
