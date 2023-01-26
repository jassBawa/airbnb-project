import React, { useMemo, useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  //   Transform the object into required object
  const coorindates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // get the center of the coorindates
  const center = getCenter(coorindates);

  // setting up state for map default value
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGl
      className="relative"
      mapStyle="mapbox://styles/jassbawa/clddb6gm5001701rvqunasndc"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onMove={(evt) => setViewPort(evt.viewState)}
    />
  );
}

export default Map;
