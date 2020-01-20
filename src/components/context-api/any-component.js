import React, { useState } from "react";
import ThemeContext from "./theme";
import ThemedButton from "./theme-button";

export default function AnyComponent() {
  const [data, setData] = useState({
    theme: "dark",
    themes: ["dark", "light"]
  });
  const handleSelect = evt => {
    console.log("Changing value to " + evt.target.value);

    setData({ ...data, theme: evt.target.value });
  };

  return (
    <>
      <h2>Any component</h2>
      <select value={data.theme} onChange={handleSelect}>
        {data.themes.map(t => (
          <option value={t}>{t}</option>
        ))}
      </select>


      <ThemeContext.Provider value={data.theme}>
        <ThemedButton theme={data.theme} />
      </ThemeContext.Provider>
    </>
  );
}
