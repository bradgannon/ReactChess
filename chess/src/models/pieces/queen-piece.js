import ChessPiece from "./chess-piece";

export default class QueenPiece extends ChessPiece {
	/**
	 * Extends the ChessPiece class.
	 * @param {string} player "white" or "black" to identify which player.
	 */
	constructor(player) {
		super(player, "chess-queen", "queen");
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

		// Check color of the piece moving
		let enemy = "";
		if (this.player === "white") {
			enemy = "black";
		} else {
			enemy = "white";
		}

		// Check to the North East
		let i = 1;
		while (
			!b[location - 7 * i] &&
			(location - 7 * i) % 8 !== 0 &&
			location - 7 * i > 0
		) {
			validMoves.push(location - 7 * i);
			i++;
		}
		if (
			b[location - 7 * i] instanceof ChessPiece &&
			(location - 7 * i) % 8 > 0
		) {
			if (b[location - 7 * i].player === enemy) {
				validMoves.push(location - 7 * i);
			}
		}

		// Check to the North West
		i = 1;
		while (
			!b[location - 9 * i] &&
			(location - 9 * i) % 8 !== 7 &&
			location - 9 * i >= 0
		) {
			validMoves.push(location - 9 * i);
			i++;
		}
		if (
			b[location - 9 * i] instanceof ChessPiece &&
			(location - 9 * i) % 8 < 7
		) {
			if (b[location - 9 * i].player === enemy) {
				validMoves.push(location - 9 * i);
			}
		}

		// Check to the South East
		i = 1;
		while (
			!b[location + 9 * i] &&
			(location + 9 * i) % 8 !== 0 &&
			location + 9 * i < 64
		) {
			validMoves.push(location + 9 * i);
			i++;
		}
		if (
			b[location + 9 * i] instanceof ChessPiece &&
			(location + 9 * i) % 8 > 0
		) {
			if (b[location + 9 * i].player === enemy) {
				validMoves.push(location + 9 * i);
			}
		}

		// Check to the South West
		i = 1;
		while (
			!b[location + 7 * i] &&
			(location + 7 * i) % 8 !== 7 &&
			location + 7 * i < 64
		) {
			validMoves.push(location + 7 * i);
			i++;
		}
		if (
			b[location + 7 * i] instanceof ChessPiece &&
			(location + 7 * i) % 8 < 7
		) {
			if (b[location + 7 * i].player === enemy) {
				validMoves.push(location + 7 * i);
			}
		}

		// Check to the right
		i = 1;
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
