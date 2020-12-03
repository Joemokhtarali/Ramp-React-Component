import React from "react";
import Time from "./Time";

export default function Ramp(props) {
  let input = props.input;

  const renderApp = () => {
    if (input === "") {
      return (
        <div style={{ textAlign: "center" }}>
          <h3>Instructions</h3>
          <ul>
            <li>If the prop is undefined or falsy, the output should be the Time.</li>
            <li>If the prop is an array, the output should be a list of divs.</li>
            <li>If the prop is anything else, the output should be the same value.</li>
          </ul>
        </div>
      );
    }
  };

  return <div style={{ height: "500px", width: "500px" }}>{renderApp()}</div>;
}
