import React from 'react';
import styles from './sort.module.scss';

const Sort = () => {
  return (
    <div className={styles.sort}>
      Sort by:
      <div>
        <input type={'radio'} name={'sort'} value={'name'} id={'name'} defaultChecked={true}/>
        <label for={'name'}>Name</label>
      </div>
      <div>
        <input type={'radio'} name={'sort'} value={'star'} id={'star'} />
        <label for={'star'}>Stargazers</label>
      </div>
    </div>
  );
};

export default Sort;