import { createContext, useEffect, useState } from "react";
import { apiUri, apiKey } from "./Context";

export const ClientsContext = createContext();
export const ClientsProvider = ({ children }) => {
  const clientsApi = `${apiUri}/clients`;

  const [clients, setClients] = useState([]);

  const getClients = async () => {
    const res = await fetch(clientsApi, {
      headers: {
        "X-API-KEY": apiKey,
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
