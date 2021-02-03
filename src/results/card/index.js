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

Card.defaultProps = {
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
}

export default Card;