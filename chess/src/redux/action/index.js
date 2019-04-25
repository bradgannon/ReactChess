// redux/actions.js
import { UPDATE_BOARD, SET_SELECTED_POSITION, SET_POTENTIAL_MOVES,
   NEXT_PLAYER_TURN, NEXT_MOVE_STATE, REVERT_TO_SELECT_PIECE,
  HANDLE_WHITE_REMOVE_PIECE, HANDLE_BLACK_REMOVE_PIECE, INITIALIZE_PAWN_WARS, INITIALIZE_CHESS, SET_GAME_MODE} from './actionTypes';

// let nextTodoId = 0
// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// })

/**
 * Update board takes the modified board and sends it to the globalstore.
 */
export function updateBoard(payload) {
  return { type: UPDATE_BOARD, payload};
}

export function setSelectedPosition(payload) {
  return { type: SET_SELECTED_POSITION, payload };
}

export function setPotentialMoves(payload) {
  return { type: SET_POTENTIAL_MOVES, payload};
}

export function nextPlayerTurn() {
  return { type: NEXT_PLAYER_TURN }
}

export function nextMoveState() {
  return { type: NEXT_MOVE_STATE };
}

export function revertToSelectPiece() {
  return { type: REVERT_TO_SELECT_PIECE}
}

/**
 * Handles a piece being removed from the game.
 * @param {*} payload 
 */
export function handleWhiteRemovePiece(payload) {
  return { type: HANDLE_WHITE_REMOVE_PIECE, payload };
}

export function handleBlackRemovePiece(payload) {
  return { type: HANDLE_BLACK_REMOVE_PIECE, payload };
}

export function initializePawnWars() {
  return { type: INITIALIZE_PAWN_WARS };
}

export function initializeChess() {
  return { type: INITIALIZE_CHESS };
}

export function setGameMode() {
  return { type: SET_GAME_MODE };
}