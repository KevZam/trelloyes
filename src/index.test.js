// make React available
import React from "react";
import store from "./store";
//make the ReactDOM available, necessary for rendering the component
import ReactDOM from "react-dom";

//make the App component available
import App from "./App";

//this is the test case
it("renders without crashing", () => {
  // first create a DOM element to render the component into
  const div = document.createElement("div");

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App store={store} />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});
