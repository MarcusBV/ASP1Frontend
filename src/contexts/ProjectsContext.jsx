import { createContext, useEffect, useState } from "react";
import { apiUri, apiKey } from "./Context";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
  const projectsApi = `${apiUri}/projects`;

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await fetch(projectsApi, {
      headers: {
        "X-API-KEY": apiKey,
      },
    });

    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return <ProjectsContext.Provider value={{ projects, getProjects }}>{children}</ProjectsContext.Provider>;
};
