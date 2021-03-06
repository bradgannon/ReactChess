import React, { Component } from "react";
import Block from "./block";

export default class Board extends Component {
	constructor(props) {
		super(props);
		// this.counter = 0;
		this.blocks = this.props.blocks;
		// this.board = [];
	}

	/**
	 * Renders a block with the correct coloring.
	 * @param {int} i The index of the block to be rendered on the board.
	 * @param {boolean} isDark A boolean to determine what color the block should be
	 */
	createBlock(i, isDark) {
		// console.log("create block triggered with: " + isDark);
		if (isDark) {
			return (
				<Block
					key={i}
					index={i}
					piece={this.blocks[i]}
					isDark={true}
					location={i}
				/>
			);
		} else {
			return (
				<Block
					key={i}
					index={i}
					piece={this.blocks[i]}
					isDark={false}
					location={i}
				/>
			);
		}
	}

	/**
	 * Renders a row of blocks
	 * @param {*} arrayOfBlocks Array of block objects
	 * @param {*} i The index value
	 */
	createRow(arrayOfBlocks, i) {
		return (
			<div className="rowOfBlocks" key={i}>
				{arrayOfBlocks}
			</div>
		);
	}

	/**
	 * Render initializes the board and renders the component pieces of the board
	 */
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
				if (shouldBeDark === true) {
					rows.push(this.createBlock(i * 8 + j, false));
					shouldBeDark = false;
				} else if (shouldBeDark === false) {
					rows.push(this.createBlock(i * 8 + j, true));
					shouldBeDark = true;
				}
			}
			let boardRow = <div key={i} className="row">{rows}</div>;
			board.push(boardRow);
			// // this.board.push(;
			// this.populatePawns();
		}
		return (
			<div className="board">
				{/* { this.props.children } */}
				{board}
			</div>
		);
	}
}
