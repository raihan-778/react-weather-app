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
      <WeatherProvider>
        <FavouriteProvider>
          <LocationProvider>
            <div className="h-screen grid place-items-center">
              <Header />
              <main>
                <section>
                  <WeatherBoard />
                </section>
              </main>
            </div>
          </LocationProvider>
        </FavouriteProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
