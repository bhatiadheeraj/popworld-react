import React, { Component } from "react";
import { Image } from "react-bootstrap";
import MSForm from "../modules/M+S_Form";

export default class MS extends Component {
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
                  src = "/assets/MS_bg.jpg">
                </Image>
                <MSForm style={textStyle}></MSForm>
            </div>


    );
  }
}
