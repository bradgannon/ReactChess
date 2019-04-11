import { UPDATE_BOARD } from '../action/actionTypes';
import populateGameBoard from '../../utility/populate-game';

const initialState = {
  board: populateGameBoard()
}

function rootReducer(state = initialState, action) { 
  if(action.type === UPDATE_BOARD) {
    return Object.assign({}, state, {
      board: action.payload
    });
  }
  return state;
}

export default rootReducer;