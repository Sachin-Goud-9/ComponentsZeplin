import { Divider, Grid, TextField } from "@material-ui/core";
import { LocationOn, WorkOutline } from "@material-ui/icons";
import React from "react";

export function JobSearch(props){
    return(
        <div>
            <Grid container direction="row">
                <Grid direction="column">
                    <WorkOutline></WorkOutline>
                    <TextField>
                        Search Skills
                    </TextField>
                </Grid>
                <Divider flexItem width="5px" orientation="vertical"/>
                <Grid direction="column">
                    <LocationOn></LocationOn>
                    <TextField>
                        Location
                    </TextField>
                </Grid>
            </Grid>
        </div>
    );
}