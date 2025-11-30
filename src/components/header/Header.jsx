import { useState } from "react";
import { FavListModal } from "./favListModal";
import { Favourites } from "./Favourites";

import { Logo } from "./Logo";
import { Search } from "./Search";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourites onShow={() => setIsOpen((isOpen) => !isOpen)} />

          {isOpen && <FavListModal />}
        </div>

        {/* <!-- Modal --> */}
      </nav>
    </header>
  );
};

export default Header;
