import ChessPiece from "./chess-piece";

export default class PawnPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */

	constructor(player) {
		super(player, "chess-pawn", "pawn");
		// pawns can move 1 or 2 forward on there first "move".

		this.state = { isFirstMove: true };
		// pawns can move adjacent if opponent is next to them.
	}

	/**
	 *
	 * @param {*} source
	 * @param {*} destination
	 * @param {*} isOpponentAdjacent // pawns can move adjacent if opponent is next to them.
	 */
	identifyIfValidMove(source, destination, isOpponentAdjacent) {
		// on first move, pawn can move optional 2 spaces instead of 1.
		if (this.isFirstMove) {
			if (this.player === "white") {
				if (destination + 16 === source || destination + 8 === source) {
					return true;
					// opponent is next to pawn.
				} else if (
					isOpponentAdjacent &&
					(destination + 7 === source || destination + 9 === source)
				) {
					return true;
				} else if (this.player === "black") {
					// first pawn move
					if (destination - 16 === source || destination - 8 === source) {
						return true;
						// opponent is next to pawn.
					} else if (
						isOpponentAdjacent &&
						(destination - 7 === source || destination - 9 === source)
					) {
						return true;
					}
				}
				// not first move
				else {
					if (this.player === "white") {
						if (destination + 8 === source) {
							return true;
						}
						// opponent next to pawn.
						else if (
							isOpponentAdjacent &&
							(destination + 7 === source || destination + 9 === source)
						) {
							return true;
						}
					} else if (this.player === "black") {
						if (destination - 8 === source) {
							return true;
							// opponent is next to pawn.
						} else if (
							isOpponentAdjacent &&
							(destination - 7 === source || destination - 9 === source)
						) {
							return true;
						}
					}
				}
			}
		}
		// not a valid move.
		return false;
	}

	/**
	 * Returns an array of a path from the source to the destination.
	 * For the pawn, it should return an empty array unless the destination is on the first turn.
	 * @param {*} source
	 * @param {*} destination
	 */
	getPathFromSrcToDest(source, destination) {}

	/**
	 * Method to highlight possible moves for the player
	 * @param {Board} b
	 * @param {} location
	 */
	showAvailableSpots(b, location) {
		// console.log("Showing " + this.props.piece + " Available Spots");
		// if (location >= 8 && location < 16) {
		// 	b.blocks[location + 16].highlight();
		// }
		// b.blocks[location + 8].highlight();
	}
}
