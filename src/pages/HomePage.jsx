import Navbar from "../components/Header/Navbar";
import WeatherBoard from "../components/weather/WeatherBoard";
import { FavouriteProvider, WeatherProvider } from "../providers";

export default function HomePage() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <Navbar />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </FavouriteProvider>
    </WeatherProvider>
  );
}
