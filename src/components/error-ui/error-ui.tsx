import { Component } from 'react';
import { MdError } from 'react-icons/md';
import styles from './error-ui.module.scss';

type ErrorUIProperties = {
  error?: string;
};

class ErrorUI extends Component<ErrorUIProperties> {
  render() {
    return (
      <div className={styles['error-ui']}>
        <MdError size={100} color="#ef5350" />
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default ErrorUI;
