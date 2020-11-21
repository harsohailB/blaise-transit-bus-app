import "./App.css";
import Legend from "./components/Legend";
import BusMap from "./components/BusMap";
import { BusStopProvider } from "./BusStopContext";
import { PassengerProvider } from "./PassengerContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BusStopProvider>
      <PassengerProvider>
        <Navbar />
        <BusMap />
      </PassengerProvider>
    </BusStopProvider>
  );
}

export default App;
