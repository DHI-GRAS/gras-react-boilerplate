import { createMuiTheme } from "@material-ui/core/styles";

const grasTheme = createMuiTheme({
  themeName: "GRAS Theme",
  palette: {
    primary: {
      main: "#0B4566", // DHI Primary color
    },
    secondary: {
      main: "#00A4EC", // Automatically generated secondary color
      "&:hover": "#0076C8",
    },
    medium: {
      grey: {
        light: {
          color: "#F2F5F7",
        },
      },
    },
  },
  flexLayout: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 700,
      color: "#00A4EC",
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      color: "#0b4566",
    },
    h3: {
      color: "#0B4566",
      fontSize: 14,
      fontWeight: 500,
      backgroundColor: "#F2F5F7",
      padding: "8px 16px",
      borderTop: "1px solid #DBE4E9",
      borderBottom: "1px solid #DBE4E9",
    },
    h4: { fontSize: 12, fontWeight: 400, color: "#86a2b3" },
    h5: { color: "#0B4566", fontSize: 12 },
    h6: {
      color: "#0B4566",
      fontSize: 14,
      backgroundColor: "#F2F5F7",
      padding: "8px 16px",
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: "bold",
    },
    body2: {
      fontSize: 12,
    },
  },
  drawerColor: "#ffffff",
  drawerWidth: "50vw",
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#00A4EC",
        color: "#fff",
        fontSize: 12,
        textTransform: "initial",
        padding: "8px 16px",
        "&:disabled": {
          backgroundColor: "#97DBF9",
          color: "#fff",
        },
        "&:hover": {
          backgroundColor: "#0076C8",
        },
      },
      containedSecondary: {
        backgroundColor: "#00A4EC",
        color: "#fff",
        "&:disabled": {
          backgroundColor: "rgb(242, 245, 247)",
          color: "rgba(207,219,226)",
        },
        "&:hover": {
          backgroundColor: "#0076C8",
        },
      },
    },
    MuiCardContent: {
      root: {
        padding: 0,
        "&:last-child": {
          paddingBottom: 0,
        },
      },
    },
    MuiCheckbox: {
      root: {
        padding: "0px",
        MuiSvgIcon: {
          root: {
            width: "12px",
          },
        },
      },
    },
    MuiAccordion: {
      root: {
        "&$expanded": {
          margin: 0,
        },
        "&:before": {
          backgroundColor: "none",
        },
      },
    },
    MuiAccordionDetails: {
      root: {
        borderBottom: "1px solid #DBE4E9",
        padding: 16,
      },
    },
    MuiAccordionSummary: {
      content: {
        margin: "8px 0px ",
        "&$expanded": {
          margin: "8px 0px ",
        },
      },
      root: {
        backgroundColor: "#F8F8F8",
        borderBottom: "1px solid #DBE4E9",
        padding: "0px 16px",
        minHeight: 0,
        "&$expanded": {
          minHeight: 0,
          backgroundColor: "#F2F5F7",
        },
        "&:hover": {
          backgroundColor: "#F2F5F7",
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        width: "50%",
        marginLeft: "0px",
        marginRight: "0px",
        "Mui-disabled": {
          "-webkit-text-fill-color": "rgba(207,219,226)",
          opacity: 1,
        },
      },
      label: {
        fontSize: "12px",
        paddingLeft: ".2rem",
      },
    },
    MuiIconButton: {
      root: {
        width: 36,
        height: 36,
        padding: 0,
        borderRadius: 0,
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 12,
        color: "#0B4566",
        padding: "6px 0px",
      },
      input: {
        padding: 0,
        color: "#0B4566",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#0B4566",
        fontSize: 12,
        padding: 2,
      },
    },

    MuiPaper: {
      root: {
        color: "#0B4566",
      },
      rounded: {
        borderRadius: 0,
      },
      elevation1: {
        boxShadow: "none",
      },
    },
    MuiPickersBasePicker: {
      pickerView: { minHeight: 0 },
    },
    MuiPickersCalendar: {
      transitionContainer: { minHeight: 170 },
    },
    MuiPickersDay: {
      day: {
        height: 32,
        padding: "8px 0px",
      },
      daySelected: {
        borderRadius: 4,
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: 56,
        "@media (min-width: 600px)": {
          minHeight: 56,
        },
      },
    },
  },
});

export default grasTheme;
