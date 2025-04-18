import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Project = ({ project }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleDelete = async () => {
    const res = await fetch(`https://localhost:7149/api/projects/${project.id}`, {
      method: "DELETE",
      headers: {
        "X-API-KEY": "393a4bae9c334cbbb90e38bcc56a62b3",
      },
    });

    if (res.ok) {
      alert("Project deleted");
    } else {
      alert("Failed to delete.");
    }
  };

  const [isModalActive, setIsModalActive] = useState(false);

  const handleEditModal = async () => {
    setIsModalActive(true);
  };

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    const formData = {
      id: project.id,
      projectName: inputs.projectName,
      description: inputs.description,
      startDate: inputs.startDate,
      endDate: inputs.endDate,
      budget: inputs.budget,
      clientId: "1d69d86e-6dea-47fd-822f-76db7fe68dd3",
      userId: "8825e714-c67e-4dae-8915-cf769b2136f7",
      statusId: inputs.status ? 2 : 1,
    };

    const res = await fetch(`https://localhost:7149/api/projects/`, {
      method: "PUT",
      headers: {
        "X-API-KEY": "393a4bae9c334cbbb90e38bcc56a62b3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Project updated successfully!");
      setIsModalActive(false);
    } else {
      alert("Update project failed, check inputs and try again.");
    }
  };

  return (
    <div className="project">
      <div className="project-content">
        <div className="project-titlerow">
          <img src="/images/project-logo.svg" className="project-logo" />
          <div className="project-title">
            <h5 className="nowrap">{project.projectName}</h5>
            <h6 className="nowrap">{project.client.clientName}</h6>
          </div>
          <button className="btn btn-project-menu" onClick={toggleMenu}></button>
          {isMenuActive && (
            <div className="project-menu">
              <button className="btn" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn" onClick={handleEditModal}>
                Edit
              </button>
              {isModalActive && <ProjectModal onClick={handleSubmit} isEdit={true} project={project} />}
            </div>
          )}
        </div>
        <div className="">{project.description}</div>
      </div>
      <div className="project-backdrop"></div>
    </div>
  );
};

export default Project;
