import { createMuiTheme } from "@material-ui/core";

const customtheme = createMuiTheme({
  palette: {
    primary: {
      main: "#5ac568",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#9bbdcb",
      contrastText: "#9bbdcb",
    },
  },
  overrides:{
    MuiButton: {
      root: {
          textTransform: 'none'
      }
    },
    MuiStepLabel:{
      label:{
        "&$completed":{
          color: "#5ac568",
          fontWeight: "bold"
        },
        "&$active":{
          color: "#5ac568",
          fontWeight: "bold"
        },
      },
    },
    MuiSvgIcon:{
      root:{
        width: '1.5em',
        height: '1.5em',
      },
    },
    MuiTypography:{
      body1:{
        fontFamily: "Montserrat",
        fontWeight: "bolder",
      },
      body2:{
        fontFamily: "Montserrat",
        fontWeight: "bolder",
      },
    },
    MuiStepConnector:{
      root:{
        flex:"0.05",
      },
    },
    // MuiStepIcon:{
    //   root:{
    //     color:"#e3f3f6",
    //   },
    //   text:{
    //     fill: "#5f7381",
    //   },
    // },
  }
});

export default customtheme;
