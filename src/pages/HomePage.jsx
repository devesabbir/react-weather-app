import Navbar from "../components/Header/Navbar";
import WeatherBoard from "../components/weather/WeatherBoard";
import { WeatherProvider } from "../providers";

export default function HomePage() {
  return (
    <WeatherProvider>
      <Navbar />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </WeatherProvider>
  );
}
