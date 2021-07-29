import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { JobCardForPage3 } from "../../molecules/JobCard/JobCardForPage3";
import jobCardDetails from "./jobCardDetails"





export function RenderJobCardsForPage3(props){
    const state = useSelector((state => state.jobs))
    const jobsInFindJobs = state.jobsInFindJobs
    return(
            <Grid container direction="column"> 
            
            {jobsInFindJobs.map((item) => (
                <JobCardForPage3 job = { item } />
            ))

            }
            </Grid> 
    );
}