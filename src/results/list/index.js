import React, { useContext } from 'react';
import styles from './list.module.scss';

import Card from '../card';

import { AppContext } from '../../context/AppContext';


const ResultsList = () => {
  const { loading, data } = useContext(AppContext);
  return (
    <section className={styles.results}>
      <section className={styles.resultsList}>
        {
          !loading && data.map(({ full_name, description, stargazers_count, watchers_count }) => (
            <Card
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