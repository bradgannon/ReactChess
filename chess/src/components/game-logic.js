import React, { Component } from "react";
import PawnPiece from "../models/pieces/pawn-piece";
import RookPiece from "../models/pieces/rook-piece";
import KnightPiece from "../models/pieces/knight-piece";
import BishopPiece from "../models/pieces/bishop-piece";
import QueenPiece from "../models/pieces/queen-piece";
import KingPiece from "../models/pieces/king-piece";
import populateGameBoard from "../utility/populate-game";
import Board from "./board";

/**
 * Contains the logic and hosts all of the core chess components
 */
export default class GameLogic extends Component {
	constructor() {
		super();
		// all the blocks of the board
		let blocks = populateGameBoard();
		console.log(blocks);
		// initialize stack to hold blocks - as we want to update the board's values each time a change occurs.
		// board - contains 64-length array containing either null or the chest piece
		// turn - either 'white' or 'black' to determine whose turn it is.
		// selectedPosition: '-1' when nothing seledted, otherwise holds integer of value selected
		this.state = {
			board: blocks,
			turn: "white",
			selectedPosition: -1
		};
	}

	/**
	 * do on click stuff
	 * @param {} event
	 */
	handleClick(event) {
		if (this.state.board[event] == null) {
			console.log("ID: " + event + ": Nothing was selected.");
		} else if (this.state.board[event] instanceof PawnPiece) {
			console.log("ID: " + event + ": Pawn Was Selected");
			this.state.board[event].showAvailableSpots(this.state.board, event);
		} else if (this.state.board[event] instanceof RookPiece) {
			console.log("ID: " + event + ": Rook Was Selected");
			this.state.board[event].showAvailableSpots(this.state.board, event);
		} else if (this.state.board[event] instanceof KnightPiece) {
			console.log("ID: " + event + ": Knight Was Selected");
			this.state.board[event].showAvailableSpots(this.state.board, event);
		} else if (this.state.board[event] instanceof BishopPiece) {
			console.log("ID: " + event + ": Bishop Was Selected");
			this.state.board[event].showAvailableSpots(this.state.board, event);
		} else if (this.state.board[event] instanceof QueenPiece) {
			console.log("ID: " + event + ": Queen Was Selected");
			this.state.board[event].showAvailableSpots(this.state.board, event);
		} else if (this.state.board[event] instanceof KingPiece) {
			console.log("ID: " + event + ": King Was Selected");
			this.state.board[event].showAvailableSpots(this.state.board, event);
		} else {
			console.error("Unknown object was selected: " + event);
		}
	}

	render() {
		let playerTurn = "";
		if (this.state.turn == "white") {
			let playerTurn = "White's Turn";
		} else {
			let playerTurn = "Black's Turn";
		}
		return (
			<div className="game-logic">
				<div className="board-container">
					<Board
						blocks={this.state.board}
						onClick={event => {
							this.handleClick(event);
						}}
					/>
				</div>
				<div>
					{/* insert Current Player's Move status. */}
					<div className="playerTurn">
						<p>{playerTurn}</p>
					</div>
				</div>
				{/* {Insert component of lost pieces for each player here} */}
			</div>
		);
	}
}
