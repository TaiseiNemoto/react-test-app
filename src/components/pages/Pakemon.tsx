import { memo, useEffect, useState } from 'react';

import { useFetchPokemons } from '../../hooks/useFetchPokemons';
import { useFetchPokemonDetail } from '../../hooks/useFetchPokemonDetail';

export const Pokemon = memo(() => {
  const { getPokemons, pokemonList } = useFetchPokemons();
  const { getPokemonDetail } = useFetchPokemonDetail();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      getPokemons();
      console.log(pokemonList);

      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  return (
    <div className='pokemonList'>
      {loading ? (
        <h1>ロード中...</h1>
      ) : (
        <>
          <h1>ポケモンデータを取得しました。</h1>
        </>
      )}
    </div>
  );
});
