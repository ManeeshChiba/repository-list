import React from 'react';
import styles from './App.module.scss';

import Search from './searchBar';
import List from './results/list';

const App = () => {
  return (
    <main className={styles.layout}>
      <div className={styles.container}>
        <Search />
        <List />
      </div>
    </main>
  );
};

export default App;