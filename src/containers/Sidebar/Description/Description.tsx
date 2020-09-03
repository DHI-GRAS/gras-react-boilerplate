import * as React from "react";
import { Box, Typography } from "@material-ui/core";

const Description: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Description</Typography>
      <Box p={2}>
        <Typography variant={"body2"}>
          Your app description goes here...
        </Typography>
      </Box>
    </>
  );
};

export default Description;
