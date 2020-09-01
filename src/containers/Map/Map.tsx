import React from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import ZoomControl from "./ZoomControl";
import { AppContext } from "./../../App";

import "mapbox-gl/dist/mapbox-gl.css";

// const { token: accessToken } = require("config.json");
type MapProps = {
  mobile: boolean;
  view: Object;
};

const Map: React.FC<MapProps> = ({ mobile, view }) => {
  const {
    state: { activeProducts },
  } = React.useContext(AppContext);
  const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const [viewport, setViewport] = React.useState();
  return (
    <ReactMapGL
      {...viewport}
      mapStyle={
        activeProducts === 8
          ? "mapbox://styles/mapbox/satellite-v9"
          : "mapbox://styles/mapbox/light-v9"
      }
      width="100%"
      height="100%"
      mapboxApiAccessToken={accessToken}
      onViewportChange={setViewport}
    >
      {/* {!mobile && (
        <ZoomControl setZoom={setZoom} zoom={viewport && viewport.zoom} />
      )} */}
    </ReactMapGL>
  );
};

export default Map;
