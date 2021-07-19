import React from "react";
import { TextField, ThemeProvider, InputAdornment } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import customtheme from "../../../theme"
const Customtextfield = (props) => {
  return (
    <ThemeProvider theme={customtheme}>
      <TextField
        placeholder="Enter Location"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon style={{ color: "lightgrey" }} />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
};

export default Customtextfield;
