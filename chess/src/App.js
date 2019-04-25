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
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleModeSubmit = this.handleModeSubmit.bind(this);
    this.state = {
      canStart: false,
      name1: "",
      name2: "",
      mode: "default"
    };
  }

  handleModeSubmit(event) {
    console.log("Selected mode: " + this.state.mode);
    const player1 = this.state.name1;
    const player2 = this.state.name2;
    this.setState({ name1: player1 }); // Fully update name state
    this.setState({ name2: player2 }); // Fully update name state
    console.log("Player 1: " + this.state.name1);
    console.log("Player 2: " + this.state.name2);
    event.preventDefault();

    if (
      this.state.name1 !== "" &&
      this.state.name2 !== "" &&
      this.state.mode !== "default"
    ) {
      this.setState({ canStart: true });
    }
  }

  handleModeChange(event) {
    this.setState({ mode: event.target.value });
  }

  handleChange1(event) {
    this.setState({ name1: event.target.value });
  }

  handleChange2(event) {
    this.setState({ name2: event.target.value });
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    if (this.state.canStart && this.state.mode === "classic") {
      return (
        <div className="App">
          <header className="App-header">
            <GameLogic />
          </header>
        </div>
      );
    } else if (this.state.canStart && this.state.mode === "pawnWars") {
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

          <form>
            <label>
              <input
                type="text"
                placeholder="Enter Player 1 Name"
                value={this.state.value}
                onChange={this.handleChange1}
              />
            </label>
          </form>

          <form>
            <label>
              <input
                type="text"
                placeholder="Enter Player 2 Name"
                value={this.state.value}
                onChange={this.handleChange2}
              />
            </label>
          </form>

          <form onSubmit={this.handleModeSubmit}>
            <select value={this.state.mode} onChange={this.handleModeChange}>
              <option value="default">Choose Game Mode</option>
              <option value="classic">Classic Mode</option>
              <option value="pawnWars">Pawn Wars</option>
            </select>
            <p>
              <input type="submit" value="Start Game" className="buttonCSS" />
            </p>
          </form>
        </div>
      );
    }
  }
}

export default App;
