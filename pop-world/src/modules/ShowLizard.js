import React, { Component } from "react";
import { Image } from "react-bootstrap";

class ShowLizard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     blue_images: [],
  //     red_images: []
  //   };
  // }

  showLizardBlue = num => {
    let blue_images = [];
    let max_y = 90;
    let min_y = this.props.min_y;
    let max_x = this.props.max_x;
    let min_x = this.props.min_x;
    console.log("number is"+num);

    if (num > 100) {
      num = 100;
    }

    for (let i = 0; i < num; i++) {
      let x_axis = Math.floor(Math.random() * (+max_x - +min_x)) + +min_x;
      let y_axis = Math.floor(Math.random() * (+max_y - +min_y)) + +min_y;

      blue_images.push(
        <Image
          src="assets/BlueLizard.png"
          key={"blue" + i}
          style={{
            position: "absolute",
            height: "5rem",
            width: "5rem",
            top: y_axis + "%",
            left: x_axis + "%",
            zIndex: 1
          }}
        />
      );
    }
    return blue_images;
  };

  showLizardRed = num => {
    let red_images = [];
    let max_y = 90;
    let min_y = this.props.min_y;
    let max_x = this.props.max_x;
    let min_x = this.props.min_x;

    if (num > 100) {
      num = 100;
    }
    for (let i = 0; i < num; i++) {
      let x_axis = Math.floor(Math.random() * (+max_x - +min_x)) + +min_x;
      let y_axis = Math.floor(Math.random() * (+max_y - +min_y)) + +min_y;

      red_images.push(
        <Image
          src="assets/RedLizard.png"
          key={"red" + i}
          style={{
            position: "absolute",
            height: "5rem",
            width: "5rem",
            top: y_axis + "%",
            left: x_axis + "%",
            zIndex: 1
          }}
        />
      );
    }
    return red_images;
  };

  render() {
    let blue_value = parseInt(this.props.blue_value);
    let red_value = parseInt(this.props.red_value);

    console.log("blue :"+ blue_value, "red value :+" +red_value);

    let b = blue_value;
    let r = red_value;
    if(blue_value > 100 | red_value > 100 ){
       b = Math.floor(100 * (blue_value / (blue_value + red_value)));
       r = Math.floor(100 * (red_value / (blue_value + red_value)));
    }else{
       b = blue_value;
       r = red_value;
    }
    console.log("b:"+ blue_value, "r :+" +r);

    return (
      <div>
        {this.showLizardBlue(b)}
        {this.showLizardRed(r)}
      </div>
    );
  }
}

export default ShowLizard;
