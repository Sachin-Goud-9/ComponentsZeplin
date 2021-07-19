import React from "react";
import { TextField, ThemeProvider, InputAdornment, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import customtheme from "../../theme"
import { borders } from '@material-ui/system';

const Customtextfield = (props) => {
  const textFieldPlaceHolder = ['Enter your Location','Enter your job Location', 'Enter your skills']
  return (
    <ThemeProvider theme={customtheme}>
      <TextField
        placeholder={textFieldPlaceHolder[props.activeStep]}
        variant="outlined"
        borderRadius = {10}
        style={{ textAlign:"left"}}
        InputProps={{
          startAdornment: (
            <InputAdornment  position="start">              
              <LocationOnIcon style={{  color: "lightgrey" }} />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default Customtextfield;
