import ChessPiece from './chess-piece';

export default class KnightPiece extends ChessPiece {
/**
 * Extends the ChessPiece class.
 * @param {string} player "white" or "black" to identify which player. 
 */
    constructor(player) {
        super(player, "chess-knight");
    }

    getLegalMoves() {
        // determine all possible options.
        
    }
}

