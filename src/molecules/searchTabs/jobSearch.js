import { Button, Divider, Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import { LocationOn, WorkOutline } from "@material-ui/icons";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from "react-redux";
import { showPage } from "../../store/actions";

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
    const dispatch = useDispatch();
    const [valInSearchSkills,setValInSearchSkills] = React.useState('');

    const handleChangeForTextInSearchSkills = (newVal) => {

        setValInSearchSkills(newVal)
    }

    const handleChange = () => {
        // const searchValue = event.target.value
        // console.log(newVal,"dfsg")
        if(valInSearchSkills===''){
            alert('Enter the Search Skills')
        }
        else{
            dispatch(showPage("PAGE3"))
        }
    }

    return(
        <div>
            <Grid container direction="row">
                <Grid direction="colu0000mn">
                    <WorkOutline></WorkOutline>
                    <TextField onInput= {(event) => handleChangeForTextInSearchSkills(event.target.value)} placeholder="Search Skills">
                    </TextField>
                </Grid>
                <Divider flexItem w orientation="vertical"/>
                <Grid direction="column">
                    <LocationOn></LocationOn>
                    <TextField placeholder="Location" >
                    </TextField>
                    <Button className = { classes.searchIcon} onClick = {(event) => { handleChange() }}>
                        <SearchIcon/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}