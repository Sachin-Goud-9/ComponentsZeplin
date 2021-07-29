import { Card, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { useSelector } from "react-redux";
import { JobCardForPage3 } from "../molecules/JobCard/JobCardForPage3";
import LocationListItem from "../molecules/LocationListItem/LocationListItem";
import { PrimaryProfileDisplay } from "../molecules/ProfileItem/ProfileItem.stories";
import { JobSearch } from "../molecules/searchTabs/jobSearch";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
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
        width: "80%",
        height: "900px",
        //margin: 0 0 30px;
    },
    rightInnerGrid: {
        padding: "10px 10px 10px 10px"
    }
}))

export function RenderPage3and4(props){
    const classes = useStyles();
    const state = useSelector((state => state.showPage));
    const pageToBeDisplayed = state.pageToBeDisplayed;
    const [isFindJob, setIsFindJob] = React.useState(true)

    const handleIsFindJob = () => {
        setIsFindJob(false)
    }
    return(
        <div>
            <Grid container direction="row">
                <Grid item className = {classes.leftGrid}>
                    <SideNavBar selectedIndex = {-1} />
                </Grid>
                <Grid item className = { classes.rightGrid}>
                <TopNavBar locationItem= { <LocationListItem children="East Marredpally, Secunderabad"/> } profileItem = { <PrimaryProfileDisplay   play /> }/>
                    {isFindJob &&
                    <Grid>
                        <Typography variant="h6" style = {{ paddingBottom: "20px", fontSize: "20px", fontFamily: "Montserrat", textAlign: "left" }}>
                            Find Jobs
                        </Typography>
                        <JobSearch/>
                    </Grid>
                    }
                    {
                                state.pageToBeDisplayed==="PAGE2" && <Page2/>
                    }
                    {       
                                state.pageToBeDisplayed==="PAGE3" && <Page3/>
                    }
                    {
                                state.pageToBeDisplayed==="PAGE4" &&  <Page4/> 
                    }
                </Grid>
            </Grid>
        </div>
    );
}