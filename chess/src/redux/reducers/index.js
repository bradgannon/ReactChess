import { UPDATE_BOARD, SET_SELECTED_POSITION } from '../action/actionTypes';
import populateGameBoard from '../../utility/populate-game';

const initialState = {
  board: populateGameBoard(),
  selectedPosition: -1
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
  }
  return state;
}

export default rootReducer;