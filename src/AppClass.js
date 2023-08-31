import React from "react";
import ComponentLv1 from "./components/ComponentLv1";

class AppClass extends React.Component {
  render() {
    let text = "Duong Tran";
    return (
      <>
        <h1>Hello World</h1>
        <ComponentLv1 />
      </>
    );
  }
}

export default AppClass;
