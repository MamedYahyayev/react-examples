import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export const Confirm = (props) => {
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
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem
            primaryText="First Name"
            secondaryText={props.values.firstname}
          />
          <ListItem
            primaryText="Last Name"
            secondaryText={props.values.lastname}
          />
          <ListItem primaryText="Email" secondaryText={props.values.email} />
          <ListItem
            primaryText="Occupation"
            secondaryText={props.values.occupation}
          />
          <ListItem primaryText="City" secondaryText={props.values.city} />
          <ListItem primaryText="Bio" secondaryText={props.values.bio} />
        </List>
        <br />
        <RaisedButton
          label="Confirm & Continue"
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
