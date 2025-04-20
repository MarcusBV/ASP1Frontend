import React, { useContext, useEffect, useState } from "react";
import { ClientsContext } from "../../contexts/ClientsContext";

const ProjectModal = ({ onClick, isEdit = false, project = {} }) => {
  // tog hjälp av AI för formData, handleChange och handleSubmit då jag fastnade på hur jag ska skicka tillbaka formdatan till Projects

  const { clients } = useContext(ClientsContext);

  const [formData, setFormData] = useState({
    //delvis AI-genererad kod
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    budget: "",
    clientId: "",
    status: "",
  });

  useEffect(() => {
    if (isEdit) {
      setFormData({
        projectName: project.projectName,
        description: project.description,
        startDate: new Date(project.startDate).toISOString().split("T")[0],
        endDate: new Date(project.endDate).toISOString().split("T")[0],
        budget: project.budget,
        clientId: project.client.id,
        status: project.status.id == 2 ? true : false,
      });
    }
  }, [isEdit, project]);

  const handleChange = (e) => {
    //AI-genererad kod
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //AI-genererad kod
    e.preventDefault();
    onClick(e, formData);
  };

  return (
    <div className="modal">
      <form className="add-project-form">
        <div className="form-group">
          <label className="">Title</label>
          <input
            type="text"
            name="projectName"
            placeholder="Title"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="">Description</label>
          <textarea rows={4} name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label className="">Start date</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="">End date</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="">Budget</label>
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="">Client</label>
          <select name="clientId" value={formData.clientId} onChange={handleChange}>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.clientName}
              </option>
            ))}
          </select>
        </div>
        {isEdit && (
          <div className="form-group">
            <label className="">Completed</label>
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.checked })} //AI-genererad kod för att fixa uppdateringen av status
            />
          </div>
        )}
        <div className="form-group">
          <button className="btn btn-submit" type="button" onClick={handleSubmit}>
            {isEdit ? "Update Project" : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectModal;
