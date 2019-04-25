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
    this.handleChange = this.handleChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.state = {
      clicked: false,
      loggedIn: false,
      name: "",
      submitted: false,
      mode: "classic"
    };
  }

  handleModeChange(event) {
    this.setState({ mode: event.target.value });
    console.log("Game Mode: " + this.state.mode);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log("Player Name: " + this.state.name);
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    if (this.state.submitted && this.state.clicked && this.state.classic) {
      return (
        <div className="App">
          <header className="App-header">
            <GameLogic />
          </header>
        </div>
      );
    } else if (
      this.state.submitted &&
      this.state.clicked &&
      !this.state.classic
    ) {
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

          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Enter Name"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>

          <div>
            <form onSubmit={this.handleModeSubmit}>
              <select value={this.state.mode} onChange={this.handleModeChange}>
                <option value="classic">Pawn Wars</option>
                <option value="pawnWars">Classic</option>
              </select>
            </form>
          </div>

          <p>
            <button className="buttonCSS" onClick={this.handleClick}>
              Start Game
            </button>
          </p>
        </div>
      );
    }
  }
}

export default App;
