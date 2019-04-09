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
	 *
	 * @param {*} source
	 * @param {*} destination
	 */
	identifyIfValidMove(source, destination) {
		if (
			destination + 8 === source ||
			destination + 1 === source ||
			destination - 1 === source ||
			destination - 8 === source
		) {
			// Rook can move vertically / horizontally
			return true;
		}

		return false;
	}

	/**
	 * Returns an array of a path from the source to the destination.
	 *
	 * @param {*} source
	 * @param {*} destination
	 */
	getPathFromSrcToDest(source, destination) {
		// TODO: should exclude the source and destination in the path.
	}

	/**
	 * Method to highlight possible moves for the player
	 * @param {Board} b
	 * @param {} location
	 */
	showAvailableSpots(b, location) {
		// TODO
	}
}
