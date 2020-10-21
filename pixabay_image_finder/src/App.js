import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
