import { Component } from 'react';
import styles from './search-button.module.scss';

class SearchButton extends Component {
  render() {
    return <button className={styles['search-button']}>Search</button>;
  }
}

export default SearchButton;
