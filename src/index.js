import React from "react";
import ReactDOM from "react-dom";
import DoStuffButton from "./components/DoStuffButton";

import "./styles.css";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DoStuffButton />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
