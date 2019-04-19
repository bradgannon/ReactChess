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

		// return an array of possible locations.
		let validMoves = [];

		// Check to the right
		let i = 1;
		while (!b[location + i] && (location + i) % 8 !== 0) {
			validMoves.push(location + i);
			i++;
		}

		// To the left
		i = 1;
		while (!b[location - i] && (location - i) % 8 !== 7) {
			validMoves.push(location - i);
			i++;
		}

		// Take it back now yall
		i = 1;
		while (!b[location + (i * 8)]) {
			validMoves.push(location + i * 8);
			i++;
		}

		// Two hops this time
		i = 1;
		let futureLocation = location - (i * 8);
		while (!b[location - (i * 8)]) {
			futureLocation = location - (i * 8);
			validMoves.push(location - i * 8);
			i++;
		}

		return validMoves;
	}
}
