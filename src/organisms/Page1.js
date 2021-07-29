
import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AQI from "../molecules/aqi/aqi";
import { JobSearch } from "../molecules/searchTabs/jobSearch";
import HorizontalLinearStepper from "../molecules/stepper/CustomStepper";

const useStyles = makeStyles((theme) => ({
    leftGrid: {
        width: '890px',
        height: '900px',
        paddingLeft: "50px",

    },
    rightGrid:{
        width: '50%',
        height: '900px',
        backgroundColor: '#e7fce0'
    }
}));

const LocationPrimary = {
    text: "Enter location to know Time Air Quality Index (AQI)",
    imgPath: "yourLocation.png",
    isNumber: false,
    count:"",
    isNumberTag:false,
    numberTag:"",
    textSize:"26px",
    color:"#19293b",
}



export default function Page1(props){
    const classes = useStyles();
    return(
        <div>
            <Grid container direction='row'>
                <Grid item className={ classes.leftGrid}>
                    <HorizontalLinearStepper/>
                </Grid>
                <Grid item className={ classes.rightGrid}>
                    <AQI text= "Enter location to know Time Air Quality Index (AQI)"
                         imgPath= "yourLocation.png"
                         isNumber= "false"
                         count=""
                         isNumberTag="false"
                         numberTag=""
                         textSize="26px"
                        color="#19293b"/>
                </Grid>
                {/* <Grid item>
                    <JobSearch/>
                </Grid> */}
            </Grid>
        </div>
    );
}