import React from "react";
import AppBar from "material-ui/AppBar/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Navbar = () => (
  <MuiThemeProvider>
    <AppBar title="Pixabay Image Finder" />
  </MuiThemeProvider>
);
