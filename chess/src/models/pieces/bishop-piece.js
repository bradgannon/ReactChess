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
    }
    


}

