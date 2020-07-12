import React, { createContext, useReducer } from 'react';

const createProvider = (initialState, reducer, actions) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (const action in actions) {
      boundActions[action] = actions[action](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createProvider;
