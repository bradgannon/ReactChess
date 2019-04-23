import React, { Component } from "react";
import { connect } from "react-redux";
import "./block.css";
import PawnPiece from "../models/pieces/pawn-piece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RookPiece from "../models/pieces/rook-piece";
import BishopPiece from "../models/pieces/bishop-piece";
import KnightPiece from "../models/pieces/knight-piece";
import QueenPiece from "../models/pieces/queen-piece";
import KingPiece from "../models/pieces/king-piece";

import { pawnManeuvers }  from '../utility/chess-maneuvers';



import {
	updateBoard,
	setSelectedPosition,
	setPotentialMoves,
	nextMoveState,
	revertToSelectPiece,
	handleWhiteRemovePiece,
	handleBlackRemovePiece
} from "../redux/action/index";

import PotentialMove from "../models/potential-move";
import { SELECT_AVAILABLE_MOVE, SELECT_PIECE } from "../redux/string-constants";
import ChessPiece from "../models/pieces/chess-piece";
import { getAllOpposingMoves } from "../utility/end-game";

/**
 * This class renders the each block on the board, and if needed, displaces the pieces on the board
 */
class Block extends Component {
	constructor(props) {
		super(props);
		this.selectBlock = this.selectBlock.bind(this);
		this.isDark = props.isDark;
		this.state = {
			highlighted: false
		};
	}

	componentDidMount() {}

	/**
	 * Method to Render a Pawn on the block
	 */
	renderPawn() {
		if (this.props.piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	/**
	 * Method to Render a Rook on the block
	 */
	renderRook() {
		if (this.props.piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	/**
	 * Method to Render a Bishop on the block
	 */
	renderBishop() {
		if (this.props.piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	/**
	 * Method to Render a Knight on the block
	 */
	renderKnight() {
		if (this.props.piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	/**
	 * Method to Render a Queen on the block
	 */
	renderQueen() {
		if (this.props.piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	/**
	 * Method to Render a King on the block
	 */
	renderKing() {
		if (this.props.piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	/**
	 * Renders a potential move
	 */
	renderPotentialMove() {
		return (
			<FontAwesomeIcon icon="circle" color="rgba(28, 28, 28, 0.7)" size="3x" />
		);
	}

	/**
	 * Determines if a piece needs to be render onthe specific block
	 */
	renderPieces() {
		// Render HTML for respective piece, if there is one
		if (this.props.piece instanceof PawnPiece) {
			return this.renderPawn();
		} else if (this.props.piece instanceof RookPiece) {
			return this.renderRook();
		} else if (this.props.piece instanceof BishopPiece) {
			return this.renderBishop();
		} else if (this.props.piece instanceof KnightPiece) {
			return this.renderKnight();
		} else if (this.props.piece instanceof QueenPiece) {
			return this.renderQueen();
		} else if (this.props.piece instanceof KingPiece) {
			return this.renderKing();
		} else if (this.props.piece instanceof PotentialMove) {
			// return (<PotentialMovePiece index={this.props.index} />)
		}
	}

	render() {
		let css = this.returnCSS();
		return (
			<div className="block">
				{/* {this.state.name} */}
				<button
					onClick={this.selectBlock}
					// className={this.isDark ? "block-dark" : "block-light"}
					className={css}
				>
					{this.renderPieces()}
				</button>
			</div>
		);
	}

	/**
	 * Renders all of the available moves the player can make on the board.
	 */
	showAvailableMoves() {
		let availableMoves = this.props.board[this.props.index].showAvailableSpots(
			this.props.board,
			this.props.index
		);
		this.props.setPotentialMoves(availableMoves);
		let board = this.props.board;
		// availableMoves.forEach(index => {
		// 	board[index] = new PotentialMove(this.props.piece.player, index);
		// });
		this.props.updateBoard(board);
	}

	/**
	 * Removes the previous selected piece's potential moves from the board.
	 */
	removePreviousAvailableMoves() {
		let previousAvailableMoves = this.props.potentialMoves;
		let board = this.props.board;
		previousAvailableMoves.forEach(index => {
			if (board[index] instanceof PotentialMove) {
				board[index] = undefined;
			}
		});
		this.props.updateBoard(board);
	}

	/**
	 * Method is called when a piece is removed from the board.  Method updates the redux state
	 * to keep track of which pieces are on the board and not on the board.
	 * @param {ChessPiece} PieceToBeRemoved
	 */
	handleRemovePiece(PieceToBeRemoved) {
		// TODO: To be implemented
		if(PieceToBeRemoved.player === "black") {
			this.props.handleWhiteRemovePiece(PieceToBeRemoved);
		} else if (PieceToBeRemoved.player === "white" ){
			this.props.handleBlackRemovePiece(PieceToBeRemoved);
		}
		console.log(
			"Handle Remove Piece was called with: Player: " +
				PieceToBeRemoved.player +
				" Piece: " +
				PieceToBeRemoved.typeOfPiece
		);
	}
	/**
	 * Moves the Selected Position Piece to the clicked on Piece.
	 */
	movePiece() {
		let pieceIndex = this.props.index;
		let indexOfPieceToBeMoved = this.props.selectedPosition;
		let board = this.props.board;

		let playerTurn = this.props.playerTurn;
		let allOpposingMoves = getAllOpposingMoves(board, playerTurn);
		console.log("all opposing moves:");
		console.log(allOpposingMoves);

		if (
			this.props.piece instanceof ChessPiece &&
			this.props.piece.player !== this.props.board[indexOfPieceToBeMoved].player
		) {
			// trigger function to delete piece from board.
			console.log("enemy piece is removed");
			this.handleRemovePiece(board[this.props.selectedPosition]);
		}
		
		// check if pawn has first move
		board = pawnManeuvers(board, this.props.selectedPosition, this.props.index);

		board[pieceIndex] = board[this.props.selectedPosition];
		board[this.props.selectedPosition] = undefined;

		console.log("board is being updated with" + board[pieceIndex]);
		this.props.updateBoard(board);
		this.props.setSelectedPosition(-1);
		this.props.setPotentialMoves([]);
		this.props.nextMoveState();
	}

	selectBlock() {
		// If the block is already highlighted, this is a toggle off, therefore, we want to set the position to reflect that.
		console.log(this.props.selectedPosition);
		this.removePreviousAvailableMoves();

		if (this.props.moveState === SELECT_PIECE) {
			this.props.setSelectedPosition(this.props.index);
		}
		// check if exists in available moves, and it is turn selection.
		if (
			this.props.moveState === SELECT_AVAILABLE_MOVE &&
			this.props.potentialMoves.indexOf(this.props.index) >= 0
		) {
			console.log("this piece should be highlighted");
			// move piece
			this.movePiece();
		} else if (
			this.props.moveState === SELECT_AVAILABLE_MOVE &&
			this.props.potentialMoves.indexOf(this.props.index) < 0
		) {
			this.props.setSelectedPosition(-1);
			this.props.setPotentialMoves([]);
			this.props.revertToSelectPiece();
		} else if (this.props.piece && this.props.moveState === SELECT_PIECE) {
			if (this.props.piece.player === this.props.playerTurn) {
				this.highlight();
			} else {
				console.log("wrong player's turn...");
			}
		} else {
			console.log("Empty block selected.");
		}
	}

	/**
	 * Returns the css needed for the piece whether it is highlighted or not;
	 */
	returnCSS() {
		//String to return related to
		let returnStr = "block-";

		// See if the block is highligted
		if (this.state.highlighted) {
			if (this.props.selectedPosition !== this.props.index) {
				this.setState({ highlighted: false });
			} else {
				returnStr = "block-highlight-";
			}
		} else {
			if (this.props.potentialMoves.indexOf(this.props.index) >= 0) {
				if (!this.props.board[this.props.index]) {
					returnStr = "block-potential-move-";
				} else {
					returnStr = "block-enemy-";
				}
			}
		}

		// Determine dark or light to return
		if (this.isDark) {
			return returnStr + "dark";
		} else {
			return returnStr + "light";
		}
	}

	/**
	 * Highlights the block by changing its color
	 */
	highlight() {
		if (this.state.highlighted) {
			this.setState({ highlighted: false });
			this.props.revertToSelectPiece();
		} else {
			this.setState({ highlighted: true });
			this.showAvailableMoves();
			this.props.nextMoveState();
		}
	}
}

function mapStateToProps(state) {
	const {
		board,
		selectedPosition,
		potentialMoves,
		playerTurn,
		moveState
	} = state;
	return {
		board: board,
		selectedPosition: selectedPosition,
		potentialMoves: potentialMoves,
		playerTurn: playerTurn,
		moveState: moveState
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		updateBoard: updatedBoard => dispatch(updateBoard(updatedBoard)),
		setSelectedPosition: index => dispatch(setSelectedPosition(index)),
		setPotentialMoves: arrayOfPossibleMoves =>
			dispatch(setPotentialMoves(arrayOfPossibleMoves)),
		nextMoveState: () => dispatch(nextMoveState()),
		revertToSelectPiece: () => dispatch(revertToSelectPiece()),
		handleWhiteRemovePiece: (piece) => dispatch(handleWhiteRemovePiece(piece)),
		handleBlackRemovePiece: (piece) => dispatch(handleBlackRemovePiece(piece))
	};
}

// const mapStateToProps = (state, ownProps) => ({
//   // ... computed data from state and optionally ownProps
// })

// const mapDispatchToProps = {
//   // ... normally is an object full of action creators
// }

// and that function returns the connected, wrapper component:
// const ConnectedComponent = connectToStore(Component);

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(Block);

export default connectToStore;
