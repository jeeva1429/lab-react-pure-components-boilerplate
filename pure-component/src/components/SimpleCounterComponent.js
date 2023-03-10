import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: false,
      count: 0
    };
  }

  handleClick = () => {
  this.setState(prevState => ({
    buttonState: !prevState.buttonState
  }), () => {
    console.log(this.state.buttonState);
  });
};


  handleCounter = () => {
    this.setState(prevState => ({
        count: prevState.count+1
    }))
  }

  render() {
    console.log('This is simple Component')
    return (
      <div>
        {/* {this.state.buttonState && } */}
        <button onClick={this.handleClick}>Set Toggle</button>
        <button onClick={this.state.buttonState ? this.handleCounter:null}>Counter</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default SimpleCounterComponent;
