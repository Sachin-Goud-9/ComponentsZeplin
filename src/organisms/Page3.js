import { Card, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux";
import LocationListItem from "../molecules/LocationListItem/LocationListItem";
import { PrimaryProfileDisplay } from "../molecules/ProfileItem/ProfileItem.stories";
import { JobSearch } from "../molecules/searchTabs/jobSearch";
import { RenderJobCardsForPage3 } from "./RenderJobCards/RenderJobCardsForPage3";
import Right from "./RightGrid/Right";
import SideNavBar from "./SideNavbar";
import TopNavBar from "./TopNavBar/TopNavBar";


const useStyles = makeStyles((theme) => ({
    leftGrid:{
        width: "100%",
        height: "900px"
    },
    rightInnerGrid: {
        padding: "10px 10px 10px 10px"
    }
}))

export function Page3(props){
    const classes = useStyles();
    const text =  ["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"];
    const state = useSelector((state => state.jobsDescription))
    return(
        <div>
            <Grid container direction="row">
                {/* <Grid item className = {classes.leftGrid}>
                    <SideNavBar selectedIndex = {1}/>
                </Grid> */}
                <Grid item className = { classes.leftGrid} >
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
                        
                            {
                                state.previewJobDescription && <Right job = { state.jobInShowJob }/> 
                            }
                            
                        </Grid>                                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}