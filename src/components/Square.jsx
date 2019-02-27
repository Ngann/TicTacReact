import React from 'react';
// import PropTypes from 'prop-types';

class Square extends React.Component {
  //In JavaScript classes, you need to always call super when defining the constructor of a subclass. All React component classes that have a constructor should start it with a super(props) call.
  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }
  render(){
    return (
      <button className="square" onClick={ () => this.setState({value:'X'})}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
