import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {  Box , Grid , Container , Typography ,Tab , Tabs , AppBar, ThemeProvider } from '@material-ui/core';

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

import MyTypography from '../../atoms/MyTypography/MyTypography';

import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
    root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            width : '390px'
    },
    typographyHeaderStyle : {
            fontFamily : 'Montserrat',
            color : '#19293b',
            fontSize : '16px',
            lineHeight : 1.5,
            letterSpacing : '0.1px',
            fontWeight : 500
    },
    typographyBodyStyle : {
        fontFamily : 'Montserrat',
        color : '#19293b',
        fontSize : '14px',
        lineHeight : 1.57,
        letterSpacing : '0.1px',
        fontWeight : 500
    },
    linkStyles : {
        color : '#5ac568',
        fontWeight : 600,
        lineHeight : 1.29
    },
    link : {
        textDecoration : 'none'
    },
    header : {
        display : 'inline-flex',
        flexDirection : 'row',
        alignItems : 'center'
    },
    right: {
        marginLeft: 'auto'
    },
    directionsDiv : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        gap : '10px',
        justifyContent : 'flex-start',
        padding : '10px 0px 10px 0px'
    },
    innerDirectionDivText : {
        color : '#5f7381',
        fontSize : '12px',
        fontWeight : 500 ,
        lineHeight : 1.33,
        letterSpacing : '0.2px',
    },
    arrivalTimeText : {
        color : 'red',
        fontSize : '12px',
        fontWeight : 500 ,
        lineHeight : 1.33,
        letterSpacing : '0.2px',
    },
    locationTimeCostText : {
        color : '#5f7381',
        fontSize : '11px',
        fontFamily : 'Montserrat',
        lineHeight : 1.6,
        letterSpacing : '0.2px',
        fontWeight : '500'
    },
    travelInfoDiv : {
        display : 'flex',
        flexDirection : 'column' ,
    }
}));

const travelInfoCardTheme = createTheme({
    overrides : {
        MuiTab : {
            root : {
                '@media (min-width: 600px)': {
                    height: '48px',
                    minWidth : '48px'
                },
                borderBottomColor : '#0000ff'
            },
            textColorInherit : {
                '&$selected': {
                    backgroundColor:  '#5ac568',
                    color : 'white',
                    borderBottomColor : '#0000ff',
                    '&:hover' : {
                        backgroundColor: '#5ac568'
                    }	
                }
            }
        },
        MuiBox : {
            root : {
                padding : '0px 24px 24px 0px',
            }
        },
        MuiButtonBase : {
            root : {
                borderRadius : '50%',
                borderBottomColor : '#0000ff'
            }
        },
        MuiPaper : {
            root : {
                variant : 'elevation',
                elevation0 : 0
            } 
        },
        MuiAppBar : {
            colorTransparent : {
                boxShadow : 'none'
            }
        },
        PrivateTabIndicator : {
            colorSecondary : {
                backgroundColor : 'transparent'
            }
        }
    }
});

const responsiveTravelCardTheme = responsiveFontSizes(travelInfoCardTheme);

export default function JobCardInfo({mapImageSrc , srcLocation , destLocation}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={responsiveTravelCardTheme}>
        <div className={classes.root}>
        
        <Container>

            <Grid container alignItems="center">
                <Grid>
                    <MyTypography variant="h4" className={classes.typographyHeaderStyle}>{"Your options"}</MyTypography>
                </Grid>
                <Grid className={classes.right}>
                    <AppBar position="static" color="transparent">
                        <Tabs value={value} onChange={handleChange} >
                        <Tab label={<TrainOutlinedIcon />} {...allyProps(0)} />
                        <Tab label={<DirectionsBusOutlinedIcon />} {...allyProps(1)} />
                        <Tab label={<LocalTaxiOutlinedIcon />} {...allyProps(2)} />
                        <Tab label={<MotorcycleOutlinedIcon />} {...allyProps(3)} />
                        </Tabs>
                    </AppBar>           
                </Grid>
            </Grid> 

            <br />

            <Grid container alignItems="center">
                <Grid>
                    <MyTypography variant="h4" className={classes.typographyBodyStyle}>{srcLocation + "-" + destLocation}</MyTypography>
                </Grid>
                <Grid className={classes.right}>
                    <MyTypography variant="h4" className={classes.typographyBodyStyle}>{"Rs 65" + ' • ' + "58 mins"}</MyTypography>
                </Grid>
            </Grid> 

            <br />

            <TabPanel value={value} index={0}>

                <Grid className={classes.travelInfoDiv}>
                    <Grid className={classes.directionsDiv}>
                        <Grid>
                            <DirectionsBusOutlinedIcon />
                        </Grid>
                        <Grid>
                            <MyTypography className={classes.innerDirectionDivText}>
                                {
                                    "Catch a bus 38X at 3:42 PM to Secunderabad bus stand"
                                }
                            </MyTypography>
                            <MyTypography className={classes.arrivalTimeText}>
                                {"2 mins late"}
                            </MyTypography>
                        </Grid>
                    </Grid>


                    <Grid>
                        <MyTypography className={classes.locationTimeCostText}>
                            {"Rs 65" + ' • ' + "20 mins"}
                        </MyTypography>
                    </Grid>
                </Grid>

                <Grid className={classes.travelInfoDiv}>
                    <Grid className={classes.directionsDiv}>
                        <Grid>
                          <DirectionsWalkIcon />
                        </Grid>
                        <Grid>
                            <MyTypography className={classes.innerDirectionDivText}>
                                {
                                    "Head north on St.John's road"
                                }
                            </MyTypography>
                        </Grid>
                    </Grid>


                    <Grid>
                        <MyTypography className={classes.locationTimeCostText}>
                            {"2 mins"}
                        </MyTypography>
                    </Grid>
                </Grid>

                <Grid className={classes.travelInfoDiv}>
                    <Grid className={classes.directionsDiv}>
                        <Grid>
                          <TrainOutlinedIcon />
                        </Grid>
                        <Grid>
                            <MyTypography className={classes.innerDirectionDivText}>
                                {
                                   "Catch a blue line metro towards Raidurg"
                                }
                            </MyTypography>
                            <MyTypography className={classes.arrivalTimeText}>
                                {"2 mins late"}
                            </MyTypography>
                        </Grid>
                    </Grid>


                    <Grid>
                        <MyTypography className={classes.locationTimeCostText}>
                            {"Rs 55" + ' • ' + "36 mins"}
                        </MyTypography>
                    </Grid>
                </Grid>
                
            </TabPanel>
            <TabPanel value={value} index={1}>
                {"Directions coming soon"}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {"Directions coming soon"}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {"Directions coming soon"}
            </TabPanel>

            <br />

            <a href="#" className={classes.link}><MyTypography className={` ${classes.typographyBodyStyle} ${classes.linkStyles}`} > {"View in google maps"}</MyTypography> </a>
        </Container>
        </div>

    </ThemeProvider>
  );
}
