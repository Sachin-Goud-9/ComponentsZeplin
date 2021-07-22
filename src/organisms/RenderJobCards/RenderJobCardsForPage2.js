import { Grid } from "@material-ui/core";
import React from "react";
import { JobCardForPage2 } from "../../molecules/JobCard/JobCardForPage2";
import jobCardDetails from './jobCardDetails'





export function RenderJobCardsForPage2(props){
    return(
        <div>
            {/* <Grid container direction="row"> */}
            {jobCardDetails && Object.keys(jobCardDetails).map(
                jobCardContent => (
                    <JobCardForPage2 
                        id = { jobCardContent.id }
                        logo = { jobCardContent.logo }
                        location = { jobCardContent.location }
                        roleName = { jobCardContent.roleName }
                        companyName = { jobCardContent.companyName } 
                        icons = { jobCardContent.icons } />
            ))}
            {/* </Grid> */}
        </div>
    );
}