import React, { Component } from "react";
import "./Graph.css";
import { LineChart } from "react-chartkick";
import "chart.js";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      blue_dict: {},
      red_dict: {}
    };
  }

  changeProps = () => {
    if (this.props.generation === 0) {
    } else {
      var blue_dictionary = this.state.blue_dict;
      blue_dictionary[this.props.generation] = this.props.blue_value;
      var red_dictionary = this.state.red_dict;
      red_dictionary[this.props.generation] = this.props.red_value;
      var table = [];
      table[0] = { name: "Blue-Lizards", data: blue_dictionary };
      table[1] = { name: "Red-Lizards", data: red_dictionary };
      this.setState({ data: table });
      this.setState({ blue_dict: blue_dictionary });
      this.setState({ red_dict: red_dictionary });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changeProps}>UPDATE</button>
        <LineChart
          id="users-chart"
          width="400px"
          height="400px"
          xtitle="Generation"
          ytitle="Population"
          legend="bottom"
          data={this.state.data}
        />
      </div>
    );
  }
}
