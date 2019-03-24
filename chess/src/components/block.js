import React, { Component } from 'react';
import './block.css';

export default class Block extends Component {

  constructor(props) {
    super(props);
    this.state = { isPlayerOnBlock: 'no' };
    this.handleClick = this.handleClick.bind(this);
    console.log(props);
    this.isDark = props.isDark;
  }

  componentDidMount() {

  }
  render() {
    return (
      <div className="block">
        <button onClick={this.handleClick} className={this.isDark ? "block-dark" : "block-light"} />
      </div>
    )
  }

  handleClick() {
    console.log("block #" + this.props.id + " was clicked");;
  }
}
