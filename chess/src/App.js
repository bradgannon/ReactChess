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
  faChessKing,
  faCircle
} from "@fortawesome/free-solid-svg-icons";

// Resources
import "./App.css";
import GameLogic from "./components/game-logic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faChessRook,
  faChessQueen,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessKing,
  faCircle
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
    if (this.state.clicked) {
      return (
        <div className="App">
          <header className="App-header">
            <GameLogic />
          </header>
        </div>
      );
    } else {
      return (
        <div className="Start-header">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
          />
          <h1 className="headerCSS">Welcome to Chess!</h1>
          <section>
            <div className="whitePiece">
              <FontAwesomeIcon
                icon="chess-pawn"
                size="6x"
                style={{ stroke: "black", strokeWidth: 10 }}
              />
            </div>
            <div className="blackPiece">
              <FontAwesomeIcon
                icon="chess-rook"
                size="6x"
                style={{ stroke: "white", strokeWidth: 10 }}
              />
            </div>
            <div className="whitePiece">
              <FontAwesomeIcon
                icon="chess-queen"
                size="6x"
                style={{ stroke: "black", strokeWidth: 10 }}
              />
            </div>
            <div className="blackPiece">
              <FontAwesomeIcon
                icon="chess-king"
                size="6x"
                style={{ stroke: "white", strokeWidth: 10 }}
              />
            </div>
            <div className="whitePiece">
              <FontAwesomeIcon
                icon="chess-bishop"
                size="6x"
                style={{ stroke: "black", strokeWidth: 10 }}
              />
            </div>
            <div className="blackPiece">
              <FontAwesomeIcon
                icon="chess-knight"
                size="6x"
                style={{ stroke: "white", strokeWidth: 10 }}
              />
            </div>
            <div className="whitePiece">
              <FontAwesomeIcon
                icon="chess-pawn"
                size="6x"
                style={{ stroke: "black", strokeWidth: 10 }}
              />
            </div>
          </section>
          <p>
            <button class="buttonCSS" onClick={this.handleClick}>
              Start Game
            </button>
          </p>
        </div>
      );
    }
  }
}

export default App;
