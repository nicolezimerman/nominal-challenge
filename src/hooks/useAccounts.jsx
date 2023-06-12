import accountGetResponse from "../mock-data/accountGetResponse";
import { useState, useEffect } from "react";

export function useAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const mapAccounts = (accounts) => {
    return accounts.map((account) => ({
      id: account.id,
      name: account.name,
      hasChildren: account.has_children,
      accounts: [],
    }));
  };

  const getAccounts = () => {
    try {
      setLoading(true);
      setAccounts(() => mapAccounts(accountGetResponse));
    } finally {
      setLoading(false);
    }
  };

  //TODO: implement to add to the tree correct
  /* const getAccountChildrenById = (id) => {
    try {
      setLoading(true);
      //change set into the correct place
      setAccounts(mapAccounts(accountGetResponse));
    } finally {
      setLoading(false);
    }
  }; */

  useEffect(() => {
    getAccounts();
  }, []);

  return { mappedAccounts: accounts, loading };
}
