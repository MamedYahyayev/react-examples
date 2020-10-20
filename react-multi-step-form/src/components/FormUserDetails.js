import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export const FormUserDetails = (props) => {
  const continueStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={props.handleChange("firstname")}
          defaultValue={props.values.firstname}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={props.handleChange("lastname")}
          defaultValue={props.values.lastname}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={props.handleChange("email")}
          defaultValue={props.values.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueStep}
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
