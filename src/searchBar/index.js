import React, { useContext, useRef } from 'react';
import styles from './searchBar.module.scss';

import { AppContext } from '../context/AppContext';

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);
  const inputElem = useRef(null);

  const setTerm = () => {
    const term = inputElem?.current?.value;
    const cleanTerm = term?.replace(/\s/g, '');
    if (term && cleanTerm !== searchTerm) {
      setSearchTerm(cleanTerm);
    }
  }

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder={'Search for a user or organization on Github'}
        ref={inputElem}
        onKeyPress={({ code }) => (code === 'Enter') && setTerm()}
      />
      <button
        className={styles.button}
        onClick={setTerm}
      >Search</button>
    </div>
  );
};

export default Search;