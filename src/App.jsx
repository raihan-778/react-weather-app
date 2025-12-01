import "./App.css";
import Header from "./components/header/Header";
import { WeatherBoard } from "./components/weather/WeatherBoard";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavouriteProvider>
            <div className="h-screen grid place-items-center">
              <Header />
              <main>
                <section>
                  <WeatherBoard />
                </section>
              </main>
            </div>
          </FavouriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
