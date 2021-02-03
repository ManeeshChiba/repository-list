import React, { useContext } from 'react';
import styles from './list.module.scss';

import { AppContext } from '../../context/AppContext';

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
  const { searchTerm, state } = useContext(AppContext);
  return (
    <section className={styles.results}>
      <div className={styles.resultsHeader}>
        {
          state === 'loading' && (<h1>Loading results for "{searchTerm}"</h1>)
        }
        {
          state === 'ready' && searchTerm.length > 0 && (<h1>Search results for: "{searchTerm}"</h1>)
        }
        {
          state === 'ready' && searchTerm.length <= 0 && (<h1>Type something above to search</h1>)
        }
        {
          state === 'error' && (<h1>Something went wrong, please try again</h1>)
        }
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