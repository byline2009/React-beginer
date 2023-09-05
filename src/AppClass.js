import React from "react";
import ComponentLv1 from "./components/ComponentLv1";

class AppClass extends React.Component {
  state = { name: "State parent" };
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <ComponentLv1 name={this.state.name} />
      </>
    );
  }
}

export default AppClass;
