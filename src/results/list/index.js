import React, { useContext } from 'react';
import styles from './list.module.scss';

import Card from '../card';
import Sort from '../sort';

import { AppContext } from '../../context/AppContext';


const ResultsList = () => {
  const { loading, data, searchTerm, error } = useContext(AppContext);
  return (
    <section className={styles.results}>
      <div className={styles.resultsHeader}>
        {
          !loading && error && (<h1>Something has gone wrong. Please try again.</h1>)
        }
        {
          loading && (<h1>Loading repositories for "{searchTerm}"</h1>)
        }
        {
          !loading && searchTerm === '' && (<h1>Please enter a search above</h1>)
        }
        {
          !loading && !error && searchTerm && (<h1>Repositories for "{searchTerm}"</h1>)  
        }
        <Sort />
      </div>
      <section className={styles.resultsList}>
        {
          loading === false && error === false && data.map(({ id, full_name, description, stargazers_count, watchers_count }) => (
            <Card
              key={id}
              name={full_name}
              description={description}
              stargazers={stargazers_count}
              watchers={watchers_count}
            />
          ))
        }
      </section>
    </section>
  );
};

export default ResultsList;