import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

import { Navbar, Nav } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/" style={{ textDecoration: "none" }}>
            <b id="logo"> Pop!World </b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ButtonToolbar>
              
              
              <div className="container">
                <div className='rowr'>
                <ul id='menu'>
                  <li>
                <Link to="/help">
                <Button variant="light">
                  {" "}
                  <b>HELP</b>{" "}
                </Button>
              </Link></li>
                <li><Link to="./basic">
                  <Button variant="primary"> Basic </Button>
                </Link></li>
                
                <li><Link to="./migration">
                  <Button variant="primary"> Migration </Button>
                </Link>
                </li>
                <li><Link to="./drift">
                  <Button variant="primary"> Drift </Button>
                </Link>
                </li>
                <li><Link to="./nr-mating">
                  <Button variant="primary"> NR-Mating </Button>
                </Link>
                </li>
               <li><Link to="./mutation">
                  <Button variant="primary"> Mutation </Button>
                </Link>
                </li>
                <li><Link to="./selection">
                  <Button variant="primary"> Selection </Button>
                </Link>
                </li>
                <li>
                <Link to="./m+s">
                  <Button variant="primary"> M+S </Button>
                </Link>
                </li>
                {/* About page button */}
              
                <li><Link to="./about">
                  <Button variant="light">
                    {" "}
                    <b> ABOUT </b>{" "}
                  </Button>
                </Link></li>
                </ul>
                </div>
              </div>
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
