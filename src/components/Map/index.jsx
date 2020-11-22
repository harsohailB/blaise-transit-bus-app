import React, { useContext, useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenterOfBounds } from "geolib";

import NearestStopPaths from "../NearestStopPaths";
import PassengerMarkers from "../Markers/PassengerMarkers";
import BusStopMarkers from "../Markers/BusStopMarkers";
import Legend from "./Legend";
import { PassengerContext } from "../../PassengerContext";
import { BusStopContext } from "../../BusStopContext";

const BusMap = () => {
  // Ideally, this would be stored in a .env file and called using process.env.MAPBOX_TOKEN,
  // however, it is placed here for easier installation and testing of the app by the recruiter
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiaGFyc29oYWlsYnJhciIsImEiOiJja2hydzB2cTYwNXdzMnRwZ3E2cXo5aDRlIn0.bIydJEY6Hu3nE5zof0JwaQ";

  const [passengerData, setPassengerData] = useContext(PassengerContext);
  const [busStopData, setBusStopData] = useContext(BusStopContext);
  const dataReady = passengerData !== undefined && busStopData !== undefined;

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 13,
    bearing: 0,
    pitch: 0,
  });

  const mapStyles = {
    width: "90vw",
    height: "60vh",
  };

  // Changes attributes of coords to be geo lib compatible
  const parseToGeoLib = (cords) => {
    return {
      latitude: cords.lat,
      longitude: cords.lon,
    };
  };

  // Finds center of all points (passenger + bus stop) and centers viewport accordingly
  useEffect(() => {
    if (dataReady) {
      const passengerDataPoints = passengerData.map((passengerLocation) =>
        parseToGeoLib(passengerLocation)
      );
      const busStopDataPoints = busStopData.map((busStopLocation) =>
        parseToGeoLib(busStopLocation)
      );

      const centerOfDataPoints = getCenterOfBounds(
        passengerDataPoints.concat(busStopDataPoints)
      );

      setViewport({
        ...viewport,
        latitude: centerOfDataPoints.latitude,
        longitude: centerOfDataPoints.longitude,
      });
    }
  }, [passengerData, busStopData]);

  return dataReady ? (
    <ReactMapGL
      id={"map"}
      {...viewport}
      width={mapStyles.width}
      height={mapStyles.height}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <NearestStopPaths viewport={viewport} mapStyles={mapStyles} />
      <PassengerMarkers />
      <BusStopMarkers />
    </ReactMapGL>
  ) : (
    <div></div>
  );
};

export default BusMap;
