import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class ResultForm extends Component {
  render() {
    return (
      <Card
        bg="dark"
        text="white"
        style={{
          position: "absolute",
          left: "440px",
          top: "80px",
          width: "30rem",
          zIndex: "2"
        }}
      >
        <Card.Header style={{ textAlign: "center" }}>
          <b>RESULT</b>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>RED: {this.props.red_value}</Col>
            <Col>p: {this.props.p_value}</Col>
            <Col>n(A1A1): {this.props.a1a1_value}</Col>
          </Row>
          <Row>
            <Col>BLUE: {this.props.blue_value}</Col>
            <Col>q: {this.props.q_value}</Col>
            <Col>n(A1A2): {this.props.a1a2_value}</Col>
          </Row>
          <Row>
            <Col>Generation: {this.props.generation}</Col>
            <Col>Dominance: {this.props.dominance} </Col>
            <Col>n(A2A2): {this.props.a2a2_value}</Col>
          </Row>



        </Card.Body>
      </Card>
    );
  }
}

export default ResultForm;
