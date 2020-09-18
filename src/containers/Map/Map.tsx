import React from 'react';
import ReactMapGL, { FlyToInterpolator, ViewState } from 'react-map-gl';
import ZoomControl from './ZoomControl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { easeCubicInOut } from 'd3-ease';
const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

type MapProps = {
  mobile: boolean;
  view: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

const Map: React.FC<MapProps> = ({ mobile, view }) => {
  const [viewport, setViewport] = React.useState<ViewState | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (view) {
      const { latitude, longitude, zoom } = view;
      setViewport({
        ...{
          longitude: longitude,
          latitude: latitude,
          zoom: zoom,
          transitionDuration: 2000,
          transitionInterpolator: new FlyToInterpolator(),
          transitionEasing: easeCubicInOut,
        },
      });
    } // eslint-disable-next-line
  }, [view]);
  const setZoom: Function = (zoom: number) =>
    setViewport(viewport && { ...viewport, zoom });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken={accessToken}
      mapStyle={'mapbox://styles/mapbox/light-v9'}
      onViewportChange={setViewport}
    >
      {!mobile && (
        <ZoomControl setZoom={setZoom} zoom={viewport && viewport.zoom} />
      )}
    </ReactMapGL>
  );
};

export default Map;
