import { useContext, useEffect, useState } from "react";
import { FavouriteContext, WeatherContext } from "../../contexts";

import heartIcon from "../../assets/heart.svg";
import heartRedIcon from "../../assets/heart-red.svg";

export default function AddToFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);
  const { data } = useContext(WeatherContext);

  const { name: locationName, latitude, longitude } = data;

  const [isFavourite, setIsFavourite] = useState(false);

  const handleAddToFavourite = () => {
    const found = favourites.find((fav) => fav.location === locationName);
    if (!found) {
      addToFavourites(latitude, longitude, locationName);
    } else {
      removeFromFavourites(locationName);
    }

    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === locationName);
    setIsFavourite(found);

    return () => {};
  }, [favourites, locationName]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleAddToFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? heartRedIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
