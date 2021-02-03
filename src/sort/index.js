import React, { useContext, useEffect, useState } from 'react';
import styles from './sort.module.scss';

import { AppContext } from '../context/AppContext';

const Sort = () => {
  const { setSortOrder, sortBy } = useContext(AppContext)
  const [checked, setChecked] = useState('name');

  useEffect(() => {
    if (checked !== sortBy) {
      setSortOrder(checked);
    }
  }, [checked]);

  return (
    <div className={styles.sort}>
      Sort by:
      <div>
        <input
          type={'radio'}
          name={'sort'}
          value={'name'}
          id={'name'}
          checked={checked === 'name'}
          onChange={() => setChecked('name')}
        />
        <label htmlFor={'name'}>Name</label>
      </div>
      <div>
        <input
          type={'radio'}
          name={'sort'}
          value={'star'}
          id={'star'}
          checked={checked === 'star'}
          onChange={() => setChecked('star')}
        />
        <label htmlFor={'star'}>Stargazers</label>
      </div>
    </div>
  );
};

export default Sort;