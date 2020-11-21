import React, { useRef, useState } from "react";
import ReactMapGL from "react-map-gl";
import NearestStopPaths from "./NearestStopPaths";
import PassengerMarkers from "./Markers/PassengerMarkers";
import BusStopMarkers from "./Markers/BusStopMarkers";
import Legend from "./Legend";

const BusMap = () => {
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiaGFyc29oYWlsYnJhciIsImEiOiJja2hydzB2cTYwNXdzMnRwZ3E2cXo5aDRlIn0.bIydJEY6Hu3nE5zof0JwaQ";

  const [viewport, setViewport] = useState({
    latitude: 45.5129604703,
    longitude: -73.5729924601,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  const mapStyles = {
    width: "100vw",
    height: "92vh",
  };

  return (
    <ReactMapGL
      id={"map"}
      // onLoad={addLines}
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
      <Legend />
    </ReactMapGL>
  );
};

export default BusMap;
