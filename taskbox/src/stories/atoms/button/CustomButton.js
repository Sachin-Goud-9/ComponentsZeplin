import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import customtheme from "../../../theme";
const Mybutton = (props) => {
  return (
    <ThemeProvider theme={customtheme}>
      <Button color={props.color} variant={props.variant} style={{}}>
        {props.text}
      </Button>
    </ThemeProvider>
  );
};

export default Mybutton;
