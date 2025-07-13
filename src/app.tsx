import { Component } from 'react';
import Characters from './components/characters/characters';
import ErrorBoundary from './components/error-boundary/error-boundary';
import ErrorButton from './components/error-button/error-button';
import ErrorUI from './components/error-ui/error-ui';
import Header from './components/header/header';
import LoadingUI from './components/loading-ui/loading-ui';
import { fetchPokemon, fetchPokemons, type PokemonDetails } from './services/pokemon-service';

type CharactersState = {
  pokemons: PokemonDetails[];
  loading: boolean;
  error: string | null;
  searchValue: string;
};

class App extends Component {
  state: CharactersState = {
    pokemons: [],
    loading: true,
    error: '',
    searchValue: '',
  };
  async componentDidMount() {
    try {
      const pokemons = await fetchPokemons();
      this.setState({
        pokemons: pokemons,
        loading: false,
      });
    } catch (error: unknown) {
      this.setState({
        error: error instanceof Error ? error.message : 'Error to fetch pokémon',
        loading: false,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleSearch = async (query: string) => {
    this.setState({ loading: true, error: '', pokemons: [] });

    if (query) {
      try {
        const pokemons = await fetchPokemon(query);
        this.setState({
          pokemons: [pokemons],
          loading: false,
        });
      } catch (error: unknown) {
        this.setState({
          error: error instanceof Error ? error.message : 'Error to fetch pokémon',
          loading: false,
        });
      }
    } else {
      try {
        const pokemons = await fetchPokemons();
        this.setState({
          pokemons: pokemons,
          loading: false,
        });
      } catch (error: unknown) {
        this.setState({
          error: error instanceof Error ? error.message : 'Error to fetch pokémon',
          loading: false,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  };

  render() {
    const { pokemons, loading, error } = this.state;

    return (
      <div>
        <Header onSearch={this.handleSearch} />
        <ErrorBoundary>
          {loading && <LoadingUI />}
          {error && <ErrorUI error={error} />}
          {pokemons.length > 0 && <Characters pokemons={pokemons} />}
          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
