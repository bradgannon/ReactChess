import KingPiece from "../models/pieces/king-piece";

// boolean isChecked() {
//   /* Check straight lines */
//   for (directions) { // up, down, left and right
//       for (square in direction) { // square by square from the king and out in the current direction
//           if (square contains opponent rook or queen)
//               return true;
//           else if (square contains friendly piece)
//               continue;

//   /* Check diagonals */
//   for (directions) { // left-up, left-down, right-up and right-down
//       for (square in direction) { // square by square from the king and out in the current direction
//           if (square contains opponent bishop or queen)
//               return true;
//           else if (square contains friendly piece)
//               continue;

//   /* Check pawns */
//   if (squares where pawns would threaten the king contains pawns)
//       return true;

//   /* Check king, this is to find if a square is legal to move to only */
//   if (squares where a king would threaten the king contains king)
//       return true;

//   /* Check knights */
//   if (squares where knights would threaten the king contains knights)
//       return true;
export function isChecked(board, player, opposingPieces) {
  if(player === "white") {

  }
  // check up, down, left right
}

export function handleInCheckPlayer(board, player, opposingPieces) {
  // find king.
  let kingPieceIndex = board.indexOf(x => x.typeOfPiece === "king");
  if(kingPieceIndex < 0 ) {
    throw new Error("King doesn't Exist - game is over");
  }

  // find left
  let i = kingPieceIndex;
  let isFinishedWithColumn = false;
  while(!isFinishedWithColumn) {

    let square = board[i];
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
      return true;
    }
    i--;
    if(i % 8 === 7) {
      isFinishedWithColumn = true;
      console.log("finished left column check @: " + i);
    }
  }

  // find right
  i = kingPieceIndex;
  isFinishedWithColumn = false;
  while(!isFinishedWithColumn) {
    let square = board[i];
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
      return true;
    }
    i++;
    if( i % 8 === 0 ) {
      isFinishedWithColumn = true;
      console.log("finished right column check @: " + i);
    }
  }

  // find up
  i = kingPieceIndex;
  let isFinishedWithUp = false;
  while(!isFinishedWithUp) {
    let square = board[i];
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
      return true;
    }
    i = i + 8;
    if ( i > 63) {
      isFinishedWithUp = true;
    }
  }

  // find down
  isFinishedWithUp = false;
  while(!isFinishedWithUp) {
    let square = board[i];
    if (square && square.player !== player && (square.typeOfPiece === "rook" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
      return true;
    }
    i = i - 8;
    if ( i < 0) {
      isFinishedWithUp = true;
    }
  }

  // find north-east
  let isFinishedWithDiagonal = false;
  i = kingPieceIndex;
  while(!isFinishedWithDiagonal) {
    let square = board[i];
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
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
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
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
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
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
    if (square && square.player !== player && (square.typeOfPiece === "bishop" || square.typeOfPiece === "queen")) {
      console.log("enemy rook or queen present - in check");
      return true;
    }
    i = i + 7;
    if ( i > 63 || i % 8 === 7 ) {
      isFinishedWithDiagonal = true;
    }
  }

  //   /* Check pawns */
//   if (squares where pawns would threaten the king contains pawns)
//       return true;
  if(player === "white") {
    // handle black pawns
    i = kingPieceIndex;
    if (board[i - 7] && board[i - 7].player !== "white" && board[i - 7].typeOfPiece === "pawn") {
      return true;
    } else if (board[i - 9] && board[i - 9].player !== "white" && board[i - 9].typeOfPiece === "pawn") {
      return true;
    }
  } else if (player === "black") {
    i = kingPieceIndex;
    if (board[i + 7] && board[i + 7].player !== "black" && board[i + 7].typeOfPiece === "pawn") {
      return true;
    } else if (board[i + 9] && board[i + 9].player !== "black" && board[i + 9].typeOfPiece === "pawn") {
      return true;
    }
  }
}

//   /* Check king, this is to find if a square is legal to move to only */
//   if (squares where a king would threaten the king contains king)
//       return true;
// if (board[i + 8] && board[i])


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
  console.log("opposing pieces:");
  console.log(opposingPlayerPieceIndexes);
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