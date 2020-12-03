import React from "react";
import "./App.css";
import Ramp from "./Ramp";

function App() {
  const [input, setinput] = React.useState('');

  const changeInput = (event) => {
    setinput(event.target.value);
  };

  return (
    <div className="App" style={{ marginTop: "20%" }}>
      <div>
        <h2 style={{ color: "#6be0bf" }}> Welcome to Ramp!</h2>
        <input
          type="text"
          placeholder="Enter your input"
          value={input}
          onChange={changeInput}
        >
        </input>
      </div>

      <div style={{ marginLeft: "33%", marginTop: "5%", width: "500px" }}>
        <Ramp input={input} />
      </div>
    </div>
  );
}

export default App;
