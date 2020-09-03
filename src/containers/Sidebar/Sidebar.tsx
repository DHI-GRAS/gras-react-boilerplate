import * as React from "react";
import SidebarAccordion from "./SidebarAccordion";
import Description from "./Description";
import { SidebarTitle } from "@dhi-gras/react-components";
import { Paper } from "@material-ui/core";
import LogoBlue from "assets/DHI_Logo_Blue.png";
import { sidebarStyle } from "./../../styles/global";

const Sidebar: React.FC = () => {
  const classes = sidebarStyle();
  return (
    <Paper className={classes.sidebarWrapper}>
      <SidebarTitle
        title="React/Typescript template"
        subTitle={["GRAS react boilerplate"]}
        image={LogoBlue}
      />
      <Description />
      <SidebarAccordion />
    </Paper>
  );
};

export default Sidebar;
