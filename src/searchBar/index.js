import React from 'react';
import styles from './searchBar.module.scss';

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input className={styles.input} type="text" placeholder={'Search for a user or organization on Github'} />
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default Search;