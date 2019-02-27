import React from 'react';
import PropTypes from 'prop-types';

function Square(props){
  return (
    //When you call setState in a component, React automatically updates the child components inside of it too.
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

//functional component does not need to worry about this because when the props come into a class component it goes to the constructor which stores it as this.props... but with a function component you can pass the property directly.

export default Square;
