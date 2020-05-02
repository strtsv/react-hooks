import React from 'react';

export default class DoStuffButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonText: 'Do something' };
    this.updateButtonText = this.updateButtonText.bind(this);
  }

  updateButtonText() {
    this.setState({ buttonText: 'Loading...' });
    window.setTimeout(() => this.setState({ buttonText: 'Do something' }), 2000);
  }

  render() {
    return <button onClick={this.updateButtonText}>{this.state.buttonText}</button>;
  }
}