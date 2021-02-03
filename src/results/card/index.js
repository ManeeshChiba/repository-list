import React from 'react';
import styles from './card.module.scss';

const Card = ({name, description, stargazers, watchers}) => {
  return (
    <div className={styles.result}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.stat}>
        <span>Stargazers</span>
        <span>{stargazers}</span>
      </div>
      <div className={styles.stat}>
        <span>Watchers</span>
        <span>{watchers}</span>
      </div>
    </div>
  );
};

export default Card;