import FavouriteModal from "./FavouriteModal";
import Logo from "./Logo";
import Search from "./Search";

import favouriteIcon from "../../assets/heart.svg";
import { useState } from "react";

export default function Navbar() {
  const [modal, setModal] = useState(true);

  const handleFavourites = () => {
    setModal(!modal);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search />
          <div
            onClick={handleFavourites}
            className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
          >
            <img src={favouriteIcon} alt="" />
            <span>Favourite Locations</span>
          </div>
          {/* Modal */}
          {modal && <FavouriteModal />}
        </div>
      </nav>
    </header>
  );
}
