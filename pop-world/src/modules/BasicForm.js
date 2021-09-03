import React, { Component } from "react";
import {
  Form,
  Card,
  Button,
  ButtonGroup,
  Row,
  Col,
  ButtonToolbar
} from "react-bootstrap";
import ResultForm from "./ResultForm";
import ShowLizard from "./ShowLizard";
import { LineChart } from "react-chartkick";
import Chartkick from "react-chartkick";
import Highcharts from 'highcharts';
//import "./Form.css";

class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      population: 0,
      frequency: 0,
      dominance: "Red",
      steps: 1,
      red_value: 0,
      p_value: 0,
      a1a1_value: 0,
      blue_value: 0,
      q_value: 0,
      a1a2_value: 0,
      generation: 0,
      a2a2_value: 0,
      pressed: false,
      data: [], // Test Graph
      q_dict: {},
      p_dict: {},
      graph: false,
      constF: 0
    };
    Chartkick.use(Highcharts)
  }

  renderButton = pressed => {
    if (pressed === false) {
      return (
        <Button
          type="submit"
          variant="success"
          onClick={this.handleSubmit}
          style={{ position: "relative", left: "95px" }}
        >
          START
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          variant="success"
          onClick={this.handleSubmit}
          style={{ position: "relative", left: "95px" }}
        >
          NEXT
        </Button>
      );
    }
  };

  renderResult = pressed => {
    if (pressed === true) {
      return (
        <ResultForm
          red_value={this.state.red_value}
          p_value={this.state.p_value}
          a1a1_value={this.state.a1a1_value}
          blue_value={this.state.blue_value}
          q_value={this.state.q_value}
          a1a2_value={this.state.a1a2_value}
          generation={this.state.generation}
          a2a2_value={this.state.a2a2_value}
          dominance={this.state.dominance}
        />
      );
    }
  };

  renderLizard = pressed => {
    if (pressed === true) {
      return (
        <ShowLizard
          blue_value={this.state.blue_value}
          red_value={this.state.red_value}
          min_y={37}
          min_x={0}
          max_x={90}
        />
      );
    }
  };

  renderGraph = graph => {
    if (graph === true) {
      return (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            color: "white",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "2px",
            zIndex: "5"
          }}
        >
          {
            <LineChart
              id="users-chart"
              width="400px"
              height="400px"
              xtitle="Generation"
              ytitle="Frequency"
              legend="bottom"
              max={1}
              library ={{yAxis: {
                tickInterval: 0.1
            }}}
              data={this.state.data}
              colors={["#b00", "#0000ff"]}
              />
          }
        </div>
      );
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const population = parseInt(this.state.population);
    const p = parseFloat(this.state.frequency);
    const q = (1 - this.state.frequency).toFixed(2);

    if (this.state.constF === 0) {
      this.setState({ constF: p });
    }

    const a1a2 = 2 * p * q * population;
    const g = parseInt(this.state.steps);
    const currentGeneration = parseInt(this.state.generation);
    let a1a1 = 0;
    let a2a2 = 0;
    let red_value = 0;
    let blue_value = 0;

    this.setState({ p_value: p });
    this.setState({ q_value: q });

    for (let i = 0; i < g; i++) {
      this.updateGraph(this.state.generation + i + 1, q, p);
    }

    if (this.state.dominance === "Red") {

      a1a1 = p * p * population;
      a2a2 = q * q * population;
      red_value = (a1a1 + a1a2).toFixed(0);
      blue_value = a2a2.toFixed(0);
    } else {

      a2a2 = p * p * population;
      a1a1 = q * q * population;
      blue_value = (a1a1 + a1a2).toFixed(0);
      red_value = a2a2.toFixed(0);
    }

    let finalGeneration = g + currentGeneration;

    this.setState({ red_value: red_value });
    this.setState({ a1a1_value: a1a1.toFixed(0) });
    this.setState({ blue_value: blue_value });
    this.setState({ a1a2_value: a1a2.toFixed(0) });
    this.setState({ generation: finalGeneration });
    this.setState({ a2a2_value: a2a2.toFixed(0) });
    this.setState({ pressed: true });
  };

  handleButtonPress = e => {
    let button = e.target.className;
    button = button.split(" ");
    button = button[0];
    this.setState({ dominance: button });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRestart = e => {
    e.preventDefault();
    this.setState({ generation: 0 });
    this.setState({ frequency: this.state.constF });
    this.setState({ constF: 0 });
    this.setState({ pressed: false });
    this.setState({ graph: false });
    this.setState({ q_dict: {} });
    this.setState({ p_dict: {} });
  };

  handleGraph = e => {
    e.preventDefault();
    if (this.state.graph === false) {
      this.setState({ graph: true });
    } else {
      this.setState({ graph: false });
    }
  };

  updateGraph = (finalGeneration, q_value, p_value) => {
    if (finalGeneration === 0) {
    } else {
      var q_dictionary = this.state.q_dict;
      q_dictionary[finalGeneration] = q_value;
      var p_dictionary = this.state.p_dict;
      p_dictionary[finalGeneration] = p_value;
      var table = [];
      table[1] = { name: "q-value", data: q_dictionary };
      table[0] = { name: "p-value", data: p_dictionary };
      this.setState({ data: table });
      this.setState({ q_dict: q_dictionary });
      this.setState({ p_dict: p_dictionary });
    }
  };

  render() {
    return (
      <div className="modules">
        <Card
          bg="dark"
          text="white"
          style={{
            // position: "relative",
            // marginTop: "80px",
            // marginLeft: "15px"
            position: "absolute",
            top: "80px",
            left: "15px",
            width: "25rem",
            opacity: "0.85",
            zIndex: 2
          }}
        >
          <Card.Header style={{ textAlign: "center" }}>
            <b> BASIC </b>
          </Card.Header>

          {/*FORM FOR BASIC MODULE */}

          <Form style={{ margin: "10px" }} text="white">
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm="5">
                <font color="white">Population: </font>
              </Form.Label>
              <Col lg="7">
                <Form.Control
                  type=""
                  placeholder="0"
                  name="population"
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">
                  Initial population (eg: 10,100,1000)
                </Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm="5">
                <font color="white"> Frequency of A1 allele (RED): </font>
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type=""
                  placeholder="0.0"
                  name="frequency"
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">
                  Frequency ranges from 0 to 1
                </Form.Text>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="5">
                <font color="white"> Dominance: </font>
              </Form.Label>

              <ButtonGroup
                aria-label="Basic example"
                style={{ position: "relative", left: "15px" }}
              >
                <Button
                  className="Red"
                  variant="danger"
                  onClick={this.handleButtonPress}
                >
                  RED
                </Button>
                <Button
                  className="Blue"
                  variant="primary"
                  onClick={this.handleButtonPress}
                >
                  BLUE
                </Button>
              </ButtonGroup>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="5">
                <font color="white"> Step 'n' generations forward: </font>
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type=""
                  placeholder="1"
                  name="steps"
                  onChange={this.handleInputChange}
                />
                <Form.Text className="text-muted">
                  Simualte how many generations you want to move forward
                </Form.Text>
              </Col>
            </Form.Group>

            <ButtonToolbar>
              <Button
                type="submit"
                variant="warning"
                style={{ position: "relative", left: "65px" }}
                onClick={this.handleGraph}
              >
                Graph
              </Button>

              <Button
                type="submit"
                variant="info"
                style={{ position: "relative", left: "75px" }}
                onClick={this.handleRestart}
              >
                Restart
              </Button>

              <Button
                type="submit"
                variant="secondary"
                style={{ position: "relative", left: "85px" }}
              >
                Clear
              </Button>

              {/* <Button type="submit" variant="success" style={{margin:"10px 5px"}}>
                Restart
              </Button> */}

              {this.renderButton(this.state.pressed)}
            </ButtonToolbar>
          </Form>
        </Card>

        <div>{this.renderResult(this.state.pressed)}</div>
        <div>{this.renderLizard(this.state.pressed)}</div>

        {this.renderGraph(this.state.graph)}
      </div>
    );
  }
}

export default BasicForm;
