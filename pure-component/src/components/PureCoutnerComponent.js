import React, { PureComponent } from 'react';

class PureCoutnerComponent extends PureComponent {
  state = {
    buttonState: false,
    count: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      buttonState: !prevState.buttonState,
    }), () => {
      console.log(this.state.buttonState);
    });
  };

  handleCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { buttonState, count } = this.state;

    console.log('This is a PureComponent');

    return (
      <div>
        <button onClick={this.handleClick}>Set Toggle</button>
        <button onClick={buttonState ? this.handleCounter : null}>Counter</button>
        <p>{count}</p>
      </div>
    );
  }
}

export default PureCoutnerComponent;
