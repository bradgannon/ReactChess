// React Imports
import React, { Component } from "react";
import { connect } from "react-redux";

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
import { initializePawnWars, initializeChess, setGameMode } from "./redux/action";

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
    this.handleModeSubmit = this.handleModeSubmit.bind(this);
    this.state = {
      canStart: false,
      name: "",
      mode: "default"
    };
  }

  handleModeSubmit(event) {
    console.log("Selected mode: " + this.state.mode);
    const fullName = this.state.name;
    this.setState({ name: fullName });
    console.log("Name: " + this.state.name);
    event.preventDefault();

    if (this.state.name !== "" && this.state.mode !== "default") {
      if (this.state.mode === "pawnWars") {
        this.props.initializePawnWars();
        this.props.setGameMode("pawnWars");
      } else {
        this.props.initializeChess();
        this.props.setGameMode("chess");
      }
      this.setState({ canStart: true });
    }
  }

  handleModeChange(event) {
    this.setState({ mode: event.target.value });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log("Player Name: " + this.state.name);
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

function mapDispatchToProps(dispatch) {
  return {
    initializePawnWars: () => dispatch(initializePawnWars()),
    initializeChess: () => dispatch(initializeChess()),
    setGameMode: (gamemode) => dispatch(setGameMode(gamemode))
  };
}

function mapStateToProps(state) {
  const { board, gameMode }  = state;
  return {
    board: board,
    gameMode: gameMode
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
