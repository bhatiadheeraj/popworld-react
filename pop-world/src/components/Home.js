import React, { Component } from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/help">
          <Button className="start_button">START POPWORLD</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
