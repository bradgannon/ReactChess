// Link.react.test.js
import React from 'react';
import App from '../App';
import populateGameBoard, { initialWhitePiecesInPlay, initialBlackPiecesInPlay } from '../utility/game-initialization';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import { SELECT_PIECE } from '../redux/string-constants';
import Board from '../components/board';
import Block from '../components/block';
import { watchFile } from 'fs';


Enzyme.configure({adapter: new Adapter()});
describe('<Board />',()=>{
  const initialState = {
    board: populateGameBoard(),
  selectedPosition: -1,
  potentialMoves: [],
  playerTurn: "white",
  moveState: SELECT_PIECE,
  whitePiecesInPlay: initialWhitePiecesInPlay(),
  blackPiecesInPlay: initialBlackPiecesInPlay(),
  gameMode: "chess"
  }

  const props = {
    board: populateGameBoard()
  }
  // const mockStore = configureStore();
  const mockStore = configureStore();
  let store,wrapper;
  

  beforeEach(()=>{
    store = mockStore(initialState)
      // store = mockStore(initialState)
      // container = shallow(<Board store={store} board={populateGameBoard()}/> )  
      wrapper = mount(<Provider store={store}><Board blocks={props.board}/></Provider>);
      // wrapper.setProps({board: props.board});
  })

  it('The Smart Board Component should be rendered', () => {
    let stuff = wrapper;
    expect(stuff).toBeDefined();
    //  expect(wrapper.length).toEqual(1)
  });

  it('Board should contain the passed in props', () => {
    // let stuff = wrapper.get(0);
    let board = wrapper.find(Board).get(0);
    let blocks = board.props.blocks;
    expect(board).toBeDefined();
    expect(blocks).toEqual(props.board);
    //  expect(container.prop('output')).toEqual(initialState.output)
  });

  it('Should contain 64 board pieces', () => {
    let board = wrapper.find(Board).get(0);
    let blocks = board.props.blocks;
    expect(blocks.length).toBe(64);
  });
});