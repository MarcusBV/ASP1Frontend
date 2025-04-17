import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-titlerow">
          <img src="/images/project-logo.svg" className="project-logo" />
          <div className="project-title">
            <h5 className="nowrap">{project.projectName}</h5>
            <h6 className="nowrap">{project.client.clientName}</h6>
          </div>
          <button className="btn btn-project-menu"></button>
        </div>
        <div className="">{project.description}</div>
      </div>
      <div className="project-backdrop"></div>
    </div>
  );
};

export default Project;
