import axios from 'axios';
import { useCallback, useState } from 'react';

export const useFetchPokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemons = useCallback(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      setPokemonList(res.data);
    });
  }, []);

  return { pokemonList, getPokemons };
};
