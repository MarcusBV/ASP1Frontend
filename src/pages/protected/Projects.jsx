import React, { useContext, useState } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import ModalButton from "../../partials/components/ModalButton";
import Project from "../../partials/components/Project";
import ProjectModal from "../../partials/components/ProjectModal";

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  const [isModalActive, setIsModalActive] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddProjectModal = () => {
    setIsModalActive(true);
    console.log("Modal opened");
  };

  const updateProjects = (e) => {
    setShowCompleted(e.target.checked);
  };

  const filteredProjects = showCompleted ? projects.filter((project) => project.status.id === 2) : projects;

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    const formData = {
      projectName: inputs.projectName,
      description: inputs.description,
      startDate: inputs.startDate,
      endDate: inputs.endDate,
      budget: inputs.budget,
      clientId: "1d69d86e-6dea-47fd-822f-76db7fe68dd3",
      userId: "8825e714-c67e-4dae-8915-cf769b2136f7",
      statusId: 1,
    };

    const res = await fetch("https://localhost:7149/api/projects", {
      method: "POST",
      headers: {
        "X-API-KEY": "393a4bae9c334cbbb90e38bcc56a62b3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Project added successfully!");
      setIsModalActive(false);
    } else {
      alert("Create project failed, check inputs and try again.");
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Projects</h2>
        <div>
          <h4>Completed: </h4>
          <input type="checkbox" name="status" onChange={updateProjects} />
        </div>
        <ModalButton type="add" target="#addProjectModal" text="Add Project" onClick={handleAddProjectModal} />
      </div>
      <div className="projects-wrapper">
        {filteredProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      {isModalActive && <ProjectModal onClick={handleSubmit} isEdit={false} />}
    </div>
  );
};

export default Projects;
