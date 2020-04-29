import React, { useState } from 'react';
import Search from './Search.js';
import Character from './Character.js';
import './App.css';

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <Search setSearchValue={setSearchValue} />
      {searchValue}
      <Character searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );

}

export default App;
