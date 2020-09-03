import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";

import dhiLogo from "./../../assets/DHI_Logo_Blue.png";

const Navigation: React.FC = () => {
  const [isAuth] = React.useState(false);
  return (
    <AppBar
      position="relative"
      elevation={0}
      style={{
        backgroundColor: "#F2F5F7",
        borderBottom: " 2px solid #DBE4E9",
        padding: "0px 16px",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Toolbar disableGutters>
            <Box pl={1}>
              <img src={dhiLogo} style={{ width: 40 }} alt="DHI-GRAS logo" />
            </Box>
          </Toolbar>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "center" }}>
          <Typography variant="h6" color="primary" noWrap>
            GRAS React Boilerplate
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
            {isAuth ? (
              <></>
            ) : (
              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {}}
                >
                  Log in
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navigation;
