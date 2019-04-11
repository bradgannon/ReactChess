// redux/actions.js
import { UPDATE_BOARD } from './actionTypes'

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