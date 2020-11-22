import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import DeckGL, { PathLayer } from "deck.gl";

import { getNearestBusStop } from "./nearestBugStopCalculator";
import { BusStopContext } from "../../BusStopContext";
import { PassengerContext } from "../../PassengerContext";

const NearestStopPaths = ({ viewport, mapStyles }) => {
  const [layers, setLayers] = useState([]);
  const [passengerData, setPassengerData] = useContext(PassengerContext);
  const [busStopData, setBusStopData] = useContext(BusStopContext);

  useEffect(() => {
    let tempPathLayers = [];
    passengerData.forEach((passengerLocation) => {
      const nearestBusStopLocation = getNearestBusStop(
        passengerLocation,
        busStopData
      );

      let data = [
        {
          name: uuidv4(),
          color: [0, 205, 172],
          path: [
            [passengerLocation.lon, passengerLocation.lat],
            [nearestBusStopLocation.longitude, nearestBusStopLocation.latitude],
          ],
        },
      ];

      tempPathLayers.push(
        new PathLayer({
          id: uuidv4(),
          data,
          pickable: true,
          getWidth: 2,
          widthScale: 2,
          getColor: (data) => data.color,
          widthMinPixels: 2,
        })
      );

      // When new path is created to bus stop, increments count of that bus stop
      incrementBusStopPassengerCount(nearestBusStopLocation);
    });

    setLayers(tempPathLayers);
  }, [passengerData, busStopData]);

  // Increments passenger count of incoming passengers
  const incrementBusStopPassengerCount = (nearestStopLocation) => {
    let nearestStopIndex = busStopData.findIndex(
      (stop) =>
        stop.lat === nearestStopLocation.latitude &&
        stop.lon === nearestStopLocation.longitude
    );

    busStopData[nearestStopIndex].count++;

    let tempBusStopData = busStopData;

    setBusStopData(tempBusStopData);
  };

  return (
    <DeckGL
      viewState={viewport}
      width={mapStyles.width}
      height={mapStyles.height}
      controller={true}
      layers={layers}
      debug
    />
  );
};

export default NearestStopPaths;
