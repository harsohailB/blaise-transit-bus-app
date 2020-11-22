import { findNearest } from "geolib";

// Finds nearest bus stop to given passenger location
export const getNearestBusStop = (passengerLocation, busStopLocations) => {
  // Locations are re-maped as geoLib takes different attribute names
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
