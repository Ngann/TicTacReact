import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';
// import calculateWinner from './Winner';

class Board extends React.Component {
  //renderSquare pass in a property i which is attached to the Square component as a value. In the square component as add this.prop.value to the button.
  //this passes the prop from parent(Board) component to the child(Square). It is passing the numbers to the individual sqaure component
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render(){
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
