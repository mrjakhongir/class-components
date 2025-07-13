import { Component } from 'react';
import type { PokemonDetails } from '../../../services/pokemon-service';
import styles from './character-card.module.scss';

type CharacterCardProperties = {
  pokemon: PokemonDetails;
};

class CharacterCard extends Component<CharacterCardProperties> {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div className={styles['character-card']}>
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} loading="lazy" />
        </div>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <p>
          Abilities: <span>{pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</span>
        </p>
      </div>
    );
  }
}

export default CharacterCard;
