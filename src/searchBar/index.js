import React, { useContext, useRef, useState } from 'react';
import styles from './searchBar.module.scss';

import { AppContext } from '../context/AppContext';

import Sort from '../sort';

const Search = () => {
  const { searchTerm, setSearchTerm, loading, data } = useContext(AppContext);
  const [sTerm, setSTerm] = useState(searchTerm);
  const inputElem = useRef(null);

  const setTerm = () => {
    const term = inputElem?.current?.value;
    const cleanTerm = term?.replace(/\s/g, '');
    if (term && cleanTerm !== searchTerm) {
      setSearchTerm(cleanTerm);
      setSTerm(cleanTerm);
    }
  }

  const renderStatusText = () => {
    const hasData = data.length > 0;
    if (loading && hasData) {
      return <h1>Loading results for "{sTerm}"</h1>;
    }
    if (!loading) {
      if (!hasData && sTerm) {
        return <h1>Something went wrong, please try again</h1>;
      }
    }
  }

  return (
    <>
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
    <div className={styles.resultsHeader}>
      {!sTerm && <h1>Type something above to get started</h1>}
      {renderStatusText()}
      <Sort />
    </div>
  
  </>
  );
};

export default Search;