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

export default Square;
