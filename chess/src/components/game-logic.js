import React, { Component } from "react";
import { connect } from 'react-redux'

import PawnPiece from "../models/pieces/pawn-piece";
import RookPiece from "../models/pieces/rook-piece";
import KnightPiece from "../models/pieces/knight-piece";
import BishopPiece from "../models/pieces/bishop-piece";
import QueenPiece from "../models/pieces/queen-piece";
import KingPiece from "../models/pieces/king-piece";
import Board from "./board";

import { updateBoard, setSelectedPosition } from '../redux/action/index';


/**
 * Contains the logic and hosts all of the core chess components
 */
class GameLogic extends Component {
	constructor() {
		super();
		// all the blocks of the board
		// initialize stack to hold blocks - as we want to update the board's values each time a change occurs.
		// board - contains 64-length array containing either null or the chest piece
		// turn - either 'white' or 'black' to determine whose turn it is.
		// selectedPosition: '-1' when nothing seledted, otherwise holds integer of value selected
		this.state = {
			turn: "white",
			selectedPosition: -1
		};
	}

	
	/**
	 * do on click stuff
	 * @param {} i an integer value of the selected board, from 0 to 63.
	 */
	// handleClick(i) {
	// 	// this.props.setSelectedPosition(i);
	// 	this.setState({
	// 		selectedPosition: i
	// 	});
	// 	if(this.props.board[i] == null) {
	// 		console.log("props exectued right");
	// 	}
	// 	if (this.props.board[i] == null) {

	// 	} else if (this.props.board[i] instanceof PawnPiece) {
	// 		// highlight available spots.
	// 		this.props.board[i].showAvailableSpots(this.state.board, i);
	// 		// this.state.board[i + 8]
	// 		console.log('pawn selected - in handleClick')

	// 	} else if (this.props.board[i] instanceof RookPiece) {

	// 		this.props.board[i].showAvailableSpots(this.state.board, i);
	// 	} else if (this.props.board[i] instanceof KnightPiece) {

	// 		this.props.board[i].showAvailableSpots(this.state.board, i);
	// 	} else if (this.props.board[i] instanceof BishopPiece) {

	// 		this.props.board[i].showAvailableSpots(this.state.board, i);
	// 	} else if (this.props.board[i] instanceof QueenPiece) {

	// 		this.props.board[i].showAvailableSpots(this.state.board, i);
	// 	} else if (this.props.board[i] instanceof KingPiece) {

	// 		this.props.board[i].showAvailableSpots(this.state.board, i);
	// 	} else {
	// 		console.error("Unknown object was selected: " + i);
	// 	}
	// }
	

	render() {
		let playerTurn = "";
		if (this.state.turn === "white") {
			playerTurn = "White's Turn";
		} else {
			playerTurn = "Black's Turn";
		}
		return (
			<div className="game-logic">
				<div className="board-container">
					<Board
						blocks={this.props.board}
						onClick={(i) => {
							this.handleClick(i);
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

function mapStateToProps(state) {
  const { board, selectedPosition } = state
  return { 
		board: board,
		selectedPosition: selectedPosition
	 }
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		updateBoard: (updatedBoard) => dispatch(updateBoard(updatedBoard)),
		setSelectedPosition: (i) => dispatch(setSelectedPosition(i))
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLogic)

