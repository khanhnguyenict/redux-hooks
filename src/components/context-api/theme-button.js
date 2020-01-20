import React from "react";

import Theme from "./theme";

const ThemedButton = props => {
    return (
        <Theme.Consumer>
        {theme => <button {...props}> button with them: {theme} </button>}
      </Theme.Consumer>
    )
 
}
export default ThemedButton;
