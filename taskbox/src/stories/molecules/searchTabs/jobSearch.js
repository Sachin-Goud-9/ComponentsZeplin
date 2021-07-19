import { Grid, TextField } from "@material-ui/core";
import { LocationOn, WorkOutline } from "@material-ui/icons";
import React from "react";

export function JobSearch(props){
    return(
        <div>
            <Grid container>
                <Grid item>
                    <WorkOutline></WorkOutline>
                    <TextField>
                        Search Skills
                    </TextField>
                </Grid>
                <Grid item>
                    <LocationOn></LocationOn>
                    <TextField>
                        Location
                    </TextField>
                </Grid>
            </Grid>
        </div>
    );
}