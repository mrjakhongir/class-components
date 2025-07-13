import { Component, type ChangeEvent } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './search-input.module.scss';
type SearchInputProperties = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

class SearchInput extends Component<SearchInputProperties> {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className={styles['search-input']}>
        <BiSearchAlt2 size={20} color="#fff" />
        <input type="text" placeholder="Search..." value={value} onChange={onChange} />
      </div>
    );
  }
}

export default SearchInput;
