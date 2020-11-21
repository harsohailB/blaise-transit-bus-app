import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import DeckGL, { PathLayer } from "deck.gl";

import passengersData from "../../assets/passengers.json";
import stopsData from "../../assets/stops.json";
import { getNearestBusStop } from "./nearestBugStopCalculator";
import { BusStopContext } from "../../BusStopContext";

const NearestStopPaths = ({ viewport, mapStyles }) => {
  const [layers, setLayers] = useState([]);
  const [busStopData, setBusStopData] = useContext(BusStopContext);

  useEffect(() => {
    let tempPathLayers = [];
    passengersData.forEach((passengerLocation) => {
      const nearestBusStopLocation = getNearestBusStop(
        passengerLocation,
        stopsData
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

      incrementBusStopPassengerCount(nearestBusStopLocation);
    });

    setLayers(tempPathLayers);
  }, []);

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
