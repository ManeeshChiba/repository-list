import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const initialState = {
  loading: false,
  searchTerm: '',
  sortBy: 'name',
  data: []
};

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);

  const setSearchTerm = (term) => {
    setStore({
      ...store,
      searchTerm: term,
      loading: true
    });
  }

  const setSortOrder = (order) => {
    setStore({
      ...store,
      sortBy: order,
      loading: true,
    });
  }

  useEffect(() => {
    const { loading, searchTerm, sortBy } = store;
    if (loading) {
      makeApiRequest(searchTerm, sortBy);
    }
  },[store]);

  const makeApiRequest = (org, sort) => {
    fetch(`https://api.github.com/orgs/${org}/repos?per_page=100&type=all&sort=${sort}`)
      .then((response) => {
        let payload = [];
        if ([401, 404, 500].includes(response.status)) {
          payload = [];
        }
        if (response.status === 200) {
          payload = response.json();
        }
        return payload;
      })
      .then((json) => {
        setStore({
          ...store,
          loading: false,
          data: json
        })
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