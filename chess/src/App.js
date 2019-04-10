// React Imports
import React, { Component } from "react";

// Font-Awesome Library logos - usage here: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from "@fortawesome/fontawesome-svg-core";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faChessQueen,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessKing
} from "@fortawesome/free-solid-svg-icons";

// Resources
import logo from "./logo.svg";
import "./App.css";
import KingPiece from "./models/pieces/king-piece";
import QueenPiece from "./models/pieces/queen-piece";
import Board from "./components/board";
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
    this.king = new KingPiece("white");
    this.queen = new QueenPiece("white");
    this.blackKing = new KingPiece("black");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GameLogic />
        </header>
      </div>
    );
  }
=======
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
	// constructor() {
	// 	super();
	// }
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<GameLogic />
				</header>
			</div>
		);
	}
>>>>>>> c4c0d841ece6b64537721ab12a77cf02bb973fe3
}

export default App;
