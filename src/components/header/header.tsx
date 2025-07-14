import { Component, type ChangeEvent } from "react";
import Container from "../container/container";
import styles from "./header.module.scss";
import SearchButton from "./search-button/search-button";
import SearchInput from "./search-input/search-input";

type HeaderProperties = {
  onSearch: (query: string) => void;
};

type HeaderState = {
  search: string;
};

class Header extends Component<HeaderProperties> {
  state: HeaderState = {
    search: localStorage.getItem("search") || "",
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.search.trim());
    localStorage.setItem("search", this.state.search.trim());
  };
  render() {
    return (
      <header className={styles.header}>
        <Container>
          <div className={styles["header-content"]}>
            <h1>
              <img src='./poke.png' alt='Poke Pike' />
              Pokemons
            </h1>
            <form
              className={styles["header-search"]}
              onSubmit={this.handleSearch}
            >
              <SearchInput
                value={this.state.search}
                onChange={this.handleInputChange}
              />
              <SearchButton />
            </form>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
