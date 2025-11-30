import { useContext } from "react";
import Heart from "../../assets/heart.svg";
import { FavouriteContext } from "../../context";

export const FavListModal = () => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <>
      {" "}
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <img className="text-gray-300" src={Heart} alt="" />
        <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favourites.length > 0 ? (
            favourites.map((fav) => (
              <li kay={fav.location} className="hover:bg-gray-200">
                {fav.location}
              </li>
            ))
          ) : (
            <p>Nothing found to your favourite list</p>
          )}
        </ul>
      </div>
    </>
  );
};
