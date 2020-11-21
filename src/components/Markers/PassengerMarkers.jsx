import { render } from "@testing-library/react";
import React, { useContext, useState } from "react";
import { Marker } from "react-map-gl";

import redMarker from "../../assets/icons/red_marker_24.png";
import { PassengerContext } from "../../PassengerContext";

const PassengerMarkers = () => {
  const [passengerData, setPassengerData] = useContext(PassengerContext);

  const renderMarkers = () => {
    return passengerData.map((passengerLocation) => {
      return (
        <Marker
          latitude={passengerLocation.lat}
          longitude={passengerLocation.lon}
          offsetLeft={-12}
          offsetTop={-24}
        >
          <img src={redMarker} />
        </Marker>
      );
    });
  };

  return <div>{renderMarkers()}</div>;
};

export default PassengerMarkers;
