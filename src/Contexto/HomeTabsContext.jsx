import React, { createContext, useState } from 'react';

export const HomeTabsContext = createContext();

export const HomeTabsProvider = ({ children }) => {
  const [homeData, setHomeData] = useState(false);

  return (
    <HomeTabsContext.Provider value={{ homeData, setHomeData }}>
      {children}
    </HomeTabsContext.Provider>
  );
};