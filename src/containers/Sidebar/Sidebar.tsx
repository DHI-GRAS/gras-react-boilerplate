import * as React from "react";
import SidebarAccordion from "./partials/SidebarAccordion";
import Description from "./partials/Description";
import { SidebarTitle } from "@dhi-gras/react-components";
import { Paper } from "@material-ui/core";
import LogoBlue from "./../../assets/DHI_Logo_Blue.png";

import "./../../styles/scrollbar.css";

const Sidebar: React.FC = () => {
  return (
    <Paper
      style={{
        overflowX: "hidden",
        overflowY: "auto",
        height: "100%",
      }}
    >
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
