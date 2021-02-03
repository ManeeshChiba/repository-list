import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const initialState = {
  searchTerm: '',
  state: 'initial',
  data: []
};

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);

  const setSearchTerm = (term) => {
    setStore({
      ...store,
      searchTerm: term,
      state: 'loading',
    });
    makeApiRequest(term);
  }

  const makeApiRequest = (org) => {
    fetch(`https://api.github.com/users/${org}/repos?per_page=100&type=all`)
      .then((response) => {
        if ([401, 404, 500].includes(response.status)) {
          setStore({
            ...store,
            state: 'error'
          });
        }
        if (response.status === 200) {
          setStore({
            ...store,
            state: 'ready',
          });
        }
        return response.json();
      })
      .then((json) => {
        setStore({
          ...store,
          data: json
        })
      });
  }

  return (
    <AppContext.Provider value={{
      ...store,
      setSearchTerm
    }}>
      {children}
    </AppContext.Provider>
  )
}