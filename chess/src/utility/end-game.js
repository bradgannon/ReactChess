
export function isChecked(board, player) {
  if(player === "white") {
    return handleInCheckPlayer(board, "white");
  } else {
    return handleInCheckPlayer(board, "black");
  }
  // check up, down, left right
}

export function handleInCheckPlayer(board, player) {
  // find king.
  // let kingPieceIndex = board.indexOf(x => x.typeOfPiece === "king");
  let kingPieceIndex = -1;
  for(let i = 0; i < board.length; i++) {
    if (board[i] && board[i].player === player && board[i].typeOfPiece === "king") {
      kingPieceIndex = i;
      break;
    }
  }
  if(kingPieceIndex < 0 ) {
    throw new Error("King doesn't Exist - game is over");
  }

  // find left
  let i = kingPieceIndex;
  let isFinishedWithColumn = false;
  while(!isFinishedWithColumn) {

    let square = board[i];
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("left triggered");
      return true;
    }
    i--;
    if(i % 8 === 7 || i < 0) {
      isFinishedWithColumn = true;
    }
  }

  
  // find right
  i = kingPieceIndex;
  isFinishedWithColumn = false;
  while(!isFinishedWithColumn) {
    let square = board[i];
    if(square && (square.typeOfPiece !== "rook" && square.typeOfPiece !== "queen" && square.player === player) && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("right triggered");
      return true;
    }
    i++;
    if( i % 8 === 0 || i > 63) {
      isFinishedWithColumn = true;
    }
  }

  
  // find up
  i = kingPieceIndex;
  let isFinishedWithUp = false;
  while(!isFinishedWithUp) {
    let square = board[i];
    if(square && ((square.typeOfPiece !== "rook" && square.typeOfPiece !== "queen") || square.player === player) && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("up triggered");
      return true;
    }
    i = i + 8;
    if ( i > 63) {
      isFinishedWithUp = true;
    }
  }

  
  // find down
  i = kingPieceIndex;
  isFinishedWithUp = false;
  while(!isFinishedWithUp) {
    let square = board[i];
    if(square && ((square.typeOfPiece !== "rook" && square.typeOfPiece !== "queen") || square.player === player) && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("down triggered");
      return true;
    }
    i = i - 8;
    if ( i < 0) {
      isFinishedWithUp = true;
    }
  }

  // find north-east from king
  let isFinishedWithDiagonal = false;
  i = kingPieceIndex;
  while(!isFinishedWithDiagonal) {
    let square = board[i];
     if(square && (square.typeOfPiece !== "bishop" && square.typeOfPiece !== "queen") && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("norhteast");
      return true;
    }
    i = i - 7;
    if ( i < 0 || i % 8 === 0) {
      isFinishedWithDiagonal = true;
    }
  }

  
  // find north-west
  isFinishedWithDiagonal = false;
  i = kingPieceIndex;
  while(!isFinishedWithDiagonal) {
    let square = board[i];
    if(square && (square.typeOfPiece !== "bishop" && square.typeOfPiece !== "queen") && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("northwest triggered");
      return true;
    }
    i = i - 9;
    if ( i < 0 || i % 8 === 7) {
      isFinishedWithDiagonal = true;
    }
  }

  
  // find south-east
  isFinishedWithDiagonal = false;
  i = kingPieceIndex;
  while(!isFinishedWithDiagonal) {
    let square = board[i];
    if(square && (square.typeOfPiece !== "bishop" && square.typeOfPiece !== "queen") && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("southeast");
      return true;
    }
    i = i + 9;
    if ( i > 63 || i % 8 === 0 ) {
      isFinishedWithDiagonal = true;
    }
  }

  
  // find south-west
  isFinishedWithDiagonal = false;
  i = kingPieceIndex;
  while(!isFinishedWithDiagonal) {
    let square = board[i];
    if(square && (square.typeOfPiece !== "bishop" && square.typeOfPiece !== "queen") && i !== kingPieceIndex) {
      break;
    }
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("southwest triggered");
      return true;
    }
    i = i + 7;
    if ( i > 63 || i % 8 === 7 ) {
      isFinishedWithDiagonal = true;
    }
  }

  

  
  // pawns
  if(player === "white") {
    // handle black pawns
    i = kingPieceIndex;
    if (board[i - 7] && board[i - 7].player !== "white" && board[i - 7].typeOfPiece === "pawn") {
      console.log("pawn check, i - 7");
      return true;
    } else if (board[i - 9] && board[i - 9].player !== "white" && board[i - 9].typeOfPiece === "pawn") {
      console.log("pawn check, i - 9");
      return true;
    }
  } else if (player === "black") {
    i = kingPieceIndex;
    if (board[i + 7] && board[i + 7].player !== "black" && board[i + 7].typeOfPiece === "pawn") {
      console.log("pawn check, i + 7");
      return true;
    } else if (board[i + 9] && board[i + 9].player !== "black" && board[i + 9].typeOfPiece === "pawn") {
      console.log("pawn check, i + 9");
      return true;
    }
  }


  


  
//       if (squares where knights would threaten the king contains knights)
//       return true;
  // check knights
  i = kingPieceIndex;
  if(board[i + 6] && board[i + 6].player !== player && board[i + 6].typeOfPiece === "knight") {
    console.log("i + 6 triggered");
    return true;
  } else if (board[i + 10] && board[i + 10].player !== player && board[i + 10].typeOfPiece === "knight") {
    console.log("i + 10 triggered");
    return true;
  } else if (board[i + 15] && board[i + 15].player !== player && board[i + 15].typeOfPiece === "knight") {
    console.log("i + 15 triggered");
    return true;
  } else if (board[i + 17] && board[i + 17].player !== player && board[i + 17].typeOfPiece === "knight") {
    console.log("i + 17 triggered");
    return true;
  } else if (board[i - 6] && board[i - 6].player !== player && board[i - 6].typeOfPiece === "knight") {
    console.log("i - 6 triggered");
    return true;
  } else if (board[i - 10] && board[i -10].player !== player && board[i - 10].typeOfPiece === "knight") {
    console.log("i - 10 triggered");
    return true;
  } else if (board[i - 15] && board[i - 15].player !== player && board[i - 15].typeOfPiece === "knight") {
    console.log("i - 15 triggered");
    return true;
  } else if (board[i - 17] && board[i - 17].player !== player && board[i - 17].typeOfPiece === "knight") {
    console.log("i - 17 triggered");
    return true;
  }

    // check king spots
    let conflictedKingMoves = getConflictingKingMoves(board, player, kingPieceIndex);
    if(conflictedKingMoves.length > 0) {
      console.log("conflicted king moves, make sure to disallow for: " + player);
      console.log(conflictedKingMoves);
      return true;
    }
  // check kings
  
}
export function getConflictingKingMoves(board, currentPlayerTurn, kingPieceIndex) {
  // king spots
  let i = kingPieceIndex;
  let potentialKingMoves = [i + 1, i + 9, i + 8, i + 7, i - 1, i - 8, i - 9, i - 7];
  let filteredKingMoves = potentialKingMoves.filter(x => x >= 0 && x < 64);
  let nonOccupiedKingdom = [];
  filteredKingMoves.forEach(move => {
    if(board[move] && board[move].player !== currentPlayerTurn && board[move].typeOfPiece === "king") {
      nonOccupiedKingdom.push(move);
    }
  })
  return nonOccupiedKingdom;
}

export function getAllOpposingMoves(board, currentPlayerTurn) {
  // let localBoardObj = {};
  let localBoard = Array.from(board);
  let opposingPlayerPieceIndexes = [];
  for(let i = 0; i < 64; i++) {
    let block = localBoard[i];
    if(block && block.player !== currentPlayerTurn) {
      opposingPlayerPieceIndexes.push(i);
    }

  }
  // let foundArray = localBoard.find(x => (x && x.player !== currentPlayerTurn));
  let allMoves = [];
  opposingPlayerPieceIndexes.forEach(pieceIndex => {
    let currentMoves = board[pieceIndex].showAvailableSpots(board, pieceIndex);
    currentMoves.forEach(move => {
      allMoves.push(move);
    })
  });
  let uniqueMoves = Array.from(new Set(allMoves));
  return uniqueMoves;
}

export function getKingPieceIndex(board, playerTurn) {
  let kingPieceIndex = -1;
  for(let i = 0; i < board.length; i++) {
    if (board[i] && board[i].player === playerTurn && board[i].typeOfPiece === "king") {
      kingPieceIndex = i;
      break;
    }
  }
  if(kingPieceIndex < 0 ) {
    throw new Error("King doesn't Exist - game is over");
  }
  return kingPieceIndex;
}