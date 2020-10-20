import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export const FormPersonalDetails = (props) => {
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
        <AppBar title="Enter User Personal Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={props.handleChange("occupation")}
          defaultValue={props.values.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={props.handleChange("city")}
          defaultValue={props.values.city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={props.handleChange("bio")}
          defaultValue={props.values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueStep}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={backStep}
        />
      </Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};
