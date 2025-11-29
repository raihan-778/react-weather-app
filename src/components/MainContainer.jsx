import Header from "./header/Header";
import { WeatherBoard } from "./weather/WeatherBoard";

export const MainContainer = () => {
  return (
    <container>
      <Header />
      <main>
        <WeatherBoard />
      </main>
    </container>
  );
};
