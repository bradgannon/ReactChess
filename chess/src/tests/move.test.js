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
import PawnPiece from '../models/pieces/pawn-piece';


Enzyme.configure({ adapter: new Adapter() });
describe('<Board />', () => {
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
    let store, wrapper;


    beforeEach(() => {
        store = mockStore(initialState)
        // store = mockStore(initialState)
        // container = shallow(<Board store={store} board={populateGameBoard()}/> )  
        wrapper = mount(<Provider store={store}><Board blocks={props.board} /></Provider>);
        // wrapper.setProps({board: props.board});
    })

    it('Black Pawn at location 8 should move forward 2', () => {
        let board = wrapper.find(Board).get(0);
        board.props.blocks.index = 8;
        board.props.blocks.selectedPosition = 32;

        const fromBlock = wrapper.find('#8');
        const toBlock = wrapper.find('#32');

        expect(board.props.blocks[8] instanceof PawnPiece).toBe;

        // move piece
        fromBlock.simulate('click');
        toBlock.simulate('click');

        expect(board.props.blocks[32] instanceof PawnPiece).toBe(true);
    });
});