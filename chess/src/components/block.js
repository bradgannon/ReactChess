import React, { Component } from "react";
import { connect } from 'react-redux'
import "./block.css";
import PawnPiece from "../models/pieces/pawn-piece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RookPiece from "../models/pieces/rook-piece";
import BishopPiece from "../models/pieces/bishop-piece";
import KnightPiece from "../models/pieces/knight-piece";
import QueenPiece from "../models/pieces/queen-piece";
import KingPiece from "../models/pieces/king-piece";

import { updateBoard } from '../redux/action/index';

/**
 * This class renders the each block on the board, and if needed, displaces the pieces on the board
 */
class Block extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.selectBlock = this.selectBlock.bind(this);
		console.log(props);
		this.isDark = props.isDark;
		this.state = {
			name: "bob",
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
					style={{ stroke: "white", "strokeWidth": 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", "strokeWidth": 15 }}
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
					style={{ stroke: "white", "strokeWidth": 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", "strokeWidth": 15 }}
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
					style={{ stroke: "white", "strokeWidth": 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", "strokeWidth": 15 }}
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
					style={{ stroke: "white", "strokeWidth": 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", "strokeWidth": 15 }}
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
					style={{ stroke: "white", "strokeWidth": 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", "strokeWidth": 15 }}
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
					style={{ stroke: "white", "strokeWidth": 15 }}
				/>
			);
		} else if (this.props.piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={this.props.piece.icon}
					color={this.props.piece.player}
					size="6x"
					style={{ stroke: "black", "strokeWidth": 15 }}
				/>
			);
		}
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

	selectBlock() {
		console.log(this.props.board);
		if (this.props.piece != null) {
			if (this.props.piece.player === "white") {
				console.log(
					"Block Selected; Piece: " +
						this.props.piece +
						" Player: " +
						this.props.piece.player
				);
				this.highlight();
			} else {
				console.log(
					"Block Selected; Piece: " +
						this.props.piece +
						" Player: " +
						this.props.piece.player
				);
				this.highlight();
			}
		} else {
			console.log("Empty block selected.");
		}
		this.props.onClick();
	}

	/**
	 * Returns the css needed for the piece whether it is highlighted or not;
	 */
	returnCSS() {
		if (this.state.highlighted) {
			return "block-highlight";
		} else if (this.isDark) {
			return "block-dark";
		} else {
			return "block-light";
		}
	}

	/**
	 * Highlights the block by changing its color
	 */
	highlight() {
		console.log(this.state);
		this.setState(
			{
				name: "kevin"
			},
			() => {
				console.log(this.state.name);
			}
		);
		if (this.state.highlighted) {
			this.setState(
				{
					highlighted: false
				},
				() => {
					console.log("highlighted: " + this.state.highlighted);
				}
			);
		} else {
			this.setState(
				{
					highlighted: true
				},
				() => {
					console.log("highlighted: " + this.state.highlighted);
				}
			);
		}
	}
}

function mapStateToProps(state) {
  const { board } = state
  return { board: board }
}

function mapDispatchToProps(dispatch) {
	return {
		updateBoard: updateBoard()
	}
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
)(Block)

export default connectToStore;



