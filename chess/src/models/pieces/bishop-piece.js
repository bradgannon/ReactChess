import ChessPiece from './chess-piece';

export default class BishopPiece extends ChessPiece {
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
    identifyIfValidMove(source, destination) {
        // Iterative approach to determining if valid location.
        for (let i = 1; i < 8; i++) {
            if ((destination + (i * 9) === source) || (destination + (i * 7) === source) ||
                (destination - (i * 7) === source) || (destination - (i * 9) === source)) {
                return true;
            }
        }
        /* Old version - we'd need to repeat this for the other rows.
        if (destination + 9 === source || destination + 7 === source || destination - 7 === source || destination - 9 === source) {
            // Bishop can move diagonally
            return true;
            destination = source - 9
        }
        */

        return false;
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

