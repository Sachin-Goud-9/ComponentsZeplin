import { Card, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux";
import { JobCardForPage3 } from "../molecules/JobCard/JobCardForPage3";
import LocationListItem from "../molecules/LocationListItem/LocationListItem";
import { PrimaryProfileDisplay } from "../molecules/ProfileItem/ProfileItem.stories";
import { JobSearch } from "../molecules/searchTabs/jobSearch";
import { RenderJobCardsForPage4 } from "./RenderJobCards/RenderJobCardsForPage4";
import Right from "./RightGrid/Right";
import SideNavBar from "./SideNavbar";
import TopNavBar from "./TopNavBar/TopNavBar";


const useStyles = makeStyles((theme) => ({
    leftGrid:{
        width: "20%",
        height: "900px"
    },
    rightGrid: {
        width: "100%",
        height: "900px",
        //margin: 0 0 30px;
    },
    rightInnerGrid: {
        padding: "10px 10px 10px 10px"
    }
}))

export function Page4(props){
    const classes = useStyles();
    const text =  ["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"];
    const state = useSelector((state => state.jobsDescription))
    const isFindJob = props.isFindJob
    return(
        <div>
            <Grid container direction="row">
                {/* <Grid item className = {classes.leftGrid}>
                    <SideNavBar selectedIndex = {2} />
                </Grid> */}
                <Grid item className = { classes.rightGrid}>
                    {isFindJob &&
                    <Grid>
                        <Typography variant="h6" style = {{ paddingBottom: "20px", fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                            Find Jobs
                        </Typography>
                        <JobSearch/>
                    </Grid>
                    }
                    <Grid xs={12} container direction="row">
                        <Grid xs={8}>
                            <Typography variant="h6" style = {{ paddingTop: "20px", paddingBottom:"5px",  fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                                Job list
                            </Typography>
                            <Typography variant="h1" style = {{ paddingBottom:"20px",  fontSize: "15px", fontFamily: "Montserrat", textAlign: "left", color: "grey" }}>
                                Based on your search
                            </Typography>  
                            <RenderJobCardsForPage4/>
                            {/* {
                                console.log(state.jobsInSavedJobs),
                                state.jobsInSavedJobs && state.jobsInSavedJobs.map((item) => (
                                    <JobCardForPage3 job = { item } />
                                ))
                            } */}
                        </Grid>
                        <Grid xs={4}>
                        
                            
                            
                        </Grid>                                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}