import React, { useContext } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import ModalButton from "../../partials/components/ModalButton";
import Project from "../../partials/components/Project";

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div id="projects">
      <div className="page-header">
        <h2>Projects</h2>
        <ModalButton type="add" target="#addProjectModal" text="Add Project" />
      </div>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
