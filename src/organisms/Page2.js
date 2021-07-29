import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LocationListItem from "../molecules/LocationListItem/LocationListItem";
import { PrimaryProfileDisplay } from "../molecules/ProfileItem/ProfileItem.stories";
import { JobSearch } from "../molecules/searchTabs/jobSearch";
import SideNavBar from "../organisms/SideNavbar";
import { RenderJobCardsForPage2 } from "./RenderJobCards/RenderJobCardsForPage2";
import TopNavBar from "./TopNavBar/TopNavBar";
import { TopNavBarPrimary } from "./TopNavBar/TopNavBar.stories";

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


export function Page2(props){
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row">
                {/* <Grid item className = {classes.leftGrid}>
                    <SideNavBar/>
                </Grid>
                <Divider flexItem/> */}
                <Grid item >
                    <Grid className = { classes.rightInnerGrid}>
                        <Typography variant="h6" style = {{ paddingTop: "20px", paddingBottom:"5px",  fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                            Recommend for you
                        </Typography>
                        <Typography variant="h1" style = {{ paddingBottom:"20px",  fontSize: "15px", fontFamily: "Montserrat", textAlign: "left", color: "grey" }}>
                            Based on your profile, skills and search history
                        </Typography>
                            {/* <JobCard logo = "images/hplogo.png" roleName = "User Experience Designer" companyName= 'Hp' 
                            location = 'Hyderabad, Telangana India' icons = {"LocalTaxiOutlinedIcon", "TrainOutlinedIcon" , "DirectionsBusOutlinedIcon"  , "MotorcycleOutlinedIcon" }/> */}
                            {/* <PrimaryJobCard/> */}
                            {/* <JobCard logo = "images/hplogo.png" roleName = "User Experience Designer" companyName= 'Hp' 
                            location = 'Hyderabad, Telangana India' icons = {"LocalTaxiOutlinedIcon", "TrainOutlinedIcon" , "DirectionsBusOutlinedIcon"  , "MotorcycleOutlinedIcon" }/> */}

                            <RenderJobCardsForPage2/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}