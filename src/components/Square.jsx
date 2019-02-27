import React from 'react';
// import PropTypes from 'prop-types';

class Square extends React.Component {
  render(){
    return (
      <button class="sqaure">
        {this.props.value}
      </button>
    );
  }
}

export default Square;
