import React, { useState, createContext } from "react";
import stopsData from "./assets/stops.json";

export const BusStopContext = createContext();

export const BusStopProvider = (props) => {
  const [busStopData, setBusStopData] = useState(
    stopsData.map((stopData) => {
      return { ...stopData, count: 0 };
    })
  );

  // Use UseEffect hook here to call potential bus stop data API

  return (
    <BusStopContext.Provider value={[busStopData, setBusStopData]}>
      {props.children}
    </BusStopContext.Provider>
  );
};
