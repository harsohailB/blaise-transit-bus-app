import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Marker, Popup } from "react-map-gl";
import { Tooltip } from "@material-ui/core";

import blueMarker from "../../assets/icons/blue_marker_24.png";
import { BusStopContext } from "../../BusStopContext";

const Image = styled.img`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const BusStopMarkers = () => {
  const [busStopData, setBusStopData] = useContext(BusStopContext);

  const renderMarkers = () => {
    return busStopData.map((busStop) => {
      return (
        <Marker
          latitude={busStop.lat}
          longitude={busStop.lon}
          offsetLeft={-12}
          offsetTop={-24}
        >
          <Tooltip placement="top" title={`Passengers: ${busStop.count}`}>
            <Image src={blueMarker} />
          </Tooltip>
        </Marker>
      );
    });
  };

  return <div>{renderMarkers()}</div>;
};

export default BusStopMarkers;
