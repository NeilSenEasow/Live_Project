import React, { createContext, useContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

// Create a Provider component
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    // Add other state variables as needed
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  return useContext(MyContext);
}; 