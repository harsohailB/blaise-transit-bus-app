import { findNearest } from "geolib";

export const getNearestBusStop = (passengerLocation, busStopLocations) => {
  passengerLocation = {
    latitude: passengerLocation.lat,
    longitude: passengerLocation.lon,
  };

  busStopLocations = busStopLocations.map((busStopLocation) => {
    return {
      latitude: busStopLocation.lat,
      longitude: busStopLocation.lon,
    };
  });

  return findNearest(passengerLocation, busStopLocations);
};
