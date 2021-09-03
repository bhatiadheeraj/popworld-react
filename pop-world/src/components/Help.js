import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Help.css";
import HelpForm from "../modules/HelpForm";

export default class Help extends Component {
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
                  style = {background} responsive repeat center center fixed
                  src = "/assets/Deep_Blue.jpg">
                </Image>
                <HelpForm style={textStyle}></HelpForm>
            </div>


    );
  }
}
