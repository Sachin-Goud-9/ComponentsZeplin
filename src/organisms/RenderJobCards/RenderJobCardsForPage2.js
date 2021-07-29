import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { JobCardForPage2 } from "../../molecules/JobCard/JobCardForPage2";





export function RenderJobCardsForPage2(props){
    // console.log(jobCardDetails[0].roleName)
    const state = useSelector((state => state.jobs))
    const jobsInFindJobs = state.jobsInFindJobs
    return(
            <Grid container direction="row">
            {/* {jobCardDetails && jobCardDetails.map(
                jobCardContent => (
                    <JobCardForPage2 
                        id = { [jobCardContent.id, console.log(jobCardContent.location)]}
                        logo = { jobCardContent.logo }
                        location = { jobCardContent.location }
                        roleName = { jobCardContent.roleName }
                        companyName = { jobCardContent.companyName } 
                        icons = { jobCardContent.icons } />
            ))} */}
            {jobsInFindJobs.map((item) => (
                <JobCardForPage2 job = { item } />
            ))
            }
            </Grid>
    );
}