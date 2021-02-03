import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const initialState = {
  loading: false,
  error: false,
  searchTerm: '',
  sortBy: 'full_name',
  data: []
};

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);

  const setSearchTerm = (term) => {
    setStore({
      ...store,
      searchTerm: term,
      loading: true,
      error: false,
    });
  }

  const setSortOrder = (order) => {
    setStore({
      ...store,
      sortBy: order,
      loading: true,
      error: false,
    });
  }

  useEffect(() => {
    const { loading, searchTerm, sortBy } = store;
    if (loading && searchTerm) {
      makeApiRequest(searchTerm, sortBy);
    }
  }, [store]);

  const makeApiRequest = (org, sort) => {
    fetch(`https://api.github.com/orgs/${org}/repos?per_page=100&type=all&sort=${sort}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No 200 response")
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setStore({
          ...store,
          loading: false,
          data,
        });
      })
      .catch(() => {
        setStore({
          ...store,
          loading: false,
          data: [],
          error: true,
        });
      });
  }

  return (
    <AppContext.Provider value={{
      ...store,
      setSearchTerm,
      setSortOrder
    }}>
      {children}
    </AppContext.Provider>
  )
}