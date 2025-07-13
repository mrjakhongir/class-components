import { Component } from 'react';
import { PiSpinnerGapBold } from 'react-icons/pi';
import styles from './loading-ui.module.scss';

class LoadingUI extends Component {
  render() {
    return (
      <div className={styles['loding-ui']}>
        <PiSpinnerGapBold size={50} color="#0072b1" />
      </div>
    );
  }
}

export default LoadingUI;
