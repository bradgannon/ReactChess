import React, { Component } from "react";
import "./block.css";
import PawnPiece from "../models/pieces/pawn-piece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faChessQueen,
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessKing
} from "@fortawesome/free-solid-svg-icons";
import RookPiece from "../models/pieces/rook-piece";
import BishopPiece from "../models/pieces/bishop-piece";
import KnightPiece from "../models/pieces/knight-piece";
import QueenPiece from "../models/pieces/queen-piece";
import KingPiece from "../models/pieces/king-piece";

/**
 * This class renders the each block on the board, and if needed, displaces the pieces on the board
 */
export default class Block extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      isPlayerOnBlock: "no",
      highlighted: false
    };
    // this.handleClick = this.handleClick.bind(this);
    console.log(props);
    this.isDark = props.isDark;
  }

  componentDidMount() {}

 /**
  * Method to Render a Pawn on the block
  */
  renderPawn() {
    if (this.props.piece.player === "black") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "white", "stroke-width": 15 }}
        />
      );
    } else if (this.props.piece.player === "white") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "black", "stroke-width": 15 }}
        />
      );
    }
  }

   /**
  * Method to Render a Rook on the block
  */
  renderRook() {
    if (this.props.piece.player === "black") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "white", "stroke-width": 15 }}
        />
      );
    } else if (this.props.piece.player === "white") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "black", "stroke-width": 15 }}
        />
      );
    }
  }

  /**
  * Method to Render a Bishop on the block
  */
  renderBishop() {
    if (this.props.piece.player === "black") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "white", "stroke-width": 15 }}
        />
      );
    } else if (this.props.piece.player === "white") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "black", "stroke-width": 15 }}
        />
      );
    }
  }

  /**
  * Method to Render a Knight on the block
  */
  renderKnight() {
    if (this.props.piece.player === "black") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "white", "stroke-width": 15 }}
        />
      );
    } else if (this.props.piece.player === "white") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "black", "stroke-width": 15 }}
        />
      );
    }
  }

  /**
  * Method to Render a Queen on the block
  */
  renderQueen() {
    if (this.props.piece.player === "black") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "white", "stroke-width": 15 }}
        />
      );
    } else if (this.props.piece.player === "white") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "black", "stroke-width": 15 }}
        />
      );
    }
  }

  /**
  * Method to Render a King on the block
  */
  renderKing() {
    if (this.props.piece.player === "black") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "white", "stroke-width": 15 }}
        />
      );
    } else if (this.props.piece.player === "white") {
      // Note: The Style property is CSS code - this allows an outline to be shown on the piece
      return (
        <FontAwesomeIcon
          icon={this.props.piece.icon}
          color={this.props.piece.player}
          size="6x"
          style={{ stroke: "black", "stroke-width": 15 }}
        />
      );
    }
  }

  /**
   * Determines if a piece needs to be render onthe specific block
   */
  renderPieces() {
    // Render HTML for respective piece, if there is one
    if (this.props.piece instanceof PawnPiece) {
      return this.renderPawn();
    } else if (this.props.piece instanceof RookPiece) {
      return this.renderRook();
    } else if (this.props.piece instanceof BishopPiece) {
      return this.renderBishop();
    } else if (this.props.piece instanceof KnightPiece) {
      return this.renderKnight();
    } else if (this.props.piece instanceof QueenPiece) {
      return this.renderQueen();
    } else if (this.props.piece instanceof KingPiece) {
      return this.renderKing();
    }
  }

  render() {
    return (
      <div className="block">
        {this.state.name}
        <button
          onClick={this.highlight}
          className={this.isDark ? "block-dark" : "block-light"}
        >
          {this.renderPieces()}
        </button>
      </div>
    );
  }

  /**
   * Highlights the block by changing its color
   */
  highlight() {
    // TODO
    //this.setState({highlighted: !this.state.highlighted});
  }
}
