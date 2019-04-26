import ChessPiece from "./chess-piece";

export default class RookPiece extends ChessPiece {
<<<<<<< HEAD
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
    identifyIfValidMove(source, dest) {
        // refer to PawnPiece.identifyIfValidMove for similar logic in how to implement
        console.log('TO BE IMPLEMENTED');
    }

    /**
     * Returns an array of a path from the source to the destination.
     *
     * @param {*} source 
     * @param {*} destination 
     */
    getPathFromSrcToDest(source, destination) {
        // TODO: should exclude the source and destination in the path.
        let path = [], pathStart, pathEnd, incrementBy;
    if(source > destination){
      pathStart = destination;
      pathEnd = source;
    }
    else{
      pathStart = source;
      pathEnd = destination;
    }
    if(Math.abs(source - destination) % 8 === 0){
      incrementBy = 8;
      pathStart += 8;
    }
    else{
      incrementBy = 1;
      pathStart += 1;
    }

    for(let i = pathStart; i < pathEnd; i+=incrementBy){
      path.push(i);
    }
    return path;
  }
}
=======
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
>>>>>>> 0851f94ee98c2531ec7c501744ead35160f3504c

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

		return validMoves.filter(x => x >= 0 && x < 64);
		}
}
