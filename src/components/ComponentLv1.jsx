import React, { Component } from "react";

export default class ComponentLv1 extends Component {
  render() {
    return (
      <>
        <h1>Hello, level 1 {this.props.text}</h1>;
      </>
    );
  }
}
