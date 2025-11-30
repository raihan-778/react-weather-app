import { useContext } from "react";
import Cloude from "../../assets/cloud.svg";
import RainIcon from "../../assets/rainy.svg";
import CloudeIcon from "../../assets/cloud.svg";
// import HeartRedIcon from "../../assets/heart-red.svg";
// import HeartIcon from "../../assets/heart.svg";

// import LogoIcon from "../../assets/logo.svg";
// import PinIcon from "../../assets/pin.svg";

// import ReactIcon from "../../assets/react.svg";
// import SearchIcon from "../../assets/search.svg";
// import SunIcon from "../../assets/sun.svg";
// import ThunderIcon from "../../assets/thunder.svg";
import Pin from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormatedDate } from "../../utils/date-utils";
export const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);

  console.log(weatherData);

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Cloud":
        return CloudeIcon;
    }
  };

  const { temperature, location, time } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={Cloude} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {temperature}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
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
};
