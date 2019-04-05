import React, { Component } from 'react';
import Block from './block';

export default class Board extends Component {

  constructor(props) {
    super(props);
    // this.counter = 0;
    this.blocks = this.props.blocks;
    console.log(this.blocks);
    // this.board = [];
  }

  createBlock(i, isDark) {
    // console.log("create block triggered with: " + isDark);
    console.log(this.props);
    if(isDark) {
      return <Block piece={this.blocks[i]} onClick={() => this.props.onClick(i)} isDark={true} />
    } else {
      return <Block piece={this.blocks[i]} onClick={() => this.props.onClick(i)} isDark={false} />
    }
  
  }

  createRow(arrayOfBlocks, i) {
    return ( <div className="rowOfBlocks" key={i}>{arrayOfBlocks}</div> );
  }

  populateBoard() {
      
  }

  populatePawns() {
    for(let i = 8; i <= 15; i++) {
      // console.log("board id: " + this.board[i].props.id + " board props: " + this.board[i].props);
      // this.board[i].id
      console.log(this.board[i].props);
    }
    for(let i = 48; i <= 55; i++) {

    }
  }

  render() {
    // initalize board logic.

    const board = [];
    let shouldBeDark = true;
    for (let i = 0; i < 8; i++) {
      // contains a row of blocks
      const rows = [];
      if (i % 2 === 0) {
        shouldBeDark = true;
      } else {
        shouldBeDark = false;
      }
      for (let j = 0; j < 8; j++) {
        if(shouldBeDark === true) {
          rows.push(this.createBlock( (i * 8) + j, false));
          shouldBeDark = false;
        } else if (shouldBeDark === false) {
          rows.push(this.createBlock( (i * 8) + j, true));
          shouldBeDark = true;
        }
      }
      let boardRow = (<div className="row">{rows}</div>);
      console.log(boardRow);
      board.push(boardRow);
      // // this.board.push(;
      // this.populatePawns();
    }
    return (
      <div className="board">
        {/* { this.props.children } */}
          {board}
      </div>
    )
  }
}
