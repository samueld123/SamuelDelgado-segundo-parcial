import React, { createContext, useEffect, useState, useContext } from "react";
import { SearchMealByName } from "../services/mealtService";

export const TextSearchContext = createContext(null);

export function useTextSearch() 
{
  return useContext(TextSearchContext);
}

export const TextSearchProvider = ({ children }) => {
  const [textSearch, setTextSearch] = useState('');
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    SearchMealByName(textSearch).then((meals) => setMeals(meals));
  }, [textSearch]);

  const store = {
    meals,
    textSearch,
    setTextSearch,
  };

  return (
    <TextSearchContext.Provider value={store}>{children}</TextSearchContext.Provider>
  );
};
