import { useContext, useEffect, useEffectEvent, useState } from "react";
import RedHeart from "../../assets/heart-red.svg";
import Heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

export const AddToFavourite = () => {
  const { weatherData } = useContext(WeatherContext);

  console.log(weatherData);

  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { latitude, longitude, location } = weatherData;

  const [isFavourite, toggleFavourite] = useState(false);

  const findFavourite = useEffectEvent(() => {
    const found = favourites.some((fav) => fav.location === location);

    toggleFavourite(found);
  });

  useEffect(() => {
    findFavourite(location);
    // const found = favourites.find((fav) => fav.location === location);
  }, [location]);

  const handleFavourite = () => {
    console.log("handleFavourite called");
    const found = favourites.find((fav) => fav.location === location);

    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    toggleFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeart : Heart} alt="" />
        </button>
      </div>
    </div>
  );
};
