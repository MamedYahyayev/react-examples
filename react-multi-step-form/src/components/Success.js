import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export const Success = (props) => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Success" />
        <h1>Thank you for your submittion</h1>
        <p>You will get an email for further instruction</p>  
      </Fragment>
    </MuiThemeProvider>
  );
};