import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFeching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
        // setAvailablePlaces(resData.places);
        // setIsFetching(false);
      } catch (err) {
        setError({
          message: err.message || "Could not find places try again later",
        });
        setIsFetching(false);
      }
    };
    fetchPlaces();
  }, []);

  if (error) {
    return (
      <Error
        title="An error occured"
        message={error.message}
        onConfirm={() => {}}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      loadingText="Fetching place data..."
      isLoading={isFeching}
    />
  );
}
