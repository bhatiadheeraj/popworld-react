import React, { Component } from "react";
import { Image } from "react-bootstrap";
import MutationForm from "../modules/MutationForm";

export default class Mutation extends Component {
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
                  src = "/assets/mutation_image.jpg">
                </Image>
                <MutationForm style={textStyle}></MutationForm>
            </div>


    );
  }
}
