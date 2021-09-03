import React, { Component } from "react";
import { Image } from "react-bootstrap";
import DriftForm from "../modules/DriftForm"

export default class Drift extends Component {
  render() {

    var background = {backgroundSize : 'cover', height: '100%', width:'100%', margin: '0 auto', overflow: 'hidden' };
        var textStyle = {
          position: 'absolute',  
          top: '50%', 
          left: '50%'
        };


    return (
 
            <div style={{height:'100vh',width:'100%'}}>
                <Image 
                  style = {background} responsive no-repeat center center fixed
                  src = "/assets/Drift_bg.jpg">
                </Image>
                <DriftForm style={textStyle}></DriftForm>
            </div>


    );
  }
}
