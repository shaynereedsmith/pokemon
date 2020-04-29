import React, { useState, useEffect } from 'react';

const Character = ({ searchValue, setSearchValue }) => {

  const [pokemon, setPokemon] = useState('');
  const [error, setError] = useState(null);
  const changePokemon = name => setSearchValue(name);

  useEffect(() => {

    const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    console.log(url);
    let controller = new window.AbortController();

    const loadData = async () => {
      try {
        const response = await fetch( url, { signal: controller.signal });
        const data = await response.json();
        setPokemon(data);
      } catch (e) {
        if (e.name === 'AbortController') {
          console.log('FetchCancel: caught cancel');
        } else {
          setError(e);
          throw error;
        }
      }
    }

    loadData();

    return () => {
      console.log('FetchCancel: unmounting');
      controller.abort();
    }

  }, [searchValue] );

  if ( !pokemon.name && pokemon.results ) {
    return(
      <div>
        <h2>suggestions</h2>
        {Object.entries(pokemon.results).map( ( [key] ) => (
          { name } = pokemon.results[key],
          <button key={key} value={name} onClick={(e) => changePokemon(e.target.value)}>
            {name}
          </button>
        ))}
      </div>
    )
  } else if ( pokemon.name ) {

    return(
      <div>
        {pokemon.name}
        {console.log(pokemon)}
      </div>
    )
  } else {
    return <div>no results</div>
  }
}

export default Character;
