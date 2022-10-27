import axios from 'axios';
import { useCallback, useState } from 'react';

export const useFetchPokemonDetail = () => {
  const getPokemonDetail = useCallback((pokemonList: Array<null>) => {
    console.log(pokemonList);
  }, []);

  return { getPokemonDetail };
};
