import React, {useState} from 'react';

const Search = ({setSearchValue}) => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      setSearchValue(name);
      setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}

export default Search;
