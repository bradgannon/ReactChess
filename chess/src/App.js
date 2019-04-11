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
        <div className="App">
          <header className="App-header">
            <GameLogic />
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
          />
          <header className="App-header">
            <p>
              <button
                href="#"
                className="btn btn-success buttonCSS"
                onClick={this.handleClick}
              >
                Start Game!
              </button>
            </p>
          </header>
        </div>
      );
    }
  }
}

export default App;
