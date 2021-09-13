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

class MSForm extends Component {
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
      a1Toa2: 0,
      a2Toa1: 0,
      pressed: false,
      fitnessa1a1: 0,
      fitnessa1a2: 0,
      fitnessa2a2: 0,
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

  renderResult = graph => {
    if (graph === true) {
      return (
        <ResultForm
          red_value={this.state.red_value}
          p_value={this.state.p_value}
          a1a1_value={this.state.a1a1_value}
          blue_value={this.state.blue_value}
          q_value={this.state.q_value}
          a1a2_value={this.state.a1a2_value}
          dominance={this.state.dominance}
          generation={this.state.generation}
          a2a2_value={this.state.a2a2_value}
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
          min_y={48}
          min_x={0}
          max_x={90}
        />
      );
    }
  };

  renderGraph = pressed => {
    if (pressed === true) {
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
    const q = 1 - p;

    if (this.state.constF === 0) {
      this.setState({ constF: p });
    }

    const a1mutate = parseFloat(this.state.a1Toa2);
    const a2mutate = parseFloat(this.state.a2Toa1);
    const fitnessa1a1 = parseFloat(this.state.fitnessa1a1);
    const fitnessa1a2 = parseFloat(this.state.fitnessa1a2);
    const fitnessa2a2 = parseFloat(this.state.fitnessa2a2);

    if(fitnessa1a1 == 1 || fitnessa1a2 == 1 || fitnessa2a2 == 1) {
    
    

    const g = parseInt(this.state.steps);
    const currentGeneration = parseInt(this.state.generation);
    let a1a1 = 0;
    let a2a2 = 0;
    let red_value = 0;
    let blue_value = 0;

    let msFrequency = 0.0;
    let tempA1 = p;
    let tempA2 = q;
    let wAverage = 0;
    let selectionP = 0;
    let selectionQ = 0;

    for (let i = 0; i < g; i++) {
      wAverage =
        tempA1 * tempA1 * fitnessa1a1 +
        2 * tempA1 * tempA2 * fitnessa1a2 +
        tempA2 * tempA2 * fitnessa2a2;
      selectionP =
        (tempA1 * tempA1 * fitnessa1a1 + tempA1 * tempA2 * fitnessa1a2) /
        wAverage;
      selectionQ =
        (tempA2 * tempA2 * fitnessa2a2 + tempA1 * tempA2 * fitnessa1a2) /
        wAverage;
      msFrequency = (1 - a1mutate) * selectionP + a2mutate * selectionQ;
      tempA1 = msFrequency;
      tempA2 = 1 - msFrequency;
      this.updateGraph(this.state.generation + i + 1, tempA2, tempA1);
    }

    this.setState({ frequency: msFrequency });
    this.setState({ pressed: true });
    this.setState({ p_value: tempA1.toFixed(6) });
    this.setState({ q_value: tempA2.toFixed(6) });

    let a1a2 = 2 * tempA1 * tempA2 * population;

    if (this.state.dominance === "Red") {
      a1a1 = tempA1 * tempA1 * population;
      a2a2 = tempA2 * tempA2 * population;
      red_value = (a1a1 + a1a2).toFixed(0);
      blue_value = a2a2.toFixed(0);
      this.setState({ a1a1_value: a1a1.toFixed(0) });
      this.setState({ a2a2_value: a2a2.toFixed(0) });
    } else {
      a2a2 = tempA1 * tempA1 * population;
      a1a1 = tempA2 * tempA2 * population;
      blue_value = (a1a1 + a1a2).toFixed(0);
      red_value = a2a2.toFixed(0);
      this.setState({ a2a2_value: a1a1.toFixed(0) });
      this.setState({ a1a1_value: a2a2.toFixed(0) });
    }

    var finalGeneration = g + currentGeneration;

    this.setState({ red_value: red_value });
    this.setState({ blue_value: blue_value });
    this.setState({ a1a2_value: a1a2.toFixed(0) });
    this.setState({ generation: finalGeneration });
    }else {
        window.alert("At least one fitness value should be set to 1 for the frequencies to be calculated");
    }
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
            // position: "absolute",
            // marginTop: "80px",
            // marginLeft: "15px",
            // width: "25rem",
            // opacity: "0.85",
            // zIndex: "2"
            position: "absolute",
            top: "80px",
            left: "15px",
            width: "25rem",
            opacity: "0.85",
            zIndex: "2"
          }}
        >
          <Card.Header style={{ textAlign: "center" }}>
            <b> M+S </b>
          </Card.Header>

          {/*FORM FOR MUTATION MODULE */}

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
              </Col>
            </Form.Group>

            <Form.Row>
              <Col>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="5">
                    <font color="white"> Fitness of A1A1: </font>
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type=""
                      placeholder="0.0"
                      name="fitnessa1a1"
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="5">
                    <font color="white"> Fitness of A1A2: </font>
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type=""
                      placeholder="0.0"
                      name="fitnessa1a2"
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="5">
                    <font color="white"> Fitness of A2A2: </font>
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type=""
                      placeholder="0.0"
                      name="fitnessa2a2"
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="5">
                    <font color="white"> A1 to A2 Mutation Rate: </font>
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type=""
                      placeholder="0.0"
                      name="a1Toa2"
                      onChange={this.handleInputChange}
                    />
                    <Form.Text className="text-muted">
                      (0.00001 - 0.000000001)
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm="5">
                    <font color="white"> A2 to A1 Mutation Rate: </font>
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type=""
                      placeholder="0.0"
                      name="a2Toa1"
                      onChange={this.handleInputChange}
                    />
                    <Form.Text className="text-muted">
                      (0.00001 - 0.000000001)
                    </Form.Text>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Row>

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

export default MSForm;
