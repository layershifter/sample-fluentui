import {
  Provider,
  teamsTheme,
  AcceptIcon,
  InfoIcon,
} from "@fluentui/react-northstar";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return React.createElement(
    Provider,
    {
      theme: teamsTheme,
    },
    [
      React.createElement(AcceptIcon, { key: "accept" }),
      React.createElement(InfoIcon, { key: "accept" }),
    ]
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(React.createElement(App), rootElement);
