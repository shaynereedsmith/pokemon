import React, { useState, useEffect } from 'react';
import Search from './Search.js';
import './App.css';

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <Search setSearchValue={setSearchValue}/>
      {searchValue}
    </div>
  );

}

export default App;
