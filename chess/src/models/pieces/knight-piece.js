import ChessPiece from "./chess-piece";

export default class KnightPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */
	constructor(player) {
		super(player, "chess-knight", "knight");
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

		// Mod statement ensure that the knighkt does not cross the boundary of the chessboard and reappear on the other side of the board, a limitation caused by the 1D array
		if ((location - 17) % 8 < 7 && !b[location - 17]) {
			validMoves.push(location - 17);
		}
		if ((location - 15) % 8 > 0 && !b[location - 15]) {
			validMoves.push(location - 15);
		}
		if ((location + 17) % 8 > 0 && !b[location + 17]) {
			validMoves.push(location + 17);
		}
		if ((location + 15) % 8 < 7 && !b[location + 15]) {
			validMoves.push(location + 15);
		}
		if ((location - 10) % 8 < 6 && !b[location - 10]) {
			validMoves.push(location - 10);
		}
		if ((location + 10) % 8 > 1 && !b[location + 10]) {
			validMoves.push(location + 10);
		}
		if ((location - 6) % 8 < 6 && !b[location - 6]) {
			validMoves.push(location - 6);
		}
		if ((location + 6) % 8 >= 0 && !b[location + 6]) {
			validMoves.push(location + 6);
		}

		// todo: Handle Instance of Opposing Chess Pieces
		return validMoves;
	}
}
