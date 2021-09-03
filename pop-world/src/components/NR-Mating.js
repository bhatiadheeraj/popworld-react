import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./NR-Mating.css"
import NR_MatingForm from '../modules/NR_MatingForm'

export default class NR_Mating extends Component {
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
                  src = "/assets/NR-Mating_bg.jpg">
                </Image>
                <NR_MatingForm style={textStyle}></NR_MatingForm>
            </div>


    );
  }
}
