// Link.react.test.js
import React from 'react';
import App from '../App';
import Block from '../components/block';
import populateGameBoard, { initialWhitePiecesInPlay, initialBlackPiecesInPlay } from '../utility/game-initialization';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import { SELECT_PIECE } from '../redux/string-constants';
import Board from '../components/board';


Enzyme.configure({adapter: new Adapter()});
describe('<App />',()=>{
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
  const mockStore = configureStore();
  let store,wrapper;

  beforeEach(()=>{
      store = mockStore(initialState)
      // container = shallow(<Board store={store} board={populateGameBoard()}/> )  
      wrapper = mount(<Provider store={store}><App/></Provider>)
  })

  it('+++ render the connected(SMART) component', () => {
    let stuff = wrapper;
     expect(wrapper.find(App).length).toEqual(1)
  });

  it('App should contain the initial state', () => {
    let stuff = wrapper;
    let output = wrapper.props();
    let state = output.store.getState()
    expect(state).toEqual(initialState);
    //  expect(container.prop('output')).toEqual(initialState.output)
  });


});