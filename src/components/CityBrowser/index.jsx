import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import montrealPassengersData from "../../assets/testData/montreal/passengers.json";
import montrealStopsData from "../../assets/testData/montreal/stops.json";

import calgaryPassengersData from "../../assets/testData/calgary/passengers.json";
import calgaryStopsData from "../../assets/testData/calgary/stops.json";

import edmontonPassengersData from "../../assets/testData/edmonton/passengers.json";
import edmontonStopsData from "../../assets/testData/edmonton/stops.json";
import { PassengerContext } from "../../PassengerContext";
import { BusStopContext } from "../../BusStopContext";

const Wrapper = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vw;

  @media (max-width: 968px) {
    width: 90vw;
  }
`;

const Button = styled.div`
  width: 10vw;
  background-color: #00cdac;
  font-family: "Montserrat", sans-serif;
  border-radius: 30px;
  text-align: center;
  color: #f7f7f7;
  padding: 10px;
  font-weight: 700;
  transition: all 0.5s ease;

  ${({ selected }) =>
    selected &&
    `
    box-shadow: 10px 10px 34px -11px rgba(0, 0, 0, 0.75);
    transform: translate(-5px, -5px);
    color: #333432;
  `}

  &: hover {
    box-shadow: 10px 10px 34px -11px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    transform: translate(-5px, -5px);
  }

  @media (max-width: 968px) {
    width: 20vw;
    padding: 10px;
    margin-top: 15px;
  }
`;

const CityBrowser = () => {
  const [passengerData, setPassengerData] = useContext(PassengerContext);
  const [busStopData, setBusStopData] = useContext(BusStopContext);

  const [selectedCity, setSelectedCity] = useState("Montréal");

  useEffect(() => {
    if (selectedCity === "Montréal") {
      console.log("mont");
      setPassengerData(montrealPassengersData);
      setBusStopData(montrealStopsData);
    } else if (selectedCity === "Calgary") {
      console.log("cal");
      setPassengerData(calgaryPassengersData);
      setBusStopData(calgaryStopsData);
    } else if (selectedCity === "Edmonton") {
      console.log("ed");
      setPassengerData(edmontonPassengersData);
      setBusStopData(edmontonStopsData);
    }
  }, [selectedCity]);

  const renderButtons = () => {
    const cities = ["Montréal", "Calgary", "Edmonton"];

    return cities.map((city) => {
      if (city === selectedCity) {
        return (
          <Button selected onClick={() => setSelectedCity(city)}>
            {city}
          </Button>
        );
      } else {
        return <Button onClick={() => setSelectedCity(city)}>{city}</Button>;
      }
    });
  };

  return <Wrapper>{renderButtons()}</Wrapper>;
};

export default CityBrowser;
