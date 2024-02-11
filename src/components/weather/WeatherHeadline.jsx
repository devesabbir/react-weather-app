import { useContext } from "react";
import { WeatherContext } from "../../contexts";

import { getFormatedDate } from "../../utils/date-utils";

import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import rainIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";
import pinIcon from "../../assets/pin.svg";

export default function WeatherHeadline() {
  const { data } = useContext(WeatherContext);
  const { tempreture, name, time, climate } = data;

  const getWeatherIcon = (name) => {
    switch (name) {
      case "Rain":
        return rainIcon;
      case "Clouds":
        return cloudIcon;
      case "Snow":
        return snowIcon;
      case "Clear":
        return sunnyIcon;
      case "Thunderstorm":
        return thunderIcon;
      case "Haze":
        return hazeIcon;
      default:
        return sunnyIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(tempreture) + "°"}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="" />
            <h2 className="text-2xl lg:text-[50px]">{name}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {" "}
        {getFormatedDate(time, "time", false)} -{" "}
        {getFormatedDate(time, "date", false)}
      </p>
    </div>
  );
}
