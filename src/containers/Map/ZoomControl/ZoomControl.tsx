import * as React from "react";
import { ReactComponent as MinusIcon } from "@mike/mike-shared-frontend/media/icons/Minus.svg";
import { ReactComponent as PlusIcon } from "@mike/mike-shared-frontend/media/icons/Plus.svg";
import { IconButton, Grid } from "@material-ui/core";
// import { iconStyle } from "styles/global";

// import "./../styles/searchbar.css";
type ZoomControlProps = {
  setZoom: any;
  zoom: number;
};

const ZoomControl: React.FC<ZoomControlProps> = ({ setZoom, zoom }) => {
  const gridStyle = {
    position: "fixed",
    left: 0,
    top: "calc(50% - 36px)",
    width: 36,
    boxShadow: "rgba(0, 0, 0, 0.16) 4px 0px 4px",
    zIndex: 100,
  };
  return (
    <Grid
      container
      // style={gridStyle}
    >
      <Grid container>
        <IconButton onClick={() => setZoom(zoom + 1)}>
          <PlusIcon />
        </IconButton>
      </Grid>
      <Grid container>
        <IconButton onClick={() => setZoom(zoom - 1)}>
          <MinusIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ZoomControl;
