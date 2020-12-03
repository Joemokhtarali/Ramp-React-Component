import React from "react";
import Time from "./Time";
// import Instruction from './Instructions'

export default function Ramp(props) {
  let input = props.input;

  const renderApp = () => {
    switch (input) {
      case "":
        return (
            <div style={{ textAlign: "center" }}>
            <h3>Instructions</h3>
            <ul>
              <li>If the prop is undefined or falsy, the output should be the Time.</li>
              <li>If the prop is an array, the output should be a list of divs.</li>
              <li>
                If the prop is anything else, the output should be the same value.
              </li>
            </ul>
          </div>
        );
      case undefined || false || "undefined":
        return (
            <Time />
        );
      default:
        return <div>{input}</div>;
    }
  };

  if (input.charAt(0) === "[" && input.charAt(input.length - 1) === "]") {
    let array = JSON.parse(input);
    return (
      <div>
        <ul>
          {array.map((ele, i) => {
            return <div key={i}>{ele}</div>;
          })}
        </ul>
      </div>
    );
  }

  return <div style={{ height: "500px", width: "500px" }}>{renderApp()}</div>;
}

// let array;
//   let  parsed = JSON.parse(input)
// array = arrayErrorHandler(input);
  

//   const arrayErrorHandler = (input) => {
//       array = JSON.parse((response) => {
//       if (response) {
//         try {
//           return JSON.parse(input)
//         } catch (e) {
//           alert(e); // error in the above string (in this case, yes)!
//         }
//       }
//     })
//   }