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
    const text =  ["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"];
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
                            <Right
                            imageSrc = "https://d17pjsg7x52x9r.cloudfront.net/assets/components/book_card/clock-b0e2e0235fbe1df824d662b2b3b96611e3711bf5b5c7556b8bd3828720f86dbc.svg"
                            positionAppliedName = "User Experience Designer"
                          companyName = "BMW"
                          locationName = "Hitech City Telangana"
                          head = "Description"
                          body = "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."
                          title = "What it takes"
                            text = {["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"]}
                            />
                        </Grid>                                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}