import { useContext } from "react";
import { WeatherContext } from "../../context";
import { AddToFavourite } from "./AddToFavourite";
import { WeatherConditon } from "./WeatherConditon";
import { WeatherHeadline } from "./WeatherHeadline";

export const WeatherBoard = () => {
  const { loading } = useContext(WeatherContext);

  return (
    <div className="container bg-[url('/assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {loading.status && <p>{loading.message}</p>}
          <>
            <AddToFavourite />
            <WeatherHeadline />
            <WeatherConditon />
          </>
        </div>
      </div>
    </div>
  );
};
