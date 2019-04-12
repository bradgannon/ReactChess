import ChessPiece from "./chess-piece";
export default class PawnPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */

	constructor(player) {
		super(player, "chess-pawn", "pawn");
		// pawns can move 1 or 2 forward on there first "move".

		this.state = {
			isFirstMove: true
		};
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
		console.log("showAvailableSpots queued");

		// return an array of possible locations.
		let validMoves = [];
		if (this.player === "white") {
			// subtract values.
			if (b[location - 9] instanceof ChessPiece) {
				if (b[location - 9].player === "black") {
					validMoves.push(location - 9);
				}
			}
			if (b[location - 7] instanceof ChessPiece) {
				if (b[location - 7].player === "black") {
					validMoves.push(location - 7);
				}
			}
			let aboveLocation = b[location - 8];
			if (!b[location - 8]) {
				validMoves.push(location - 8);
			}
			if (this.state.isFirstMove && !b[location - 16]) {
				validMoves.push(location - 16);
			}
		} else {
			// player is black
			if (b[location + 9] instanceof ChessPiece) {
				if (b[location + 9].player === "white") {
					validMoves.push(location + 9);
				}
			}
			if (b[location + 7] instanceof ChessPiece) {
				if (b[location + 7].player === "white") {
					validMoves.push(location + 7);
				}
			}
			if (!b[location + 8]) {
				validMoves.push(location + 8);
			}
			if (this.state.isFirstMove && !b[location + 16]) {
				validMoves.push(location + 16);
			}
		}
		return validMoves;
	}
}
