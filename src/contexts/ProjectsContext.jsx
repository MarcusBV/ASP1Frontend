import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const apiUri = "https://localhost:7149/api/projects";

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await fetch(apiUri, {
      headers: {
        "X-API-KEY": "393a4bae9c334cbbb90e38bcc56a62b3",
      },
    });

    if (res.ok) {
      const data = await res.json();
      setProjects(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return <ProjectsContext.Provider value={{ projects, getProjects }}>{children}</ProjectsContext.Provider>;
};
