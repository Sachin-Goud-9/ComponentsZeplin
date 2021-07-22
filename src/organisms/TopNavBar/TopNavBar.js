import React from "react";

import { Grid } from "@material-ui/core";

function TopNavBar({ locationItem, profileItem }) {
    return (
            <Grid container xs={12}>
                <Grid container xs={6} direction="row" alignItems="center" justifyContent="flex-start">
                    <Grid item >
                        {locationItem}
                    </Grid>
                </Grid>
                <Grid container xs={6} direction="row" alignItems="center" justifyContent="flex-end">
                    <Grid item justifyContent="flex-end" >
                        {profileItem}
                    </Grid>
                </Grid>
            </Grid>
    );


}

export default TopNavBar;