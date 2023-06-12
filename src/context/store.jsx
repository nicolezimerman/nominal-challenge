import { createContext } from "react";
import { useAccounts } from "../hooks/useAccounts";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  //see how to update data on store when fetch
  const { mappedAccounts } = useAccounts();

  return (
    <StoreContext.Provider value={mappedAccounts}>
      {children}
    </StoreContext.Provider>
  );
}
