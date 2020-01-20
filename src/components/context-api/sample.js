import React from "react";
import Theme from "./theme";
import './style.css';
import ThemedButton from "./theme-button";

const sample = () => (
  <Theme.Provider value="hihi">
    <ThemedButton/>
  </Theme.Provider>
);

export default sample;
