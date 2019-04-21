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

export function initialWhitePiecesInPlay() {
	let whitePieces = new Array(16);
	whitePieces[0] = new RookPiece("white");
	whitePieces[1] = new KnightPiece("white");
	whitePieces[2] = new BishopPiece("white");
	whitePieces[3] = new QueenPiece("white");
	whitePieces[4] = new KingPiece("white");
	whitePieces[5] = new BishopPiece("white");
	whitePieces[6] = new KnightPiece("white");
	whitePieces[7] = new RookPiece("white");
	for( let i = 8; i <= 15; i++) {
		whitePieces[i] = new PawnPiece("white");
	}
	return whitePieces;
}

export function initialBlackPiecesInPlay() {
	let blackPieces = new Array(16);
	blackPieces[0] = new RookPiece("black");
	blackPieces[1] = new KnightPiece("black");
	blackPieces[2] = new BishopPiece("black");
	blackPieces[3] = new QueenPiece("black");
	blackPieces[4] = new KingPiece("black");
	blackPieces[5] = new BishopPiece("black");
	blackPieces[6] = new KnightPiece("black");
	blackPieces[7] = new RookPiece("black");
	for( let i = 8; i <= 15; i++) {
		blackPieces[i] = new PawnPiece("black");
	}
	return blackPieces;
}