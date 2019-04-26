import ChessPiece from "./chess-piece";

export default class BishopPiece extends ChessPiece {
<<<<<<< HEAD
/**
 * Extends the ChessPiece class.
 * @param {string} player "white" or "black" to identify which player. 
 */
    constructor(player) {
        super(player, "chess-bishop", "bishop");
    }

    /**
     * Determines if the selected spot is a valid move
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
        // refer to PawnPiece.getPathFromSrcToDest for similar logic in how to implement
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
        if(Math.abs(source - destination) % 9 === 0){
          incrementBy = 9;
          pathStart += 9;
        }
        else{
          incrementBy = 7;
          pathStart += 7;
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
		super(player, "chess-bishop", "bishop");
	}

	/**
	 * Method to highlight possible moves for the player
	 * @param {Board} b
	 * @param {} location
	 */
	showAvailableSpots(b, location) {

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
			location - 7 * i >= 0
		) {
			if(location - 7 * i < 64 && location - 7 * i >= 0 )
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
>>>>>>> 0851f94ee98c2531ec7c501744ead35160f3504c

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
			(location + 9 * i) % 8 !== 0
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

		return validMoves.filter(x => x >= 0 && x < 64);
	}
}
