import React from "react";
import Time from "./Time";

export default function Ramp(props) {
  let input = props.input;

  const renderApp = () => {
    switch (input) {
      case "":
        return (
          <div style={{ textAlign: "center" }}>
            <h3>Instructions</h3>
            <ul>
              <li>
                If the prop is undefined or falsy, the output should be the
                Time.
              </li>
              <li>
                If the prop is an array, the output should be a list of divs.
              </li>
              <li>
                If the prop is anything else, the output should be the same
                value.
              </li>
            </ul>
          </div>
        );
      case undefined || false || "undefined":
        return (
          <div> <Time /></div>
        );

      default:
        return <div>{input}</div>;
    }
  };

  return <div style={{ height: "500px", width: "500px" }}>{renderApp()}</div>;
}
