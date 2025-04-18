import { createContext, useEffect, useState } from "react";

export const ClientsContext = createContext();
export const ClientsProvider = ({ children }) => {
  const apiUri = "https://localhost:7149/api/clients";

  const [clients, setClients] = useState([]);

  const getClients = async () => {
    const res = await fetch(apiUri, {
      headers: {
        "X-API-KEY": "393a4bae9c334cbbb90e38bcc56a62b3",
      },
    });

    if (res.ok) {
      const data = await res.json();
      setClients(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return <ClientsContext.Provider value={{ clients, getClients }}>{children}</ClientsContext.Provider>;
};
