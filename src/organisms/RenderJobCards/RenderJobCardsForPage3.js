import { Grid } from "@material-ui/core";
import React from "react";
import { JobCardForPage3 } from "../../molecules/JobCard/JobCardForPage3";
import jobCardDetails from "./jobCardDetails"





export function RenderJobCardsForPage3(props){
    return(
        <div>
            {/* <Grid container direction="row"> */}
            {jobCardDetails && Object.keys(jobCardDetails).map(
                jobCardContent => (
                    <JobCardForPage3 
                        id = { jobCardContent.id }
                        logo = {jobCardContent.logo }
                        location = { jobCardContent.location }
                        roleName = { jobCardContent.roleName }
                        companyName = { jobCardContent.companyName } 
                        icons = { jobCardContent.icons } />
            ))}
            {/* </Grid> */}
        </div>
    );
}