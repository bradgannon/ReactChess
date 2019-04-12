import { UPDATE_BOARD, SET_SELECTED_POSITION, SET_POTENTIAL_MOVES, NEXT_PLAYER_TURN, NEXT_MOVE_STATE } from '../action/actionTypes';
import populateGameBoard from '../../utility/populate-game';
import { SELECT_PIECE, SELECT_AVAILABLE_MOVE, WHITE, BLACK } from '../string-constants';

const initialState = {
  board: populateGameBoard(),
  selectedPosition: -1,
  potentialMoves: [],
  playerTurn: WHITE,
  moveState: SELECT_PIECE
}

function rootReducer(state = initialState, action) { 
  if(action.type === UPDATE_BOARD) {
    return Object.assign({}, state, {
      board: action.payload
    });
  } else if (action.type === SET_SELECTED_POSITION) {
    return Object.assign({}, state, {
      selectedPosition: action.payload
    });
  } else if (action.type === SET_POTENTIAL_MOVES) {
    return Object.assign({}, state, {
      potentialMoves: action.payload
    });
  } else if (action.type === NEXT_PLAYER_TURN) {
    if(state.playerTurn === WHITE) {
      return Object.assign({}, state, {
        playerTurn: BLACK
      });
    } else {
      return Object.assign({}, state, {
        playerTurn: BLACK
      })
    }
  } else if (action.type === NEXT_MOVE_STATE) {
    if(state.moveState === SELECT_PIECE) {
      return Object.assign({}, state, {
        moveState: SELECT_AVAILABLE_MOVE
      });
    } else {
      if(state.playerTurn === WHITE) {
        return Object.assign({}, state, {
          moveState: SELECT_PIECE,
          playerTurn: BLACK
        });
      } else {
        return Object.assign({}, state, {
          moveState: SELECT_PIECE,
          playerTurn: WHITE
        });
      }
    }
   
  }
  return state;
}

export default rootReducer;