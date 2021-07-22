import { Grid } from "@material-ui/core";
import React from "react";
import { JobCardForPage2 } from "../../molecules/JobCard/JobCardForPage2";
import jobCardDetails from './jobCardDetails'





export function RenderJobCardsForPage2(props){
    // console.log(jobCardDetails[0].roleName)
    return(
        <div>
            {/* <Grid container direction="row"> */}
            {jobCardDetails && jobCardDetails.map(
                jobCardContent => (
                    <JobCardForPage2 
                        id = { [jobCardContent.id, console.log(jobCardContent.location)]}
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