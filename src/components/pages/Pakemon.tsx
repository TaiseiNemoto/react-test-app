import { memo, useEffect, useState } from 'react';

import { useFetchPokemons } from '../../hooks/useFetchPokemons';

export const Pokemon = memo(() => {
  const { getPokemons, pokemonList } = useFetchPokemons();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons();
    setLoading(false);
  }, []);

  console.log(pokemonList, 'test');

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
