import React, { Component } from "react";
import Block from "./block";

export default class Board extends Component {
	constructor(props) {
		super(props);
		// this.counter = 0;
		this.blocks = this.props.blocks;
		console.log(this.blocks);
		// this.board = [];
	}

	/**
	 * Renders a block with the correct coloring.
	 * @param {int} i The index of the block to be rendered on the board.
	 * @param {boolean} isDark A boolean to determine what color the block should be
	 */
	createBlock(i, isDark) {
		if (isDark) {
			return (
				<Block
					key={i}
					piece={this.blocks[i]}
					onClick={() => this.props.onClick(i)}
					isDark={true}
				/>
			);
		} else {
			return (
				<Block
					key={i}
					piece={this.blocks[i]}
					onClick={() => this.props.onClick(i)}
					isDark={false}
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
			let boardRow = <div className="row">{rows}</div>;
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
