import ChessPiece from "./chess-piece";

export default class RookPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */
	constructor(player) {
		super(player, "chess-rook", "rook");
	}

	/**
	 * Method to highlight possible moves for the player
	 * @param {Board} b
	 * @param {} location
	 */
	showAvailableSpots(b, location) {
		console.log("showAvailableSpots queued");

		// Check color of the piece moving
		let enemy = "";
		if (this.player === "white") {
			enemy = "black";
		} else {
			enemy = "white";
		}

		// return an array of possible locations.
		let validMoves = [];

		// Check to the right
		let i = 1;
		while (!b[location + i] && (location + i) % 8 !== 0 && location + i < 64) {
			validMoves.push(location + i);
			i++;
		}
		if (b[location + i] instanceof ChessPiece && (location + i) % 8 > 0) {
			if (b[location + i].player === enemy) {
				validMoves.push(location + i);
			}
		}

		// To the left
		i = 1;
		while (!b[location - i] && (location - i) % 8 !== 7 && location - i >= 0) {
			validMoves.push(location - i);
			i++;
		}
		if (b[location - i] instanceof ChessPiece && (location - i) % 8 < 7) {
			if (b[location - i].player === enemy) {
				validMoves.push(location - i);
			}
		}

		// Take it back now yall
		i = 1;
		while (!b[location + i * 8] && location + i * 8 < 64) {
			validMoves.push(location + i * 8);
			i++;
		}
		if (b[location + i * 8] instanceof ChessPiece) {
			if (b[location + i * 8].player === enemy) {
				validMoves.push(location + i * 8);
			}
		}

		// Two hops this time
		i = 1;
		while (!b[location - i * 8] && location - i * 8 >= 0) {
			validMoves.push(location - i * 8);
			i++;
		}
		if (b[location - i * 8] instanceof ChessPiece) {
			if (b[location - i * 8].player === enemy) {
				validMoves.push(location - i * 8);
			}
		}

		return validMoves;
	}
}
