import React from 'react';
import styles from './list.module.scss';
import Card from '../card';
import Sort from '../sort';

const testVal = [{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
},
{
  name: 'A  really very long name with stuff and things and what can I say its a long name',
  description: 'Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here Some descriotion about the repo thats is here ',
  stargazers: 12,
  watchers: 37,
}
]

const ResultsList = () => {
  return (
    <section className={styles.results}>
      <div className={styles.resultsHeader}>
        <h1>Search results for: "Maneesh"</h1>
        <Sort />
      </div>
      <section className={styles.resultsList}>
        {
          testVal.map(({ name, description, stargazers, watchers }) => (
            <Card
              name={name}
              description={description}
              stargazers={stargazers}
              watchers={watchers}
            />
          ))
        }
      </section>
    </section>
  );
};

export default ResultsList;