import PawnPiece from './pieces/pawn-piece';
import QueenPiece from './pieces/queen-piece';


/**
 * Checks if a pawn has past it's first move, also promotes pawn to a queen if
 * reaches the end of the board.
 * @param {Board} board 
 * @param {Int} selectedPosition 
 * @param {Int} index 
 */
export function pawnManeuvers(board, selectedPosition, index) {
  if (board[selectedPosition] instanceof PawnPiece) {
    // check if after first move.
    board[selectedPosition].setPastFirstMove();
    // check for pawn promotion.

    if (board[selectedPosition].player === "white" && index >= 0 && index <= 7) {
      let { player, icon, typeOfPiece } = board[selectedPosition];
      board[selectedPosition] = new QueenPiece(player, icon, typeOfPiece)
    } else if (board[selectedPosition].player === "black" && index >= 56 && index <= 63) {
      let { player, icon, typeOfPiece } = board[selectedPosition];
      board[selectedPosition] = new QueenPiece(player, icon, typeOfPiece)
    }
  }
  return board;
}