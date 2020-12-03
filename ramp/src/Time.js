import React from "react";

export default class Time extends React.Component {
  state = {
    time: new Date(),
  };

  updateTime = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentWillMount() {
    this.timeInt = setInterval(() => this.updateTime(), 1000);
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>
  }
}
