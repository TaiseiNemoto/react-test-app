// @ts-nocheck
import axios from 'axios';
import { useState } from 'react';

export const useFetchPokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonDetail = (pokemonList: string) => {};

  const getPokemons = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((res) => {
      const pokemonList = res.map((res) => {
        getPokemonDetail(res.url);
      });
    });
  };

  return { pokemonList, getPokemons };
};
