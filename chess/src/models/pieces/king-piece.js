import ChessPiece from "./chess-piece";

export default class KingPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */
	constructor(player) {
		super(player, "chess-king", "king");
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

		// Mod statements ensure that the king doesn't go off the edge fo the board
		if (!b[location + 1] && (location + 1) % 8 != 7) {
			validMoves.push(location + 1);
		}
		if (!b[location + 9] && (location + 9) % 8 != 7) {
			validMoves.push(location + 9);
		}
		if (!b[location + 8]) {
			validMoves.push(location + 8);
		}
		if (!b[location + 7] && (location + 7) % 8 != 0) {
			validMoves.push(location + 7);
		}
		if (!b[location - 1] && (location - 1) % 8 != 0) {
			validMoves.push(location - 1);
		}
		if (!b[location - 7] && (location - 7) % 8 != 7) {
			validMoves.push(location - 7);
		}
		if (!b[location - 8]) {
			validMoves.push(location - 8);
		}
		if (!b[location - 9] && (location - 9) % 8 != 0) {
			validMoves.push(location - 9);
		}
		return validMoves;
	}
}
