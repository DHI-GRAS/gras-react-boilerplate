import React from "react";

import { AppContext } from "./../../App";
import { Box, IconButton, Grid, Tooltip } from "@material-ui/core";
import { iconStyle } from "./../../styles/global";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const icons: Array<{ id: number; component: React.FC; tooltip: string }> = [
  // {
  //   id: 1,
  //   component: ExpandMoreIcon,
  //   tooltip: "Information",
  // },
];

type SidebarControlProps = {
  mobile?: boolean;
};

const SidebarControl: React.FC<SidebarControlProps> = ({ mobile = false }) => {
  const {
    actions: { handleToggleDrawer },
    state: { openSidebar },
  } = React.useContext(AppContext);

  const classes = iconStyle();
  const handleTab = (id: number) => {
    // handle sidebar tabs
  };
  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection={mobile === true ? "row" : "column"}
      style={{ overflowY: "auto", height: "100%" }}
    >
      <Box>
        <IconButton
          onClick={handleToggleDrawer}
          style={{ backgroundColor: "#fff" }}
        >
          {openSidebar === true && mobile !== true && (
            <ChevronRightIcon className={classes.icon} color="primary" />
          )}
          {openSidebar === false && mobile !== true && (
            <ChevronLeftIcon className={classes.icon} color="primary" />
          )}
          {openSidebar === true && mobile === true && (
            <ExpandMoreIcon className={classes.icon} color="primary" />
          )}
          {openSidebar === false && mobile === true && (
            <ExpandLessIcon className={classes.icon} color="primary" />
          )}
        </IconButton>
      </Box>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "calc(100% - 72px)" }}
      >
        {icons.map(({ id, component: Component, tooltip }) => (
          <Tooltip placement="left" key={id} title={tooltip}>
            <IconButton onClick={() => handleTab(id)}>
              <Component />
            </IconButton>
          </Tooltip>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarControl;
