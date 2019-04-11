// React Imports
import React, { Component } from "react";

// Font-Awesome Library logos - usage here: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChessRook,
  faChessQueen,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessKing
} from "@fortawesome/free-solid-svg-icons";

// Resources
import "./App.css";
import GameLogic from "./components/game-logic";

library.add(
  faChessRook,
  faChessQueen,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessKing
);

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicked: false };
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    const isClicked = this.state.clicked;

    if (isClicked) {
      return (
        <div className="Start">
          <header className="Start-header">
            <GameLogic />
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.handleClick}>Button</button>
          </header>
        </div>
      );
    }
  }
}

export default App;
