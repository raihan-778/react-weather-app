import { useState } from "react";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import { LocationListModal } from "./LocationListModal";

import Heart from "../../assets/heart.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container flex items-center justify-between py-6">
      <a href="./index.html">
        <img className="h-9" src={Logo} alt="Weather App" />
      </a>

      <div className="flex items-center gap-4 relative">
        <form action="#">
          <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
            <input
              className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
              type="search"
              placeholder="Search Location"
              required
            />
            <button type="submit">
              <img src={Search} />
            </button>
          </div>
        </form>
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
          <img src={Heart} alt="" />
          <span onClick={() => setIsOpen((isOpen) => !isOpen)}>
            Favourite Locations
          </span>
        </div>
        {isOpen && <LocationListModal />}
        {/* <!-- Modal --> */}
      </div>
    </nav>
  );
};
