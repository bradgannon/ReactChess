import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

render() {
  if (this.state.clicked && this.state.loggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <GameLogic />
        </header>
      </div>
    );
  } else {
    return (
      <div className="Start-header">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
        />
        <h1 className="headerCSS">Welcome to Chess!</h1>
        <section>
          <div className="whitePiece">
            <FontAwesomeIcon
              icon="chess-pawn"
              size="6x"
              style={{ stroke: "black", strokeWidth: 10 }}
            />
          </div>
          <div className="blackPiece">
            <FontAwesomeIcon
              icon="chess-rook"
              size="6x"
              style={{ stroke: "white", strokeWidth: 10 }}
            />
          </div>
          <div className="whitePiece">
            <FontAwesomeIcon
              icon="chess-queen"
              size="6x"
              style={{ stroke: "black", strokeWidth: 10 }}
            />
          </div>
          <div className="blackPiece">
            <FontAwesomeIcon
              icon="chess-king"
              size="6x"
              style={{ stroke: "white", strokeWidth: 10 }}
            />
          </div>
          <div className="whitePiece">
            <FontAwesomeIcon
              icon="chess-bishop"
              size="6x"
              style={{ stroke: "black", strokeWidth: 10 }}
            />
          </div>
          <div className="blackPiece">
            <FontAwesomeIcon
              icon="chess-knight"
              size="6x"
              style={{ stroke: "white", strokeWidth: 10 }}
            />
          </div>
          <div className="whitePiece">
            <FontAwesomeIcon
              icon="chess-pawn"
              size="6x"
              style={{ stroke: "black", strokeWidth: 10 }}
            />
          </div>
        </section>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p>
          <button className="buttonCSS" onClick={this.handleClick}>
            Start Game
          </button>
        </p>
      </div>
    );
  }
}