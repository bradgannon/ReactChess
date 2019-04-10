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
}

export default App;
