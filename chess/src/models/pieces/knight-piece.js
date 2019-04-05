import ChessPiece from './chess-piece';

export default class KnightPiece extends ChessPiece {
/**
 * Extends the ChessPiece class.
 * @param {string} player "white" or "black" to identify which player. 
 */
    constructor(player) {
        super(player, "chess-knight", "knight");
    }

    /**
     * 
     * @param {*} source 
     * @param {*} destination
     */
    identifyIfValidMove(source, destination) {
        if (destination + 15 == source || destination + 17 == source) {
            // Knight forward two
            return true;
        }
        else if (destination + 6 == source || destination - 10 == source)
        {
            // Knight left two
            return true;
        }
        else if (destination + 6 == source || destination - 10 == source)
        {
            // Knight right two
            return true;
        }
        else if (destination - 17 == source || destination - 15 == source)
        {
            // Knight back two
            return true;
        }
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

