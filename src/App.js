import "./App.css";
import styled from "styled-components";
import BusMap from "./components/Map";
import { BusStopProvider } from "./BusStopContext";
import { PassengerProvider } from "./PassengerContext";
import Navbar from "./components/Navbar";
import CityBrowser from "./components/CityBrowser";
import Legend from "./components/Map/Legend";

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
`;

const MapWrapper = styled.div`
  width: "90vw";
  height: "50vh";
  border-radius: 10px;
  box-shadow: 5px 5px 32px 5px rgba(0, 0, 0, 0.61);
`;

function App() {
  return (
    <div>
      <Navbar />

      <BodyWrapper>
        <Legend />

        <BusStopProvider>
          <PassengerProvider>
            <MapWrapper>
              <BusMap />
            </MapWrapper>
            <CityBrowser />
          </PassengerProvider>
        </BusStopProvider>
      </BodyWrapper>
    </div>
  );
}

export default App;
