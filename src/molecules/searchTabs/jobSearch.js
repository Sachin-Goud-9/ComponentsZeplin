import { Divider, Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import { LocationOn, WorkOutline } from "@material-ui/icons";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    searchIcon:{
        backgroundColor: "blue",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius : "0%",
        borderBottomLeftRadius: "0%",
        
    }
}))


export function JobSearch(props){
    const classes = useStyles();
    return(
        <div>
            <Grid container direction="row">
                <Grid direction="colu0000mn">
                    <WorkOutline></WorkOutline>
                    <TextField placeholder="Search Skills">
                    </TextField>
                </Grid>
                <Divider flexItem w orientation="vertical"/>
                <Grid direction="column">
                    <LocationOn></LocationOn>
                    <TextField placeholder="Location">
                    </TextField>
                    <IconButton className = { classes.searchIcon}>
                        <SearchIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}