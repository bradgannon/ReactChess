// redux/actions.js
import { UPDATE_BOARD, SET_SELECTED_POSITION, SET_POTENTIAL_MOVES, NEXT_PLAYER_TURN, SET_MOVE_STATE, NEXT_MOVE_STATE } from './actionTypes'

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

export function nextMoveState(payload) {
  return { type: NEXT_MOVE_STATE, payload };
}