import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { JobCardForPage3 } from "../../molecules/JobCard/JobCardForPage3";
import jobCardDetails from "./jobCardDetails"





export function RenderJobCardsForPage4(props){
    const state = useSelector((state => state.jobs))
    const jobsInSavedJobs = state.jobsInSavedJobs
    return(
            <Grid container direction="column"> 
            {jobsInSavedJobs.map((item) => (
                <JobCardForPage3 job = { item } disableCardActionArea = {false} />
            ))

            }
            </Grid> 
    );
}