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

		let nextLocation = location + 1;
		// Mod statements ensure that the king doesn't go off the edge fo the board
		if (!b[nextLocation] && (nextLocation) % 8 !== 7 && nextLocation < 64) {
			validMoves.push(location + 1);
		}
		nextLocation = location + 9;
		if (!b[nextLocation] && (nextLocation) % 8 !== 7 && nextLocation < 64) {
			validMoves.push(location + 9);
		}

		nextLocation = location + 8;
		if (!b[location + 8] && nextLocation < 64) {
			validMoves.push(location + 8);
		}

		nextLocation = location + 7;
		if (!b[nextLocation] && (nextLocation) % 8 !== 0 && nextLocation < 64 ) {
			validMoves.push(location + 7);
		}
		nextLocation = location - 1;
		if (!b[nextLocation] && (nextLocation) % 8 !== 0 && nextLocation >= 0) {
			validMoves.push(location - 1);
		}
		nextLocation = location - 7;
		if (!b[nextLocation] && (nextLocation) % 8 !== 7 && nextLocation >= 0 ) {
			validMoves.push(location - 7);
		}
		nextLocation = location - 8;
		if (!b[nextLocation] && nextLocation >= 0) {
			validMoves.push(location - 8);
		}
		nextLocation = location - 9;
		if (!b[nextLocation] && (nextLocation) % 8 !== 0 && nextLocation >= 0) {
			validMoves.push(location - 9);
		}
		return validMoves;
	}
}
