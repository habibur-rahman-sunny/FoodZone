"use client";

import { createContext, useState } from "react";

export const SearchingItemContext = createContext();

const SearchingItemProvider = ({ children }) => {
  const [searchingItem, setSearchingItem] = useState([]);

  const value = {
    searchingItem,
    setSearchingItem,
  };

  return (
    <SearchingItemContext.Provider value={value}>
      {children}
    </SearchingItemContext.Provider>
  );
};

export default SearchingItemProvider;