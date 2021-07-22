import React from "react";
import { TextField, ThemeProvider, InputAdornment } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import customtheme from "../../theme";


const CustomTextField = ({locationPlaceholder}) => {

  return (
    <ThemeProvider theme={customtheme}>
      <TextField
        placeholder={locationPlaceholder}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon style={{ color: "#9bbdcb" }} />
            </InputAdornment>
          ),
        }}
        size="large"
      />
    </ThemeProvider>
  );
};

export default CustomTextField;
