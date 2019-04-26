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

<<<<<<< HEAD
    /**
     * Returns an array of a path from the source to the destination.
     *
     * @param {*} source 
     * @param {*} destination 
     */
    getPathFromSrcToDest(source, destination) {
        // TODO: should exclude the source and destination in the path.
        return (source - 17 === destination || 
            source - 10 === destination || 
            source + 6 === destination || 
            source + 15 === destination || 
            source - 15 === destination || 
            source - 6 === destination || 
            source + 10 === destination || 
            source + 17 === destination);
        }
}
=======
		// return an array of possible locations.
		let validMoves = [];

		// Check color of the piece moving
		let enemy = "";
		if (this.player === "white") {
			enemy = "black";
		} else {
			enemy = "white";
		}
>>>>>>> 0851f94ee98c2531ec7c501744ead35160f3504c

		// Mod statement ensure that the knighkt does not cross the boundary of the chessboard and reappear on the other side of the board, a limitation caused by the 1D array
		// Checking to see if the move location is an enemy player allows for the knight to take the piece
		if (
			(location - 17) % 8 < 7 &&
			(!b[location - 17] || b[location - 17].player === enemy)
		) {
			validMoves.push(location - 17);
		}
		if (
			(location - 15) % 8 > 0 &&
			(!b[location - 15] || b[location - 15].player === enemy)
		) {
			validMoves.push(location - 15);
		}
		if (
			(location + 17) % 8 > 0 &&
			(!b[location + 17] || b[location + 17].player === enemy)
		) {
			validMoves.push(location + 17);
		}
		if (
			(location + 15) % 8 < 7 &&
			(!b[location + 15] || b[location + 15].player === enemy)
		) {
			validMoves.push(location + 15);
		}
		if (
			(location - 10) % 8 < 6 &&
			(!b[location - 10] || b[location - 10].player === enemy)
		) {
			validMoves.push(location - 10);
		}
		if (
			(location + 10) % 8 > 1 &&
			(!b[location + 10] || b[location + 10].player === enemy)
		) {
			validMoves.push(location + 10);
		}
		if (
			(location - 6) % 8 > 1 &&
			(!b[location - 6] || b[location - 6].player === enemy)
		) {
			validMoves.push(location - 6);
		}
		if (
			(location + 6) % 8 < 6 &&
			(!b[location + 6] || b[location + 6].player === enemy)
		) {
			validMoves.push(location + 6);
		}

		// todo: Handle Instance of Opposing Chess Pieces
		return validMoves.filter(x => x >= 0 && x < 64);
	}
}
