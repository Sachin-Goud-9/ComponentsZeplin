import { Card, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import LocationListItem from "../molecules/LocationListItem/LocationListItem";
import { PrimaryProfileDisplay } from "../molecules/ProfileItem/ProfileItem.stories";
import { JobSearch } from "../molecules/searchTabs/jobSearch";
import { RenderJobCardsForPage3 } from "./RenderJobCards/RenderJobCardsForPage3";
import Right from "./RightGrid/Right";
import SideNavBar from "./SideNavbar";
import TopNavBar from "./TopNavBar/TopNavBar";


const useStyles = makeStyles((theme) => ({
    leftGrid:{
        width: "20%",
        height: "900px"
    },
    rightGrid: {
        width: "80%",
        height: "900px",
        //margin: 0 0 30px;
    },
    rightInnerGrid: {
        padding: "10px 10px 10px 10px"
    }
}))

export function Page3(props){
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row">
                <Grid item className = {classes.leftGrid}>
                    <SideNavBar/>
                </Grid>
                <Grid item className = { classes.rightGrid}>
                    <TopNavBar locationItem= { <LocationListItem children="East Marredpally, Secunderabad"/> } profileItem = { <PrimaryProfileDisplay /> }/>
                    <Grid>
                        <Typography variant="h6" style = {{ paddingBottom: "20px", fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                            Find Jobs
                        </Typography>
                        <JobSearch/>
                    </Grid>
                    <Grid xs={12} container direction="row">
                        <Grid xs={8}>
                            <Typography variant="h6" style = {{ paddingTop: "20px", paddingBottom:"5px",  fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                                Job list
                            </Typography>
                            <Typography variant="h1" style = {{ paddingBottom:"20px",  fontSize: "15px", fontFamily: "Montserrat", textAlign: "left", color: "grey" }}>
                                Based on your search
                            </Typography>  
                            <RenderJobCardsForPage3/>
                        </Grid>
                        <Grid xs={4}>
                            <Right/>
                        </Grid>                                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}