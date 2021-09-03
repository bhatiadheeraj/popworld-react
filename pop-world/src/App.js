import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Basic from "./components/Basic";
import Migration from "./components/Migration";
import Drift from "./components/Drift";
import NR from "./components/NR-Mating";
import Mutation from "./components/Mutation";
import Selection from "./components/Selection";
import MS from "./components/M+S";
import ResultForm from "./modules/ResultForm";
import Graph from "./components/Graph";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/basic" component={Basic} />
          <Route path="/migration" component={Migration} />
          <Route path="/drift" component={Drift} />
          <Route path="/nr-mating" component={NR} />
          <Route path="/mutation" component={Mutation} />
          <Route path="/selection" component={Selection} />
          <Route path="/m+s" component={MS} />
          <Route path="/graph" component={Graph} />
          <Route path="/result" component={ResultForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
