import { Component } from 'react';
import styles from './error-button.module.scss';

class ErrorButton extends Component {
  state = { makeError: false };
  render() {
    if (this.state.makeError) {
      throw new Error('This error made by you');
    }
    return (
      <button className={styles['error-button']} onClick={() => this.setState({ makeError: true })}>
        Make an error
      </button>
    );
  }
}

export default ErrorButton;
