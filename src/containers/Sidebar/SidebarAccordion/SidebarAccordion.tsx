import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AppContext } from "./../../../App";

const DefaultContent: React.FC = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
};

type dataProductType = {
  title: string;
  comp: React.FC;
};

const items = [
  { title: "Title 1", comp: DefaultContent },
  { title: "Title 2", comp: DefaultContent },
];

const SidebarAccordion = () => {
  const {
    actions: { setActiveSidebarItem },
    state: { activeSidebarItem },
  } = React.useContext(AppContext);

  return (
    <>
      <Typography variant="h3">Accordion items</Typography>
      {items &&
        items.map(({ title, comp: Component }: dataProductType, i: number) => (
          <Accordion key={i} expanded={activeSidebarItem === i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              onClick={() =>
                activeSidebarItem === i
                  ? setActiveSidebarItem()
                  : setActiveSidebarItem(i)
              }
            >
              <Typography variant="h5">{title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Component />
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};

export default SidebarAccordion;
