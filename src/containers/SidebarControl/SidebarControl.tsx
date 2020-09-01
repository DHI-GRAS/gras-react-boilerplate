import React from "react";

import { AppContext } from "./../../App";
import { Box, IconButton } from "@material-ui/core";
import { iconStyle } from "./../../styles/global";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type SidebarControlProps = {
  mobile?: boolean;
};

const SidebarControl: React.FC<SidebarControlProps> = ({ mobile = false }) => {
  const {
    actions: { handleToggleDrawer },
    state: { openSidebar },
  } = React.useContext(AppContext);

  const classes = iconStyle();

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
    </Box>
  );
};

export default SidebarControl;
