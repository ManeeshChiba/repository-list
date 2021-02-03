import React from 'react';
import styles from './App.module.scss';

import Search from './searchBar';
import Card from './results/card';

const App = () => {
  return (
    <main className={styles.layout}>
      <Search />
      {/* Status Updater */}
      {/* Results List */}
      <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card />
      </div>
    </main>
  );
};

export default App;