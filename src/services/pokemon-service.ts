export interface Pokemon {
  name: string;
}

export interface PokemonDetails extends Pokemon {
  sprites: {
    front_default: string;
  };
  abilities: ability[];
}

interface ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=35');
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }
  const data = await response.json();
  const promises = data.results.map(async (pokemon: Pokemon) => {
    return fetchPokemon(pokemon.name);
  });
  return Promise.all(promises);
}

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }
  const data = await response.json();
  return data;
}
