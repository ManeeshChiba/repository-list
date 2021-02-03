import React from 'react';
import styles from './App.module.scss';

import { AppProvider } from './context/AppContext';
import Search from './searchBar';
import List from './results/list';

const App = () => {
  return (
    <AppProvider>
      <main className={styles.layout}>
        <div className={styles.container}>
          <Search />
          <List />
        </div>
      </main>
    </AppProvider>
  );
};

export default App;