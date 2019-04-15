import PawnPiece from "../models/pieces/pawn-piece";
import RookPiece from "../models/pieces/rook-piece";
import KnightPiece from "../models/pieces/knight-piece";
import BishopPiece from "../models/pieces/bishop-piece";
import QueenPiece from "../models/pieces/queen-piece";
import KingPiece from "../models/pieces/king-piece";

/**
 * Populates the gaem board with each player's piece, and returns 64-length array of pieces.
 * If there isn't a piece, the value is null.
 */
export default function populateGameBoard() {
	let boardOfBlocks = new Array(64);

	// black pieces
	// initialize row of pawns.
	for (let i = 8; i <= 15; i++) {
		boardOfBlocks[i] = new PawnPiece("black");
	}
	boardOfBlocks[0] = new RookPiece("black");
	boardOfBlocks[7] = new RookPiece("black");

	boardOfBlocks[1] = new KnightPiece("black");
	boardOfBlocks[6] = new KnightPiece("black");

	boardOfBlocks[2] = new BishopPiece("black");
	boardOfBlocks[5] = new BishopPiece("black");

	boardOfBlocks[3] = new QueenPiece("black");
	boardOfBlocks[4] = new KingPiece("black");

	// Test Piece in the middle of the board for moves testing
	boardOfBlocks[26] = new PawnPiece("black");
	boardOfBlocks[35] = new QueenPiece("white");

	// white peices
	for (let j = 48; j <= 55; j++) {
		boardOfBlocks[j] = new PawnPiece("white");
	}

	boardOfBlocks[63] = new RookPiece("white");
	boardOfBlocks[56] = new RookPiece("white");

	boardOfBlocks[62] = new KnightPiece("white");
	boardOfBlocks[57] = new KnightPiece("white");

	boardOfBlocks[61] = new BishopPiece("white");
	boardOfBlocks[58] = new BishopPiece("white");

	boardOfBlocks[60] = new KingPiece("white");
	boardOfBlocks[59] = new QueenPiece("white");

	return boardOfBlocks;
}
