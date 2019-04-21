import { 
  UPDATE_BOARD, SET_SELECTED_POSITION, SET_POTENTIAL_MOVES,
  NEXT_PLAYER_TURN, NEXT_MOVE_STATE, REVERT_TO_SELECT_PIECE, HANDLE_WHITE_REMOVE_PIECE, HANDLE_BLACK_REMOVE_PIECE
} from '../action/actionTypes';
import populateGameBoard, { initialWhitePiecesInPlay, initialBlackPiecesInPlay } from '../../utility/game-initialization';
import { SELECT_PIECE, SELECT_AVAILABLE_MOVE, WHITE, BLACK } from '../string-constants';

const initialState = {
  board: populateGameBoard(),
  selectedPosition: -1,
  potentialMoves: [],
  playerTurn: WHITE,
  moveState: SELECT_PIECE,
  whitePiecesInPlay: initialWhitePiecesInPlay(),
  blackPiecesInPlay: initialBlackPiecesInPlay()
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
    console.log('next move state queued');
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
   
  } else if (action.type === REVERT_TO_SELECT_PIECE) {
    if(state.moveState !== SELECT_PIECE) {
      return Object.assign({}, state, {
        moveState: SELECT_PIECE
      });
    }
  } else if (action.type === HANDLE_WHITE_REMOVE_PIECE ) {
      let foundItem = state.whitePiecesInPlay.find(x => x.typeOfPiece === action.payload.typeOfPiece);
      let piecesInPlay = state.whitePiecesInPlay;
      piecesInPlay.pop(foundItem);
      console.log('pieces in play')
      console.log(piecesInPlay);
      return Object.assign({}, state, {
        whitePiecesInPlay: piecesInPlay
      });
  } else if (action.type === HANDLE_BLACK_REMOVE_PIECE ) {
    let item = state.blackPiecesInPlay.find(x => x.typeOfPiece === action.payload.typeOfPiece);
    let itemsInPlay = state.blackPiecesInPlay;
    itemsInPlay.pop(item);
    return Object.assign({}, state, {
      blackPiecesInPlay: itemsInPlay
    });
  }
  return state;
}

export default rootReducer;