import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export const Success = (props) => {
  const continueStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const backStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };

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

const styles = {
  button: {
    margin: 15,
  },
};
