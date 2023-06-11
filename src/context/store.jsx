/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import accountsData from "../mock-data/get";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  //fill account state with mocked data
  const [accounts] = useState(accountsData);

  return (
    <StoreContext.Provider value={accounts}>{children}</StoreContext.Provider>
  );
}
