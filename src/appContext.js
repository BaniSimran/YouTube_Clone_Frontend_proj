import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [appState, setAppState] = useState('empty');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAppState('home');
        setCurrentUser(user);
        console.log(user);
      } else {
        setCurrentUser(null);
        setAppState('login');
      }
    });
  }, []);

  const value = { appState, currentUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
