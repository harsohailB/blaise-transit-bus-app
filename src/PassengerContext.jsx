import React, { useState, createContext } from "react";
import passengersData from "./assets/testData/montreal/passengers.json";

export const PassengerContext = createContext();

export const PassengerProvider = (props) => {
  const [passengerData, setPassengerData] = useState(passengersData);

  // Use UseEffect hook here to call potential passenger data API

  return (
    <PassengerContext.Provider value={[passengerData, setPassengerData]}>
      {props.children}
    </PassengerContext.Provider>
  );
};
