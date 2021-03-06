import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Typography } from "@material-ui/core";

class RemainingPieces extends Component {
	constructor(props) {
		super(props);
		this.blocks = this.props.blocks;
	}
	render() {
		// Push all of the pices to arrays.
		let whitePieces = [];
		let blackPieces = [];
		let i = 0;
		this.props.whitePiecesInPlay.forEach(piece => {
			if (piece) {
				whitePieces.push(this.renderPiece(piece, i));
			}
			i++;
		});
		let j = 0;
		// push black pieces to array
		this.props.blackPiecesInPlay.forEach(piece => {
			if (piece) {
				blackPieces.push(this.renderPiece(piece, j));
			}
			j++;
		});
		return (
			<Paper
				style={{
					color: "black",
					backgroundColor: "rgb(142, 148, 150)",
					margin: "auto",
					display: "flex"
				}}
			>
				<div className="RemainingPieces">
					<Typography variant="h6">{this.props.player1}'s Pieces:</Typography>
					<div className="whitePieces">
						{/* This displays all of the white pieces pushed in the code above */}
						{whitePieces}
					</div>
					<div className="blackPieces">
						<Typography variant="h6">{this.props.player2}'s Pieces</Typography>
						{/* This displays all of black's pieces in the code above */}
						{blackPieces}
					</div>
				</div>
			</Paper>
		);
	}

	// Render Pawn
	renderPawn(piece, key) {
		if (piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	// Render Knight
	renderKnight(piece, key) {
		console.log("Shub implement this");
		if (piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}
	renderPiece(piece, key) {
		// console.log(piece);
		if (piece.typeOfPiece === "pawn") {
			return this.renderPawn(piece, key);
		} else if (piece.typeOfPiece === "knight") {
			return this.renderKnight(piece, key);
		} else if (piece.typeOfPiece === "bishop") {
			return this.renderBishop(piece, key);
		} else if (piece.typeOfPiece === "rook") {
			return this.renderRook(piece, key);
		} else if (piece.typeofPiece === "queen") {
			return this.renderQueen(piece, key);
		} else {
			return this.renderKing(piece, key);
		}
	}
	// continue following pattern.

	//Render Rook
	renderRook(piece, key) {
		console.log("Shub implement this");
		if (piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	//Render Bishop
	renderBishop(piece, key) {
		console.log("Shub implement this");
		if (piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	//Render Queen
	renderQueen(piece, key) {
		console.log("Shub implement this");
		if (piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}

	renderKing(piece, key) {
		console.log("Shub implement this");
		if (piece.player === "black") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "white", strokeWidth: 15 }}
				/>
			);
		} else if (piece.player === "white") {
			// Note: The Style property is CSS code - this allows an outline to be shown on the piece
			return (
				<FontAwesomeIcon
					icon={piece.icon}
					color={piece.player}
					size="1x"
					key={key}
					style={{ stroke: "black", strokeWidth: 15 }}
				/>
			);
		}
	}
}

function mapStateToProps(state) {
	const {
		board,
		selectedPosition,
		potentialMoves,
		playerTurn,
		moveState,
		whitePiecesInPlay,
		blackPiecesInPlay
	} = state;
	return {
		board: board,
		selectedPosition: selectedPosition,
		potentialMoves: potentialMoves,
		playerTurn: playerTurn,
		moveState: moveState,
		whitePiecesInPlay: whitePiecesInPlay,
		blackPiecesInPlay: blackPiecesInPlay
	};
}

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(mapStateToProps)(RemainingPieces);

export default connectToStore;
