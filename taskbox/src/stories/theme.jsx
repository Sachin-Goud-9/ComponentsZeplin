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


    root: {
      display : 'inline-flex',
      width : '330px',
      height : '60px',
      flexDirection : 'row',
      alignItems: 'center',
    },
    alignStart : {
      display : 'inline-flex',
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent : 'flex-start',
      width: '200px'
    },
    alignLast : {
      display : 'inline-flex',
      justifyContent : 'flex-end',
      alignItems : 'center',
      width:'130px',
      height : '60px'
    },
    cardDetailsDisplay : {
      display : 'flex',
      flexDirection : 'column',
      padding : '10% 10% 2% 3%',
      paddingTop : '0',
      gap : '4px'
    },
    typographyHeaderStyle : {
      fontFamily : 'Montserrat',
      color : '#19293b',
      fontSize : '16px',
      lineHeight : 1.5,
      letterSpacing : '0.1px'
    },
    typographyParagraphStyle : {
      fontFamily : 'Montserrat',
      color : '#5f7381',
      fontSize : '12px',
      lineHeight : 1.33,
      letterSpacing : '0.1px'
    },
    typographyBookNow : {
      color : '#5ac568',
      fontSize : '14px',
      alignItems : 'right',
      fontWeight : 600,
      fontFamily : 'Montserrat',
      float : 'right'
    }
  }
});

export default customtheme;
