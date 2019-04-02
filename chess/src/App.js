// React Imports
import React, { Component } from 'react';

// Font-Awesome Library logos - usage here: https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { library } from '@fortawesome/fontawesome-svg-core'   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook, faChessQueen, faChessPawn, faChessBishop, faChessKnight, faChessKing } from '@fortawesome/free-solid-svg-icons'

// Resources
import logo from './logo.svg';
import './App.css';
import KingPiece from './models/pieces/king-piece';
import QueenPiece from './models/pieces/queen-piece';
import Board from './components/board';
import GameLogic from './components/game-logic';


library.add(faChessRook, faChessQueen, faChessPawn, faChessBishop, faChessKnight, faChessKing)

class App extends Component {

  constructor() {
    super();
    this.king = new KingPiece('white');
    this.queen = new QueenPiece('white');
    this.blackKing = new KingPiece('black');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GameLogic />
          <div>
            Example Chess Icons <FontAwesomeIcon icon="chess-rook"/>
            <FontAwesomeIcon icon="chess-queen" />
            <FontAwesomeIcon icon="chess-pawn" />
            <FontAwesomeIcon icon="chess-bishop" />
            <FontAwesomeIcon icon="chess-knight" />
            <FontAwesomeIcon icon={this.king.icon} color={this.king.player}/>
            <FontAwesomeIcon icon={this.blackKing.icon} color={this.blackKing.player}/>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
