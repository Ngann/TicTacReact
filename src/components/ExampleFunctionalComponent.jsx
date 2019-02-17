import React from 'react';

class ExampleClassComponent extends React.Component{
  render(){
    return (
      <div>
        <h1>I am a standard functional component!</h1>
        <p>Here are props I receive from my parent:</p>
        <ul>
          <li>{this.props.examplePropOne}</li>
          <li>{this.props.examplePropTwo}</li>
        </ul>
      </div>
    );
  }
}

export default ExampleClassComponent;
