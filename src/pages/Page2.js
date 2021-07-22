import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import SideNavBar from "../organisms/SideNavbar";

const useStyles = makeStyles((theme) => ({
    leftGrid:{
        width: "270px",
        height: "900px"
    }
}))


export function Page2(props){
    return(
        <div>
            <Grid>
                <Grid>
                    <SideNavBar/>
                </Grid>
            </Grid>
        </div>
    );
}