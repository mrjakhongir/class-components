import { Component } from 'react';
import type { PokemonDetails } from '../../services/pokemon-service';
import Container from '../container/container';
import CharacterCard from './character-card/character-card';
import style from './characters.module.scss';

type CharactersProperties = {
  pokemons: PokemonDetails[];
};
class Characters extends Component<CharactersProperties> {
  render() {
    const pokemonsGrid = this.props.pokemons.map((pokemon) => {
      return <CharacterCard pokemon={pokemon} key={pokemon.name} />;
    });

    return (
      <div className={style.characters}>
        <Container>
          <div className={style['characters-grid']}>{pokemonsGrid}</div>
        </Container>
      </div>
    );
  }
}

export default Characters;
