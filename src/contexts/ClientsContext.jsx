import { createContext, useEffect, useState } from "react";

export const ClientsContext = createContext();
export const ClientsProvider = ({ children }) => {
  const apiUri = "https://localhost:7080/api/clients";

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUri);

      if (res.ok) {
        const data = await res.json();
        setClients(data);
      }
    } catch {
      console.error("Failed to fetch clients");
    }

    setLoading(false);
  };

  useEffect(() => {
    getClients();
  }, []);

  return <ClientsContext.Provider value={{ clients, loading, getClients }}>{children}</ClientsContext.Provider>;
};
