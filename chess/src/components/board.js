import React, { Component } from 'react';
import Block from './block';

export default class Board extends Component {

  createBlock(id, isDark) {
    console.log("create block triggered with: " + isDark);
    if(isDark) {
      return ( <Block id={id} isDark={true} key={id}/>)
    } else {
      return ( <Block id={id} isDark={false} key={id} />)
    }
  
  }

  createRow(arrayOfBlocks, i) {
    return ( <div className="rowOfBlocks" key={i}>{arrayOfBlocks}</div> );
  }

  constructor(props) {
    super(props);
    this.counter = 0;
  }

  render() {
    // initalize board logic.
    let board = [];
    let shouldBeDark = true;
    for (let i = 0; i < 8; i++) {
      let rowOfBlocks = [];
      if (i % 2 === 0) {
        shouldBeDark = true;
      } else {
        shouldBeDark = false;
      }
      for (let j = 0; j < 8; j++) {
        if(shouldBeDark === true) {
          rowOfBlocks.push(this.createBlock( (i * 8) + j), false);
          shouldBeDark = false;
        } else if (shouldBeDark === false) {
          rowOfBlocks.push(this.createBlock( (i * 8) + j, true));
          shouldBeDark = true;
        }
      }
      board.push(this.createRow(rowOfBlocks, i));
    }
    return (
      <div className="board">
        {/* { this.props.children } */}
          {board}
      </div>
    )
  }
}
