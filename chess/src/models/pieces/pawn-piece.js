import ChessPiece from "./chess-piece";
export default class PawnPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */

	constructor(player) {
		super(player, "chess-pawn", "pawn");
		// pawns can move 1 or 2 forward on there first "move".

		this.isFirstMove = true;
		this.isReadyForPromotion = false;
		// pawns can move adjacent if opponent is next to them.
	}

	setPastFirstMove() {
		console.log("past first move should be queued");
		this.isFirstMove = false;
	}
	/**
	 * Method to highlight possible moves for the player
	 * @param {Board} b
	 * @param {} location
	 */
	showAvailableSpots(b, location) {
		console.log("showAvailableSpots queued");

		// return an array of possible locations.
		let validMoves = [];
		if (this.player === "white") {
			// subtract values.
			if (b[location - 9] instanceof ChessPiece && (location - 9) % 8 < 7) {
				if (b[location - 9].player === "black") {
					validMoves.push(location - 9);
				}
			}
			if (b[location - 7] instanceof ChessPiece && (location - 7) % 8 > 0) {
				if (b[location - 7].player === "black") {
					validMoves.push(location - 7);
				}
			}
			if (!b[location - 8]) {
				validMoves.push(location - 8);
			}
			if (this.isFirstMove && !b[location - 16]) {
				validMoves.push(location - 16);
			}
		} else {
			// player is black
			if (b[location + 9] instanceof ChessPiece && (location + 9) % 8 > 0) {
				if (b[location + 9].player === "white") {
					validMoves.push(location + 9);
				}
			}
			if (b[location + 7] instanceof ChessPiece && (location + 7) % 8 < 7) {
				if (b[location + 7].player === "white") {
					validMoves.push(location + 7);
				}
			}
			if (!b[location + 8]) {
				validMoves.push(location + 8);
			}
			if (this.isFirstMove && !b[location + 16]) {
				validMoves.push(location + 16);
			}
		}
		return validMoves;
	}
}
