import React, { useState } from "react";
import useToggle from "./useToggle";

const AlertText = ({ text }) => {
  const [isVisible, toggleVisible] = useToggle(false);
  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <span>{text}</span>}
    </div>
  );
};
export default AlertText;
