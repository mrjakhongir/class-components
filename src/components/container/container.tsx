import { Component } from 'react';
import styles from './container.module.scss';

type ContainerProperties = {
  children: React.ReactNode;
};

class Container extends Component<ContainerProperties> {
  render() {
    const { children } = this.props;
    return <div className={styles.container}>{children}</div>;
  }
}

export default Container;
