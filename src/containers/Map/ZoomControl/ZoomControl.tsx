import * as React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, Grid, Box } from "@material-ui/core";
// import { iconStyle } from "styles/global";

// import "./../styles/searchbar.css";
type ZoomControlProps = {
  setZoom: any;
  zoom: number | undefined;
};

const ZoomControl: React.FC<ZoomControlProps> = ({ setZoom, zoom }) => {
  const gridStyle: React.CSSProperties = {
    position: "fixed",
    left: 0,
    top: "calc(50% - 36px)",
    width: 36,
    boxShadow: "rgba(0, 0, 0, 0.16) 4px 0px 4px",
    zIndex: 100,
    background: "#fff",
  };
  return (
    <Box style={gridStyle}>
      <Grid container>
        <Grid container>
          <IconButton onClick={() => setZoom(zoom && zoom + 1)}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid container>
          <IconButton onClick={() => setZoom(zoom && zoom - 1)}>
            <RemoveIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ZoomControl;
