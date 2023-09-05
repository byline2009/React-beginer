import React, { Component } from "react";

export default class ComponentLv1 extends Component {
  render() {
    console.log("props children", this.props);
    return (
      <>
        <h1>Hello, level 1 {this.props.text}</h1>;
      </>
    );
  }
}
