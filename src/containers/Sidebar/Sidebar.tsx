import * as React from "react";
// import DataProducts from "./DataProducts";
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
        title="Our template"
        subTitle={["Subtitle example"]}
        image={LogoBlue}
      />
      <Description />
      {/* <DataProducts /> */}
    </Paper>
  );
};

export default Sidebar;
