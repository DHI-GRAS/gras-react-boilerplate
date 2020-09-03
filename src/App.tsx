import * as React from "react";
import Map from "./containers/Map";
import Sidebar from "./containers/Sidebar";
import SidebarControl from "./containers/SidebarControl";
import { Box } from "@material-ui/core";
import { useWindowDimensions } from "./utils";
export const AppContext: any = React.createContext({});

const App: React.FC = () => {
  const [activeSidebarItem, setActiveSidebarItem] = React.useState(0);
  const [openSidebar, setOpenSidebar] = React.useState(true);
  const [view] = React.useState({
    longitude: 12.568337,
    latitude: 55.676098,
    zoom: 5.5,
  });
  const { width } = useWindowDimensions();

  const handleToggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <AppContext.Provider
      value={{
        state: { activeSidebarItem, openSidebar },
        actions: { handleToggleDrawer, setActiveSidebarItem },
      }}
    >
      <div
        style={{
          width: "100%",
          margin: 0,
          padding: 0,
          height: window.innerHeight,
        }}
      >
        {width > 600 ? (
          <Box display="flex" height={1} width={1}>
            <Box flexGrow={1}>
              <Map mobile={false} view={view} />
            </Box>
            {openSidebar && (
              <Box width={360} style={{ borderLeft: "1px solid #DBE4E9" }}>
                <Sidebar />
              </Box>
            )}
            <Box width={36} style={{ borderLeft: "1px solid #DBE4E9" }}>
              <SidebarControl />
            </Box>
          </Box>
        ) : (
          <Box display="flex" flexDirection="column" height={1} width={1}>
            <Box width={1} flexGrow={1}>
              <Map mobile={true} view={view} />
            </Box>
            {openSidebar && (
              <Box height={"50%"} width={1}>
                <Sidebar />
              </Box>
            )}
            <Box height={36} style={{ borderTop: "1px solid #DBE4E9" }}>
              <SidebarControl mobile={true} />
            </Box>
          </Box>
        )}
      </div>
    </AppContext.Provider>
  );
};
export default App;
